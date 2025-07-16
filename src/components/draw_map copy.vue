<template>
  <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight" />
</template>

<script setup>
import { ref, watch, onMounted,computed  } from 'vue'
// 接收父的資料: 作者陣列、我分類選了哪些的框框、框框變色的函數
const props = defineProps({
  authors: Array,
  selectedCategories: Array,
  manualSelections: Object,//ref(set) 手動點擊的框框
  mToBlue: Object, // ref(new Set()),
  mToWhite: Object, // ref(new Set()),
  getColorByIndex: Function
})

const mToWhite = computed(() => props.mToWhite?.value || new Set())
const mToBlue = computed(() => props.mToBlue?.value || new Set())

// 畫canvas
const canvas = ref(null)
const blockSize = 45 //每個框大小
const gap = 15 //每個框之間的間距

// +1 是因為如果最大 x 是 6，表示你有第 0～6 共 7 個格子，不加的話會漏最後一格。
const canvasWidth = (Math.max(...props.authors.map(a => a.x)) + 1) * (blockSize + gap) + blockSize
const canvasHeight = (Math.max(...props.authors.map(a => a.y)) + 1) * (blockSize + gap) + blockSize

// id->rect 放紀錄位置的空間
const item_rect = new Map()




// 畫初始地圖
function draw() {
  const ctx = canvas.value.getContext('2d')
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  props.authors.forEach((author) => {
    const x = author.x * (blockSize + gap)
    const y = author.y * (blockSize + gap)
    // 每畫一格就紀錄位置
    item_rect.set(author.id, { x, y, width: blockSize, height: blockSize })

    let color = 'white'//預設為白色

    // 手動選取優先
    if (mToWhite?.value?.has(author.id)) {
      color = 'white'//預設為白色

    } else if (mToBlue?.value?.has(author.id)) {
      color = '#c2fcf5'//預設為藍綠色

    } else if (author && author.categories) {
      const matched = author.categories.filter(catId =>
        props.selectedCategories.includes(catId)
      )
      if (matched.length > 0) {
        const catIndex = props.selectedCategories.indexOf(matched[0])
        color = props.getColorByIndex(catIndex)
      }
    }

    ctx.fillStyle = color
    ctx.fillRect(x, y, blockSize, blockSize)

    ctx.strokeStyle = '#888'
    ctx.strokeRect(x, y, blockSize, blockSize)

    ctx.fillStyle = 'black'
    ctx.font = '12px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(author.id, x + blockSize / 2, y + blockSize / 2)
  })
}

//只重繪那一格
function redraw_single(id){
const ctx = canvas.value.getContext('2d')
const rect=item_rect.get(id)
const author=props.authors.find(a=> a.id ==id)
if(!rect || !author){return}
ctx.clearRect(rect.x, rect.y, rect.width, rect.height)
let color='white'
if(mToWhite.value.has(author.id)){
  color='white' //強制排除
}else if(mToBlue.value.has(author.id)){
  color = '#c2fcf5'//手動加入為藍綠色
}
else if(author.categories){
  const matched=author.categories.filter(catId=>props.selectedCategories.includes(catId))
  if(matched.length>0){
    const cat_index=props.selectedCategories.indexOf(matched[0])
    color=props.getColorByIndex(cat_index)
  }
}
 ctx.fillStyle = color
    ctx.fillRect(rect.x , rect.y ,rect.width,rect.height)

    ctx.strokeStyle = '#888'
    ctx.strokeRect(rect.x , rect.y ,rect.width,rect.height)

    ctx.fillStyle = 'black'
    ctx.font = '12px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(author.id, rect.x + rect.width / 2, rect.y + rect.height / 2)
}


function handleClick(event) {
  const { offsetX, offsetY } = event
  for (const [id, rect] of item_rect.entries()) {
    const { x, y, width, height } = rect
    if (
      offsetX >= x &&
      offsetX <= x + width &&
      offsetY >= y &&
      offsetY <= y + height
    ) {
      // 檢查該作者是否有分類顏色
      const author = props.authors.find(a => a.id === id)
      const hasCategoryColor = author?.categories?.some(catId=>
      props.selectedCategories.includes(catId))
      
// 操作循環邏輯：
if (mToWhite.value.has(id)) {
        // 建立新 Set 並刪除
        const newSet = new Set(mToWhite.value)
        newSet.delete(id)
        mToWhite.value = newSet
  if(!hasCategoryColor){mToBlue?.value?.add(id)}
}else if(mToBlue?.value?.has(id)){mToBlue.value.delete(id)}
else if(hasCategoryColor){
  mToBlue?.value?.add(id)
}
else{mToWhite?.value?.add(id)}
      
      
      redraw_single(id) // 重繪特定
      break
    }
  }
}
// 一開始就...
onMounted(() => {
  draw()//畫地圖
  canvas.value.addEventListener('click', handleClick)//有監聽點擊事件
})
// 資料變動就重畫
watch(() => props.selectedCategories,(newCats, oldCats)=>{
  props.authors.forEach(author=>{
    if(!mToWhite?.value?.has(author.id)){redraw_single(author.id)}
  })
},{deep:true})

// [props.authors, props.selectedCategories], draw, { deep: true })



</script>

<style scoped>
canvas {
  border: 1px solid #aaa;
  margin-top: 1rem;
}
</style>
