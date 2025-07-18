import {createWebHistory,createRouter} from 'vue-router';

import MapView from '@/view/MapView.vue';

const routes=[
  {
    path: '/',
    name: 'Home',
    component: MapView,
  },
  {
    path: '/gogo_TryToREPO',
    name: 'Home',
    component: MapView,
  }]

  const router=createRouter({
    history:createWebHistory(), // HTML5 模式路由，URL 會很漂亮
    routes
  })
  export default router