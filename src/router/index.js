import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  routes
})

export default router
