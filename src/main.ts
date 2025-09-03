import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import './assets/main.css'
import i18n from './i18n'
const app = createApp(App)
app.use(MotionPlugin)
app.use(router)
app.use(i18n)
app.mount('#app')
