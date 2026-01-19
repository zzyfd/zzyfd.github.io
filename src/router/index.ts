import { createRouter, createWebHistory, type RouterScrollBehavior } from 'vue-router'
const AboutPage = () => import('../pages/AboutPage.vue')

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior,
  routes: [
    { path: '/', name: 'About Me', component: AboutPage },
    { path: '/:catchAll(.*)', name: 'Home Page', component: AboutPage },
  ]
})

export default router
