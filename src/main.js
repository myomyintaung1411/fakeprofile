import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import store from './store'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
app.use(store)
app.use(MotionPlugin)
app.mount('#app')
