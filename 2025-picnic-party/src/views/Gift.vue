<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const giftItems = Array.from({ length: 10 }, (_, i) => i + 1)
  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
  })
  const selectedIndex = ref()
  const modelContent = ref([
    {
      id: 'gift-model-img-1.jpg',
      title: '換書說明',
      description: `
        <p class="text-xl font-bold text-center mb-2">好書大風吹</p>
        <p>
          凡攜帶家中用不到且狀態良好的舊書至活動攤位，即可兌換一本小天下/未來出版書籍，原捐獻之舊書將整理後捐給「家扶基金會」，讓美好知識永續傳承 。
        </p>
        <p></p>
        <p>※ 注意事項：</p>
        <ul class="list-decimal px-4">
          <li>
            1. 1組家庭限捐1本紙本書，並兌換1本小天下/未來出版書籍。
          </li>
          <li>2. 捐贈書籍限兒童讀物，並需有版權及價格註記。</li>
          <li>3. 圖書封面及內頁需清潔完好，8成新，無破損、污損或塗鴉情形者。</li>
          <li>4. 電腦類書籍、教科書、期刊雜誌恕不收取。</li>
          <li>5. 若捐贈之書籍書況極差，未來親子擁有拒收的權利。 </li>
        </ul>
      `
    },
    {
      id: 'gift-model-img-2.jpg',
      title: '兌換說明',
      description: `
        <p class="text-xl font-bold mb-1 text-center">貓下去爆米花<br/>限時歡樂送</p>
        <p>歡慶未來親子野餐日10週年，特邀台北超人氣餐酒館「貓下去敦北俱樂部」一起同樂！ </p>
        <p>凡自行攜帶容器，憑闖關卡即可免費兌換「#貓下去爆米花」一份，一組家庭限兌換一次，數量有限，贈完為止。 </p>
        <p>★期間限定★13:00-15:00</p>
      `
    }
  ])

  const selectModel = (index) => {
    if (index !== 5 && index !== 8) return
    selectedIndex.value = index === 5 ? 0 : 1
  }
</script>

<template>
  <div>
    <Header>
      <img src="/img/kv-gift.svg" alt="" class="w-[450px] px-3 sm:w-[600px]" />

      <span
        class="absolute bottom-0 right-2 top-auto z-10 w-[70px] sm:-right-[100px] sm:top-24 sm:w-[180px]"
      >
        <img src="/img/kv-main-img.svg" alt="" width="150" />
      </span>
    </Header>
    <div class="bg-yellow">
      <div class="container py-16">
        <div class="mb-8 text-center">
          <img
            width="600"
            class="mx-auto"
            src="/img/title-gift-main.svg"
            alt=""
          />
        </div>
        <div class="text-center text-[1.1rem] font-black">
          <div>10大互動好禮搶先看！</div>
          <div>全場活動趴趴走，好禮拿不停！</div>
          <div>點擊按鈕，看更多活動說明</div>
        </div>

        <div class="grid gap-6 md:mb-36 md:grid-cols-2">
          <div
            v-for="(item, index) in giftItems"
            :key="index"
            :class="[
              'w-full',
              index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-1/2',
              index === 5 || index === 8 ? 'cursor-pointer' : ''
            ]"
            v-bind="
              index === 5 || index === 8
                ? {
                    'data-twe-toggle': 'modal',
                    'data-twe-target': '#exampleModalScrollable',
                    'data-twe-ripple-init': '',
                    'data-twe-ripple-color': 'light'
                  }
                : {}
            "
            @click="selectModel(index)"
          >
            <img
              :class="[
                'w-full',
                index % 2 === 0
                  ? 'scroll-animate-slideInLeft'
                  : 'scroll-animate-slideInRight'
              ]"
              :src="`${imagePath}/gift-item-${index + 1 < 10 ? '0' + (index + 1) : index + 1}.svg`"
              alt=""
            />
          </div>
        </div>

        <div class="mb-5 flex items-center justify-center pt-5 md:pt-8">
          <ButtonJoin />
        </div>
        <div
          data-twe-modal-init
          class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden p-6 outline-none"
          id="exampleModalScrollable"
          tabindex="-1"
          aria-labelledby="exampleModalScrollableLabel"
          aria-hidden="true"
        >
          <div
            data-twe-modal-dialog-ref
            class="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
          >
            <div
              class="pointer-events-auto relative flex max-h-[100%] w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark"
            >
              <div
                class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b p-4"
              >
                <h5
                  class="mx-auto text-xl font-bold"
                  id="exampleModalScrollableLabel"
                >
                  {{ modelContent[selectedIndex]?.title }}
                </h5>
                <button
                  type="button"
                  class="absolute -right-2 -top-2 z-10 box-content rounded-full border-none bg-white text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-twe-modal-dismiss
                  aria-label="Close"
                >
                  <img width="40" src="/img/modal-close.svg" alt="" />
                </button>
              </div>

              <div class="relative overflow-y-auto p-6">
                <div class="flex flex-col gap-5 divide-y text-justify">
                  <div class="flex flex-col gap-2">
                    <p>
                      <img
                        class="w-full"
                        :src="`${imagePath}${modelContent[selectedIndex]?.id}`"
                        alt=""
                      />
                    </p>
                    <div
                      v-html="modelContent[selectedIndex]?.description"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
