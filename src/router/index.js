import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from "../components/Navbar";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    props: true,
    component: () => import('../components/Blog.vue')
  },
  {
    path: '/blogType',
    name: 'BlogType',
    component: () => import('../views/BlogType.vue')
  },
  {
    path: '/blogTag',
    name: 'BlogTag',
    component: () => import('../views/BlogTag.vue')
  },
  {
    path: '/blogSearch',
    name: 'BlogSearch',
    // props: true,
    component: () => import('../views/BlogSearch.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/blogLinks',
    name: 'BlogLinks',
    component: () => import('../views/BlogLinks.vue')
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component:() =>import('../components/Navbar')
  },
  {
    path: '/userIndex',
    name: 'index',
    component:() =>import('../views/user/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
