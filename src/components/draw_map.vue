<template>
  <canvas 
    :width="canvasWidth" 
    :height="canvasHeight" 
    ref="canvas"
    @click="handleClick"
    style="border: 1px solid #ccc;"
  />
</template>
<script setup>
import { ref, onMounted, watch, computed } from 'vue'

const props = defineProps({
  authors: {
    type: Array,
    required: true
  },
  selectedCategories: {
    type: Array,
    default: () => []
  },
  // 下選單的選項們，每次被呼叫都會產生一個新的空陣列
  selectedCPs: {
    type: Array,
    default: () => []
  },
  mToWhite: {
    type: Object, // ref(Set)
    required: true
  },
  mToBlue: {
    type: Object,  // ref(Set)
    required: true
  },
  getColorByIndex: {
    type: Function,
    required: true
  },
  getColorByCatId: {
    type: Function,
    required: true
  },
  getColorByCategories: {
    type: Function,
    required: true
  }
})

const canvas = ref(null)
const blockSize = 35
const gap = 5

const item_rect = new Map()

// 使用 computed 來動態計算 canvas 尺寸
const canvasWidth = computed(() => {
  if (!props.authors || props.authors.length === 0) return 0
  const maxX = Math.max(...props.authors.map(a => a.x))
  return (maxX + 1) * (blockSize + gap)
})

const canvasHeight = computed(() => {
  if (!props.authors || props.authors.length === 0) return 0
  const maxY = Math.max(...props.authors.map(a => a.y))
  return (maxY + 1) * (blockSize + gap)
})

// 提取重複的繪製邏輯
function paint_block(ctx, x, y, width, height, authorId, author) {
  // 決定顏色和樣式
  let color = 'white'
  let borderColor = '#BBD0FF'
  let textColor = 'black'
  
  // 根據類型決定顏色
  if (author.type === 'large-aisle') {
    color = '#f0f0f0'
    borderColor = '#ccc'
    textColor = '#666'
  } else if (author.type === 'small-aisle') {
    color = '#f8f8f8'
    borderColor = '#ddd'
    textColor = '#666'
  } else if (author.type === 'exit') {
   
    color = 'WHITE'
    borderColor = 'WHITE'
    textColor = '#F26A8D'
  } else if (author.type === 'facility') {
    color = '#64A6BD'
    borderColor = '#90A8C3'
    textColor = 'white'
  }else if (author.type === 'toilet') {
     color = '#F26A8D'
    borderColor = '#F26A8D'
    textColor = 'white'
  }
   else if (author.type === 'white') {
    color = 'white'
    borderColor = '#ddd'
    textColor = '#999'
  } else if (author.type === 'wall') {
    color = '#BBD0FF'
    borderColor = '#BBD0FF'
    textColor = '#333'
  } else if (props.mToWhite.has(authorId)) {
    color = 'white'
  } else if (props.mToBlue.has(authorId)) {
    color = '#ADA7C9'
    textColor='white'
  } else if (author.categories) {
  //   // 使用新的多分類顏色函數，但只對非設施類型生效
    // 第三個參數 author 是為了讓函數能夠檢查作者的 useCpOptions，判斷是否應該被排除（變白色）。
    const categoryColor = props.getColorByCategories(author.categories, props.selectedCategories, author)
    if (categoryColor) {
      color = categoryColor
    }
    /* 這裡的第三個 author 參數是必要的，因為：
1.函數需要知道當前繪製的是哪個作者
2.檢查該作者的 useCpOptions 屬性
3.判斷該作者的CP是否被取消勾選
如果沒有這個 author 參數，函數就無法知道要檢查哪個作者的CP選項，也就無法實現「取消勾選CP時作者變白色」的功能。
所以這個 author 參數是實現CP篩選功能的核心部分！*/
  }

  // 繪製背景
  ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)

  // 繪製邊框
  ctx.strokeStyle = borderColor
  ctx.strokeRect(x, y, width, height)

  // 繪製文字
  ctx.fillStyle = textColor
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  // 根據文字長度和區塊寬度調整字體大小
  let fontSize = 12
  if (width > blockSize * 2) {
    // 如果是合併的設施（寬度大於2個block），使用較大字體
    fontSize = 20
  } else if (authorId.length > 4) {
    fontSize = 10
  } else if (authorId.length > 2) {
    fontSize = 11
  }
  
  ctx.font = `${fontSize}px sans-serif`
  ctx.fillText(authorId, x + width / 2, y + height / 2)
}
// 劃初始地圖
function draw() {
  if (!canvas.value || !props.authors || props.authors.length === 0) return
  
  const ctx = canvas.value.getContext('2d')
  ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)

  // 按行分組處理，合併相同 ID 的連續設施
  const rows = new Map()
  
  // 將攤位按行分組
  props.authors.forEach(author => {
    if (!rows.has(author.y)) {
      rows.set(author.y, [])
    }
    rows.get(author.y).push(author)
  })
  
  // 處理每一行，合併連續的相同設施
  rows.forEach((rowAuthors, y) => {
    let currentGroup = []
    let currentId = null
    let startX = 0
    // 定義可以合併的類型列表
    const mergeableTypes = ['facility', 'exit', 'wall','toilet']
    
    rowAuthors.forEach((author, index) => {
      // 如果是可合併類型且與前一個相同，加入當前群組
      if (mergeableTypes.includes(author.type) && author.id === currentId) {
        currentGroup.push(author)
      } else {
        // 繪製前一個群組（如果有的話）
        if (currentGroup.length > 0) {
          const groupWidth = currentGroup.length * (blockSize + gap) - gap
          const groupX = startX * (blockSize + gap)
          
          // 繪製合併的設施
          paint_block(ctx, groupX, y * (blockSize + gap), groupWidth, blockSize, currentId, currentGroup[0])
          
          // 記錄每個攤位的位置（用於點擊檢測）
          currentGroup.forEach((groupAuthor, groupIndex) => {
            const x = (startX + groupIndex) * (blockSize + gap)
            item_rect.set(groupAuthor.id, { x, y: y * (blockSize + gap), width: blockSize, height: blockSize })
          })
        }
        
        // 開始新的群組
        currentGroup = [author]
        currentId = author.id
        startX = author.x
      }
    })
    
    // 處理最後一個群組
    if (currentGroup.length > 0) {
      const groupWidth = currentGroup.length * (blockSize + gap) - gap
      const groupX = startX * (blockSize + gap)
      
      // 繪製合併的設施
      paint_block(ctx, groupX, y * (blockSize + gap), groupWidth, blockSize, currentId, currentGroup[0])
      
      // 記錄每個攤位的位置（用於點擊檢測）
      currentGroup.forEach((groupAuthor, groupIndex) => {
        const x = (startX + groupIndex) * (blockSize + gap)
        item_rect.set(groupAuthor.id, { x, y: y * (blockSize + gap), width: blockSize, height: blockSize })
      })
    }
    
    // 處理非可合併類型的攤位
    rowAuthors.forEach(author => {
      if (!mergeableTypes.includes(author.type)) {
        const x = author.x * (blockSize + gap)
        const yPos = y * (blockSize + gap)
        item_rect.set(author.id, { x, y: yPos, width: blockSize, height: blockSize })
        paint_block(ctx, x, yPos, blockSize, blockSize, author.id, author)
      }
    })
  })
}
// 重劃的格子的位置
function redraw_single(id) {
  if (!canvas.value) return
  
  const ctx = canvas.value.getContext('2d')
  const rect = item_rect.get(id)
  const author = props.authors.find(a => a.id === id)
  if (!rect || !author) return

  ctx.clearRect(rect.x, rect.y, rect.width, rect.height)
  paint_block(ctx, rect.x, rect.y, rect.width, rect.height, id, author)
}

