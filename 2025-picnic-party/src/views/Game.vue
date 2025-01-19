<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const giftList = [
    {
      name: '澎澄飯店',
      image:
        'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
      room: 'CookieRun 薑餅人主題房',
      note: '(加贈一位12歲以下兒童入住+開房禮)',
      description:
        '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
      price: '＄獎項價值 10,000 元 / 200 名'
    },
    {
      name: '澎澄飯店澎澄飯店澎澄飯店澎澄飯店澎澄飯店澎澄飯店澎澄飯店澎澄飯店澎澄飯店',
      image:
        'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
      room: 'CookieRun 薑餅人主題房',
      note: '(加贈一位12歲以下兒童入住+開房禮)',
      description:
        '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
      price: '＄獎項價值 1000 元 / 20 名'
    },
    {
      name: '澎澄飯店',
      image:
        'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
      room: 'CookieRun 薑餅人主題房',
      note: '(加贈一位12歲以下兒童入住+開房禮)',
      description:
        '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
      price: '＄獎項價值 50,000 元 / 10 名'
    }
  ]

  const setFaqListItem = () => {
    const items = document.querySelectorAll('#accordionContainer > div')
    gsap.from(items, {
      scrollTrigger: {
        trigger: '#accordionContainer', // 整個容器作為觸發點
        start: 'top 85%', // 容器進入視窗 85% 開始動畫
        toggleActions: 'play none none none' // 滾動時播放一次
      },
      opacity: 0, // 初始透明度
      y: 50, // 初始向下偏移
      duration: 0.8, // 單個動畫時間
      ease: 'power3.out', // 平滑效果
      stagger: {
        each: 0.3, // 每個項目之間間隔 300ms
        from: 'start' // 從第一個開始依序顯示
      }
    })
  }

  const setGiftListItem = () => {
    const items = document.querySelectorAll('.gift-item')

    // 📌 1. 滑入畫面時，所有 item 依序由下而上淡入
    gsap.from(items, {
      scrollTrigger: {
        trigger: '.grid', // 容器作為觸發點
        start: 'top 85%', // 進入視窗 85% 開始動畫
        toggleActions: 'play none none none' // 只播放一次
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      stagger: {
        each: 0.3, // 每個項目延遲 300ms
        from: 'start'
      }
    })

    // 2. 單一 item 滑入時彈跳放大縮小效果
    items.forEach((item) => {
      gsap.to(item, {
        scale: 1.05, // 輕微放大
        duration: 0.8,
        ease: 'bounce.inOut', // 彈性效果
        repeat: -1, // 無限循環
        yoyo: true, // 來回效果
        paused: true // 預設暫停
      })

      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.3, ease: 'power1.out' })
      })

      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power1.out' })
      })
    })
  }
  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
    setFaqListItem()
    setGiftListItem()
  })
</script>

<template>
  <div>
    <Header>
      <!-- <router-link to="/">
        <img src="/img/kv-play.png" alt="" width="650" />
      </router-link> -->
    </Header>
    <div class="bg-green">
      <div class="container py-10">
        <div class="mb-8 text-center">
          <img class="mx-auto" width="300" src="/img/title-game.png" alt="" />
        </div>
        <div class="flex flex-col items-center gap-5">
          <div class="rounded-full bg-kv-green px-5 py-1 text-white">
            #十在好玩
          </div>
          <div class="text-center">
            各大知名品牌帶來寓教於樂、全家共玩的親子活動，<br />
            一起享受闖關集章、學習知識，共度好時光！
          </div>
        </div>
        <div class="mb-5 grid grid-cols-2 py-10 md:grid-cols-4 md:gap-5">
          <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
            <div>
              <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
              <span
                class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
              >
                早鳥加碼送
              </span>
            </div>
          </div>
          <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
            <div>
              <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
              <span
                class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
              >
                早鳥加碼送
              </span>
            </div>
          </div>
          <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
            <div>
              <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
              <span
                class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
              >
                早鳥加碼送
              </span>
            </div>
          </div>
          <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
            <div>
              <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
              <span
                class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
              >
                早鳥加碼送
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-5">
          <div class="rounded-full bg-kv-yellow px-5 py-1 text-white">
            #十在好食
          </div>
          <div class="text-center">
            小農市集一起來到野餐日！<br />
            產地直送有機蔬果及加工品一次購足，走走逛逛更要吃好、吃健康！
          </div>
        </div>
        <div class="mb-5 grid grid-cols-2 py-10 md:grid-cols-4 md:gap-5">
          <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
            <div>
              <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
              <span
                class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-yellow px-6 py-1.5 font-bold tracking-wide text-white"
              >
                早鳥加碼送
              </span>
            </div>
          </div>
          <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
            <div>
              <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
              <span
                class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-yellow px-6 py-1.5 font-bold tracking-wide text-white"
              >
                早鳥加碼送
              </span>
            </div>
          </div>
          <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
            <div>
              <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
              <span
                class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-yellow px-6 py-1.5 font-bold tracking-wide text-white"
              >
                早鳥加碼送
              </span>
            </div>
          </div>
          <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
            <div>
              <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
              <span
                class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-yellow px-6 py-1.5 font-bold tracking-wide text-white"
              >
                早鳥加碼送
              </span>
            </div>
          </div>
        </div>

        <div>
          <swiper
            :slides-per-view="isMobile ? 2.5 : 4"
            :space-between="isMobile ? 10 : 20"
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

              <div class="relative p-4">
                <p>This is a vertically centered modal.</p>
              </div>

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
    <div class="bg-yellow">
      <div class="container py-10">
        <div class="mb-8 text-center">
          <img class="mx-auto" width="300" src="/img/title-gift.png" alt="" />
          <div>
            <div>只要集滿10個闖關印章，就能兌換抽獎券</div>
            <div>超過50個好禮獎項，幸運兒就是你！</div>
          </div>
        </div>
        <div class="grid grid-cols-2 items-stretch gap-8 md:grid-cols-3">
          <div
            v-for="(item, index) in giftList"
            :key="index"
            class="gift-item relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <div class="relative mb-3 text-white">
              <span
                class="absolute start-0 top-0 inline-block h-full w-full scale-95 rounded-tl-xl rounded-tr-xl border border-white"
              >
              </span>
              <img :src="item.image" alt="w-full" />
            </div>
            <div class="mb-3 px-3">
              <h2 class="text-xl font-semibold text-primary-500">
                {{ item.name }}
              </h2>
              <!-- <div class="mb-3">
                  {{ item.note }}
                </div>
                <div class="font-light leading-normal text-slate-600">
                  {{ item.description }}
                </div> -->
            </div>
            <div
              class="mt-auto border-t p-3 text-center text-sm font-bold text-gray2-500"
            >
              {{ item.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
