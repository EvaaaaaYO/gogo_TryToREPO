<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div id="iconn" class="carousel-indicators">
    <button v-for="(n,index) in items" :key="index" type="button" data-bs-target="#carouselExampleCaptions" 
    :data-bs-slide-to="index" :class="{active:index==0}" aria-current="true" 
    :aria-label="'Slide ' + (index + 1)">天天</button>
  </div>
  <!-- 當 index === 0（也就是第一筆資料）時，這個 element 就會加上 active class。
   這是 Bootstrap 輪播的必要條件：第一個 .carousel-item 和第一個 button 要有 .active，不然不會正確顯示。 -->
  <div class="carousel-inner">
    <div class="carousel-item" :class="{active: index === 0}" v-for="(n,index) in items" :key="index">
      <img :src="n.image" class="d-block w-100" :alt="n.name">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ n.title }}</h5>
        <p>{{n.context}}</p>
      </div>
    </div>
  </div>
  <!-- 上一個 -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <!-- 下一個 -->
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>
export default{
    name: 'reel',data() {
        return {
            items: [
                {name: '第1張圖片標題',
                    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
                    title: '第一張圖片',
                    context: '這是第一張圖片的描述'
                },
                {name: '第2張圖片',
                    image: '/images/2.jpg',
                    title: '第二張圖片',
                    context: '這是第二張圖片的描述'
                },
                {name: '第3張圖片',
                    image: 'images/3.jpg',
                    title: '第三張圖片',
                    context: '這是第三張圖片的描述'
                }
            ]
        }
    }
}</script>
<style scoped>
#iconn button {
    background-color: aqua;
}
</style>