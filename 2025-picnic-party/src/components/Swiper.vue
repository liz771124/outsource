<script setup>
  import { ref, onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import gsap from 'gsap'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Navigation } from 'swiper/modules'

  const props = defineProps({
    className: {
      type: String,
      default: 'bg-kv-yellow'
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
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
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
      :spaceBetween="20"
      :slides-per-view="isMobile ? 1.4 : 4"
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
        class="scroll-animate-fadeInUp ms:p-2.5 animate-slideIn px-1 pb-5"
      >
        <a
          :href="item.link"
          target="_blank"
          class="relative block rounded-tl-2xl bg-white px-3 pt-3 shadow-lg"
        >
          <div class="flex flex-col">
            <div class="mb-3">
              <img
                class="rounded-tl-2xl"
                :src="item.src"
                :alt="item.title"
                loading="lazy"
              />

              <!-- data-twe-toggle="modal"
                data-twe-target="#exampleModalCenter2"
                data-twe-ripple-init
                data-twe-ripple-color="light" -->
            </div>
          </div>
          <div
            :class="`relative -start-0 bottom-0 inline-block w-[calc(100%+30px)] rounded-tr-xl px-2 py-1.5 text-left font-bold tracking-wide text-white ${className}`"
          >
            {{ item.title }}
          </div>
        </a>
      </swiper-slide>
    </swiper>
    <!-- <div
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
        class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none"
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
              <a :href="item.link" target="_blank">
                <div class="h-[300px] w-[300px] overflow-hidden">
                  {{ item.src }}
                  <img
                    :src="`${imagePath}${item.src}`"
                    :alt="item.title"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="line-clamp-2 text-start">
                  {{ item.title }}
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div> -->
  </div>
</template>
