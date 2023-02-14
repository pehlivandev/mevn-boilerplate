import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
		path: '/',
		name: 'Home',
		component: () => import('@/views/home')
	},
	{
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
