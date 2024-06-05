import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/stores/index'
import '@/assets/main.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import vueI18n from '@/lang/index'

const app = createApp(App)
app.use(pinia)
app.use(router)
// app.use(VueI18n)
app.mount('#app')
