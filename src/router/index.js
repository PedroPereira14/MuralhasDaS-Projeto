import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/equipa',
      name: 'equipa',
      component: () => import('../views/Equipa.vue')
    },
    {
      path: '/pratos',
      name: 'pratos',
      component: () => import('../views/Pratos.vue')
    },
    {
      path: '/pratos/:slug',
      name: 'prato-detalhe',
      component: () => import('../views/PratoDetalhe.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
