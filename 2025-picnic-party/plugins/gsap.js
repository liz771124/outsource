import { initializeAnimations } from '../utils/animations'

export default {
  install(app) {
    app.mixin({
      mounted() {
        initializeAnimations()
      }
    })
  }
}
