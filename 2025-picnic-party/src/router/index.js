import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Index.vue'
import Gift from '@/views/Gift.vue'
import Game from '@/views/Game.vue'
import Information from '@/views/Information.vue'
import Notice from '@/views/Notice.vue'
import Show from '@/views/Show.vue'
import { useLoading } from '../composables/useLoading'

const routes = [
  { path: '/', component: Home },
  { path: '/gift', component: Gift },
  { path: '/game', component: Game },
  { path: '/show', component: Show },
  { path: '/information', component: Information },
  { path: '/notice', component: Notice }
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
