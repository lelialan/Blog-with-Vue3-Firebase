import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'details',
    component: Details,
    props:true,
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: Tag
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
