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
        const twinklingStars = [
          '#star-02',
          '#star-03',
          '#star-04',
          '#star-05-b',
          '#star-06'
        ]
        twinklingStars.forEach((star, index) => {
          gsap.fromTo(
            star,
            { scale: index % 2 === 0 ? 0.1 * index : 0.3 * index, rotation: 0 },
            {
              scale: 1.1,
              rotation: 360,
              repeat: -1,
              yoyo: true,
              delay: 0.5 + index,
              duration: 2,
              ease: 'sine.inOut',
              scrollTrigger: {
                trigger: star,
                start: 'top 90%',
                toggleActions: 'play none none none'
              }
            }
          )
        })

        gsap.fromTo(
          '#kv-main',
          { scale: 1.25, opacity: 0, filter: 'blur(100px)' },
          {
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.25,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: '#kv-main',
              start: 'top 80%',
              toggleActions: 'play none none none',
              scale: 1.1,
              yoyo: true,
              repeat: '-1'
            }
          }
        )
        setTimeout(() => {
          const flowingStars = ['#star-05', '#star-01']
          flowingStars.forEach((star, index) => {
            gsap.fromTo(
              star,
              { transformOrigin: '-500% 150% -100px', opacity: 0, scale: 0 },
              {
                z: 0,
                scale: 1,
                opacity: 1,
                transformOrigin: '500% -150% -100px',
                delay: 0.25 * index,
                duration: 0.35,
                ease: 'power3.inOut',
                repeatDelay: 2,
                scrollTrigger: {
                  trigger: star,
                  start: 'top 80%',
                  toggleActions: 'play none none none'
                }
              }
            )
          })
        }, 500)
      }, 400)
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
      class="absolute left-[30px] top-[40px] md:left-[220px] md:w-auto"
    >
      <img
        class="scroll-animate-bouncePulse"
        width="300"
        src="/img/star-01.svg"
        alt=""
      />
    </span>
    <span
      id="star-06"
      class="absolute right-8 top-[100px] md:left-[100px] md:right-auto"
    >
      <img src="/img/star-04.svg" alt="" />
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
    <span
      id="star-05"
      class="absolute hidden w-[150px] md:right-20 md:top-[200px] md:block"
    >
      <div class="relative">
        <img
          class="absolute -bottom-10 -right-12"
          src="/img/star-05-t.svg"
          alt=""
        />
        <img
          id="star-05-b"
          class="absolute left-0 top-0"
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
