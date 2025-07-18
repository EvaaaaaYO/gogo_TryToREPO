<template>
  <div class="">
    <!-- 載入loading動畫覆蓋層 -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>畢竟有兩千多個攤位，請耐心等候載入...</p>
      </div>
    </div>

    <div class="bg">
      <div class=" explain">
        <a href="#select_btn" class="a_btn">跳過說明直接開始▼</a>
        <h3>
          操作說明
        </h3>
        <p>
          請先<span>1.分類選單</span>選好作品分類後，
        </p>
        <p>若不要該作品可以在<span>2.已選擇中</span>
          點作品名字即可刪除，</p>再<span>3.選擇cp</span>



      </div>
      <div class="explain ex_right">
        <div class="text_right">
          <h3>注意cp選項一定要最後一個選!!</h3>
          選好cp後再取消作品或是勾新的作品，cp選項就會重置，要重新勾。
        </div>

      </div>
      <div class="explain">
        <p>
          可以在搜索欄輸入後按下enter查詢，將輸入的字刪掉再按enter就能看所有作品。
        </p>
        若要去的攤位都不在分類裡，可以自己雙擊該攤位(點一次可能是誤觸)。
      </div>
      <div id="select_btn">
        <div class="card_row">

          <div class="card">
            <div class="card-header">
              <h3>1.分類選單</h3>
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
              <h3>2.已選擇</h3>
            </div>
            <div class="card-body">

              <div class="check_list select_row">
                <!-- 顯示 -->
                <div v-for="s_cat in selectedCategories" :key="s_cat">
                  <button class="select_box" v-on:click="cancel_select(s_cat)"> {{ getCatName(s_cat) }}
                  </button>
                  <!--  :style="{ backgroundColor: getColorByCatId(s_cat) }" -->
                </div>
              </div>
            </div>

          </div>

          <!-- 篩選cp -->
          <div class="card">
            <div class="card-header">
              <h3>3.選擇cp</h3>
            </div>
            <div class="card-body">

              <div class="check_list ">
                <label v-for="cp in cpOptions" :key="cp" class="select_box">
                  <input type="checkbox" v-model="selectedCPs" :value="cp" />
                  <span class="">{{ cp }}</span>
                </label>

              </div>
            </div>

          </div>
        </div>
        <!-- 按鈕 -->
        <div class="btn_row">
          <button class="btn" @click="clearAll">
            清空所有</button>
          <button class="btn" @click="saveAsPDF">儲存為 PDF</button>
        </div>
      </div>
    </div>
    <!-- <draw_map ref="drawMapRef" :authors="authors" 
    :selected-categories="selectedCategories"
      :manual-selections="manualSelections" 
      :get-color-by-index="getColorByIndex" />-->
    <!-- 增加新的顏色函數:get-color-by-categories -->
     <div class="t10">
    <draw_map v-if="isDataLoaded" ref="drawMapRef" :authors="authors" :selected-categories="selectedCategories"
      :m-to-blue="mToBlue" :m-to-white="mToWhite" :get-color-by-index="getColorByIndexForMap"
      :get-color-by-cat-id="getColorByCatId" :get-color-by-categories="getColorByCategories" :selected-cps="selectedCPs"
      @loading-start="handleLoadingStart" @loading-end="handleLoadingEnd" />
    <div v-else class="loading">
      <p>正在載入展場地圖...</p>
    </div></div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'

// 引用攤位的座標地圖js
import { generateLayout } from
  '@/composables/booth_map2'
// 轉成pdf套件 - 懶載入
// import jsPDF from 'jspdf'
import draw_map from '../components/draw_map.vue'

// 引入分類資料的composables封裝函數
import { useCategories } from '@/composables/useCategories'
const { categories, loadCategories } = useCategories()
// 加載分類資料
import { authors_Info } from '@/composables/authorInfo'
const { au, loadAuthors } = authors_Info()
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
import { useCpOptions } from '@/composables/useCpOptions'
const { cpOptions, selectedCPs, getCpforCat, shouldExcludeAuthor } = useCpOptions()

