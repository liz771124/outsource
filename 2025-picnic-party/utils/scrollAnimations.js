import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 基礎動畫配置
const animations = {
  // 淡入效果
  fadeIn: {
    opacity: 0,
    animation: {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 從底部淡入
  fadeInUp: {
    opacity: 0,
    y: 50,
    animation: {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 從左側滑入
  slideInLeft: {
    opacity: 0,
    x: -100,
    animation: {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 從右側滑入
  slideInRight: {
    opacity: 0,
    x: 100,
    animation: {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 放大淡入
  zoomIn: {
    opacity: 0,
    scale: 0.5,
    animation: {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 翻轉效果
  flipIn: {
    opacity: 0,
    rotationX: 90,
    animation: {
      opacity: 1,
      rotationX: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 彈跳效果
  bounceIn: {
    opacity: 0,
    scale: 0.3,
    animation: {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    }
  },

  // 旋轉淡入
  rotateIn: {
    opacity: 0,
    rotation: 180,
    scale: 0.5,
    animation: {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 3D翻頁效果
  flip3D: {
    opacity: 0,
    rotationY: 90,
    delay: 3000,
    animation: {
      opacity: 1,
      rotationY: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 震動效果
  shake: {
    animation: {
      x: [-10, 10, -10, 10, 0],
      duration: 0.5,
      ease: 'power1.inOut'
    }
  }
}

// ScrollTrigger 基礎配置
const defaultScrollConfig = {
  trigger: null,
  start: 'top 80%', // 當元素頂部到達視窗 80% 位置時觸發
  end: 'bottom 20%',
  toggleActions: 'play none none none', // 進入時播放，離開時反轉 'play none none reverse'
  markers: false // 開發時可設為 true 以顯示觸發點
}

// 初始化動畫
export function initializeScrollAnimations() {
  // 找到所有帶有動畫 class 的元素
  const animateElements = document.querySelectorAll(
    '[class*="scroll-animate-"]'
  )

  animateElements.forEach((element) => {
    const classes = Array.from(element.classList)
    classes.forEach((className) => {
      if (className.startsWith('scroll-animate-')) {
        const animationName = className.replace('scroll-animate-', '')
        if (animations[animationName]) {
          // 設置初始狀態
          gsap.set(element, animations[animationName])

          // 創建動畫
          gsap.to(element, {
            ...animations[animationName].animation,
            scrollTrigger: {
              ...defaultScrollConfig,
              trigger: element
            }
          })
        }
      }
    })
  })
}

// 創建自定義滾動動畫
export function createScrollAnimation(element, config, scrollConfig = {}) {
  return gsap.to(element, {
    ...config,
    scrollTrigger: {
      ...defaultScrollConfig,
      ...scrollConfig,
      trigger: element
    }
  })
}

// 暫停所有動畫
export function pauseAllAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.disable())
}

// 恢復所有動畫
export function resumeAllAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.enable())
}

// 刷新所有 ScrollTrigger
export function refreshScrollTriggers() {
  ScrollTrigger.refresh()
}

// 清除所有動畫
export function killAllAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}
