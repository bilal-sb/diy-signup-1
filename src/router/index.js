import Vue from 'vue'
import VueRouter from 'vue-router'
import Compp1 from '../views/Compp1.vue'
import Compp2 from '../views/Compp2.vue'
import Compp3 from '../views/Compp3.vue'
import Compp4 from '../views/Compp4.vue'
import Compp5 from '../views/Compp5.vue'
import Compp6 from '../views/Compp6.vue'
import Compp7 from '../views/Compp7.vue'
import Compp8 from '../views/Compp8.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/c1',
  },
  {
    path: '/c1',
    name: 'Compp1',
    component: Compp1
  },
  {
    path: '/c2',
    name: 'Compp2',
    component: Compp2
  },
  {
    path: '/c3',
    name: 'Compp3',
    component: Compp3
  },
  {
    path: '/c4',
    name: 'Compp4',
    component: Compp4
  },
  {
    path: '/c5',
    name: 'Compp5',
    component: Compp5
  },
  {
    path: '/c6',
    name: 'Compp6',
    component: Compp6
  },
  {
    path: '/c7',
    name: 'Compp7',
    component: Compp7
  },
  {
    path: '/c8',
    name: 'Compp8',
    component: Compp8
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
