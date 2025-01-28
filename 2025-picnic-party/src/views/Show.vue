<script setup>
  import { onMounted, ref } from 'vue'
  import { gsap } from 'gsap'
  const container = ref(null)
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const showItems = [
    {
      id: '/show/01.jpg',
      title: '楊元慶魔術花式溜溜球',
      description: '缺字缺字',
      link: '#'
    },
    {
      id: '/show/02.jpg',
      title: '楊元慶魔術花式溜溜球',
      description: '缺字缺字',
      link: '#'
    },
    {
      id: '/show/03.jpg',
      title: 'J HALL搖滾樂團孩子搖滾演唱會',
      description: '缺字缺字',
      link: '#'
    }
  ]

  const setAnimation = () => {
    const cards = gsap.utils.toArray('.card-item')

    gsap.fromTo(
      cards,
      { rotateY: 90, opacity: 0 },
      {
        rotateY: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3, // 每個元素間延遲 0.3 秒
        scrollTrigger: {
          trigger: '.card-item',
          start: 'top 80%', // 當元素進入視窗的 80% 時開始動畫
          toggleActions: 'play none none none'
        }
      }
    )
  }

  onMounted(() => {
    setAnimation()
  })
</script>
<template>
  <div>
    <Header>
      <router-link to="/">
        <img src="/img/kv-show.svg" alt="" width="650" />
      </router-link>
    </Header>

    <div class="bg-green py-16">
      <div class="container">
        <div class="mb-8 text-center">
          <img class="mx-auto" src="/img/title-show.svg" alt="" />
        </div>
        <div class="mb-8 text-center">
          <img class="mx-auto" src="/img/intro-show.svg" alt="" />
        </div>
        <div
          class="mb-5 grid items-center gap-x-10 py-10 md:grid-cols-3 md:gap-y-10"
        >
          <div
            v-for="(item, index) in showItems"
            :key="index"
            class="card-item relative rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="flex flex-col">
              <div>
                <img
                  class="h-full w-full object-cover"
                  :src="`${imagePath}${item.id}`"
                  alt="1"
                />
              </div>
              <div class="relative">
                <div
                  class="relative -end-8 -top-3 inline-block w-full rounded-tr-xl bg-kv-yellow px-6 py-1.5 font-bold tracking-wide text-white"
                >
                  {{ item.title }}
                </div>
                <div class="flex gap-3">
                  <!-- <div class="shrink-0">
                    <img src="/img/title-special-01.svg" alt="" />
                  </div> -->
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5 flex items-center justify-center">
          <ButtonJoin />
        </div>
      </div>
    </div>
    <div class="bg-yellow py-16">
      <div class="container">
        <div class="mb-8 flex flex-col items-center gap-3 font-bold">
          <div class="mb-5">
            <img src="/img/title-schedule.svg" alt="" />
          </div>
          <div class="mb-">※ 將依現場實際流程為主。</div>
        </div>
        <div class="scroll-animate-fadeInUp text-2xl">
          <div
            class="flex divide-x divide-white rounded-t-lg bg-primary-500 py-3 text-white"
          >
            <div class="max-w-[300px] grow px-10 text-center">時間</div>
            <div class="grow px-3 text-center">內容</div>
          </div>
          <div class="flex border-b border-primary-500 bg-white py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 font-black text-kv-green">
              歡樂互動｜來寶唱跳秀
            </div>
          </div>
          <div class="flex border-b border-primary-500 bg-[#FFECE6] py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:30-12:05</div>
            <div class="grow px-3 font-black">永續宣言</div>
          </div>
          <div class="flex border-b border-primary-500 bg-white py-3">
            <div class="max-w-[300px] grow px-3 text-center">12:05-12:35</div>
            <div class="grow px-3 font-black text-primary-500">企業時間</div>
          </div>
          <div class="flex border-b border-primary-500 bg-[#FFECE6] py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:30-11:50</div>
            <div class="grow px-3 font-black text-primary-500">
              專業表演｜KIDs Concert[J HALL]+慶生開趴
            </div>
          </div>
          <div class="flex border-b border-primary-500 bg-white py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 font-black text-kv-green">
              歡樂互動｜來寶唱跳秀
            </div>
          </div>
          <div class="flex border-b border-primary-500 bg-[#FFECE6] py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 font-black text-primary-500">企業時間</div>
          </div>
          <div class="flex border-b border-primary-500 bg-white py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 font-black text-kv-green">
              歡樂互動｜來寶唱跳秀
            </div>
          </div>
          <div class="flex border-b border-primary-500 bg-[#FFECE6] py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:30-11:50</div>
            <div class="grow px-3 font-black text-primary-500">
              專業表演｜魔幻Party [溜溜球]
            </div>
          </div>
          <div class="flex border-b border-primary-500 bg-white py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 font-black text-kv-green">
              歡樂互動｜來寶唱跳秀
            </div>
          </div>
          <div class="flex border-b border-primary-500 bg-[#FFECE6] py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 font-black text-primary-500">企業時間</div>
          </div>
          <div class="flex border-b border-primary-500 bg-white py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 font-black text-kv-green">
              專業表演｜故事Party [蟲蟲馬戲團]
            </div>
          </div>
          <div class="flex border-b border-primary-500 bg-[#FFECE6] py-3">
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 font-black">2025未來親子野餐日歡樂抽獎</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .card-item {
    transform-origin: center;
  }
</style>
