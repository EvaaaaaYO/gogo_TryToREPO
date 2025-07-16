<template>
<div><h1>gogogo展場地圖go</h1>
  <nav >
<router-link to="/" class="nav_item">首頁</router-link>
<router-link to="/map" class="nav_item">地圖</router-link>
<router-link to="/add" class="nav_item">+</router-link>
<router-link to="/comment" class="nav_item">評論</router-link>
<router-link to="/cv" class="nav_item">產生器</router-link>
/  
</nav>
{{ message }}
<div id="app">
    <router-view />
  </div>
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

<style scoped>.nav_item{padding-right:16px;}</style>   
