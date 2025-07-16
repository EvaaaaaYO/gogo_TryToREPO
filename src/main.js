import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入 router
// 匯入css
import './assets/css/index.css'

// 匯入組件
import reel from './components/reel.vue'
// createApp(App).mount('#app')  
const app=createApp(App)
app.use(router)//掛載路由
app.component('reel', reel) // 註冊組件
app.mount('#app')
/*
import { createApp } from 'vue'

import App from './App.vue'
import CompOne from './components/CompOne.vue'
import CompTwo from './components/CompTwo.vue'

const app = createApp(App)
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
app.mount('#app')
*/ 