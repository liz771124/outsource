<script setup>
  import { onMounted } from 'vue'
  import { useLoading } from '../composables/useLoading'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const { isLoading } = useLoading()

  onMounted(() => {
    gsap.to('.hero-img', {
      // x: () => gsap.utils.random(-100, 100),
      // y: () => gsap.utils.random(-10, 10),
      x: 20,
      y: 10,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })
    gsap.to('.hero-title', {
      x: 5,
      y: 5,
      duration: 1,
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
      // opacity: 0,
      // y: 50,
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
    <div class="hero-bg absolute inset-0 z-10 h-full w-full">
      <img
        class="h-full w-full md:object-cover"
        src="/img/speed-line.png"
        alt=""
      />
    </div>
    <div class="z-10 flex flex-col items-center justify-center">
      <div class="hero-img">
        <img width="160" src="/img/hero-img.png" />
      </div>
      <div class="hero-title mt-5 text-center text-xl font-bold">
        Loading...
      </div>
    </div>
  </div>
</template>

<style scoped>
  .pattern {
    /* background: linear-gradient(
      to right,
      #ffdb32,
      #fdf5df,
      #ffdb32
    );  */
    background-color: #ffdb32;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
</style>
