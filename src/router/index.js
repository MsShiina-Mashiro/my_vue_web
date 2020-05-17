import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: () => import('../views/Hello.vue'),
        meta: 'about'
      },
      {
        path: '/about',
        component: () => import('../views/About.vue'),
        meta: 'photo'
      },
      {
        path: '/photo',
        component: () => import('../views/Photo.vue'),
        meta: 'connect'
      },
      {
        path: '/connect',
        component: () => import('../views/Connect.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
