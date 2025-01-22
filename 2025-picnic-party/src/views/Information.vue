<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { useLoading } from '../composables/useLoading'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Navigation } from 'swiper/modules'

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  gsap.registerPlugin(ScrollTrigger)

  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
  })

  const faqList = [
    {
      q: '請問報名資格為何？需要費用嗎？',
      a: '舉凡親子家庭皆可參加；活動報名每組家庭899元整，三組優惠價2,299元整再送精選圖書。'
    },
    {
      q: '一定要報名才可以參加嗎？有實體票券嗎？',
      a: '為提供優質的活動品質，活動前開放網站事先報名。報名成功後，會收到訂單成立信件，無提供實體票券。活動前將會發送提醒簡訊至您報名資料填寫的手機，活動當天憑簡訊即可至現場報到區領取贈品喔！'
    },
    {
      q: '有名額限制嗎？',
      a: '2,000組親子家庭額滿為止。野餐日當天現場多項活動皆開放參與，歡迎攜家帶眷體驗野餐樂趣。'
    },
    {
      q: '可攜伴參加嗎？',
      a: '可攜伴，不限人數，歡迎全家大小一起來參加（注意：一組家庭/一筆訂單，僅能領取一份贈品及一張闖關卡，完成闖關後可兌換一張抽獎券）'
    },
    {
      q: '主辦單位有提供食物嗎？要帶什麼呢？',
      a: '大會活動僅提供福袋禮、早鳥禮及抽獎禮之品項，並無提供野餐食物，若有需要可以自行攜帶。抽獎活動之得獎者須要出示身分證，請記得攜帶！其餘物品大會建議攜帶環保袋、野餐墊、水等，以及開心玩樂的心情！'
    },
    {
      q: '無付費報名的民眾可以參與嗎？現場可報名嗎？',
      a: '無付費報名的民眾現場無法參與闖關及抽獎。來不及事先報名者，可於當天至報到處現場付費報名，但需依實際銷售狀況為主，若門票已售罄，主辦單位可不受理現場報名。'
    },
    {
      q: '我無法準時到場，可以請親友代為領取贈品嗎？',
      a: '領取贈品皆以報名簡訊為依據，簡訊會發至您在報名時所填寫的聯絡手機，只要有簡訊，請同行友人代為領取也可以喔。(提醒您！一封簡訊僅限領取一次贈品)'
    },
    {
      q: '抽獎項兌領注意事項為何？',
      a: '得獎者須於摸彩時由本人在場領取，逾時視同放棄。得獎者請務必出示身分證！獎品金額在新臺幣20,000元（含）以上之得獎者，領取獎品時請出示身份證、健保卡或駕照等雙證件，否則視同棄權。現場摸彩獎品將依中華民國稅法規定扣抵所得稅。凡得獎者之獎金超過新臺幣20,000元（含）以上者，須負擔10%之所得稅；外籍人士則須負擔20%。'
    },
    {
      q: '報名繳費後，因故不克參加可退費嗎？',
      a: '報名繳費後，因故不克參加者，請於4/19(五)前提出，主辦單位將扣除30%手續費後予以退費，4/20(六)起取消者恕無法退費。若活動前一週內因天候等不可抗力因素延期，請配合主辦單位公告之延期日期，恕不退費。'
    },
    {
      q: '活動因故延期如何因應？',
      a: '如有調整，將於活動前 3 天於【本活動網頁】公告並以電子郵件或簡訊通知。'
    },
    {
      q: '我還有其它疑問，不在網站的Q/A裡，請問我可以怎麼辦？',
      a: '有任何疑問，歡迎您撥打服務專線(02)2662-0012（週一到週五9:00~12:30 ; 13:30~17:00），將有專人為您解答。'
    }
  ]

  const sportList = [
    {
      src: 'https://imgs.cwgv.com.tw/articles/27/31227/preview/31227.png',
      title:
        '掌握3原則，讓孩子放下手機，親近自然》華德福戶外引導師：玩，是看起來不像學習的學習',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/31227'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/19/16519/preview/16519.png',
      title:
        '不用花大錢的學習就在日常生活與大自然裡，而我們是否錯過了這份珍貴的成長禮物呢？',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/16519'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/67/11867/preview/11867.png',
      title: '理論與效益：戶外教育4大效益、10項學習成果',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/11867'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/00/11900/preview/11900.png',
      title: '好山好水好激勵，登山運動互相扶持，凝聚親子情',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/11900'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/17/3617/preview/3617.png',
      title: '翻轉教室學習模式〉帶孩子走向戶外， 知識才會貼近生活',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/3617'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/87/1987/preview/1987.png',
      title: '上山下海就是最棒的自然課',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/1987'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/85/13985/preview/13985.png',
      title:
        '戶外活動不僅提升了孩子的感覺統合，更有助於孩子的創造能力及問題解決的能力',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/13985'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/28/11928/preview/11928.png',
      title:
        '瑞典戶外教育家：只坐在教室裡學習，就像讀食譜書卻無法烹煮品嚐食物一樣',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/11928'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/30/5330/preview/5330.png',
      title: '探索自然，和家人共度美好時光',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/5330'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/88/29088/preview/29088.png',
      title:
        '孩子太宅、不愛運動？念體育系的心理師、三寶爸張榮斌分享4招，輕鬆培養運動好習慣',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/29088'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/17/18917/preview/18917.png',
      title:
        '天氣這麼熱，孩子喝的水就夠多了嗎? 兒醫：若5、6個小時沒有上廁所，就代表孩子是缺水了',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/18917'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/39/7839/preview/7839.png',
      title: '戶外運動是預防近視的防護罩 孩子其實可以不近視！',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/7839'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/43/6243/preview/6243.png',
      title:
        '孩子睡不好又多夢？白天多曬太陽、運動，晚上泡腳，可改善睡眠品質、提升學習專注力',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/6243'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/85/28285/preview/28285.png',
      title:
        '近視率飆升的原因是什麼》看太多電視電腦、玩手機太久？並不是！為了保健視力，兒童每天需要約３小時處於日照下',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/28285'
    }
  ]

  const familyList = [
    {
      src: 'https://imgs.cwgv.com.tw/articles/33/4733/preview/4733.png',
      title:
        '想要有良好的親子關係，就像任何關係一樣，需要時間培養——傾聽孩子的小事、全心全意地陪伴、疼愛但不溺愛....',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/4733'
    },
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
      src: 'https://imgs.cwgv.com.tw/articles/85/32385/preview/32385.png',
      title:
        '「匆忙孩子症候群」可能引發身心問題！心理師：家長不要把小孩的時間排滿滿，讓孩子的成長失去喘息的空間',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/32385'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/38/32138/preview/32138.png',
      title: '不再快樂！台灣兒少幸福指數創新低 兒盟調查：遠低國際水準',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/32138'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/23/14023/preview/14023.png',
      title:
        '孩子最好的玩具就是他們的雙手，而不是手機或電視機，讓孩子用雙手盡情探索世界',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/14023'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/54/4154/preview/4154.png',
      title:
        '比起賺更多錢，送孩子補習或學才藝， 父母選擇花更多時間和心力陪伴，更能養出知足快樂的孩子',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/4154'
    }
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
      src: 'https://imgs.cwgv.com.tw/articles/25/14125/preview/14125.png',
      title: '共食、共玩到共學：從食物入手，加深感情的凝聚力',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/14125'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/24/14724/preview/14724.png',
      title: '餐桌教養：生活中實踐飲食教育的10種方法',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/14724'
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
      src: 'https://imgs.cwgv.com.tw/articles/12/32412/preview/32412.png',
      title:
        '高職學什麼》電機與電子群-冷凍空調科：節能環保趨勢下，就業前景看好；所學離不開「電」，數理能力要好',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/32412'
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
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/32/29232/preview/29232.png',
      title:
        '冷氣不冷怎麼辦？高雄市福山國小，將能源議題融入教學，引導孩子思考「我們與碳的距離」',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/29232'
    },
    {
      src: 'https://imgs.cwgv.com.tw/articles/24/29324/preview/29324.png',
      title:
        '不只關懷地球生態，更延伸物種關聯、媒體識讀！龍山國中「北極熊怎麼了」教出有思辨能力的孩子',
      link: 'https://futureparenting.cwgv.com.tw/family/content/index/29324'
    }
  ]
