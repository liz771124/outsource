import gsap from 'gsap'

// 動畫配置對象
const animations = {
  bounceFloat: {
    y: '10px',
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    duration: 0.8
  },
  scaleBounce: {
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    ease: 'elastic.inOut(1, 0.5)',
    duration: 1.2
  },
  fadeIn: {
    opacity: 1,
    duration: 1,
    ease: 'power2.inOut'
  },
  slideIn: {
    x: 0,
    duration: 1,
    ease: 'power2.out'
  },
  rotateIn: {
    rotation: 360,
    duration: 1.5,
    ease: 'none',
    repeat: -1
  }
}

// 初始化動畫
export function initializeAnimations() {
  // 找到所有帶有動畫 class 的元素並應用動畫
  const animateElements = document.querySelectorAll('[class*="animate-"]')

  animateElements.forEach((element) => {
    const classes = Array.from(element.classList)
    classes.forEach((className) => {
      if (className.startsWith('animate-')) {
        const animationName = className.replace('animate-', '')
        if (animations[animationName]) {
          // 為不同動畫類型設置不同的初始狀態
          switch (animationName) {
            case 'fadeIn':
              gsap.set(element, { opacity: 0 })
              break
            case 'slideIn':
              gsap.set(element, { x: '-100%' })
              break
          }
          gsap.to(element, animations[animationName])
        }
      }
    })
  })
}

// 創建自定義動畫
export function createAnimation(element, config) {
  return gsap.to(element, config)
}

// 暫停所有動畫
export function pauseAllAnimations() {
  gsap.globalTimeline.pause()
}

// 恢復所有動畫
export function resumeAllAnimations() {
  gsap.globalTimeline.resume()
}

// 銷毀所有動畫
export function killAllAnimations() {
  gsap.globalTimeline.clear()
}
