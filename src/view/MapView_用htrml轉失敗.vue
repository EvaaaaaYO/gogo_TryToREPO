<template>
  <div>
    <h2>分類選單</h2>
    <select v-model="selectedCategories" multiple>
      <option v-for="cat in categories" :key="cat.id" :value="cat.id">
        {{ cat.name }}
      </option>
    </select>
    <button @click="selectedCategories = []">清空所有</button>
    <button @click="saveAsPDF">儲存為 PDF</button>

    <draw_map ref="drawMapRef" :authors="authors" 
    :selected-categories="selectedCategories"
      :get-color-by-index="getColorByIndex" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 轉成pdf套件
// import html2canvas from 'html2canvas'//但我已經是canvas了所以不用這個
import jsPDF from 'jspdf'
import draw_map from '../components/draw_map.vue'
import html2canvas from 'html2canvas'





// 假資料：作者
const authorInfo = [
  { id: 'a001', name: 'lulu', categories: ['1'] },
  { id: '甲002', name: '好', categories: ['0'] },
  { id: '乙003', name: '小明', categories: ['1'] },
  { id: 'A004', name: '大名', categories: ['1'] },
  { id: 'A005', name: '無名', categories: ['0'] }
]

// 假資料：攤位佈局（你可以複製 sorter.vue 中產生的）
const boothLayout = [
  {
    "id": "a001",
    "x": 0,
    "y": 0
  },
  {
    "id": "a002",
    "x": 1,
    "y": 0
  },
  {
    "id": "a003",
    "x": 2,
    "y": 0
  },
  {
    "id": "a004",
    "x": 0,
    "y": 1
  },
  {
    "id": "a005",
    "x": 1,
    "y": 1
  },
  {
    "id": "a006",
    "x": 2,
    "y": 1
  },
  {
    "id": "b001",
    "x": 4,
    "y": 0
  },
  {
    "id": "b002",
    "x": 5,
    "y": 0
  },
  {
    "id": "b003",
    "x": 6,
    "y": 0
  },
  {
    "id": "b004",
    "x": 4,
    "y": 1
  },
  {
    "id": "b005",
    "x": 5,
    "y": 1
  },
  {
    "id": "b006",
    "x": 6,
    "y": 1
  },
  {
    "id": "z001",
    "x": 8,
    "y": 0
  },
  {
    "id": "z002",
    "x": 9,
    "y": 0
  },
  {
    "id": "z003",
    "x": 10,
    "y": 0
  },
  {
    "id": "z004",
    "x": 8,
    "y": 1
  },
  {
    "id": "z005",
    "x": 9,
    "y": 1
  },
  {
    "id": "z006",
    "x": 10,
    "y": 1
  },
  {
    "id": "甲001",
    "x": 12,
    "y": 0
  },
  {
    "id": "甲002",
    "x": 13,
    "y": 0
  },
  {
    "id": "甲003",
    "x": 14,
    "y": 0
  },
  {
    "id": "甲004",
    "x": 12,
    "y": 1
  },
  {
    "id": "甲005",
    "x": 13,
    "y": 1
  },
  {
    "id": "甲006",
    "x": 14,
    "y": 1
  },
  {
    "id": "乙001",
    "x": 16,
    "y": 0
  },
  {
    "id": "乙002",
    "x": 17,
    "y": 0
  },
  {
    "id": "乙003",
    "x": 18,
    "y": 0
  },
  {
    "id": "乙004",
    "x": 16,
    "y": 1
  },
  {
    "id": "乙005",
    "x": 17,
    "y": 1
  },
  {
    "id": "乙006",
    "x": 18,
    "y": 1
  },
  {
    "id": "戊001",
    "x": 20,
    "y": 0
  },
  {
    "id": "戊002",
    "x": 21,
    "y": 0
  },
  {
    "id": "戊003",
    "x": 22,
    "y": 0
  },
  {
    "id": "戊004",
    "x": 20,
    "y": 1
  },
  {
    "id": "戊005",
    "x": 21,
    "y": 1
  },
  {
    "id": "戊006",
    "x": 22,
    "y": 1
  }
]

// 合併
const authors = ref(
  boothLayout.map(booth => {
    const author = authorInfo.find(a => a.id === booth.id)
    return {
      ...booth,
      ...author
    }
  })
)

const categories = ref([
  { id: '0', name: '非愛情' },
  { id: '1', name: '愛情小說' }
])
const selectedCategories = ref([])

function getColorByIndex(index) {
  return `hsl(${index * 20}, 70%, 70%)`
}



// 存成pdf

// 建立一個 ref，用來取得 draw_map 元件的 DOM 引用（也就是它內部的 <canvas>）
const drawMapRef = ref(null);

// 定義一個 async 函式，用來將 canvas 圖形存成 PDF
const saveAsPDF = async () => {
  // 從 draw_map 元件中，取得 canvas 元素（draw_map.vue 裡有 <canvas ref="canvas" />）
  const canvasEl = drawMapRef.value?.$refs.canvas

  // 如果 canvas 沒找到，就直接 return 不做事
  if (!canvasEl) return

  // 使用 html2canvas 將 canvas 元素轉成圖片（HTML 畫面轉成 <canvas> 的圖像）
  // - scale: 2 是為了讓圖片更清晰（高解析）
  // - useCORS: true 允許跨域圖片載入（如果有用到）
  const canvasImage = await html2canvas(canvasEl, {
    scale: 2, // 提高解析度
    useCORS: true // 跨域資源處理
  })
  // 把 html2canvas 回傳的 canvas 圖像轉換成 base64 的圖片格式（PNG）
  const imgData = canvasImage.toDataURL('image/png')

  // 建立一個新的 jsPDF 實例（PDF 文件）
  // - orientation: 'portrait'：直式
  // - unit: 'px'：單位用像素（和 canvas 同單位）
  // - format: 使用 canvas 圖像的寬與高，確保 PDF 尺寸剛好符合圖形大小
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px', format: [canvasImage.width, canvasImage.height]
  })
  // 把圖片加到 PDF 裡
  // - 'PNG': 圖片格式
  // - 0, 0: 圖片放置位置（左上角）
  // - canvasImage.width, canvasImage.height: 圖片大小
  pdf.addImage(imgData, 'png', 0, 0, canvasImage.width, canvasImage.height)
  pdf.save('展場地圖.pdf')

}






</script>
