import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import Home from '@/views/Index.vue'
import Gift from '@/views/Gift.vue'
import Game from '@/views/Game.vue'
import Article from '@/views/Article.vue'
import Notice from '@/views/Notice.vue'
import Show from '@/views/Show.vue'
import { useLoading } from '../composables/useLoading'

const routes = [
  { path: '/', component: Home },
  { path: '/gift', component: Gift },
  { path: '/game', component: Game },
  { path: '/show', component: Show },
  { path: '/Article', component: Article },
  { path: '/notice', component: Notice }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const { setLoading } = useLoading()
  setLoading(true)
  next()
})

router.afterEach(() => {
  const { setLoading } = useLoading()
  setTimeout(() => {
    setLoading(false)
  }, 1000)
})

export default router
