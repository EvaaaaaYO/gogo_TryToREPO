<template>
<div>
  <nav>
    <!-- <h2>展場地圖gogogo</h2> -->
    <h2>nice動線規劃cp地圖</h2></nav>
<div id="app">
    <router-view />
  </div>

  <footer>
      <div class="purple">
      <h4>資料來源(連結可以點):</h4>

      <a href="https://starstonetw.weebly.com/31038222963603935338.html">nice官網</a>
      <br>
      <a href="https://www.plurk.com/p/3hghy0yngf">忘八_吃土單</a>
      <br>
<a href="https://www.plurk.com/p/3hjkdyyzk6">忍亂_吃土單</a>
<br>
      <a href="https://www.plurk.com/p/3hjb87wwov">新世界狂歡_吃土單</a>
      <br>
      <a href="https://www.plurk.com/p/3hjtsowtoh">迷宮飯_吃土單</a>
 <br>
      <a href="https://www.plurk.com/p/3hkpttykzq">地_吃土單</a>
      <br>
      <a href="https://www.plurk.com/p/3hjo90u3q6">排少_吃土單</a>
    </div>
    《此為酒個人整理，跟nice官方毫無關係，在2025年8月9日後會暫停更新資料》</footer>
</div>
</template>

<script>
export default {
  // 簡化的組件設定
};
</script>

<style scoped>
nav{padding-top:20px;}
nav h2{text-align: center;}
.purple{padding-bottom: 50px;}
.purple h4{color: white;}
.purple a{
  color: black;
  text-decoration: none;
  /* background-color: #64A6BD; */
transition: all 0.3s;}
a:hover{color: white;}
footer{
  padding: 50px;
  /* padding-left: 150px; */
/* text-align: center; */
  width: 100%;
  min-width: 2739px; /* 根據 canvas 的實際寬度設定 */
  color: #CBEEF3;
  background: linear-gradient(35deg, #64A6BD, #B8C0FF);
  box-sizing: border-box;
  overflow-x: auto;
}
</style>   
