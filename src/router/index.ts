import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import homePage from '@/views/homePage/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: homePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
