import {createWebHistory,createRouter} from 'vue-router';

import MapView from '@/view/MapView.vue';
import createView from '@/view/createView.vue';
import addView from '@/view/addView.vue';
import commentView from '@/view/commentView.vue';

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
  },
  // {
  //   path: '/map',
  //   name: 'map',
  //   component: MapView,
  // },
  {
    path: '/add',
    name: 'add',
    component: addView,
  },{
    path: '/comment',
    name: 'comment',
    component: commentView,
  },{
    path: '/cv',
    name: 'cv',
    component: createView,
  },]

  const router=createRouter({
    history:createWebHistory(), // HTML5 模式路由，URL 會很漂亮
    routes
  })
  export default router