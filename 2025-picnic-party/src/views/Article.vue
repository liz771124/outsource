<script setup>
  import { onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { scrollToElement } from '../../utils/scrollToElement'
  import ArticleItem from '../components/ArticleItem.vue'

  gsap.registerPlugin(ScrollTrigger)

  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
  })

  const sportList = [
    {
      src: 'https://imgs.cwgv.com.tw/articles/19/16519/preview/16519.png',
      title:
        '不用花大錢的學習就在日常生活與大自然裡，而我們是否錯過了這份珍貴的成長禮物呢？',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/16519'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/27/31227/preview/31227.png',
      title:
        '掌握3原則，讓孩子放下手機，親近自然》華德福戶外引導師：玩，是看起來不像學習的學習',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/31227'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/67/11867/preview/11867.png',
      title: '理論與效益：戶外教育4大效益、10項學習成果',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/11867'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/17/3617/preview/3617.png',
      title: '翻轉教室學習模式〉帶孩子走向戶外， 知識才會貼近生活',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/3617'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/88/29088/preview/29088.png',
      title:
        '孩子太宅、不愛運動？念體育系的心理師、三寶爸張榮斌分享4招，輕鬆培養運動好習慣',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/29088'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/85/28285/preview/28285.png',
      title:
        '近視率飆升的原因是什麼》看太多電視電腦、玩手機太久？並不是！為了保健視力，兒童每天需要約３小時處於日照下',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/28285'
    }
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/00/11900/preview/11900.png',
    //   title: '好山好水好激勵，登山運動互相扶持，凝聚親子情',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/11900'
    // },
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/87/1987/preview/1987.png',
    //   title: '上山下海就是最棒的自然課',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/1987'
    // }
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/85/13985/preview/13985.png',
    //   title:
    //     '戶外活動不僅提升了孩子的感覺統合，更有助於孩子的創造能力及問題解決的能力',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/13985'
    // },
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/28/11928/preview/11928.png',
    //   title:
    //     '瑞典戶外教育家：只坐在教室裡學習，就像讀食譜書卻無法烹煮品嚐食物一樣',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/11928'
    // },
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/30/5330/preview/5330.png',
    //   title: '探索自然，和家人共度美好時光',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/5330'
    // },

    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/17/18917/preview/18917.png',
    //   title:
    //     '天氣這麼熱，孩子喝的水就夠多了嗎? 兒醫：若5、6個小時沒有上廁所，就代表孩子是缺水了',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/18917'
    // },
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/39/7839/preview/7839.png',
    //   title: '戶外運動是預防近視的防護罩 孩子其實可以不近視！',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/7839'
    // },
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/43/6243/preview/6243.png',
    //   title:
    //     '孩子睡不好又多夢？白天多曬太陽、運動，晚上泡腳，可改善睡眠品質、提升學習專注力',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/6243'
    // },
  ]

  const familyList = [
    {
      src: 'https://imgs.cwgv.com.tw/articles/57/27957/preview/27957.png',
      title:
        '小時候的旅行，成為孩子長大後的養分；陳培瑜曾請假一週，帶建中兒去環島，讓大自然和美好回憶成為孩子的力量',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/27957'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/28/4328/preview/4328.png',
      title: '孩子的快樂是來自於父母的陪伴，而非錢花了多少',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/4328'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/61/5261/preview/5261.png',
      title: '其實，孩子願望比你想像的簡單',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/5261'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/96/32396/preview/32396.png',
      title:
        '長大後，孩子對家的記憶是什麼？6方法打造家的「記憶存摺」，養出懂愛、有幸福感的孩子',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/32396'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/54/23854/preview/23854.png',
      title:
        '允許孩子玩樂》「玩」是童年重要的事，爸媽應該鼓勵孩子出去玩耍，懂玩的孩子更懂得生存',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/23854'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/23/14023/preview/14023.png',
      title:
        '孩子最好的玩具就是他們的雙手，而不是手機或電視機，讓孩子用雙手盡情探索世界',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/14023'
    }

    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/33/4733/preview/4733.png',
    //   title:
    //     '想要有良好的親子關係，就像任何關係一樣，需要時間培養——傾聽孩子的小事、全心全意地陪伴、疼愛但不溺愛....',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/4733'
    // },

    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/85/32385/preview/32385.png',
    //   title:
    //     '「匆忙孩子症候群」可能引發身心問題！心理師：家長不要把小孩的時間排滿滿，讓孩子的成長失去喘息的空間',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/32385'
    // }
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/38/32138/preview/32138.png',
    //   title: '不再快樂！台灣兒少幸福指數創新低 兒盟調查：遠低國際水準',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/32138'
    // },

    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/54/4154/preview/4154.png',
    //   title:
    //     '比起賺更多錢，送孩子補習或學才藝， 父母選擇花更多時間和心力陪伴，更能養出知足快樂的孩子',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/4154'
    // }
  ]

  const funList = [
    {
      src: 'https://imgs.cwgv.com.tw/articles/20/30620/preview/30620.png',
      title:
        '2024未來親子野餐日 盛大登場！闖關互動寓教於樂 國際級表演趣味精彩 千組家庭歡度周末 一起幸福Fun滿滿！',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/30620'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/52/27452/preview/27452.png',
      title:
        '全台最盛大！【未來親子野餐日】上千組家庭草地曬幸福，闔家同樂趣味闖關比食力',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/27452'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/18/20018/preview/20018.png',
      title:
        '2020未來親子野餐日：全台最盛大的「知識型野餐派對」， 萬人熱情參與，用食育打造幸福家庭時光！',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/20018'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/56/16556/preview/16556.png',
      title:
        '2019未來親子野餐日前進高雄囉！食育嘉年華，全家大小嗨翻天、親子食育課，吃出孩子好未來！',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/16556'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/82/14382/preview/14382.png',
      title: '2019未來親子萬人綠地野餐，吃出孩子好未來！',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/14382'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/32/11132/preview/11132.png',
      title: '2018未來親子野餐日 8,000大手小手歡聚台中市民廣場',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/11132'
    }
  ]

  const sustainableList = [
    {
      src: 'https://imgs.cwgv.com.tw/articles/26/14126/preview/14126.png',
      title: '從產地到餐桌：了解食物來源和生長環境，學會惜福感恩',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/14126'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/29/23229/preview/23229.png',
      title:
        '孩子愛挑食、不喜歡吃青菜？台南官田國小的食農教育，翻轉孩子愛上健康飲食',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/23229'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/65/10065/preview/10065.png',
      title: '健康教養術：從農場到餐桌的胡蘿蔔',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/10065'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/53/26753/preview/26753.png',
      title:
        '從生活中落實SDGs》關懷無家者，建中學生從種菜到料理，自製餐點送餐到北車，強調「真心款待」',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/26753'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/02/32302/preview/32302.png',
      title:
        '石虎保育可以這樣做！農業部聯手家樂福，用友善石虎山蕉為石虎保育打前鋒，邁向ESG永續新世代',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/32302'
    },

    {
      src: 'https://imgs.cwgv.com.tw/articles/11/27511/preview/27511.png',
      title: '打造SDGs幸福城市：從永續教育開始！新北特色學校帶給孩子們新未來',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/27511'
    }

    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/25/14125/preview/14125.png',
    //   title: '共食、共玩到共學：從食物入手，加深感情的凝聚力',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/14125'
    // },
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/24/14724/preview/14724.png',
    //   title: '餐桌教養：生活中實踐飲食教育的10種方法',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/14724'
    // },
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/12/32412/preview/32412.png',
    //   title:
    //     '高職學什麼》電機與電子群-冷凍空調科：節能環保趨勢下，就業前景看好；所學離不開「電」，數理能力要好',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/32412'
    // }
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/32/29232/preview/29232.png',
    //   title:
    //     '冷氣不冷怎麼辦？高雄市福山國小，將能源議題融入教學，引導孩子思考「我們與碳的距離」',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/29232'
    // },
    // {
    //   src: 'https://imgs.cwgv.com.tw/articles/24/29324/preview/29324.png',
    //   title:
    //     '不只關懷地球生態，更延伸物種關聯、媒體識讀！龍山國中「北極熊怎麼了」教出有思辨能力的孩子',
    //   link: 'https://futureparenting.cwgv.com.tw/family/content/index/29324'
    // }
  ]
