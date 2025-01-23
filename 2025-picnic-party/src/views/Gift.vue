<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)
  const giftItems = Array.from({ length: 10 }, (_, i) => i + 1)
  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
  })
</script>

<template>
  <div>
    <Header>
      <router-link class="animate-bounceFloat" to="/">
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
        </div>
        <div class="mb-36 grid gap-6 md:grid-cols-2">
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
              :src="`/img/gift-item-${index + 1 < 10 ? '0' + (index + 1) : index + 1}.svg`"
              alt=""
            />
          </div>
        </div>

        <!-- <div class="grid gap-10 md:grid-cols-2">
          <div class="w-full">
            <img src="/img/gift-item-01.svg" alt="" class="w-full" />
          </div>
          <div class="w-full">
            <img src="/img/gift-item-02.svg" alt="" class="w-full" />
          </div>
          <div class="w-full">
            <img src="/img/gift-item-03.svg" alt="" class="w-full" />
          </div>
          <div class="w-full">
            <img src="/img/gift-item-04.svg" alt="" class="w-full" />
          </div>
          <div class="w-full">
            <img src="/img/gift-item-05.svg" alt="" class="w-full" />
          </div>
          <div class="w-full">
            <img src="/img/gift-item-06.svg" alt="" class="w-full" />
          </div>
          <div class="w-full">
            <img src="/img/gift-item-07.svg" alt="" class="w-full" />
          </div>
          <div class="w-full">
            <img src="/img/gift-item-08.svg" alt="" class="w-full" />
          </div>
          <div class="w-full">
            <img src="/img/gift-item-09.svg" alt="" class="w-full" />
          </div>
          <div class="w-full">
            <img src="/img/gift-item-10.svg" alt="" class="w-full" />
          </div>
        </div> -->

        <div class="my-5 flex items-center justify-center">
          <ButtonJoin :title="'立即購票'" :link="'/#purchase'" />
        </div>
      </div>
    </div>
  </div>
</template>
