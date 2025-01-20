import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './index.scss'
import Loading from './components/Loading.vue'

import GsapPlugin from '../plugins/gsap'
import GsapScrollPlugin from '../plugins/gsapScroll'

const app = createApp(App)

app.use(GsapPlugin)
app.use(GsapScrollPlugin)

const loadingInstance = app.component('Loading', Loading)
let loadingTimeout

router.beforeEach((to, from, next) => {
  loadingTimeout = setTimeout(() => {
    const loadingEl = document.createElement('div')
    loadingEl.id = 'global-loading'
    document.body.appendChild(loadingEl)
    app.mount(loadingEl, loadingInstance)
  }, 0)
  next()
})

router.afterEach(() => {
  clearTimeout(loadingTimeout)
  setTimeout(() => {
    const loadingEl = document.getElementById('global-loading')
    if (loadingEl) {
      loadingEl.remove()
    }
  }, 500) // 保證顯示至少 500ms
})

app.use(router)
app.mount('#app')
