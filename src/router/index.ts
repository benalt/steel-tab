import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/songs/:id',
      name: 'Son Detail',
      component: () => import('../views/SongView.vue'),
    },
    {
      path: '/tuning/:key',
      name: 'Tuning Detail',
      component: () => import('../views/TuningView.vue'),
    },
  ]
})

export default router
