<script setup>
  import { ref, onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
      <div>
        <button
          type="button"
          class="inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
          data-twe-toggle="modal"
          data-twe-target="#exampleModal"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          燈箱按鈕
        </button>

        <div
          data-twe-modal-init
          class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            data-twe-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
          >
            <div
              class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none"
            >
              <div
                class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-primary-100 p-4"
              >
                <h5
                  class="text5-xl font-medium leading-normal text-surface"
                  id="exampleModalLabel"
                >
                  趴踢 Dress code 穿戴橘色配件
                </h5>
                <button
                  type="button"
                  class="box-content rounded-none border-none text-primary-500 hover:text-primary-800 hover:no-underline focus:text-primary-800 focus:opacity-100 focus:shadow-none focus:outline-none"
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

              <div class="relative flex-auto p-4" data-twe-modal-body-ref>
                <p>
                  野餐日開心玩，服裝搭配讓全家照片加倍可愛！當天只要穿著搭配橘色配件，就可以到指定點兌換「來寶慶生頭套」，限量2,000組！
                </p>
                <h3>新北大都會公園</h3>
                <p>地址:新北市三重區水漾路一段</p>
                <h3>捷運</h3>
                <p>1.捷運中和線三重站，1出口即可抵達。</p>
                <p>2.機場捷運線A2三重站，從1A出口即可抵達 公車</p>
                <p>1.捷運三重站:62、227區、232、264、640。</p>
                <p>
                  2.菜寮（重陽路）站:14、227、227區、232、292、292副、621、640、662、803、806、1212、忠孝幹線。
                </p>
              </div>

              <div
                class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-primary-100 p-4"
              >
                <button
                  type="button"
                  class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-twe-modal-dismiss
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="ms-1 inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  立即購票
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
