import { createApp } from 'vue'
import './style.css'
import { vStickyPlugin } from 'vue-sticky-next'
import ElementPlus from 'element-plus'
import App from './App.vue'
const app = createApp(App)
app.use(vStickyPlugin)

app.use(ElementPlus)
app.mount('#app')
