<script setup>
  import { ref, onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import gsap from 'gsap'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Navigation } from 'swiper/modules'

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#',
      required: true
    }
  })
</script>
<template>
  <a
    :href="props.link"
    class="relative inline-block rounded-tl-3xl bg-kv-blue py-3 pe-16 ps-5 text-2xl font-bold tracking-wide text-white"
  >
    {{ props.title }}
    <span class="absolute -end-[30px] -top-[50px]">
      <img src="/img/btn-d-01.png" alt="" />
    </span>
  </a>
</template>
