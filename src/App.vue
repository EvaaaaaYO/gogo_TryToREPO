<template>
<div>
  <nav>
    <!-- <h2>展場地圖gogogo</h2> -->
    <h2>nice動線規劃地圖demo</h2>
  若有攤位資料遺漏請告知!!因為我時間不夠無法一個個找，請直接貼吃土單給我(私訊跟傳訊息都可以)，
  <br>
  皆只依據吃土單或是有填寫攤位貼文的資料，
 <br> 如果資料裡沒有你(例如你有作哆啦的周邊，但分類哆啦裡面沒有你)，請在8/9前通知我，之後不再後續更新</nav>
<div id="app">
    <router-view />
  </div>
  
  <footer>《此為酒個人整理，跟nice官方毫無關係，在2025年8月9日後會暫停更新》</footer>
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
  padding-left: 150px;

  width: 100%;
  min-width: 2739px; /* 根據 canvas 的實際寬度設定 */
  color: #CBEEF3;
  background: linear-gradient(35deg, #64A6BD, #B8C0FF);
  box-sizing: border-box;
  overflow-x: auto;
}
</style>   
