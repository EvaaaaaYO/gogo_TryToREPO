<!-- 極簡版 -->
<template>
  <div>
    <h2>攤位佈局產生器（多區塊）</h2>
    <label>每塊列數（rows）：<input v-model.number="rows" type="number" /></label>
    <label>每塊行數（cols）：<input v-model.number="cols" type="number" /></label>
    <label>區塊名稱（逗號分隔）：<input v-model="blocksInput" /></label>
    <label>走道寬度（格數）：<input v-model.number="aisleWidth" type="number" /></label>
    <button @click="generateLayout">產生佈局</button>

    <pre>{{ JSON.stringify(layout, null, 2) }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 列數（垂直幾排格子）
const rows = ref(3)
// 行數（每塊的寬度有幾格）
const cols = ref(2)
// 每兩塊區域之間的「走道」寬度（以格子數計）
const aisleWidth = ref(1)
// 使用者輸入的區塊代號，逗號分隔（如：A,O,P）
const blocksInput = ref('A,F,O,P,Y,甲')

// 儲存最後產生的攤位佈局
const layout = ref([])

// ⚙️ 主函式：產生攤位佈局
function generateLayout() {
  // 將使用者輸入轉為陣列，並去除空白
  const blocks = blocksInput.value.split(',').map(b => b.trim())

  const result = []

  // 對每個區塊進行編號與位置計算
  blocks.forEach((prefix, blockIndex) => {
    for (let row = 0; row < rows.value; row++) {
      for (let col = 0; col < cols.value; col++) {
        result.push({
          // 📌 攤位編號：前綴 + 編號（從 1 開始，每格編號遞增）
          // padStart(2, '0') 的意思是：
          // 若編號為 1～9，會補 0，變成 "01"～"09"
          // 所以產生的格式會是 A01, A02, ..., F10, 甲45 等
          id: `${prefix}${String(row * cols.value + col + 1).padStart(3, '0')}`,

          // 橫向位置：col 是區塊內的列，後面加上前面區塊的偏移量
          // 每個區塊右移 (cols + aisleWidth) 格
          x: col + blockIndex * (cols.value + aisleWidth.value),

          // 縱向位置直接就是 row
          y: row
        })
      }
    }
  })

  // 把生成結果存進 layout（可供畫圖或輸出）
  layout.value = result
}
</script>

