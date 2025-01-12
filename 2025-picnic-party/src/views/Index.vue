<script setup>
  import { ref, onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Navigation } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  gsap.registerPlugin(ScrollTrigger)

  const container = ref(null)
  const circle = ref(null)

  const onClickGood = (event) => {
    gsap.to(event.target, { rotation: '+=360' })
  }

  const setAnimation = () => {
    gsap.from('.box', { opacity: 0, stagger: 0.1 })
    gsap.to('.box', { rotation: '+=360', duration: 3 })
    gsap.to(circle.value, { rotation: '-=360', duration: 3 })
  }

  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
    setAnimation()
  })
</script>

<template>
  <div>
    <Header>
      <router-link to="/">
        <img src="/img/kv-index.png" alt="" width="650" />
      </router-link>
    </Header>

    <div class="container py-10">
      <div class="">
        <div class="flex flex-col items-center justify-center gap-5 text-2xl">
          <div>未來親子野餐日陪伴孩子10週年啦！</div>
          <div>不只是我們共創的里程碑，也象徵著「幸福永續」</div>
          <div>期待能陪伴孩子，朝著更美好的未來邁進！</div>
          <div>更多歡樂、甜蜜的親子時光，</div>
          <div>就從今年的10歲生日派對開始吧！</div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <a href="#">
          <img src="/img/ticket-01.png" alt="" />
        </a>
        <a href="#">
          <img src="/img/ticket-02.png" alt="" />
        </a>
        <a href="#">
          <img src="/img/ticket-02.png" alt="" />
        </a>
      </div>
      <div>
        <div
          data-twe-toggle="modal"
          data-twe-target="#exampleModalCenter2"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          <img class="hidden md:block" src="/img/ticket-gift-01.png" alt="" />
          <img class="block md:hidden" src="/img/ticket-gift-01-s.png" alt="" />
        </div>
        <div>
          <img class="hidden md:block" src="/img/ticket-gift-02.png" alt="" />
          <img class="block md:hidden" src="/img/ticket-gift-02-s.png" alt="" />
        </div>
      </div>
      <div
        class="flex flex-wrap gap-5 rounded-lg bg-white p-8 shadow-xl md:flex-nowrap"
      >
        <div class="w-1/2">
          <!-- <img src="/img/kv-index.png" alt="" width="650" /> -->
          <iframe
            class="h-full w-full"
            src="https://www.youtube.com/embed/HfbW8DL1Ld4?si=qtjNJwouQu-pgyAa&amp;controls=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <a href="#" class="flex flex-col gap-5">
          <div class="text-2xl font-bold text-primary-500">互動好禮</div>
          <div>
            歡慶十週年，活動好禮拿不完！快來看看這次活動有哪些超亮點，把限量好禮通通帶回家！
          </div>
          <button
            type="button"
            class="inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
          >
            看看好禮
          </button>
        </a>
      </div>
      <div class="py-10">
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
          <swiper-slide class="flex flex-col gap-3">
            <div
              class="h-[200px] w-full overflow-hidden"
              data-twe-toggle="modal"
              data-twe-target="#exampleModalCenter"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img src="/img/ticket-01.png" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div>
        <div
          data-twe-modal-init
          class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalCenter"
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
              <div
                class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10"
              >
                <h5
                  class="text-xl font-medium leading-normal text-surface dark:text-white"
                  id="exampleModalCenterTitle"
                >
                  Modal title
                </h5>
                <button
                  type="button"
                  class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  data-twe-modal-dismiss
                  aria-label="Close"
                >
                  <span class="[&>svg]:h-6 [&>svg]:w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <!-- Modal body -->
              <div class="relative p-4">
                <p>This is a vertically centered modal.</p>
              </div>

              <!-- Modal footer -->
              <div
                class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10"
              >
                <button
                  type="button"
                  class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
                  data-twe-modal-dismiss
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="ms-1 inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
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
              <div
                class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10"
              >
                <h5
                  class="text-xl font-medium leading-normal text-surface dark:text-white"
                  id="exampleModalCenterTitle"
                >
                  Modal title
                </h5>
                <button
                  type="button"
                  class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  data-twe-modal-dismiss
                  aria-label="Close"
                >
                  <span class="[&>svg]:h-6 [&>svg]:w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <!-- Modal body -->
              <div class="relative p-4">
                <p>This is a vertically centered modal.</p>
              </div>

              <!-- Modal footer -->
              <div
                class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10"
              >
                <button
                  type="button"
                  class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
                  data-twe-modal-dismiss
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="ms-1 inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