</script>
<template>
  <div>
    <Header>
      <router-link to="/">
        <img src="/img/kv-article.svg" alt="" width="650" />
      </router-link>
    </Header>

    <div class="bg-green">
      <div class="container py-16">
        <div class="mb-8 text-center">
          <img class="mx-auto" width="300" src="/img/title-game.svg" alt="" />
          <div class="mt-4">
            未來親子精心挑選四大主題文章，<br />
            讓我們與爸爸媽媽站在一起，陪伴孩子快樂成長，<br />
            最專業的教養好文都在這！
          </div>
        </div>
        <div class="flex flex-col items-center gap-5">
          <div class="grid grid-cols-2 gap-5 md:grid-cols-4">
            <a href="#">
              <img src="/img/article-icon-01.svg" alt="" />
            </a>
            <a href="#">
              <img src="/img/article-icon-02.svg" alt="" />
            </a>
            <a href="#">
              <img src="/img/article-icon-03.svg" alt="" />
            </a>
            <a href="#">
              <img src="/img/article-icon-04.svg" alt="" />
            </a>
            <!-- <a
              href="#"
              class="scroll-animate-zoomIn rounded-full bg-kv-green px-5 py-1 text-xl font-bold text-white"
            >
              #運動學習力
            </a>
            <a
              class="scroll-animate-zoomIn rounded-full bg-kv-yellow px-5 py-1 text-xl font-bold text-white"
            >
              #家庭陪伴力
            </a>
            <a
              class="scroll-animate-zoomIn rounded-full bg-kv-green px-5 py-1 text-xl font-bold text-white"
            >
              #永續執行力
            </a>
            <a
              class="scroll-animate-zoomIn rounded-full bg-kv-yellow px-5 py-1 text-xl font-bold text-white"
            >
              #野餐玩樂力
            </a> -->
          </div>
        </div>
        <div class="py-10">
          <div
            class="scroll-animate-fadeInUp mb-4 text-center text-4xl font-black text-primary-500"
          >
            #運動學習力
          </div>
          <swiper
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
              v-for="(item, index) in sportList"
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
                  class="relative -start-0 bottom-0 inline-block w-[calc(100%+30px)] rounded-tr-xl bg-kv-green px-2 py-1.5 text-left font-bold tracking-wide text-white"
                >
                  {{ item.title }}
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
        <div class="py-10">
          <div
            class="scroll-animate-fadeInUp mb-4 text-center text-4xl font-black text-kv-green"
          >
            #家庭陪伴力
          </div>
          <swiper
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
              v-for="(item, index) in familyList"
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
                  class="relative -start-0 bottom-0 inline-block w-[calc(100%+30px)] rounded-tr-xl bg-kv-green px-2 py-1.5 text-left font-bold tracking-wide text-white"
                >
                  {{ item.title }}
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
        <div class="py-10">
          <div
            class="scroll-animate-fadeInUp mb-4 text-center text-4xl font-black text-primary-500"
          >
            #永續執行力
          </div>
          <swiper
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
              v-for="(item, index) in sustainableList"
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
                  class="relative -start-0 bottom-0 inline-block w-[calc(100%+30px)] rounded-tr-xl bg-kv-green px-2 py-1.5 text-left font-bold tracking-wide text-white"
                >
                  {{ item.title }}
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
        <div class="py-10">
          <div
            class="scroll-animate-fadeInUp mb-4 text-center text-4xl font-black text-kv-green"
          >
            #野餐玩樂力
          </div>
          <!-- <Swiper :swiperItems="funList" :className="`bg-kv-green`" /> -->
          <swiper
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
                  class="relative -start-0 bottom-0 inline-block w-[calc(100%+30px)] rounded-tr-xl bg-kv-green px-2 py-1.5 text-left font-bold tracking-wide text-white"
                >
                  {{ item.title }}
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>

        <div
          class="mt-20 flex w-full flex-wrap items-center justify-center gap-16"
        >
          <ButtonJoin :title="'報名野餐日'" />
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
    </div>
  </div>
</template>