</script>
<template>
  <div>
    <Header>
        <img src="/img/kv-article.svg" alt="" width="650" />
      <span
        class="absolute right-3 top-0 z-10 w-[80px] md:-right-16 md:top-24 md:w-[150px]"
      >
        <img src="/img/kv-main-img.svg" alt="" width="150" />
      </span>
    </Header>

    <div class="bg-green">
      <div class="container py-16">
        <div class="mb-8 text-center">
          <img class="mx-auto" src="/img/title-article.svg" alt="" />
        </div>
        <div class="text-center text-[20px] font-black">
          <div>未來親子精選四大主題文章</div>
          <div>透過專業實用的教養好文</div>
          <div>為生活增添質地</div>
          <div>讓爸媽與孩子共創永續而美好的家庭回憶！</div>
        </div>
        <div class="mt-10 flex flex-col items-center gap-5">
          <div class="grid grid-cols-2 gap-5 md:grid-cols-4">
            <div
              class="animate-bounceFloat cursor-pointer"
              @click="scrollToElement('article-01')"
            >
              <img src="/img/article-icon-01.svg" alt="" />
            </div>
            <div
              class="animate-bounceFloat cursor-pointer"
              @click="scrollToElement('article-02')"
            >
              <img src="/img/article-icon-02.svg" alt="" />
            </div>
            <div
              class="animate-bounceFloat cursor-pointer"
              @click="scrollToElement('article-03')"
            >
              <img src="/img/article-icon-03.svg" alt="" />
            </div>
            <div
              class="animate-bounceFloat cursor-pointer"
              @click="scrollToElement('article-04')"
            >
              <img src="/img/article-icon-04.svg" alt="" />
            </div>
          </div>
        </div>
        <div id="article-01" class="py-5 md:py-10">
          <div
            class="scroll-animate-fadeInUp mb-4 text-center text-[35px] font-black text-primary-500 md:text-[45px]"
          >
            #運動學習力
          </div>
          <div class="grid gap-3 md:grid-cols-3 md:gap-8">
            <ArticleItem :list="sportList" :className="`bg-primary-500`" />
          </div>
        </div>
        <div id="article-02" class="py-5 md:py-10">
          <div
            class="scroll-animate-fadeInUp mb-4 text-center text-[35px] font-black text-kv-green md:text-[45px]"
          >
            #家庭陪伴力
          </div>
          <div class="grid gap-3 md:grid-cols-3 md:gap-8">
            <ArticleItem :list="familyList" :className="`bg-primary-500`" />
          </div>
        </div>
        <div id="article-03" class="py-5 md:py-10">
          <div
            class="scroll-animate-fadeInUp mb-4 text-center text-[35px] font-black text-primary-500 md:text-[45px]"
          >
            #永續執行力
          </div>
          <div class="grid gap-3 md:grid-cols-3 md:gap-8">
            <ArticleItem
              :list="sustainableList"
              :className="`bg-primary-500`"
            />
          </div>
        </div>
        <div id="article-04" class="py-5 md:py-10">
          <div
            class="scroll-animate-fadeInUp mb-4 text-center text-[35px] font-black text-kv-green md:text-[45px]"
          >
            #野餐玩樂力
          </div>
          <div class="grid gap-3 md:grid-cols-3 md:gap-8">
            <ArticleItem :list="funList" :className="`bg-kv-green`" />
          </div>
          <!-- <Swiper :swiperItems="funList" :className="`bg-kv-green`" /> -->
          <!-- <swiper
            :spaceBetween="20"
            :slides-per-view="isMobile ? 1.4 : 3"
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
            <swiper-slide
              v-for="(item, index) in funList"
              :key="index"
              class="scroll-animate-fadeInUp ms:p-2.5 animate-slideIn px-1 pb-5"
            >
              <a
                :href="item.link"
                target="_blank"
                class="relative block rounded-tl-2xl bg-white px-3 pt-3 shadow-lg"
              >
                <div class="flex flex-col">
                  <div class="mb-3">
                    <img
                      class="rounded-tl-2xl"
                      :src="item.src"
                      :alt="item.title"
                    />
                  </div>
                </div>
                <div
                  class="relative -start-0 -bottom-3 inline-block w-[calc(100%+30px)] rounded-tr-xl bg-kv-green px-2 py-1.5 text-left font-bold tracking-wide text-white"
                >
                  {{ item.title }}
                </div>
              </a>
            </swiper-slide>
          </swiper> -->
        </div>

        <div
          class="mt-5 flex w-full flex-wrap items-center justify-center gap-16"
        >
          <ButtonJoin />
        </div>
        <div
          class="mb-10 mt-5 flex w-full flex-wrap items-center justify-center gap-16"
        >
          <a
            href="#"
            class="inline-flex items-center gap-3 rounded-full bg-primary-500 px-8 py-2 text-2xl font-bold text-white"
          >
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
              <path
                d="M37.5832 28.5976V7.97797C37.5832 5.92797 35.909 4.40756 33.8761 4.57839H33.7736C30.1861 4.88589 24.7365 6.71381 21.6957 8.62714L21.4053 8.81506C20.9098 9.12256 20.0898 9.12256 19.5944 8.81506L19.1673 8.55881C16.1265 6.66256 10.694 4.85172 7.1065 4.56131C5.07359 4.39047 3.4165 5.92797 3.4165 7.96089V28.5976C3.4165 30.2376 4.749 31.7751 6.389 31.9801L6.88442 32.0484C10.5915 32.5438 16.3144 34.423 19.5944 36.2167L19.6628 36.2509C20.124 36.5071 20.8586 36.5071 21.3028 36.2509C24.5828 34.4401 30.3228 32.5438 34.0469 32.0484L34.6107 31.9801C36.2507 31.7751 37.5832 30.2376 37.5832 28.5976Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5 9.37891V35.0039"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.2397 14.5039H9.396"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.521 19.6289H9.396"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            看更多好文
          </a>
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
  </div>
</template>
