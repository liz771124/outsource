<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  const imagePath = import.meta.env.VITE_IMAGE_PATH

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger)

  onMounted(() => {
    setTimeout(() => {
      const flowingStars = ['#star-01', '#star-05']
      flowingStars.forEach((star) => {
        gsap.fromTo(
          star,
          { y: '-100', opacity: 0, scale: 0 },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: star,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Twinkling stars animation (star-02, star-03, star-04)
      const twinklingStars = ['#star-02', '#star-03', '#star-04']
      twinklingStars.forEach((star) => {
        gsap.fromTo(
          star,
          { scale: 0.8, opacity: 0.5, rotation: 0 },
          {
            scale: 1.2,
            opacity: 1,
            rotation: 360,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: 'sine.inOut',
            scrollTrigger: {
              trigger: star,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // kv-main dissolve fade-in animation
      // gsap.fromTo(
      //   '#kv-main',
      //   { opacity: 0, filter: 'blur(10px)' },
      //   {
      //     opacity: 1,
      //     filter: 'blur(0px)',
      //     duration: 2,
      //     ease: 'power3.out',
      //     scrollTrigger: {
      //       trigger: '#kv-main',
      //       start: 'top 80%',
      //       toggleActions: 'play none none none'
      //     }
      //   }
      // )
    }, 500)
  })
</script>
Ｚ
<template>
  <header
    class="relative z-10 flex h-[600px] w-screen items-center justify-center bg-cover bg-no-repeat p-5"
    :style="{
      backgroundImage: `url(${imagePath}/kv-main.png)`,
      backgroundPosition: 'center'
    }"
  >
    <span id="star-01" class="absolute left-32 top-3">
      <img src="/img/star-01.svg" alt="" />
    </span>
    <span id="star-03" class="absolute left-20 top-3">
      <img src="/img/star-03.svg" alt="" />
    </span>
    <span id="star-04" class="absolute left-48 top-3">
      <img src="/img/star-04.svg" alt="" />
    </span>
    <span id="star-02" class="absolute bottom-60 right-10">
      <img src="/img/star-02.svg" alt="" />
    </span>
    <span id="star-05" class="absolute right-20 top-40">
      <img src="/img/star-05.svg" alt="" />
    </span>
    <div id="kv-main" class="z-10 flex flex-col gap-5">
      <slot />
    </div>
  </header>
</template>
