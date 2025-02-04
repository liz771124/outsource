// src/utils/scrollAnimations.js
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 基礎動畫配置
const animations = {
  // 原有的動畫效果...
  fadeIn: {
    opacity: 0,
    animation: {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }
  },

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
  },

  // 跳動效果系列
  bounceHorizontal: {
    x: 0,
    animation: {
      x: 10,
      duration: 1,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    }
  },

  bounceVertical: {
    y: 0,
    animation: {
      y: 10,
      duration: 1,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    }
  },

  bouncePulse: {
    scale: 1,
    animation: {
      scale: 1.1,
      duration: 0.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    }
  },

  // 淡入系列
  fadeInDown: {
    opacity: 0,
    y: -50,
    animation: {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  fadeInLeft: {
    opacity: 0,
    x: -50,
    animation: {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  fadeInRight: {
    opacity: 0,
    x: 50,
    animation: {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 放大縮小系列
  zoomInLeft: {
    opacity: 0,
    scale: 0.5,
    x: -100,
    animation: {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  zoomInRight: {
    opacity: 0,
    scale: 0.5,
    x: 100,
    animation: {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 翻轉系列
  flipInX: {
    opacity: 0,
    rotationX: 90,
    animation: {
      opacity: 1,
      rotationX: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  flipInY: {
    opacity: 0,
    rotationY: 90,
    animation: {
      opacity: 1,
      rotationY: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  // 特效系列
  lightSpeedIn: {
    opacity: 0,
    x: 200,
    skewX: -30,
    animation: {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  rubberBand: {
    scale: 1,
    animation: {
      keyframes: [
        { scale: 1, duration: 0 },
        { scaleX: 1.25, scaleY: 0.75, duration: 0.3 },
        { scaleX: 0.75, scaleY: 1.25, duration: 0.3 },
        { scaleX: 1.15, scaleY: 0.85, duration: 0.3 },
        { scale: 1, duration: 0.3 }
      ],
      repeat: -1,
      repeatDelay: 1
    }
  },

  swing: {
    rotation: 0,
    transformOrigin: 'top center',
    animation: {
      rotation: 15,
      duration: 1,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    }
  },

  // 3D效果系列
  tiltIn: {
    opacity: 0,
    rotationX: 35,
    rotationY: -35,
    z: -100,
    animation: {
      opacity: 1,
      rotationX: 0,
      rotationY: 0,
      z: 0,
      duration: 1,
      ease: 'power2.out'
    }
  },

  rotateRoom: {
    opacity: 0,
    rotationY: 180,
    perspective: 1000,
    animation: {
      opacity: 1,
      rotationY: 0,
      duration: 1,
      ease: 'power2.inOut'
    }
  },

  // 文字效果系列
  typewriter: {
    opacity: 0,
    width: 0,
    animation: {
      opacity: 1,
      width: 'auto',
      duration: 1,
      ease: 'none'
    }
  },

  splitLetters: {
    opacity: 0,
    y: 50,
    stagger: {
      amount: 0.3,
      from: 'start'
    },
    animation: {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'back.out'
    }
  }
}

// ScrollTrigger 配置增強
const defaultScrollConfig = {
  trigger: null,
  start: 'top 90%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
  markers: false,
  scrub: false, // 某些動畫可能需要跟隨滾動
  once: true // 某些動畫可能只需要執行一次
}

// 輔助函數：分割文字
function splitText(element) {
  const text = element.textContent
  element.textContent = ''
  return [...text].map((char) => {
    const span = document.createElement('span')
    span.textContent = char
    element.appendChild(span)
    return span
  })
}

// 初始化動畫
export function initializeScrollAnimations() {
  const animateElements = document.querySelectorAll(
    '[class*="scroll-animate-"]'
  )

  animateElements.forEach((element) => {
    const classes = Array.from(element.classList)
    classes.forEach((className) => {
      if (className.startsWith('scroll-animate-')) {
        const animationName = className.replace('scroll-animate-', '')
        if (animations[animationName]) {
          // 特殊處理文字動畫
          if (animationName === 'splitLetters') {
            const chars = splitText(element)
            gsap.set(chars, animations[animationName])
            gsap.to(chars, {
              ...animations[animationName].animation,
              scrollTrigger: {
                ...defaultScrollConfig,
                trigger: element
              }
            })
          } else {
            // 一般動畫處理
            gsap.set(element, animations[animationName])
            gsap.to(element, {
              ...animations[animationName].animation,
              scrollTrigger: {
                ...defaultScrollConfig,
                trigger: element
              }
            })
          }
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
