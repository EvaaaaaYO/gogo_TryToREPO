<template>
<div>
  <nav><h2>展場地圖gogogo</h2>
  </nav>
<div id="app">
    <router-view />
  </div>
  
  <footer>《此為個人整理，跟nice官方毫無關係，在2025年8月9日後會暫停更新》</footer>
</div>
</template>

<script>
export default {
  // 簡化的組件設定
};
</script>

<style scoped>
nav{padding:20px;}

footer{
  padding: 50px;
  width: 100%;
  min-width: 2739px; /* 根據 canvas 的實際寬度設定 */
  color: #CBEEF3;
  background: linear-gradient(35deg, #64A6BD, #B8C0FF);
  box-sizing: border-box;
  overflow-x: auto;
}
</style>   
