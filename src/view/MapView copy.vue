<template>
  <div class="container">
    <div class="card_row">

      <div class="card">
        <div class="card-header">
          <h3>分類選單</h3>
        </div>
        <div class="card-body">
          <!-- 分類搜尋列 -->
          <input v-model.lazy="searchTC" placeholder="輸入後按下enter即可查詢作品名" class="searchTC_bar" />

          <div class="check_list">
            <label v-for="cat in filtererCat" :key="cat.id" class="checkbox_item">
              <input type="checkbox" v-model="selectedCategories" :value="cat.id" />
              <span class="checkbox_text">{{ cat.name }}</span>
            </label>
          </div>
          <!-- 加載提示
  <div v-if="!categories.value || categories.value.length === 0">
    <p>正在加載作品分類中...</p></div> -->
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3>已選擇</h3>
        </div>
        <div class="card-body">

          <div class="check_list select_row">
            <!-- 顯示 -->
            <div v-for="s_cat in selectedCategories" 
            :key="s_cat">
              <button class="select_box" 
              
              v-on:click="cancel_select(s_cat)"> {{ getCatName(s_cat) }}
              </button>
              <!--  :style="{ backgroundColor: getColorByCatId(s_cat) }" -->
            </div>
          </div>
        </div>

      </div>
    </div>

<div class="btn_row">
    <button class="btn" @click="clearAll">
      清空所有</button>
    <button class="btn" @click="saveAsPDF">儲存為 PDF</button>
  </div>
    <!-- <draw_map ref="drawMapRef" :authors="authors" 
    :selected-categories="selectedCategories"
      :manual-selections="manualSelections" 
      :get-color-by-index="getColorByIndex" />-->
    <draw_map ref="drawMapRef" :authors="authors" 
    :selected-categories="selectedCategories" :m-to-blue="mToBlue"
      :m-to-white="mToWhite" :get-color-by-index="getColorByIndexForMap" 
      :get-color-by-cat-id="getColorByCatId" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
// 轉成pdf套件
// import html2canvas from 'html2canvas'//但我已經是canvas了所以不用這個
import jsPDF from 'jspdf'
import draw_map from '../components/draw_map.vue'

// 引入分類資料的composables封裝函數
import { useCategories } from '@/composables/useCategories'
const { categories, loadCategories } = useCategories()
// 加載分類資料
onMounted(() => { loadCategories() })

// 搜尋分類的名字
const searchTC = ref('')
const filtererCat = computed(() => {
  // 確保 categories 已加載並且是陣列才能切，否則回傳空陣列
  if (!Array.isArray(categories.value)) { return [] }
  return categories.value.filter
    (cat => cat.name.toLowerCase().includes(searchTC.value.toLowerCase())
    )
})


// 手動點框框即變色
// const manualSelections = ref(new Set()) //建立一個響應式的 Set(值不會重複的陣列，但他沒有index)，並把它包在 ref 中
//需要 2 個 Set 來管理手動點擊的狀態
const mToBlue = ref(new Set()) // 點了白色 → 藍綠色
const mToWhite = ref(new Set()) // 點了分類色 → 白色



