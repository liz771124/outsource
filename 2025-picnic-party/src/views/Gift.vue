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

  const giftList = [
    {
      name: '澎澄飯店',
      image:
        'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
      room: 'CookieRun 薑餅人主題房',
      note: '(加贈一位12歲以下兒童入住+開房禮)',
      description:
        '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
      price: '$11,880 / 2名'
    },
    {
      name: '澎澄飯店',
      image:
        'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
      room: 'CookieRun 薑餅人主題房',
      note: '(加贈一位12歲以下兒童入住+開房禮)',
      description:
        '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
      price: '$11,880 / 2名'
    },
    {
      name: '澎澄飯店',
      image:
        'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
      room: 'CookieRun 薑餅人主題房',
      note: '(加贈一位12歲以下兒童入住+開房禮)',
      description:
        '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
      price: '$11,880 / 2名'
    },
    {
      name: '澎澄飯店',
      image:
        'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
      room: 'CookieRun 薑餅人主題房',
      note: '(加贈一位12歲以下兒童入住+開房禮)',
      description:
        '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
      price: '$11,880 / 2名'
    },
    {
      name: '澎澄飯店',
      image:
        'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
      room: 'CookieRun 薑餅人主題房',
      note: '(加贈一位12歲以下兒童入住+開房禮)',
      description:
        '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
      price: '$11,880 / 2名'
    },
    {
      name: '澎澄飯店',
      image:
        'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
      room: 'CookieRun 薑餅人主題房',
      note: '(加贈一位12歲以下兒童入住+開房禮)',
      description:
        '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
      price: '$11,880 / 2名'
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

    // 📌 1. 滑入畫面時，所有 item 依序由下而上淡入
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

    // 📌 2. 單一 item 滑入時彈跳放大縮小效果
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
    setFaqListItem()
    setGiftListItem()
  })
</script>

