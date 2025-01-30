<script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  gsap.registerPlugin(ScrollTrigger)

  const props = defineProps({
    height: {
      type: String,
      default: '600px'
    }
  })

  onMounted(() => {
    nextTick(() => {
      setTimeout(() => {
        const flowingStars = ['#star-01', '#star-05']
        flowingStars.forEach((star, index) => {
          gsap.fromTo(
            star,
            { y: '-100', opacity: 0, scale: 0 },
            {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              // delay: 0.5 + index,
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

        const twinklingStars = ['#star-02', '#star-03', '#star-04']
        twinklingStars.forEach((star, index) => {
          gsap.fromTo(
            star,
            { scale: 0.6, opacity: 0.5, rotation: 0 },
            {
              scale: 1.1,
              opacity: 1,
              rotation: 360,
              repeat: -1,
              yoyo: true,
              delay: 0.5 + index,
              duration: 2.5,
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
  })
</script>
<template>
  <header
    :class="`relative z-10 flex h-[600px] w-screen items-center justify-center overflow-hidden bg-cover bg-no-repeat`"
    :style="{
      backgroundImage: `url(${imagePath}/kv-main.png)`,
      backgroundPosition: 'center right'
    }"
  >
    <span
      id="star-01"
      class="absolute left-[30px] top-[20px] w-[250px] md:left-32 md:w-auto"
    >
      <img class="animate-bounceFloat" src="/img/star-01.svg" alt="" />
    </span>
    <span
      id="star-03"
      class="absolute right-[80px] top-[220px] w-[70px] md:left-20 md:right-auto md:w-auto"
    >
      <img src="/img/star-03.svg" alt="" />
    </span>
    <span
      id="star-04"
      class="absolute bottom-20 right-28 md:left-48 md:right-auto"
    >
      <img src="/img/star-04.svg" alt="" />
    </span>

    <span id="star-02" class="absolute bottom-28 right-10 md:right-10">
      <img src="/img/star-02.svg" alt="" />
    </span>
    <span id="star-05" class="absolute right-5 top-20 w-[150px] md:right-20">
      <div class="relative">
        <img
          class="absolute -bottom-10 -right-12"
          src="/img/star-05-t.svg"
          alt=""
        />
        <img
          class="animate-rotateIn absolute left-0 top-0"
          src="/img/star-05-b.svg"
          alt=""
        />
      </div>
    </span>

    <div
      id="kv-main"
      class="animate-bounceFloat relative z-10 flex flex-col gap-5"
    >
      <slot />
    </div>
  </header>
</template>
