import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/products',
      name: 'products',

      component: () => import('../views/puoductsPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',

      component: () => import('../views/contactPage.vue'),
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',

      component: () => import('../views/PortfolioPage.vue'),
    },
  ],
})

export default router
