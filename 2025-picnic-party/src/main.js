import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.scss'
import Loading from './components/Loading.vue'

const app = createApp(App)

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
