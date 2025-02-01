<script setup>
  import { onMounted, ref } from 'vue'
  import { gsap } from 'gsap'
  const container = ref(null)
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const showItems = [
    {
      id: '/show/01.jpg',
      title: 'J HALL搖滾樂團',
      subtitle: '孩子搖滾演唱會',
      description:
        '平均年齡只有10歲的「J HALL樂團」成軍3年，是華語樂壇史上最年輕的兒童樂團，將帶來孩子也能搖滾的演唱會，為現場爸爸媽媽與小朋友帶來多首朗朗上口的歌曲，也為野餐日慶生，一起來搖滾Party吧！'
    },
    {
      id: '/show/02.jpg',
      title: '楊元慶',
      subtitle: '魔術花式溜溜球',
      description:
        '邀請溜溜球大師透過花式技巧演譯力與美！溜溜球項目金氏世界紀錄保持人楊元慶，用一顆溜溜球走遍全世界，期許孩子在熱愛的事情上不需要當最厲害的，而是成為無法取代。精彩演出將開啟藝術表演魔幻旅程！'
    },
    {
      id: '/show/03.jpg',
      title: '天馬戲創作劇團',
      subtitle: '蟲蟲馬戲團',
      description:
        '故事派對就從探索藝術與關懷環境展開！由天馬戲創作劇團帶來蟲蟲馬戲團表演，森林探險家帶著大家一窺森林的秘密，找尋傳說中的神奇昆蟲並立志要保護美麗的森林，不只是特技，更融入了環保與教育意涵。'
    },
    {
      id: '/show/03.jpg',
      title: '來寶唱跳秀　',
      subtitle: '',
      description:
        '缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字'
    },
    {
      id: '/show/03.jpg',
      title: '農業部表演',
      subtitle: '',
      description:
        '愛地球永續宣言—「為未來發聲」，透過知識學習、行動支持，看見守護地球從小力行的決心。​同時捐贈圖書給需要的教育單位，讓知識與文字的力量持續傳遞，乘載夢想為孩子開啟更多對未來的期待與想像。'
    },
    {
      id: '/show/03.jpg',
      title: '乖乖表演',
      subtitle: '',
      description:
        '缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字缺字'
    }
    // {
    //   id: '',
    //   title: '',
    //   subtitle: '',
    //   description: ''
    // }
  ]

  const showBirthday = [
    {
      id: '/show/05.jpg',
      title: 'F.S.D 藝術滑輪行動慶生舞',
      description:
        '穿越整場的驚喜童趣慶生！慶生小隊定時不定點在走道上手拿慶生牌、氣球表演慶生輪舞，穿梭現場更顯熱鬧氣氛！慶生小隊將不定點出沒，一起來找他們玩滑輪、拿氣球吧！'
    },
    {
      id: '/show/05.jpg',
      title: '來寶好朋友遊行',
      description:
        '穿越整場的驚喜童趣慶生！慶生小隊定時不定點在走道上手拿慶生牌、氣球表演慶生輪舞，穿梭現場更顯熱鬧氣氛！慶生小隊將不定點出沒，一起來找他們玩滑輪、拿氣球吧！'
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
        <img src="/img/kv-show.svg" alt="" width="680" />
      </router-link>
      <span
        class="absolute right-3 top-0 z-10 w-[80px] md:-right-16 md:top-24 md:w-[150px]"
      >
        <img src="/img/kv-main-img.svg" alt="" width="150" />
      </span>
    </Header>

    <div class="bg-green py-16">
      <div class="container">
        <div class="mb-8 text-center">
          <img class="mx-auto" src="/img/title-show.svg" alt="" />
        </div>
        <div class="text-center text-[20px] font-black">
          <div>當然不能少了各種好Show炒熱氣氛！</div>
          <div>音樂、故事、唱唱跳跳</div>
          <div>最豐富的表演，都在未來親子野餐日！</div>
        </div>
        <div
          class="mb-5 grid gap-x-10 gap-y-8 md:grid-cols-3 md:gap-y-10 md:py-10"
        >
          <div
            v-for="(item, index) in showItems"
            :key="index"
            class="scroll-animate-rotateIn relative rounded-tl-3xl bg-white p-3 shadow-md"
          >
            <div class="flex flex-col">
              <div>
                <img
                  class="h-full w-full rounded-tl-3xl object-cover"
                  :src="`${imagePath}${item.id}`"
                  alt="1"
                />
              </div>
              <div class="relative">
                <div
                  :class="`relative -end-8 -top-3 inline-block w-full rounded-tr-xl px-6 py-1.5 text-xl font-bold tracking-wide text-white ${index % 2 === 0 ? 'bg-primary-500' : 'bg-kv-green'}`"
                >
                  {{ item.title }}
                </div>
                <div>
                  <div
                    :class="`mb-2 text-xl font-bold ${index % 2 === 0 ? 'text-primary-500' : 'text-kv-green'}`"
                  >
                    {{ item.subtitle }}
                  </div>
                  <div>{{ item.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5 flex items-center justify-center">
          <ButtonJoin />
        </div>
      </div>
      <span class="absolute -bottom-[80px] start-0 h-[100px] w-full">
        <img
        
          class="h-full w-full object-cover"
          src="/img/bg-green-line-b.svg"
          alt=""
        />
      </span>
    </div>
    <div class="bg-yellow py-16">
      <div class="container pt-20">
        <div
          class="relative z-10 mb-8 flex flex-col items-center gap-3 font-bold"
        >
          <div class="mb-5">
            <img width="450" src="/img/title-schedule.svg" alt="" />
          </div>
          <div class="mb-">※ 將依現場實際流程為主。</div>
        </div>
        <div class="scroll-animate-fadeInUp text-2xl">
          <div
            class="flex divide-x divide-white rounded-t-lg bg-primary-500 py-3 text-white"
          >
            <div class="grow px-3 text-center md:max-w-[300px]">時間</div>
            <div class="grow px-3 text-center">內容</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              11:00-11:30
            </div>
            <div class="grow px-3 font-black text-kv-green">
              歡樂互動｜來寶唱跳秀
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              11:30-11:50
            </div>
            <div class="grow px-3 font-black">永續宣言</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              11:50-12:05
            </div>
            <div class="grow px-3 font-black text-primary-500">企業時間</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              12:05-12:35
            </div>
            <div class="grow px-3 font-black text-primary-500">
              專業表演｜KIDs Concert[J HALL]+慶生開趴
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              12:35-12:45
            </div>
            <div class="grow px-3 font-black text-kv-green">
              歡樂互動｜來寶唱跳秀
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              12:45-13:00
            </div>
            <div class="grow px-3 font-black text-primary-500">企業時間</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              13:00-13:20
            </div>
            <div class="grow px-3 font-black text-kv-green">
              歡樂互動｜來寶唱跳秀
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              13:20-13:30
            </div>
            <div class="grow px-3 font-black text-primary-500">
              專業表演｜魔幻Party [溜溜球]
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              13:30-13:45
            </div>
            <div class="grow px-3 font-black text-kv-green">
              歡樂互動｜來寶唱跳秀
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              13:45-13:55
            </div>
            <div class="grow px-3 font-black text-primary-500">企業時間</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              13:55-14:25
            </div>
            <div class="grow px-3 font-black text-kv-green">
              專業表演｜故事Party [蟲蟲馬戲團]
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[300px] md:text-center">
              14:350-15:00
            </div>
            <div class="grow px-3 font-black">2025未來親子野餐日歡樂抽獎</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <style>
  .card-item {
    transform-origin: center;
  }
</style> -->
