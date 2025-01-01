<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { ref, onMounted } from 'vue'
import img1 from '@/assets/img/4349.jpeg'
import img2 from '@/assets/img/4349.jpeg'

const imagesTest = ref(Object.fromEntries(
 Object.entries(import.meta.glob('@/assets/img/*.{jpg,png}', { eager: true }))
   .map(([path, module]) => [
     path.split('/').pop().split('.')[0], // key: filename without extension
     module.default // value: image path
   ])
))
const images = [
  { src: img1, alt: 'banner' },
  { src: img2, alt: 'banner' }
]
</script>

<template>
  <img :src=" imagesTest['MENU1']" alt="">
    <!-- <img :src="imagesTest.889" class="w-full h-auto object-contain" /> -->
    <swiper :slides-per-view="3" :space-between="10" loop class='mySwiper h-[200px]'>
      <swiper-slide v-for="(img, index) in images" :key="index">
        <img :src="img.src" :alt="img.alt" class="w-full h-auto object-contain" />
      </swiper-slide>
    </swiper>
</template>
