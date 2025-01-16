<script setup>
  import { ref, onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Navigation } from 'swiper/modules'

  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  // const circle = ref(null)

  // const onClickGood = (event) => {
  //   gsap.to(event.target, { rotation: '+=360' })
  // }

  // const setAnimation = () => {
  //   gsap.from('.box', { opacity: 0, stagger: 0.1 })
  //   gsap.to('.box', { rotation: '+=360', duration: 3 })
  //   gsap.to(circle.value, { rotation: '-=360', duration: 3 })
  // }

  defineProps({
    words: {
      type: Array,
      default: () => ['精', '彩', '表', '演']
    }
  })

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
    // setAnimation()
  })
</script>

<template>
  <div>
    <Header>
      <!-- <router-link to="/">
        <img src="/img/kv-index.png" alt="" width="650" />
      </router-link> -->
    </Header>

    <!-- <div class="flex items-center gap-1">
      <div v-for="(word, index) in words" :key="index" class="relative">
        <div
          class="relative flex h-14 w-14 items-center justify-center rounded-full bg-orange-400"
        >
          <div
            class="absolute -right-2 top-[5px] h-4 w-4 -translate-y-1/2 rotate-[270deg] bg-orange-400"
            :style="{
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)'
            }"
          ></div>
          <span class="text-2xl font-bold text-white">{{ word }}</span>
        </div>
      </div>
    </div> -->

    <div>
      <div class="bg-yellow py-16">
        <div class="container">
          <div class="flex flex-wrap gap-3">
            <iframe
              class="aspect-video w-full max-w-[700px] md:h-[450px]"
              src="https://www.youtube.com/embed/Sef8LyqvRJk?si=qtjNJwouQu-pgyAa&amp;controls=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div
              class="flex grow flex-col items-center justify-center gap-3 text-xl font-black text-kv-blue md:px-5"
            >
              <p>未來親子野餐日陪伴孩子10週年啦！</p>
              <p>不只是我們共創的里程碑，也象徵著「幸福永續」</p>
              <p>期待能陪伴孩子，朝著更美好的未來邁進！</p>
              <p>更多歡樂、甜蜜的親子時光，</p>
              <p>就從今年的10歲生日派對開始吧！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green py-16">
        <div class="container flex flex-col gap-10">
          <div>
            <img class="hidden md:block" src="/img/theme-01-l.png" alt="" />
            <img
              class="block md:hidden"
              src="/img/ticket-gift-01-s.png"
              alt=""
            />
          </div>
          <div>
            <img class="hidden md:block" src="/img/theme-02-l.png" alt="" />
            <img
              class="block md:hidden"
              src="/img/ticket-gift-02-s.png"
              alt=""
            />
          </div>
          <div>
            <img class="hidden md:block" src="/img/theme-03-l.png" alt="" />
            <img
              class="block md:hidden"
              src="/img/ticket-gift-02-s.png"
              alt=""
            />
          </div>
          <div>
            <img class="hidden md:block" src="/img/theme-04-l.png" alt="" />
            <img
              class="block md:hidden"
              src="/img/ticket-gift-02-s.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="bg-yellow py-16">
        <div class="container flex flex-col gap-10">
          <div class="flex flex-col items-center gap-3 text-3xl font-bold">
            <div class="mb-5">
              <img src="/img/title-ticket.png" alt="" />
            </div>
            <div>2025年4月3日10:30-15:00</div>
            <div>新北大都會公園</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <div class="relative bg-white p-5 shadow-xl">
              <div>
                <span class="absolute -start-[30px] -top-[30px]">
                  <img
                    class="hidden md:block"
                    width="100"
                    src="/img/title-gift-01.svg"
                    alt=""
                  />
                </span>
                <img class="hidden md:block" src="/img/gift_01.png" alt="" />
                <span
                  class="absolute end-0 top-0 inline-block rounded-bl-3xl bg-primary-500 py-2 pe-5 ps-6 text-2xl font-bold tracking-wide text-white"
                >
                  報名送福袋
                </span>
              </div>
              <div
                class="mt-3 text-center text-2xl font-black text-primary-500"
              >
                限量 600 組！
              </div>
            </div>
            <div class="relative bg-white p-5 shadow-xl">
              <div>
                <span class="absolute -start-[30px] -top-[30px]">
                  <img
                    class="hidden md:block"
                    width="100"
                    src="/img/title-gift-02.svg"
                    alt=""
                  />
                </span>
                <img class="hidden md:block" src="/img/gift_01.png" alt="" />
                <span
                  class="absolute end-0 top-0 inline-block rounded-bl-3xl bg-primary-500 py-2 pe-5 ps-6 text-2xl font-bold tracking-wide text-white"
                >
                  早鳥加碼送
                </span>
              </div>
              <div
                class="mt-3 text-center text-2xl font-black text-primary-500"
              >
                限量 600 組！
              </div>
            </div>
          </div>
          <div>
            <div
              class="mb-16 flex flex-wrap items-center justify-between gap-8 md:flex-nowrap"
            >
              <a class="relative" href="#">
                <img src="/img/ticket-01.png" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl bg-kv-green px-10 py-3 text-center text-2xl font-bold tracking-wide text-white"
                >
                  立即購票
                </div>
              </a>
              <a class="relative" href="#">
                <img src="/img/ticket-02.png" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl bg-primary-500 px-10 py-3 text-center text-2xl font-bold tracking-wide text-white"
                >
                  立即購票
                </div>
              </a>
              <a class="relative" href="#">
                <img src="/img/ticket-03.png" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl bg-kv-green px-10 py-3 text-center text-2xl font-bold tracking-wide text-white"
                >
                  立即購票
                </div>
              </a>
            </div>
            <div class="mt-5 text-center font-bold">
              ※【單組票】、【揪團票】、【慶生套票】下訂後，恕不接受換票。
            </div>
            <div class="mt-20 text-center font-bold">
              <a
                href="#"
                class="relative mx-auto inline-block rounded-tl-3xl bg-kv-blue py-3 pe-16 ps-5 text-2xl font-bold tracking-wide text-white"
              >
                報名注意事項
                <span class="absolute -end-[30px] -top-[50px]">
                  <img src="/img/btn-d-01.png" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div
        class="flex flex-wrap gap-5 rounded-lg bg-white p-8 shadow-xl md:flex-nowrap"
      >
        <div class="w-1/2"></div>
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
      </div> -->

    </div>
  </div>
</template>
