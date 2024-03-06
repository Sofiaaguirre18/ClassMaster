import { createRouter, createWebHistory } from 'vue-router'
import navBar from '../components/navBar.vue'

const routes = [
  {
    path: '/',
    name: 'NavBar',
    component: navBar,
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
})

export default router
