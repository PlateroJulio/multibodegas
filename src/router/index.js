import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import UsuarioAdd from '../views/UsuarioAdd.vue'
Vue.use(VueRouter)
 
  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/menu/Usuario',
    name: 'Usuario',
    component: UsuarioAdd
  }
  //{
    //path: '/menu',
    //name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