// 載入狀態管理
const isLoading = ref(false)
const loadingStartTime = ref(0)

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
/*onMounted(() => {
  loadCategories()        // 等待完成
  const authorInfo = loadAuthors()  // 再等待完成
  // 總時間 = 時間1 + 時間2
})*/
/*未來會用api載入資料
onMounted(async () => {
  try {
    const [categoriesData, authorInfo] = await Promise.all([
      fetch('/api/categories').then(res => res.json()),  // 可能失敗
      fetch('/api/authors').then(res => res.json())      // 可能失敗
    ])
  } catch (error) {
    console.error('API 載入失敗:', error)
    // 顯示錯誤訊息給用戶
    showErrorMessage('資料載入失敗，請重新整理頁面')
  }
})
*/
onMounted(async () => {
  // 同時載入資料，提升載入速度
  const [categoriesData, authorInfo] = await Promise.all([
    loadCategories(), //同時執行
    loadAuthors()     //同時執行
  ])



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
watch(selectedCategories, (newCats) => {
  // console.log('選擇的分類:', newCats)
  getCpforCat(newCats)
  // console.log('CP選項:', cpOptions.value)
  // console.log('已選CPs:', selectedCPs.value)
})
// 監控CP選項變化，重新繪製地圖
// watch(selectedCPs, (newCPs, oldCPs) => {
// console.log('CP選項變化:', {
//   old: oldCPs,
//   new: newCPs,
//   changed: newCPs !== oldCPs
// })
// 當CP選項改變時，只重新繪製有useCpOptions的攤位
watch(selectedCPs, () => {
  if (drawMapRef.value && authorsWithCP.value.length > 0) {
    authorsWithCP.value.forEach(author => {
      drawMapRef.value.redraw_single(author.id)
    })
  }
})

//變色 - 基於分類ID決定顏色，確保相同ID永遠有相同顏色
function getColorByIndex(index) {
  return `hsl(${index * 30},60%,80%)`
}

// 基於分類ID生成固定顏色
function getColorByCatId(id) {
  // 使用分類ID的數字部分來生成固定的顏色
  const numericId = parseInt(id.toString().replace(/\D/g, '')) || 0
  return `hsl(${numericId * 25 % 360},60%,80%)`
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
function getCatName(id) {
  // 使用完整的categories而不是filtererCat，確保能找到所有分類
  const cat = categories.value.find(cat => cat.id === id)
  return cat ? cat.name : id
}

// 按按鈕取消勾選
function cancel_select(id) {
  const index = selectedCategories.value.indexOf(id)
  if (index !== -1) {
    selectedCategories.value.splice(index, 1)

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

  try {
    // 懶載入 jsPDF，只在需要時才載入
    const { default: jsPDF } = await import('jspdf')

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
  } catch (error) {
    console.error('PDF 生成失敗:', error)
    alert('PDF 生成失敗，請稍後再試')
  }
}

// 處理 loading 事件
const handleLoadingStart = () => {
  loadingStartTime.value = Date.now()
  isLoading.value = true;
};

const handleLoadingEnd = () => {
  const elapsed = Date.now() - loadingStartTime.value
  const minLoadingTime = 300 // 最小載入時間 300ms

  if (elapsed < minLoadingTime) {
    // 如果載入時間太短，延遲隱藏載入動畫
    setTimeout(() => {
      isLoading.value = false;
    }, minLoadingTime - elapsed)
  } else {
    // 如果載入時間足夠長，立即隱藏
    isLoading.value = false;
  }
};
// 處理結束

</script>
<style scoped>
.card_row {
  padding-left: 20px;
  display: flex;
  width: 1500px;
  justify-content: space-around;
}

.card {
  border: none;
}

.btn_row {
  margin: 10px auto;
  display: flex;
  padding-left: 20px;
  padding-bottom: 10px;
  /* justify-content: center; */
}

/* 選擇按鈕 */
.select_box {
  padding: 0 15px;
  border: 2px solid #B8C0FF;
  /* background-color: white; */
  border-radius: 20px;
  transition: all 0.5s;

}

.select_row {
  display: flex;
  /* 可自動換行 */
  flex-wrap: wrap;
  gap: 5px
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
.t10{padding-left: 10px;}
/* 載入動畫覆蓋層 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-spinner {
  text-align: center;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

.bg {
  min-width: 2739px;
  padding-top: 50px;
  /* padding-bottom: 20px; */
  width: 100%;

}

.explain {
  position: relative;
  /* width: 1500px; */
  background-color: #B8C0FF;
  padding-top: 90px;
  padding-left: 150px;
  padding-bottom: 90px;
  /* line-height: 2.5; */
  font-size: 16px;
}

.ex_right {
  background-color: white;
}

.text_right {
  position: absolute;
  left: 30%;


}

.explain h3 {
  color: #B8C0FF;
  font-weight: bold;
  text-decoration-line: underline;
}

.explain span {
  color: white;
  background-color: #64A6BD;
  display: inline;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 10px;
}

.a_btn {
  display: inline-block;
  background-color: white;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 30px;
  color: #B8C0FF;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.a_btn:hover {
  background-color: #e3ebfa;
}

#select_btn {
  min-width: 2739px;
  padding-top: 50px;
  width: 100%;
  background-color: #e3ebfa;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>