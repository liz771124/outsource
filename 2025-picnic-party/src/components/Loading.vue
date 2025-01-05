<script setup>
  import { onMounted } from 'vue'
  import { useLoading } from '../composables/useLoading'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const { isLoading } = useLoading()

  onMounted(() => {
    // Hero Image 漂浮動畫
    gsap.to('.hero-img', {
      // x: () => gsap.utils.random(-100, 100),
      y: () => gsap.utils.random(-10, 10),
      duration: 2, // 動畫持續時間
      ease: 'sine.inOut', // 平滑的進出效果
      repeat: -1, // 無限重複
      yoyo: true // 動畫來回播放
    })
    gsap.to('.hero-title', {
      y: -5,
      duration: 1, // 動畫持續時間
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })
    gsap.to('.hero-bg', {
      scale: 1.08,
      duration: 0.3,
      ease: 'power1.out',
      repeat: -1,
      yoyo: true
    })
    gsap.from('.pattern', {
      scrollTrigger: {
        trigger: '.grid', // 容器作為觸發點
        start: 'top 85%', // 進入視窗 85% 開始動畫
        toggleActions: 'play none none none' // 只播放一次
      },
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: 'power3.out',
      stagger: {
        each: 0.3, // 每個項目延遲 300ms
        from: 'start'
      }
    })
  })
</script>

<template>
  <div
    v-show="isLoading"
    class="fixed start-0 top-0 z-50 flex h-screen w-screen items-center justify-center"
  >
    <div class="pattern absolute inset-0"></div>
    <div class="hero-bg absolute inset-0 h-full w-full">
      <img
        class="h-full w-full object-cover"
        src="https://www.pngall.com/wp-content/uploads/15/Anime-Speed-Lines-PNG-Cutout.png"
        alt=""
      />
    </div>
    <div class="z-10 flex flex-col items-center justify-center">
      <div class="hero-img">
        <img width="200" src="/img/hero-img.png" alt="Hero Image" />
      </div>
      <div class="hero-title text-center text-xl">Loading...</div>
    </div>
  </div>
</template>

<style scoped>
  .pattern {
    background: linear-gradient(
      to right,
      #ffdb32,
      #fdf5df,
      #ffdb32
    ); /* 漸變色塊 */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