// 假資料：作者
const authorInfo = [
  { id: 'a001', name: 'lulu', categories: [1] },
  { id: 'a002', name: '小明', categories: [1] },
  { id: 'a003', name: '大名', categories: [3] },
  { id: 'a004', name: '無名', categories: [4] },
  { id: 'a005', name: '阿專', categories: [2] },
  { id: 'a006', name: '小華', categories: [1] },
  { id: 'b001', name: '老王', categories: [2] },
  { id: 'b002', name: '小李', categories: [3] },
  { id: 'b003', name: '阿美', categories: [1] },
  { id: 'b004', name: '小強', categories: [4] },
  { id: 'b005', name: '阿花', categories: [2] },
  { id: 'b006', name: '小明', categories: [1] },
  { id: 'z001', name: '大名', categories: [3] },
  { id: 'z002', name: '無名', categories: [4] },
  { id: 'z003', name: '阿專', categories: [2] },
  { id: 'z004', name: '小華', categories: [1] },
  { id: 'z005', name: '老王', categories: [2] },
  { id: 'z006', name: '小李', categories: [3] },
  { id: '甲001', name: '阿美', categories: [1] },
  { id: '甲002', name: '好', categories: [2] },
  { id: '甲003', name: '小強', categories: [4] },
  { id: '甲004', name: '阿花', categories: [2] },
  { id: '甲005', name: '小明', categories: [1] },
  { id: '甲006', name: '大名', categories: [3] },
  { id: '乙001', name: '無名', categories: [4] },
  { id: '乙002', name: '阿專', categories: [2] },
  { id: '乙003', name: '小明', categories: [1] },
  { id: '乙004', name: '小華', categories: [1] },
  { id: '乙005', name: '老王', categories: [2] },
  { id: '乙006', name: '小李', categories: [3] },
  { id: '戊001', name: '阿美', categories: [1] },
  { id: '戊002', name: '小強', categories: [4] },
  { id: '戊003', name: '阿花', categories: [2] },
  { id: '戊004', name: '小明', categories: [1] },
  { id: '戊005', name: '大名', categories: [3] },
  { id: '戊006', name: '無名', categories: [4] }
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

// 選了那些分類
const selectedCategories = ref([])
//變色 - 基於分類ID決定顏色，確保相同ID永遠有相同顏色
function getColorByIndex(index) {
  return `hsl(${index * 30}, 90%, 92%)`
}

// 基於分類ID生成固定顏色
function getColorByCatId(id) {
  // 使用分類ID的數字部分來生成固定的顏色
  const numericId = parseInt(id.toString().replace(/\D/g, '')) || 0
  return `hsl(${numericId * 25 % 360}, 90%, 92%)`
}

// 為了保持與draw_map組件的相容性，提供基於索引的顏色函數
function getColorByIndexForMap(index) {
  return getColorByIndex(index)
}

//從id找到分類名字
function getCatName(id){
  const cat=filtererCat.value.find(cat=>cat.id===id)
  return cat?cat.name:id
}

// 按按鈕取消勾選
function cancel_select(id) {
  const index = selectedCategories.value.indexOf(id)
  if(index !== -1){
    selectedCategories.value.splice(index,1)
  }
}

// 清空所有選擇和手動設定
function clearAll() {
  // 清空分類選擇
  selectedCategories.value = []
  // 清空手動設定的藍綠色攤位
  mToBlue.value.clear()
  // 清空手動設定的白色攤位
  mToWhite.value.clear()
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

  const imgData = canvasEl.toDataURL('image/png')

  // 建立一個新的 jsPDF 實例（PDF 文件）
  // - orientation: 'portrait'：直式
  // - unit: 'px'：單位用像素（和 canvas 同單位）
  // - format: 使用 canvas 圖像的寬與高，確保 PDF 尺寸剛好符合圖形大小
  const pdf = new jsPDF({
    orientation: 'landscape',// 更寬一點，符合你多的 x 軸
    unit: 'px',
    // 將 PDF 尺寸設成 canvas 大小
    format: [canvasEl.width, canvasEl.height]
  })
  // 把圖片加到 PDF 裡，'PNG': 圖片格式，0, 0: 圖片放置位置（左上角）
  // - canvasImage.width, canvasImage.height: 圖片大小
  pdf.addImage(imgData, 'PNG', 0, 0,
    canvasEl.width, canvasEl.height)
  pdf.save('展場地圖.pdf')

}






</script>
<style scoped>
.card_row {
  display: flex;
}

.btn_row{
  margin:  10px auto;
  display: flex;
  justify-content: center;
}
/* 選擇按鈕 */
.select_box {
  padding: 0 15px;
  border: 2px solid #B8C0FF;
  /* background-color: white; */
  border-radius: 20px;
  transition: all 0.5s;
  
}
.select_row{
  display: flex ;
  /* 可自動換行 */
  flex-wrap: wrap; 
  gap:5px

}
.select_box:hover {
  background-color: #ADA7C9;
  /* border-color: #90A8C3; */
  color: white;
}

.searchTC_bar {
  width: 100%;
}

.check_list {
  max-height: 150px;
  overflow-y: auto;
  /* border: 1px solid #eee; */
  padding: 0.5rem;
  border-radius: 4px;
}

.checkbox_item {
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;

}

.checkbox_text {
  padding-left: 10px;
}


</style>