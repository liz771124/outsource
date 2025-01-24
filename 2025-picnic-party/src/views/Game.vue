<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const isHovered = ref(false)
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const lotteryList = [
    // {
    //   id: '01.jpg',
    //   brand: '【妙管家】',
    //   name: '瞬潔洗潔精(果香葡萄柚)500g',
    //   description: '',
    //   price: '＄獎項價值 元 /  名'
    // },
    {
      id: '01.png',
      brand: '【igogosport思博特】',
      name: 'myFirst Fone S3 4G 智慧兒童手錶',
      description:
        'S3除了具備精準的GPS定位，更具有完善的APP，介面美觀且多功能! 手錶上更有通話、視訊、MP3和SOS求救功能，還有專門設計給孩子的社交圈CIRCLE，讓孩子可以自由上傳心情與分享圖片，讓孩子與家長之間0距離！',
      price: '＄獎項價值 元 /  名'
    },
    {
      id: '02.jpg',
      brand: '【igogosport思博特】',
      name: 'myFirst 3D Pen Make - 3D 列印筆',
      description:
        '培養孩子的美感，從小開始！myFirst 3D筆，選用無毒材料，孩子開心玩，爸媽好安心！此外加熱顏料更是溫感不燙，讓孩子可以盡情發揮創意做出獨特的3D作品，畫筆更不需要時刻充電，外出攜帶更方便！',
      price: '＄獎項價值 元 /  名'
    },
    {
      id: '03.jpg',
      brand: '【igogosport思博特】',
      name: 'myFirst Camera 3 雙鏡頭兒童相機',
      description:
        '熱銷款兒童相機！鏡頭具備1600萬像素，此外更具備微距鏡頭，幫助寶貝更好對焦，還有前鏡頭讓寶貝輕鬆自拍、記錄生活，LED閃光燈，在黑暗的地方也可以捕捉畫面，內建麥克風，還可以錄影！是孩子記錄生活的最好玩伴！',
      price: '＄獎項價值 元 /  名'
    },
    {
      id: '04.jpg',
      brand: '【台北喜來登大飯店】',
      name: '手拉手樂園親子主題房住宿1晚',
      description:
        '台北喜來登大飯店以莫蘭迪色系融合動物童話繪本元素，打造四大主題「動物森林」、「叢林小鎮」、「史前探險」與「恐龍王國」故事場景客房，讓小孩玩到不想回家。入住主題親子客房皆可免費體驗樓層專屬「手拉手樂園」，分齡設計的室內遊戲區包含娃娃廚房、小車積木、樹洞滑梯，以及適合大小朋友的科技電玩區，為家庭的每一位成員打造一段充滿童趣與奇思妙想的歡聚之旅。（房型照片僅供參考，依實際入住房型為主）',
      price: '＄獎項價值 元 /  名'
    },
    {
      id: '05.jpg',
      brand: '【知覺優格】',
      name: '優格飲12入 (口味隨機)',
      description:
        '【清爽果粒 益菌隨行】知覺優格飲採用100%無調整鮮乳，搭配精心手工調製的果醬，口感豐盈綿密，完美呈現真實水果的酸甜風味！首創添加「菊苣膳食纖維護好菌」，嚴選優質菌種與法國專利菌株，幫助維持消化道機能，輕鬆搖一搖，即可隨時補充活性益生菌，健康與美味隨行無負擔！',
      price: '＄獎項價值 元 /  名'
    },
    {
      id: '06.jpg',
      brand: '【象印】',
      name: '童用ONE TOUCH保溫杯 (款式隨機)',
      description: `
        <p>象印專為孩童貼心設計的小熊杯，讓孩子夏日愛上喝水的秘密武器！色彩繽紛的可愛圖樣設計，不管男孩女孩通通都超愛！三大便利機能，讓孩子每日的飲水更加輕鬆又方便：</p>
        <p>#小熊安全鎖簡單開關</p>
        <p>#飲品集中扇形杯口設計方便飲用</p>
        <p>#輕量好握讓孩子輕鬆好拿 </p>
        <p>還有四大特色讓爸媽輕鬆清洗：</p>
        <p>#一體式中栓設計</p>
        <p>#可裝運動飲料的「防沾塗層+(plus)」</p>
        <p>#高效保溫保冷力</p>
        <p>#外袋可放置洗衣機清洗</p>
      `,
      price: '＄獎項價值 元 /  名'
    },
    {
      id: '07.jpg',
      brand: '【福容大飯店-高雄店】',
      name: '精緻豪華雙床房─動物園主題房型入住一晚(含早餐)',
      description:
        '交通位置相當便利的福容高雄店，步行5分鐘到輕軌真愛碼頭站、8分鐘到捷運鹽埕埔站。可搭乘輕軌一路玩高雄流行音樂中心、駁二藝術特區、棧貳庫，也可悠閒在愛河畔散步、騎單車、搭乘愛之船欣賞高雄港灣的日夜之美。',
      price: '＄獎項價值 元 /  名'
    },
    {
      id: '08.jpg',
      brand: '德恩奈',
      name: '專業口腔保健禮盒組',
      description:
        '內含德恩奈清新雙效漱口水500mlx1瓶+清淨涼牙膏156gx1支+美白牙膏125gx1支+夜用牙膏126gx1支+兒童牙膏90gx1支+前觸兒童牙刷x1支+極淨細絲牙刷2支 (總價值1125元) 適合全家人使用。',
      price: '＄獎項價值 元 /  名'
    },
    {
      id: '09.jpg',
      brand: '享居',
      name: '天絲兩用被(DtD)（圖案隨機）',
      description: `
        <p>DOTDOT 天絲兩用被，利用材質透氣與親膚度，可自由調整厚度，打造最單純的簡單舒適！</p>
        <p>輕巧多功能，雙面天絲材質，適合台灣氣候四季使用。額外可搭配水洗被胎來增加保暖度，還可以與DtD睡袋睡墊進行單邊結合。</p>
      `,
      price: '＄獎項價值 元 /  名'
    }
    // {
    //   id: '',
    //   brand: '',
    //   name: '',
    //   description: '',
    //   price: '＄獎項價值 元 /  名'
    // }
  ]

  const activityList = [
    {
      id: '',
      brand: '',
      name: '',
      description: '',
      price: '＄獎項價值 元 /  名'
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
      <router-link to="/">
        <img src="/img/kv-game.svg" alt="" width="650" />
      </router-link>
    </Header>
    <div id="game-01" class="bg-green">
      <div
        class="mx-auto flex max-w-[500px] divide-x divide-white rounded-bl-xl rounded-br-xl bg-primary-500 py-3"
      >
        <router-link to="/game#game-01" class="px-8 py-1"
          ><img src="/img/game-title-01.svg" alt=""
        /></router-link>
        <router-link to="game#game-02" class="px-8 py-1"
          ><img src="/img/game-title-02.svg" alt=""
        /></router-link>
      </div>
      <div class="container py-16">
        <div class="mb-20 text-center">
          <img
            width="600"
            class="mx-auto mb-10 block"
            src="/img/title-game-main-01.svg"
            alt=""
          />
          <img
            width="350"
            class="mx-auto mb-10"
            src="/img/title-game-intro-01.svg"
            alt=""
          />
        </div>
        <div class="mb-8 text-center">
          <img width="450" class="mx-auto" src="/img/title-game.svg" alt="" />
        </div>
        <div class="flex flex-wrap items-center justify-center gap-5">
          <div
            class="border-e border-kv-green px-5 py-1 pe-5 text-[50px] font-black text-kv-green"
          >
            #十在好玩
          </div>
          <div class="font-black md:text-[20px]">
            各大知名品牌帶來寓教於樂、全家共玩的親子活動，<br />
            一起享受闖關集章、學習知識，共度好時光！
          </div>
        </div>
        <div class="mb-5 grid grid-cols-2 py-10 md:grid-cols-3 md:gap-8">
          <div
            class="game-ite group relative rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="overflow-hidden">
              <span
                class="intro absolute inset-0 z-10 bg-white px-3 pb-3 pt-10 transition-opacity duration-300"
                :class="isHovered ? 'opacity-100' : 'opacity-0'"
              >
                文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
              </span>
              <img
                class="rounded-tl-2xl transition-opacity duration-300"
                :class="isHovered ? 'opacity-0' : 'opacity-100'"
                src="/img/gift_01.png"
                alt=""
              />
            </div>
            <span
              class="absolute -end-3 -top-3 z-10 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
          <div
            class="game-ite group relative rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="overflow-hidden">
              <span
                class="intro absolute inset-0 z-10 bg-white px-3 pb-3 pt-10 transition-opacity duration-300"
                :class="isHovered ? 'opacity-100' : 'opacity-0'"
              >
                文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
              </span>
              <img
                class="rounded-tl-2xl transition-opacity duration-300"
                :class="isHovered ? 'opacity-0' : 'opacity-100'"
                src="/img/gift_01.png"
                alt=""
              />
            </div>
            <span
              class="absolute -end-3 -top-3 z-10 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
          <div
            class="game-ite group relative rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="overflow-hidden">
              <span
                class="intro absolute inset-0 z-10 bg-white px-3 pb-3 pt-10 transition-opacity duration-300"
                :class="isHovered ? 'opacity-100' : 'opacity-0'"
              >
                文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
              </span>
              <img
                class="rounded-tl-2xl transition-opacity duration-300"
                :class="isHovered ? 'opacity-0' : 'opacity-100'"
                src="/img/gift_01.png"
                alt=""
              />
            </div>
            <span
              class="absolute -end-3 -top-3 z-10 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-5">
          <div
            class="border-e border-primary-500 px-5 py-1 pe-5 text-[45px] text-[50px] font-black text-primary-500"
          >
            #十在好食
          </div>
          <div class="font-black md:text-[20px]">
            小農市集一起來到野餐日！<br />
            產地直送有機蔬果及加工品一次購足，走走逛逛更要吃好、吃健康！
          </div>
        </div>
        <div class="mb-5 grid grid-cols-2 py-10 md:grid-cols-3 md:gap-8">
          <div
            class="game-ite group relative rounded-tl-2xl bg-white p-3 shadow-md"
            v-for="(item, index) in giftItems"
            :key="index"
          >
            <div class="overflow-hidden">
              <span
                class="intro absolute inset-0 z-10 bg-white px-3 pb-3 pt-10 transition-opacity duration-300"
                :class="isHovered ? 'opacity-100' : 'opacity-0'"
              >
                文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
              </span>
              <img
                class="rounded-tl-2xl transition-opacity duration-300"
                :class="isHovered ? 'opacity-0' : 'opacity-100'"
                :src="`${imagePath}/game-02/${index + 1 < 10 ? '0' + (index + 1) : index + 1}.jpg`"
                alt=""
              />
            </div>
            <span
              class="absolute -end-3 -top-3 z-10 inline-block w-full max-w-[250px] rounded-tr-xl bg-primary-500 px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
          <div
            class="game-ite group relative rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="overflow-hidden">
              <span
                class="intro absolute inset-0 z-10 bg-white px-3 pb-3 pt-10 transition-opacity duration-300"
                :class="isHovered ? 'opacity-100' : 'opacity-0'"
              >
                文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
              </span>
              <img
                class="rounded-tl-2xl transition-opacity duration-300"
                :class="isHovered ? 'opacity-0' : 'opacity-100'"
                src="/img/gift_01.png"
                alt=""
              />
            </div>
            <span
              class="absolute -end-3 -top-3 z-10 inline-block w-full max-w-[250px] rounded-tr-xl bg-primary-500 px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
          <div
            class="game-ite group relative rounded-tl-2xl bg-white p-3 shadow-md"
          >
            <div class="overflow-hidden">
              <span
                class="intro absolute inset-0 z-10 bg-white px-3 pb-3 pt-10 transition-opacity duration-300"
                :class="isHovered ? 'opacity-100' : 'opacity-0'"
              >
                文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹
              </span>
              <img
                class="rounded-tl-2xl transition-opacity duration-300"
                :class="isHovered ? 'opacity-0' : 'opacity-100'"
                src="/img/gift_01.png"
                alt=""
              />
            </div>
            <span
              class="absolute -end-3 -top-3 z-10 inline-block w-full max-w-[250px] rounded-tr-xl bg-primary-500 px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
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
                <img src="/img/ticket-01.svg" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- <div
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
        </div> -->
      </div>
      <span class="absolute -bottom-[45px] start-0">
        <img class="w-full" src="/img/bg-green-line-b.svg" alt="" />
      </span>
    </div>
    <div id="game-02" class="bg-yellow">
      <div class="container py-16">
        <div class="mb-3 text-center">
          <img width="450" class="mx-auto" src="/img/title-gift.svg" alt="" />
        </div>
        <div class="mb-8 text-center font-black">
          <div>只要集滿10個闖關印章，就能兌換抽獎券</div>
          <div>超過50個好禮獎項，幸運兒就是你！</div>
        </div>
        <div class="mb-8 grid grid-cols-2 items-stretch gap-8 md:grid-cols-3">
          <div
            v-for="(item, index) in lotteryList"
            :key="index"
            class="gift-item relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <div class="relative mb-3 text-white">
              <span
                class="absolute start-0 top-0 inline-block h-full w-full scale-95 rounded-tl-xl rounded-tr-xl border border-white"
              >
              </span>
              <img
                class="aspect-6/4 h-[200px] w-full object-cover"
                :src="`${imagePath}/lottery/${item.id}`"
                alt="w-full"
              />
            </div>
            <div class="mb-3 px-3">
              <div class="mb-1 font-semibold text-primary-500">
                {{ item.brand }}
              </div>
              <h2 class="text-xl font-semibold text-primary-500">
                {{ item.name }}
              </h2>
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
