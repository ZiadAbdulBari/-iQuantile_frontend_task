import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue';
import LoginView from '../views/LoginView.vue';
import CartView from '../views/CartView.vue';
import UpdateProductView from '../views/UpdateProductView.vue';
import SearchView from '../views/SearchView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/registration',
      name: 'registration',
      component:RegistrationView
    },
    {
      path: '/login',
      name: 'login',
      component:LoginView
    },
    {
      path: '/cart',
      name: 'cart',
      component:CartView
    },
    {
      path: '/update/:id',
      name: 'update',
      component:UpdateProductView
    },
    {
      path: '/search/:slug',
      name: 'search',
      component:SearchView
    },
  ]
})

export default router
