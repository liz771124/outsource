<script setup>
  import { ref, onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import gsap from 'gsap'
  import { Swiper, SwiperSlide } from 'swiper/vue'

  import { Pagination, Navigation } from 'swiper/modules'

  const props = defineProps({
    className: {
      type: String,
      default: 'w-full'
    },
    swiperConfig: {
      type: Object
    },
    swiperItems: {
      type: Array,
      required: true
    }
  })

  const { swiperConfig, swiperItems } = props
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const selectedImage = ref()

  const swiperInstance = ref()

  const onSwiper = (swiper) => {
    swiperInstance.value = swiper
  }

  const goToSlide = (position) => {
    swiperInstance.value.slideTo(position)
  }
  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
  })
</script>

<template>
  <div>
    <swiper
      :slides-per-view="4"
      :space-between="20"
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
            :src="`${imagePath}${item.src}`"
            :alt="item.title"
            class="h-full w-full object-cover"
            @click="goToSlide(index)"
            data-twe-toggle="modal"
            data-twe-target="#exampleModalCenter2"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          />
        </div>
        <div class="line-clamp-2 text-start">
          <a :href="item.link" target="_blank">
            {{ item.title }}
          </a>
        </div>
      </swiper-slide>
    </swiper>
    <div
      data-twe-modal-init
      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="exampleModalCenter2"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div
        data-twe-modal-dialog-ref
        class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark"
        >
          <swiper
            id="modal-swiper"
            class="w-full"
            :slidesPerView="1"
            :pagination="{
              clickable: true
            }"
            :modules="[Pagination, Navigation]"
            :slideToClickedSlide="true"
            navigation
            loop
            @swiper="onSwiper"
          >
            <swiper-slide
              v-for="(item, index) in swiperItems"
              :key="index"
              class="flex flex-col gap-3"
            >
              <div class="h-[300px] w-[300px] overflow-hidden">
                <img
                  :src="`${imagePath}${item.src}`"
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
        </div>
      </div>
    </div>
  </div>
</template>
