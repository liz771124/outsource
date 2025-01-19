<script setup>
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  onMounted(() => {
    gsap.utils.toArray('.animate-zoom-in').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // 元素進入視窗 80% 時觸發
          toggleActions: 'play none none none' // 觸發一次動畫
        },
        duration: 0.8, // 動畫持續時間
        opacity: 0, // 從透明開始
        scale: 0.8, // 從小於原始大小開始
        y: 50, // 從下方滑入
        ease: 'power3.out' // 使用平滑的緩動效果
      })
    })
    gsap.utils.toArray('.animate-zoom-right').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'left 80%', // 元素進入視窗 80% 時觸發
          toggleActions: 'play none none none' // 觸發一次動畫
        },
        duration: 0.8, // 動畫持續時間
        opacity: 0, // 從透明開始
        x: 50, // 從下方滑入
        ease: 'power3.out' // 使用平滑的緩動效果
      })
    })
    gsap.utils.toArray('.animate-zoom-left').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'right 80%', // 元素進入視窗 80% 時觸發
          toggleActions: 'play none none none' // 觸發一次動畫
        },
        duration: 0.8, // 動畫持續時間
        opacity: 0, // 從透明開始
        x: -50,
        yoyo: 1,
        ease: 'power3.out' // 使用平滑的緩動效果
      })
    })
  })
</script>

<template>
  <div>
    <Loading />
    <Navbar />
    <main>
      <router-view />
    </main>
    <Manufacturer />
    <Footer />
  </div>
</template>
