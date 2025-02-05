<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const giftItems = Array.from({ length: 10 }, (_, i) => i + 1)
  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
  })
</script>

<template>
  <div>
    <Header>
      <img src="/img/kv-gift.svg" alt="" width="650" />

      <span
        class="absolute right-3 top-0 z-10 w-[80px] md:-right-16 md:top-24 md:w-[150px]"
      >
        <img src="/img/kv-main-img.svg" alt="" width="150" />
      </span>
    </Header>
    <div class="bg-yellow">
      <div class="container py-16">
        <div class="mb-8 text-center">
          <img
            width="650"
            class="mx-auto"
            src="/img/title-gift-main.svg"
            alt=""
          />
        </div>
        <div class="text-center text-[20px] font-black">
          <div>10大互動好禮搶先看！</div>
          <div>全場活動趴趴走，好禮拿不停！</div>
          <div>點擊按鈕，看更多活動說明</div>
        </div>

        <div class="grid gap-6 md:mb-36 md:grid-cols-2">
          <div
            v-for="(item, index) in giftItems"
            :key="index"
            :class="[
              'w-full cursor-pointer',
              index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-1/2'
            ]"
          >
            <img
              :class="[
                'w-full',
                index % 2 === 0
                  ? 'scroll-animate-slideInLeft'
                  : 'scroll-animate-slideInRight'
              ]"
              :src="`${imagePath}/gift-item-${index + 1 < 10 ? '0' + (index + 1) : index + 1}.svg`"
              alt=""
            />
          </div>
        </div>

        <div class="mb-5 flex items-center justify-center pt-5 md:pt-16">
          <ButtonJoin />
        </div>
      </div>
    </div>
  </div>
</template>
