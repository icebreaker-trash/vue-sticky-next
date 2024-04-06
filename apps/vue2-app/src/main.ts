import Vue from 'vue'
import './style.css'
import { vStickyPlugin } from 'vue-sticky-next'
import App from './App.vue'
Vue.use(vStickyPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: (h) => h(App)
})
// import {createDirective} from 'vue-sticky-next'

// const { vSticky } = createDirective({},'vue3')
