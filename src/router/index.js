import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home-view.vue') //lazy loading
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile-view.vue') //lazy loading
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.component.vue') //lazy loading
    },
    {
      path: '/procedure',
      name: 'procedure',
      component: () => import('../views/procedure-view.vue') //lazy loading
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/register.component.vue') //lazy loading
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import ('../views/not-found-view.vue') //lazy loading
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import ('../views/payment-view.vue') //lazy loading
    }
  ]
})

export default router
