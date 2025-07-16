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

      <!-- 篩選cp -->
        <div class="card">
        <div class="card-header">
          <h3>選擇cp</h3>
        </div>
        <div class="card-body">

          <div class="check_list ">
<label v-for="cp in cpOptions" :key="cp" class="select_box">
<input type="checkbox" v-model="selectedCPs" :value="cp"/>
<span class="">{{cp}}</span>
</label>

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
      <!-- 增加新的顏色函數:get-color-by-categories -->
    <draw_map v-if="isDataLoaded" ref="drawMapRef" :authors="authors" 
    :selected-categories="selectedCategories" :m-to-blue="mToBlue"
      :m-to-white="mToWhite" :get-color-by-index="getColorByIndexForMap" 
      :get-color-by-cat-id="getColorByCatId" :get-color-by-categories="getColorByCategories" 
      :selected-cps="selectedCPs" />
    <div v-else class="loading">
      <p>正在載入展場地圖...</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch} from 'vue'

// 引用攤位的座標地圖js
import{generateLayout} from 
'@/composables/booth_map2'
// '@/composables/Nangang_booth_map'
// 轉成pdf套件
// import html2canvas from 'html2canvas'//但我已經是canvas了所以不用這個
import jsPDF from 'jspdf'
import draw_map from '../components/draw_map.vue'

// 引入分類資料的composables封裝函數
import { useCategories } from '@/composables/useCategories'
const { categories, loadCategories } = useCategories()
// 加載分類資料
import{authors_Info}from '@/composables/authorInfo'
const {au,loadAuthors}=authors_Info()
// 搜尋分類的名字
const searchTC = ref('')
const filtererCat = computed(() => {
  // 確保 categories 已加載並且是陣列才能切，否則回傳空陣列
  if (!Array.isArray(categories.value)) { return [] }
  return categories.value.filter
    (cat => cat.name.toLowerCase().includes(searchTC.value.toLowerCase())
    )
})
// 加載下選單資料
import{useCpOptions} from '@/composables/useCpOptions'
const {cpOptions, selectedCPs, getCpforCat, shouldExcludeAuthor}=useCpOptions()


// 手動點框框即變色
// const manualSelections = ref(new Set()) //建立一個響應式的 Set(值不會重複的陣列，但他沒有index)，並把它包在 ref 中
//需要 2 個 Set 來管理手動點擊的狀態
const mToBlue = ref(new Set()) // 點了白色 → 藍綠色
const mToWhite = ref(new Set()) // 點了分類色 → 白色

// 假資料：攤位佈局
const boothLayout = generateLayout()

// 合併 - 修改邏輯支援多分類
const authors = ref([])
// 預先篩選有CP的攤位，提高效能
const authorsWithCP = ref([])

// 使用響應式的方式處理資料
const isDataLoaded = ref(false)

// 在 onMounted 中
onMounted(() => { 
  loadCategories()
  const authorInfo = loadAuthors() // 直接取得資料
  
  // 處理攤位資料
  authors.value = boothLayout.map(booth => {
    // 1️⃣ 從所有作者資訊中，找出 id 和當前攤位 id 相同的所有作者（支援共攤）
    const matchingAuthors = authorInfo.filter(a => a.id === booth.id)

    // 2️⃣ 如果有找到符合的作者資料
    if (matchingAuthors.length > 0) {
      // 3️⃣ 把所有作者的分類（categories）合併成一個陣列
      // 如果某位作者沒有 categories，就用空陣列代替，避免錯誤
      const allCategories = matchingAuthors.reduce((categories, author) => {
        return categories.concat(author.categories || [])
      }, [])

      // 4️⃣ 建立新的攤位物件：
      // - 保留原本 booth 的資料（攤位位置、編號等）
      // - 合併第一位作者的基本資訊（例如名字、社群連結等）
      // - categories 則使用我們剛剛整理好的「所有分類」
      // - useCpOptions 使用第一位作者的設定
      return {
        ...booth,
        ...matchingAuthors[0],
        categories: allCategories,
        useCpOptions: matchingAuthors[0].useCpOptions || []
      }
    } else {
      // 5️⃣ 如果沒找到任何作者資料，就只回傳原本的攤位資訊
      return booth
    }
  })
  
  // 預先篩選有CP的攤位
  authorsWithCP.value = authors.value.filter(author => 
    author.useCpOptions && author.useCpOptions.length > 0
  )
  
  // 標記資料已載入完成
  isDataLoaded.value = true
})


