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
    },
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
    },
    {
      src: 'show-02.jpg',
      title: '楊元慶魔術花式溜溜球',
      description:
        '邀請溜溜球大師透過花式技巧演譯力與美！溜溜球項目金氏世界紀錄保持人楊元慶，用一顆溜溜球走遍全世界，期許孩子在熱愛的事情上不需要當最厲害的，而是成為無法取代。精彩演出將開啟藝術表演魔幻旅程！',
      link: '#'
    }
  ]
  const showItems2 = [
    {
      src: 'show-01.jpg',
      title: '企業講座',
      description:
        '平均年齡只有10歲的「J HALL樂團」成軍3年，是華語樂壇史上最年輕的兒童樂團，將帶來孩子也能搖滾的演唱會，為現場爸爸媽媽與小朋友帶來多首朗朗上口的歌曲，也為野餐日慶生，一起來搖滾Party吧！',
      link: '#'
    },
    {
      src: 'show-02.jpg',
      title: '企業講座',
      description:
        '邀請溜溜球大師透過花式技巧演譯力與美！溜溜球項目金氏世界紀錄保持人楊元慶，用一顆溜溜球走遍全世界，期許孩子在熱愛的事情上不需要當最厲害的，而是成為無法取代。精彩演出將開啟藝術表演魔幻旅程！',
      link: '#'
    },
    {
      src: 'show-01.jpg',
      title: 'J HALL搖滾樂團孩子搖滾演唱會',
      description:
        '平均年齡只有10歲的「J HALL樂團」成軍3年，是華語樂壇史上最年輕的兒童樂團，將帶來孩子也能搖滾的演唱會，為現場爸爸媽媽與小朋友帶來多首朗朗上口的歌曲，也為野餐日慶生，一起來搖滾Party吧！',
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
    <Header />
    <div class="bg-green py-16">
      <div class="container">
        <div class="mb-8 text-center">
          <img class="mx-auto" width="300" src="/img/title-gift.png" alt="" />
        </div>
        <div class="mb-8 text-center">
          <div>當然不能少了各種好Show炒熱氣氛！</div>
          <div>音樂、故事、唱唱跳跳</div>
          <div>最豐富的表演，都在未來親子野餐日！</div>
        </div>
        <div
          ref="container"
          class="mb-5 flex flex-wrap justify-center gap-x-10 py-10 md:gap-y-10"
        >
          <div
            v-for="(item, index) in showItems"
            :key="index"
            class="card-item relative max-w-[350px] rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="flex flex-col">
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
          <div
            v-for="(item, index) in showItems2"
            :key="index"
            class="card-item relative max-w-[350px] rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="flex flex-col">
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

          <div
            class="card-item relative max-w-[450px] rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="flex flex-col">
              <div>
                <img
                  class="h-full w-full object-cover"
                  src="/img/show-01.jpg"
                  alt="1"
                />
              </div>
              <div class="relative">
                <div
                  class="relative -end-8 -top-3 inline-block w-full rounded-tr-xl bg-kv-yellow px-6 py-1.5 font-bold tracking-wide text-white"
                >
                  F.S.D 藝術滑輪行動慶生舞
                </div>
                <div class="flex gap-3">
                  <div class="shrink-0">
                    <img src="/img/title-special.svg" alt="" />
                  </div>
                  穿越整場的驚喜童趣慶生！慶生小隊定時不定點在走道上手拿慶生牌、氣球表演慶生輪舞，穿梭現場更顯熱鬧氣氛！慶生小隊將不定點出沒，一起來找他們玩滑輪、拿氣球吧！
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 text-center">
          <ButtonJoin :title="'立即購票'" :link="'/#purchase'" />
        </div>
      </div>
    </div>
    <div class="bg-yellow py-16">
      <div class="container">
        <!-- <div class="flex flex-col items-center gap-3 text-3xl font-bold">
          <div class="mb-5">
            <img src="/img/title-faq.png" alt="" />
          </div>
        </div> -->
        <div class="text-2xl">
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
