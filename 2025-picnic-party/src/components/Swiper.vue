<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const images = [
  { src: '@/assets/img/4567.png', alt: 'banner' },
  { src: '@/assets/img/4349.png', alt: 'banner' }
]
</script>

<template>

    <swiper :slides-per-view="3" :space-between="10" loop class='mySwiper h-[200px]'>
      <swiper-slide v-for="(img, index) in images" :key="index">
        <img :src="img.src" :alt="img.alt" class="w-full h-auto object-contain" />
      </swiper-slide>
    </swiper>

</template>
