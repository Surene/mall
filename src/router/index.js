import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('../views/home/Home')
const catagory = () => import( '../views/catagory/Catagory')
const cart = () => import( '../views/cart/Cart')
const profile =() => import( '../views/profile/Profile')

const routes = [
  {
    path: '/',
    name: 'Home',
    component:home
  },
  {
    path: '/catagory',
    name: 'catagory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:catagory
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:cart
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'history'
})

export default router
