<template>
<div><h1>gogogo展場地圖go</h1>
  <nav >
<!-- <router-link to="/" class="nav_item">首頁</router-link>
<router-link to="/map" class="nav_item">地圖</router-link>
<router-link to="/add" class="nav_item">+</router-link>
<router-link to="/comment" class="nav_item">評論</router-link>
<router-link to="/cv" class="nav_item">產生器</router-link> -->

</nav>
{{ message }}
<div id="app">
    <router-view />
  </div>
  
  <footer>《此為個人整理，跟nice官方毫無關係，在2025年8月9日後會暫停更新》</footer>
</div>
 
<!-- <reel></reel> -->
</template>

<script>
export default {
  data() {
    return {
      // message: '早安'
    };
  }
};
</script>

<style scoped>
.nav_item{padding-right:16px;}

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