// 選了那些分類
const selectedCategories = ref([])
// 監控選了那些下選單
watch(selectedCategories,(newCats)=>{
  // console.log('選擇的分類:', newCats)
  getCpforCat(newCats)
  // console.log('CP選項:', cpOptions.value)
  // console.log('已選CPs:', selectedCPs.value)
})
// 監控CP選項變化，重新繪製地圖
watch(selectedCPs, (newCPs, oldCPs) => {
  // console.log('CP選項變化:', {
  //   old: oldCPs,
  //   new: newCPs,
  //   changed: newCPs !== oldCPs
  // })
  // 當CP選項改變時，只重新繪製有useCpOptions的攤位
  if (drawMapRef.value && authorsWithCP.value.length > 0) {
    authorsWithCP.value.forEach(author => {
      drawMapRef.value.redraw_single(author.id)
    })
  }
})

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

// 新增：處理多分類的顏色選擇函數
function getColorByCategories(categories, selectedCategories, author) {
  if (!categories || !selectedCategories || selectedCategories.length === 0) {
    return null
  }
  
  // 如果沒有CP選項，直接決定分類顏色
  if (selectedCPs.value.length === 0) {
    const matchedCategory = categories.find(cat => selectedCategories.includes(cat))
    if (matchedCategory) {
      return getColorByCatId(matchedCategory)
    }
    return null
  }
  
  // 檢查作者是否應該被排除（變白色）
  if (shouldExcludeAuthor(author, selectedCPs.value, selectedCategories)) {
    // console.log('排除作者:', author.id, 'CPs:', author.useCpOptions, '已選CPs:', selectedCPs.value)
    return null // 返回null表示白色
  }
  
  // 調試：顯示羊01的顏色決定過程
  // if (author.id === '羊01') {
  //   console.log('羊01顏色決定:', {
  //     categories: categories,
  //     selectedCategories: selectedCategories,
  //     matchedCategory: categories.find(cat => selectedCategories.includes(cat)),
  //     color: getColorByCatId(categories.find(cat => selectedCategories.includes(cat)))
  //   })
  // }
  
  // 找到第一個匹配的分類
  const matchedCategory = categories.find(cat => selectedCategories.includes(cat))
  if (matchedCategory) {
    // 返回該分類的顏色
    return getColorByCatId(matchedCategory)
  }
  
  return null
}

// 為了保持與draw_map組件的相容性，提供基於索引的顏色函數
function getColorByIndexForMap(index) {
  return getColorByIndex(index)
}

//從id找到分類名字
function getCatName(id){
  // 使用完整的categories而不是filtererCat，確保能找到所有分類
  const cat = categories.value.find(cat => cat.id === id)
  return cat ? cat.name : id
}

// 按按鈕取消勾選
function cancel_select(id) {
  const index = selectedCategories.value.indexOf(id)
  if(index !== -1){
    selectedCategories.value.splice(index,1)
    
    // 立即更新CP選項，讓對應的checkbox消失
    getCpforCat(selectedCategories.value)
  }
}

// 清空所有選擇和手動設定
function clearAll() {
  // 清空分類選擇
  selectedCategories.value = []
  // 清空CP選擇
  selectedCPs.value = []
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
  // - orientation: 'portrait'：直式 |'landscape':橫式
  // - unit: 'px'：單位用像素（和 canvas 同單位）
  // - format: 使用 canvas 圖像的寬與高，確保 PDF 尺寸剛好符合圖形大小
  const pdf = new jsPDF({
    orientation: 'portrait',// 更寬一點，符合你多的 x 軸
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

.loading {
  text-align: center;
  padding: 50px;
  color: #666;
}


</style>