import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Index.vue'
import Gift from '@/views/Gift.vue'
import Game from '@/views/Game.vue'
import Knowledge from '@/views/Knowledge.vue'
import Show from '@/views/Show.vue'
import { useLoading } from '../composables/useLoading'

const routes = [
  { path: '/', component: Home },
  { path: '/gift', component: Gift },
  { path: '/game', component: Game },
  { path: '/show', component: Show },
  { path: '/knowledge', component: Knowledge }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { setLoading } = useLoading()
  setLoading(true)
  next()
})

router.afterEach(() => {
  window.scrollTo({
    top: 0
  })
  const { setLoading } = useLoading()
  setTimeout(() => {
    setLoading(false)
  }, 1000)
})

export default router
