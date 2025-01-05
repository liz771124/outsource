<script setup>
  import gsap from 'gsap'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  import { Pagination, Navigation } from 'swiper/modules'

  const props = defineProps({
    className: {
      type: String,
      default: 'w-full'
    },
    swiperConfig: {
      type: Object,
      required: true
    },
    swiperItems: {
      type: Object,
      required: true
    }
  })
  const { swiperConfig, swiperItems } = props
</script>

<template>
  <swiper
    :slides-per-view="4"
    :space-between="10"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true
    }"
    :modules="[Pagination, Navigation]"
    navigation
    loop
  >
    <swiper-slide
      v-for="(item, index) in swiperItems"
      :key="index"
      class="flex flex-col gap-3"
    >
      <div class="h-[200px] w-full overflow-hidden">
        <img
          :src="item.src"
          :alt="item.title"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="line-clamp-2 text-start">
        <a :href="item.link" target="_blank">
          {{ item.title }}
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>
