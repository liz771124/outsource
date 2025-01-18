<script setup>
  import { onMounted, ref } from 'vue'
  import { gsap } from 'gsap'
  const container = ref(null)
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const showItems = [
    {
      src: 'show-01.jpg',
      title: 'J HALL搖滾樂團孩子搖滾演唱會',
      description:
        '平均年齡只有10歲的「J HALL樂團」成軍3年，是華語樂壇史上最年輕的兒童樂團，將帶來孩子也能搖滾的演唱會，為現場爸爸媽媽與小朋友帶來多首朗朗上口的歌曲，也為野餐日慶生，一起來搖滾Party吧！',
      link: '#'
    },
    {
      src: 'show-02.jpg',
      title: '楊元慶魔術花式溜溜球',
      description:
        '邀請溜溜球大師透過花式技巧演譯力與美！溜溜球項目金氏世界紀錄保持人楊元慶，用一顆溜溜球走遍全世界，期許孩子在熱愛的事情上不需要當最厲害的，而是成為無法取代。精彩演出將開啟藝術表演魔幻旅程！',
      link: '#'
    }
  ]

  onMounted(() => {
    const cards = container.value.querySelectorAll('.flip-card')
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.value,
        start: 'top 80%'
      }
    })

    cards.forEach((card, index) => {
      timeline.to(
        card,
        {
          opacity: 1,
          rotateY: 0,
          duration: 0.6,
          delay: index * 0.25,
          ease: 'power2.out'
        },
        index * 0.3
      )
    })
  })
</script>
<template>
  <div>
    <Header />
    <div class="bg-green py-16">
      <div class="container">
        <div class="mb-8 text-center">
          <img class="mx-auto" width="300" src="/img/title-gift.png" alt="" />
          <div>
            <div>當然不能少了各種好Show炒熱氣氛！</div>
            <div>音樂、故事、唱唱跳跳</div>
            <div>最豐富的表演，都在未來親子野餐日！</div>
          </div>
        </div>
        <div
          ref="container"
          class="mb-5 grid grid-cols-2 py-10 md:grid-cols-3 md:gap-10"
        >
          <div
            v-for="(item, index) in showItems"
            :key="index"
            class="flip-card relative rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="flip-card-inner">
              <div class="flip-card-front flex flex-col">
                <div>
                  <img
                    class="rounded-tl-2xl"
                    :src="`${imagePath}${item.src}`"
                    :alt="item?.title"
                  />
                </div>
                <div class="relative">
                  <div
                    class="relative -end-8 -top-3 inline-block w-full rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
                  >
                    {{ item.title }}
                  </div>
                  <div>
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonJoin :title="'立即購票'" />
        <!-- <div ref="container" class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="opacity-0">
            <div class="flip-card-inner">
              <div class="flip-card-front flex flex-col">
                <h2 class="text-center text-xl"></h2>
                <span class="h-full w-full scale-75 border border-white"></span>
                <img
                  :src="`${imagePath}${item.src}`"
                  :alt="item?.title"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="flex flex-col p-4">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <ButtonJoin :title="'立即購票'" /> -->
      </div>
    </div>
    <div class="bg-yellow py-16">
      <div class="container">
        <div class="flex flex-col items-center gap-3 text-3xl font-bold">
          <div class="mb-5">
            <img src="/img/title-faq.png" alt="" />
          </div>
        </div>
        <div class="text-2xl">
          <div
            class="flex divide-x divide-white rounded-t-lg bg-primary-500 py-3 text-white"
          >
            <div class="max-w-[300px] grow px-10 text-center">時間</div>
            <div class="grow px-3 text-center">內容</div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-white py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 text-kv-green">歡樂互動｜來寶唱跳秀</div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-[#FFECE6] py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:30-11:50</div>
            <div class="grow px-3">永續宣言</div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-white py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 text-primary-500">企業時間</div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-[#FFECE6] py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:30-11:50</div>
            <div class="grow px-3 text-primary-500">
              專業表演｜KIDs Concert[J HALL]+慶生開趴
            </div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-white py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 text-kv-green">歡樂互動｜來寶唱跳秀</div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-[#FFECE6] py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 text-primary-500">企業時間</div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-white py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 text-kv-green">歡樂互動｜來寶唱跳秀</div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-[#FFECE6] py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:30-11:50</div>
            <div class="grow px-3 text-primary-500">
              專業表演｜魔幻Party [溜溜球]
            </div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-white py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 text-kv-green">歡樂互動｜來寶唱跳秀</div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-[#FFECE6] py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 text-primary-500">企業時間</div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-white py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3 text-kv-green">
              專業表演｜故事Party [蟲蟲馬戲團]
            </div>
          </div>
          <div
            class="flex border-b border-primary-500 bg-[#FFECE6] py-3 font-black"
          >
            <div class="max-w-[300px] grow px-3 text-center">11:00-11:30</div>
            <div class="grow px-3">2025未來親子野餐日歡樂抽獎</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .flip-card {
    perspective: 1000px;
    transform: rotateY(-180deg);
  }
  .flip-card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .flip-card-front,
  .flip-card-back {
    backface-visibility: hidden;
  }
  .flip-card-back {
    transform: rotateY(180deg);
  }
</style>
