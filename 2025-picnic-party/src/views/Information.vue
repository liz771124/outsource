<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

  const imagesTest = Object.fromEntries(
    Object.entries(
      import.meta.glob('@/assets/img/*.{jpg,png}', { eager: true })
    ).map(([path, module]) => [
      path.split('/').pop().split('.')[0],
      module.default
    ])
  )

  const images = [
    {
      src: 'show-01.jpg',
      title: '文章名稱文章名稱章名稱文章名稱',
      link: '#'
    },
    {
      src: 'show-01.jpg',
      title: '文章名稱文章名稱文章名稱文章名稱文章名稱文章名稱文章名稱文章名稱',
      link: '#'
    },
    {
      src: 'show-01.jpg',
      title: '文章名稱文章名稱文章名稱文章名稱文章名稱文章名稱文章名稱',
      link: '#'
    },
    {
      src: 'show-01.jpg',
      title: '文章名稱文章名稱文章名稱文',
      link: '#'
    },
    {
      src: 'show-01.jpg',
      title:
        '文章名稱文章名稱文章名稱文章名稱文章名稱文章名稱文章名稱名稱文章名稱文章名稱文',
      link: '#'
    }
  ]
</script>
<template>
  <div>
    <Header />

    <div class="bg-green">
      <div class="container py-16">
        <div class="mb-8 text-center">
          <img class="mx-auto" width="300" src="/img/title-game.png" alt="" />
          <div class="mt-4">
            未來親子精心挑選四大主題文章，<br />
            讓我們與爸爸媽媽站在一起，陪伴孩子快樂成長，<br />
            最專業的教養好文都在這！
          </div>
        </div>
        <div class="flex flex-col items-center gap-5">
          <div class="grid grid-cols-2 gap-5 md:grid-cols-4">
            <a
            href="#"
              class="rounded-full bg-kv-green px-5 py-1 text-xl font-bold text-white"
            >
              #運動學習力
            </a>
            <a
              class="rounded-full bg-kv-yellow px-5 py-1 text-xl font-bold text-white"
            >
              #家庭陪伴力
            </a>
            <a
              class="rounded-full bg-kv-green px-5 py-1 text-xl font-bold text-white"
            >
              #永續執行力
            </a>
            <a
              class="rounded-full bg-kv-yellow px-5 py-1 text-xl font-bold text-white"
            >
              #野餐玩樂力
            </a>
          </div>
        </div>
        <div class="py-10">
          <div class="mb-4 text-center text-3xl font-bold text-primary-500">
            #運動學習力
          </div>
          <Swiper :swiperItems="images" :className="`bg-kv-yellow`" />
        </div>
        <div class="py-10">
          <div class="mb-4 text-center text-3xl font-bold text-kv-green">
            #家庭陪伴力
          </div>
          <Swiper :swiperItems="images" :className="`bg-kv-green`" />
        </div>
        <div class="py-10">
          <div class="mb-4 text-center text-3xl font-bold text-primary-500">
            #永續執行力
          </div>
          <Swiper :swiperItems="images" :className="`bg-kv-yellow`" />
        </div>
        <div class="py-10">
          <div class="mb-4 text-center text-3xl font-bold text-kv-green">
            #野餐玩樂力
          </div>
          <Swiper :swiperItems="images" :className="`bg-kv-green`" />
        </div>

        <div class="mt-20 flex w-full items-center justify-center gap-16">
          <ButtonJoin :title="'看更多好文'" />
          <ButtonJoin :title="'報名野餐日'" />
        </div>
      </div>
    </div>
  </div>
</template>
