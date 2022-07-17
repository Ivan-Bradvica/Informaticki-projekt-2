import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/prognoza',
    name: 'prognoza',
    
    component: () => import( '../components/WeatherView.vue')
  },
 
  {
    path: '/kalkulator',
    name: 'kalkulator',
    
    component: () => import( '../components/KalkulatorView.vue')
  }
  ,
 
  {
    path: '/registracija',
    name: 'registracija',
    
    component: () => import( '../components/RegistracijaView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
