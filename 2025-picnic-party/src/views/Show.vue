<script setup>
  import { onMounted, ref } from 'vue'
  import { gsap } from 'gsap'
  const container = ref(null)
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const showItems = [
    {
      id: '/show/01.jpg',
      title: null,
      subtitle: '泥寶寶的魔法音樂會',
      description:
        '聽說星球上的泥土寶寶生病了，需要注入營養能量才能讓他打起精神！「微笑姐姐」使出神奇魔法帶領蔬果樂手演奏能量樂曲，泥土寶寶終於冒出新芽了！由農業部帶來精采的食農教育故事劇，讓孩子在悠揚的四季旋律中學習愛與珍惜！'
    },
    {
      id: '/show/02.jpg',
      title: 'J HALL樂團',
      subtitle: 'J HALL樂團｜孩子搖滾演唱會',
      description:
        '平均年齡只有10歲的「J HALL樂團」成軍3年，是華語樂壇史上最年輕的兒童樂團，將帶來孩子也能搖滾的演唱會，為現場爸爸媽媽與小朋友帶來多首朗朗上口的歌曲，一起來搖滾慶生Party吧！'
    },
    {
      id: '/show/03.jpg',
      title: '楊元慶',
      subtitle: '楊元慶｜魔術花式溜溜球',
      description:
        '溜溜球大師透過花式技巧演譯力與美！溜溜球項目金氏世界紀錄保持人楊元慶，用一顆溜溜球走遍全世界，期許孩子在熱愛的事情上不需要當最厲害的，而是成為無法取代。'
    },
    {
      id: '/show/04.jpg',
      title: '天馬戲創作劇團',
      subtitle: '天馬戲創作劇團｜蟲蟲馬戲團',
      description:
        '故事派對就從探索藝術與關懷環境展開！由天馬戲創作劇團帶來蟲蟲馬戲團表演，森林探險家帶著大家一窺森林的秘密，找尋傳說中的神奇昆蟲並立志要保護美麗的森林，不只是特技，更融入了環保與教育意涵。'
    },
    {
      id: '/show/05.jpg',
      title: null,
      subtitle: '歡樂派對秀',
      description:
        '歡慶來寶過生日！還有神祕小夥伴來同樂，猜猜看會是誰呢？快來野餐日揭曉謎題～（小提示：是爸爸媽媽也都認識的好朋友哦）'
    },
    {
      id: '/show/06.jpg',
      title: null,
      subtitle: 'Ｑ萌來寶唱跳秀',
      description:
        '未來親子最可愛的大明星「來寶」來囉！快來參加來寶慶生派對，跟著來寶和他的好朋友們一起唱歌跳舞去！'
    },
    {
      id: '/show/07.jpg',
      title: '波波星球',
      subtitle: '波波星球',
      description:
        '舞台前卡位預備備～超人氣偶像泡泡哥哥來囉！要跟小朋友們一起開派對、唱唱跳跳high玩一整天！'
    },
    {
      id: '/show/08.jpg',
      title: 'F.S.D 藝術滑輪行動慶生舞',
      subtitle: 'F.S.D 兒童輪舞團｜行動慶生輪舞',
      description: `
        <p>將藝術輪滑結合生活、穿越整場的驚喜童趣慶生！慶生小隊不定點出沒在活動中，一起來找他們玩滑輪、拿氣球吧！</p>
        <p> ★表演場次★ 13:00、13:30、14:00、14:30</p>
      `
    },
    {
      id: '/show/09.jpg',
      title: null,
      subtitle: '來寶好朋友大遊行',
      description: `
        <p>最萌的來寶小壽星和他的好朋友們浩浩蕩蕩來跟大小朋友拍照囉！Ｑ度和顏值都爆表的見面會，絕對不能錯過！</p>
        <p>★遊行場次★ 12:00、13:40、15:00</p>
      `
    }

    // {
    //   id: '',
    //   title: '',
    //   subtitle: '',
    //   description: ''
    // }
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
      <img src="/img/kv-show.svg" alt="" class="w-[450px] px-3 sm:w-[600px]" />
      <span
        class="absolute bottom-0 right-2 top-auto z-10 w-[70px] sm:-right-[100px] sm:top-24 sm:w-[180px]"
      >
        <img src="/img/kv-main-img.svg" alt="" width="150" />
      </span>
    </Header>

    <div class="bg-green py-16">
      <div class="container">
        <div class="mb-8 text-center">
          <img width="600" class="mx-auto" src="/img/title-show.svg" alt="" />
        </div>
        <div class="mb-5 text-center text-[1.1rem] font-black md:mb-10">
          <div>當然不能少了各種好Show炒熱氣氛！</div>
          <div>音樂、故事、唱唱跳跳</div>
          <div>最豐富的表演，都在未來親子野餐日！</div>
        </div>
        <div
          class="relative mb-5 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 md:grid-cols-3 md:gap-y-10"
        >
          <div
            v-for="(item, index) in showItems"
            :key="index"
            class="scroll-animate-rotateIn relative rounded-tl-3xl bg-white p-3 shadow-md"
          >
            <div class="flex flex-col">
              <div
                class="aspect-h-4 aspect-w-6 overflow-hidden rounded-tl-3xl bg-gray-100 transition-opacity duration-300"
              >
                <img
                  class="h-full w-full object-cover"
                  :src="`${imagePath}${item.id}`"
                  alt="1"
                />
              </div>
              <div class="relative">
                <div
                  :class="`relative -end-8 -top-3 inline-block w-full rounded-tr-xl px-4 py-1.5 font-bold tracking-wide text-white ${index % 2 === 0 ? 'bg-primary-500' : 'bg-kv-green'}`"
                >
                  {{ item.subtitle }}
                </div>
                <div>
                  <!-- <div
                    :class="`mb-2 mt-2 text-xl font-bold ${index % 2 === 0 ? 'text-primary-500' : 'text-kv-green'}`"
                  >
                    {{ item.subtitle }}
                  </div> -->
                  <div class="flex gap-4">
                    <div v-html="item.description" class="text-justify"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="
                index === showItems.length - 2 || index === showItems.length - 1
              "
              class="absolute -start-3 -top-3 z-10"
            >
              <img
                class="h-[80px] w-[80px]"
                :src="`${imagePath}/special-show-0${index === showItems.length - 1 ? 2 : 1}.svg`"
                alt="1"
              />
            </div>
          </div>
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
        <div class="scroll-animate-fadeInUp text-[1.2rem]">
          <div
            class="flex divide-x divide-white rounded-t-lg bg-primary-500 py-3 text-white"
          >
            <div class="grow px-3 text-center md:max-w-[200px]">時間</div>
            <div class="grow px-3 text-center">內容</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">11:00</div>
            <div class="grow px-3 font-black">活力開場</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">11:15</div>
            <div class="grow px-3 font-black">Q萌來寶唱跳秀</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">11:25</div>
            <div class="grow px-3 font-black">歡樂派對秀</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">11:30</div>
            <div class="grow px-3 font-black">貴賓致詞暨開幕儀式</div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">12:00</div>
            <div class="flex grow flex-wrap gap-2 px-3 font-black">
              <div
                class="flex items-center justify-center rounded-full bg-kv-green px-4 text-xl font-bold text-white transition"
              >
                故事時間
              </div>
              <div class="text-kv-green">泥寶寶的魔法音樂會</div>
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">12:15</div>
            <div class="flex grow flex-wrap gap-2 px-3 font-black">
              <div
                class="flex items-center justify-center rounded-full bg-primary-500 px-4 text-xl font-bold text-white transition"
              >
                KIDs Concert
              </div>
              <div class="text-primary-500">J HALL樂團搖滾開趴</div>
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">12:50</div>
            <div class="flex grow flex-wrap gap-2 px-3 font-black">
              <div
                class="flex items-center justify-center rounded-full bg-kv-green px-4 text-xl font-bold text-white transition"
              >
                歡樂互動
              </div>
              <div class="text-kv-green">來寶唱跳秀</div>
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">13:00</div>
            <div class="flex grow flex-wrap gap-2 px-3 font-black">
              <div
                class="flex items-center justify-center rounded-full bg-primary-500 px-4 text-xl font-bold text-white transition"
              >
                魔幻Party
              </div>
              <div class="text-primary-500">楊元慶—花式溜溜球</div>
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">13:25</div>
            <div class="flex grow flex-wrap gap-2 px-3 font-black">
              <div
                class="flex items-center justify-center rounded-full bg-kv-green px-4 text-xl font-bold text-white transition"
              >
                歡樂互動
              </div>
              <div class="text-kv-green">來寶唱跳秀</div>
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">13:35</div>
            <div class="flex grow flex-wrap gap-2 px-3 font-black">
              <div
                class="flex items-center justify-center rounded-full bg-primary-500 px-4 text-xl font-bold text-white transition"
              >
                故事Party
              </div>
              <div class="text-primary-500">天馬戲創作劇團—蟲蟲馬戲團</div>
            </div>
          </div>
          <div
            class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"
          >
            <div class="grow px-3 md:max-w-[200px] md:text-center">14:10</div>
            <div class="grow px-3 font-black">
              2025 未來親子野餐日 歡樂抽獎​
            </div>
          </div>
        </div>
        <div class="my-5 flex items-center justify-center">
          <ButtonJoin />
        </div>
      </div>
    </div>
  </div>
</template>