// 暴露方法給父組件
defineExpose({
  redraw_single,
  draw
})
// 點擊
function handleClick(event) {
  const { offsetX, offsetY } = event
  
  for (const [id, rect] of item_rect.entries()) {
    if (
      offsetX >= rect.x && offsetX <= rect.x + rect.width &&
      offsetY >= rect.y && offsetY <= rect.y + rect.height
    ) {
      const author = props.authors.find(a => a.id === id)
      
      // 如果是設施類型，不允許點擊改變顏色
      if (['facility', 'exit', 'wall','toilet'].includes(author?.type)) {
        return
      }
      
      const hasCategory = author?.categories?.some(cat => props.selectedCategories.includes(cat))

      // 修改點擊邏輯：
      // 1. 如果目前在白色狀態，點擊後根據是否有分類決定顏色
      // 2. 如果目前在藍綠色狀態，點擊後變成白色
      // 3. 如果目前在分類顏色狀態，點擊後變成白色
      if (props.mToWhite.has(id)) {
        // 目前在白色狀態
        props.mToWhite.delete(id)
        if (hasCategory) {
          // 如果有分類，保持分類顏色（不加入任何 Set）
        } else {
          // 如果沒有分類，變成藍綠色
          props.mToBlue.add(id)
        }
      } else if (props.mToBlue.has(id)) {
        // 目前在藍綠色狀態，點擊後變成白色
        props.mToBlue.delete(id)
        props.mToWhite.add(id)
      } else if (hasCategory) {
        // 目前在分類顏色狀態，點擊後變成白色
        props.mToWhite.add(id)
      } else {
        // 目前是預設狀態且沒有分類，點擊後變成白色
        props.mToWhite.add(id)
      }

      redraw_single(id)
      break
    }
  }
}

onMounted(() => {
  // 當組件掛載時，如果已經有資料就立即繪製
  draw()
})

// 移除 onUnmounted，因為 Vue 會自動處理 @click 事件

// 監聽 authors 變化，重新繪製
watch(() => props.authors, () => {
  if (props.authors && props.authors.length > 0) {
    draw()
  }
}, { deep: true })

watch(() => props.selectedCategories, () => {
  if (props.authors && props.authors.length > 0) {
    // 重新繪製所有攤位，但保持手動設定的狀態
    props.authors.forEach(author => {
      // 如果是設施類型，跳過重新繪製
      if (!['facility', 'exit', 'wall','toilet'].includes(author.type)) {
        redraw_single(author.id)
      }
    })
  }
}, { deep: true })

// 移除 selectedCPs 監聽器，因為在 MapView.vue 中已經有更精確的控制
// 只重新繪製有CP的攤位，而不是所有攤位
</script>


