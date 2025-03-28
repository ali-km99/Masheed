import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import './assets/main.css'
const app = createApp(App)
app.use(MotionPlugin)
app.use(router)

app.mount('#app')
