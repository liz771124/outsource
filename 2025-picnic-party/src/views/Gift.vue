<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
  })
</script>

<template>
  <div>
    <Header>
      <router-link to="/">
        <img src="/img/kv-gift.svg" alt="" width="650" />
      </router-link>
    </Header>
    <div class="bg-yellow">
      <div class="container py-16">
        <div class="mb-8 text-center">
          <img
            width="500"
            class="mx-auto mb-10 block"
            src="/img/title-gift-main.svg"
            alt=""
          />
          <img
            width="350"
            class="mx-auto mb-10"
            src="/img/title-gift-intro.svg"
            alt=""
          />
          <!-- <div class="mb-5 text-2xl font-bold text-primary-500">
            未來親子野餐日，歡慶10周年
          </div>
          <div>10大互動好禮搶先看！</div>
          <div>全場活動趴趴走，好禮拿不停！</div>
          <div>點擊按鈕，看更多活動說明</div> -->
        </div>

        <div class="grid gap-3 md:grid-cols-2">
          <div>
            <img class="w-full" src="/img/gift-item-01.svg" alt="" />
          </div>
          <div class="mt-20">
            <img class="w-full" src="/img/gift-item-02.svg" alt="" />
          </div>
          <div>
            <img class="w-full" src="/img/gift-item-03.svg" alt="" />
          </div>
          <div>
            <img class="w-full" src="/img/gift-item-04.svg" alt="" />
          </div>
          <div>
            <img class="w-full" src="/img/gift-item-05.svg" alt="" />
          </div>
          <div>
            <img class="w-full" src="/img/gift-item-06.svg" alt="" />
          </div>
          <div>
            <img class="w-full" src="/img/gift-item-07.svg" alt="" />
          </div>
          <div>
            <img class="w-full" src="/img/gift-item-08.svg" alt="" />
          </div>
          <div>
            <img class="w-full" src="/img/gift-item-09.svg" alt="" />
          </div>
          <div>
            <img class="w-full" src="/img/gift-item-10.svg" alt="" />
          </div>

          <!-- <div
            class="scroll-animate-slideInLeft relative grid rounded-xl bg-primary-500 p-5 md:grid-cols-2"
          >
            <span
              class="scroll-animate-slideInRight absolute -top-5 start-5 inline-block rounded-tr-3xl bg-kv-yellow py-2 pe-5 ps-6 text-2xl font-bold tracking-wide text-white"
            >
              慶生派對
            </span>
            <div
              class="scroll-animate-flip3D border-b text-center md:border-b-0 md:border-e"
            >
              <img src="/img/gift-intro-07.svg" alt="" />
            </div>
            <div class="scroll-animate-flip3D text-center">
              <img src="/img/gift-intro-08.svg" alt="" />
            </div>
          </div>
          <div
            class="relative grid rounded-xl bg-kv-green p-5 text-white md:grid-cols-2"
          >
            <span
              class="absolute -top-5 start-5 inline-block rounded-tr-3xl bg-[#6EE292] py-2 pe-5 ps-6 text-2xl font-bold tracking-wide"
            >
              慶生派對
            </span>
            <div
              class="border-b border-white text-center md:border-b-0 md:border-e"
            >
              <img src="/img/gift-intro-07.svg" alt="" />
            </div>
            <div class="text-center">
              <img src="/img/gift-intro-08.svg" alt="" />
            </div>
          </div> -->
        </div>
        <div class="my-5 flex items-center justify-center">
          <ButtonJoin :title="'立即購票'" :link="'/#purchase'" />
        </div>
      </div>
    </div>
  </div>
</template>