<template>
  <div>
    <Header />
    <div class="container">
      <div>
        <img class="mx-auto" src="/img/play_9.png" alt="" />
      </div>
      <div id="accordionContainer">
        <div v-for="(item, index) in faqList" :key="index" class="">
          <h2 class="mb-0 border-b-4 border-primary-500" :id="`test-${index}`">
            <button
              class="group relative flex w-full items-center rounded-t-lg border-0 px-5 py-4 text-xl font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary-500 [&:not([data-twe-collapse-collapsed])]:shadow-border-b"
              type="button"
              data-twe-collapse-init
              :data-twe-target="`#collapse${index}`"
              aria-expanded="true"
              :aria-controls="`collapse${index}`"
            >
              {{ item.q }}

              <span
                class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            :id="`collapse${index}`"
            :class="`!visible ${index > 0 && 'hidden'}`"
            data-twe-collapse-item
            :data-twe-collapse-show="index === 0"
            :aria-labelledby="`test-${index}`"
            data-twe-parent="#accordionContainer"
          >
            <div class="font-lg px-5 py-4">
              {{ item.a }}
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-10 md:grid-cols-3">
        <div v-for="(item, index) in giftList" :key="index" class="gift-item">
          <div class="relative my-6 flex flex-col rounded-lg">
            <div class="relative mb-3 overflow-hidden rounded-md text-white">
              <img :src="item.image" alt="w-full" />
            </div>
            <div>
              <h2 class="mb-2 text-xl font-semibold">
                {{ item.name }}
              </h2>
              <div class="mb-3">
                {{ item.note }}
              </div>
              <div class="font-light leading-normal text-slate-600">
                {{ item.description }}
              </div>
              <div class="text-center text-xl font-bold text-primary-500">
                {{ item.price }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="my-6 flex max-w-96 flex-col rounded-lg border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div
          class="m-0 mb-8 border-b border-slate-200 pb-8 text-center text-slate-800"
        >
          <p class="text-sm font-semibold uppercase text-slate-500">standard</p>
          <h1
            class="text-6xl mt-4 flex justify-center gap-1 font-bold text-slate-800"
          >
            <span class="text-3xl">$</span>29
            <span class="self-end text-3xl">/mo</span>
          </h1>
        </div>
        <div class="p-0">
          <ul class="flex flex-col gap-4">
            <li class="flex items-center gap-4">
              <span
                class="rounded-full border border-slate-200 bg-slate-50 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-4 w-4 text-slate-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p class="text-slate-500">5 team members</p>
            </li>
            <li class="flex items-center gap-4">
              <span
                class="rounded-full border border-slate-200 bg-slate-50 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-4 w-4 text-slate-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p class="text-slate-500">200+ components</p>
            </li>
            <li class="flex items-center gap-4">
              <span
                class="rounded-full border border-slate-200 bg-slate-50 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-4 w-4 text-slate-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p class="text-slate-500">40+ built-in pages</p>
            </li>
            <li class="flex items-center gap-4">
              <span
                class="rounded-full border border-slate-200 bg-slate-50 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-4 w-4 text-slate-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p class="text-slate-500">1 year free updates</p>
            </li>
            <li class="flex items-center gap-4">
              <span
                class="rounded-full border border-slate-200 bg-slate-50 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-4 w-4 text-slate-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p class="text-slate-500">Life time technical support</p>
            </li>
          </ul>
        </div>
        <div class="mt-12 p-0">
          <button
            class="w-full min-w-32 rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div>
        <div class="txt-2xl mb-3 font-bold">如何到達？</div>
        <div class="text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3623542421947!2d121.47821782537727!3d25.05570482780247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8fac6152a05%3A0x3821847e329dcd64!2z5paw5YyX5aSn6YO95pyD5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1710127332403!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="txt-2xl mb-3 font-bold">新北大都會公園</div>
        <div class="map_p">地址:新北市三重區水漾路一段</div>

        <div class="txt-2xl mb-3 font-bold">捷運</div>
        <div class="map_p">1.捷運中和線三重站，1出口即可抵達。</div>
        <div class="map_p">2.機場捷運線A2三重站，從1A出口即可抵達</div>

        <div class="txt-2xl mb-3 font-bold">公車</div>
        <div class="map_p">1.捷運三重站:62、227區、232、264、640。</div>
        <div class="map_p">
          2.菜寮（重陽路）站:14、227、227區、232、292、292副、621、640、662、803、806、1212、忠孝幹線。
        </div>
        <div class="map_p">
          3.菜寮（重新路）站:14、62、111、227、264、292、616、622、636、638、639、801、803、820、857、1209、1803、9102、F301及忠孝幹線。
        </div>

        <div class="txt-2xl mb-3 font-bold">微笑單車</div>
        捷運三重站(3號出口)

        <div class="txt-2xl mb-3 font-bold">停車資訊(附近有多個付費停車場)</div>
        <div class="map_p">
          1.幸褔水漾停車場：新北市三重區重新橋北側自行車道與疏洪十六路交叉口
        </div>
        <div class="map_p">
          2.觀光市集北側停車場：新北市三重區重新橋北側/新莊堤外道路及疏洪十六路交叉口
        </div>
        <div class="map_p">
          3.觀光市集南側停車場：新北市三重區重新橋南側/新莊堤外道路與疏洪十六路交叉口
        </div>

        <div class="txt-2xl mb-3 font-bold">特別聲明</div>
        <div class="map_p">
          1.本活動網頁僅為報名用途，非現場各項活動預約報名。各攤位現場活動體驗因適合年齡及容納人數皆不同，以現場排隊指示為主。<br />

          2.主辦單位保有活動場地、時間、形式異動與解釋之權利，若有更改將另行通知。<br />

          3.參加本活動即同意無償授權主辦單位使用活動期間所拍攝之照片與影片，並運用刊登於主辦單位所發行之包括但不限於平面刊物、網站、部落格、Facebook粉絲專頁及相關社群平台、電子報、EDM等相關之行銷活動規劃。<br />

          4.參與對象以家庭(訂單)為單位，憑報到序號領取乙張闖關卡，若資料有重複者，將以時間序取第一次報名為主。<br />

          5.所有贈品及獎項以實物為準，如遇產品缺貨或其他不可抗力之事由，主辦單位得保留更換等值獎品之權利，不另行告知。<br />

          <div class="map_p">
            <div class="txt-2xl mb-3 font-bold">早鳥獎項</div>
            <div class="map_p">
              登記報名並於現場報到完成者，可獲得超值驚喜包一份，依網路報名先後順序取符合資格者，於活動網頁上公告得獎名單。
            </div>

            <div class="txt-2xl mb-3 font-bold">領取方式</div>
            <div class="map_p">
              1.早鳥報名得獎名單將於活動前一周公布在本網頁，敬請密切留意相關資訊。<br />

              2.活動當天攜帶官方發送之報到序號簡訊及身分證明文件報到完成，即可領取福袋禮(報到禮)。<br />

              ※若不符合參加資格，主辦單位有權取消得獎資格，獎項不後補，不得異議。<br />
            </div>

            <div class="txt-2xl mb-3 font-bold">現場舞台抽獎</div>
            <div class="map_p">
              1.活動現場將提供：一個家庭(一筆訂單)一張闖關卡，合計2,000張供索取，發完為止。<br />

              2.須依闖關卡指示完成指定任務後，方可將抽獎聯投入摸彩箱，參加舞台抽獎。<br />

              3.所有舞台抽出之獎項皆須本人在場，主持人唱名三次未回覆將取消得獎資格。<br />

              4.若活動當天遇到不可抗力之因素，主辦單位得調整抽獎方式，以現場公告為主。
            </div>

            <div class="txt-2xl mb-3 font-bold">注意事項</div>
            <div class="map_p">
              1.參加者於參加活動時，即視同為同意接受本活動規範，若本活動因不可抗力之因素(例如：天候狀況)無法執行時，主辦單位有權決定取消、終止、修改或暫停本活動及相關獎項得獎資格。<br />

              2.早鳥報名名單內若發現資料不全將取消報名資格；若有重覆報名，將以時間序取第一次報名為主。<br />

              3.早鳥登記報名後不接受任何理由修改報名資料。<br />

              4.抽獎中獎者務必攜帶雙證件影本(或手機清晰拍照檔案)供主辦單位核對身分，若無法驗證身分，將視同放棄領獎資格。<br />

              5.贈品以主辦單位提供實物為準，不得要求更換、指定款式或折換現金。<br />

              6.參加者同意填寫或提出之資料均為真實且正確，未冒用或盜用任何第三人之資料。如有致損害於主辦單位或其他第三人，參加者應負一切相關責任。<br />

              7.為求活動之公平及公正，參加者若以惡意之電腦程式或其他明顯違反活動公平性之方式，意圖混淆或影響活動結果者，一經主辦單位察覺得立即取消參賽者之參賽與得獎資格，並得追回獎品及活動執行單位將保留法律追訴權力。<br />

              8.本活動有任何因電腦、網路、技術或其他不可歸責於主辦單位之事由，而使參與本活動者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無效之情況，活動小組不負任何法律責任，參加者與得獎者亦不得異議。<br />

              9.本活動相關獎項屬於機會中獎，依中華民國所得稅法及各類所得扣繳率標準規定，機會中獎金額超過新台幣20,000元者，得獎者需先行繳納10%機會中獎所得稅款(不足1元部分，則四捨五入至元)，非中華民國境內居住者，無論金額大小皆需先行繳納20%機會中獎所得稅款，詳細規定，請參閱財政部稅務入口網。無論扣繳與否，均需列入活動得獎人當年度之個人機會中獎所得，並由本公司開立扣繳憑單予活動得獎人，活動得獎人需依規定填寫並繳交相關資料方可領獎。如不願意配合者，則視為自動放棄得獎資格。<br />

              10.中獎者若為未滿20歲之未成年人，須檢附戶口名簿影本、法定代理人身分證正本及影本，並提出法定代理人所簽署之領獎同意書，方可辦理獎項領取。中獎者(或代為領獎之法定代理人)須自行負擔因兌獎所產生之稅金及後續衍生之所有費用(包含領牌、保險等相關程序費用)。<br />

              11.因獎項內容而遭受之任何損失損害(包括但不限於間接或衍生性損失)或任何索賠、債務和任何種類的損害(包含合理的律師費和費用)或人身傷害，主辦單位概不負責。
            </div>

            <div class="txt-2xl mb-3 font-bold">個資保護聲明</div>
            <div class="map_p">
              遠見天下文化出版股份有限公司蒐集、處理及利用個人資料告知事項<br />

              遠見天下文化出版股份有限公司為蒐集、處理及利用您的個人資料，提供各項服務，依個人資料保護法規定，明確告知您下列事項，請您詳為閱讀：<br />

              一、公司名稱：遠見天下文化出版股份有限公司。<br />

              二、蒐集目的：遠見‧天下文化事業群及各委外服務廠商基於客戶管理、統計及調查分析、會員管理、演講活動報名、行銷及其他合於營業登記項目或章程所定業務需要之特定目的。<br />

              三、資料類別：得包括姓名、身分證字號、性別、出生年月日、電話、傳真、Email、地址、學校名稱，或其他得直接或間接識別您個人的資料(詳如網頁的填載欄位)。<br />

              四、利用期間、地區、對象及方式：(1)期間：蒐集目的存續期間或法令規定得為保存的期間。(2)地區：中華民國境內及本公司業務或服務所及的其他地區、利用對象所在的地區。(3)對象：本公司及其關係企業、活動合作夥伴、委外廠商、往來金融機構、政府機關等。(4)方式：電子處理、郵寄、電話、簡訊、傳真及其他為達成蒐集目的之利用方式。<br />

              五、就您的個人資料，您得依個人資料保護法規定，向本公司行使以下權利：(1)查詢或請求閱覽。(2)請求製給複製本。(3)請求補充或更正。(4)請求停止蒐集、處理及利用。(5)請求刪除。但本公司為執行業務有保存或利用該個人資料之必要，或法令另有規定者，不在此限。本公司得請您提供身分證明及為適當的釋明，並得向您酌收閱覽個人資料或製給複製本的必要成本費用。<br />

              六、您得自由選擇是否提供您的個人資料。但若您未提供本公司所需的個人資料，本公司將無法向您提供部分或全部的服務。<br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
