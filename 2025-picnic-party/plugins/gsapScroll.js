import {
  initializeScrollAnimations,
  refreshScrollTriggers
} from '../utils/scrollAnimations'

export default {
  install(app) {
    app.mixin({
      mounted() {
        initializeScrollAnimations()
      },
      updated() {
        // 當組件更新時刷新 ScrollTrigger
        refreshScrollTriggers()
      }
    })
  }
}
