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
</script>
<template>
  <div>
    <Header>
      <router-link to="/">
        <img src="/img/kv-notice.svg" alt="" width="680" />
      </router-link>
      <span class="absolute -bottom-16 right-3 z-10 md:-right-16 md:top-24">
        <img src="/img/kv-main-img.png" alt="" width="150" />
      </span>
    </Header>

    <div class="bg-green">
      <div class="container py-16">
        <div class="flex flex-col items-center gap-3 text-3xl font-bold">
          <div class="mb-5">
            <img width="400" src="/img/title-faq.svg" alt="" />
          </div>
        </div>
        <div class="scroll-animate-fadeIn bg-white">
          <div
            v-for="(item, index) in faqList"
            :key="index"
            class="border-b border-primary-500"
          >
            <h2 class="mb-0" :id="`heading${index}`">
              <button
                class="group relative flex w-full items-center border-0 px-5 py-4 text-2xl font-extrabold text-primary-500 transition [overflow-anchor:none] hover:z-[2] focus:z-[3]"
                type="button"
                data-twe-collapse-init
                :data-twe-collapse-collapsed="index !== 0"
                :data-twe-target="`#collapse${index}`"
                :aria-expanded="index === 0"
                :aria-controls="`collapse${index}`"
              >
                <img class="me-3" src="/img/title-faq-item.svg" width="25" />
                <span>{{ item.q }}</span>
                <span
                  class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="15"
                      cy="15"
                      r="15"
                      transform="rotate(90 15 15)"
                      fill="#68BE83"
                    />
                    <g clip-path="url(#clip0_420_256)">
                      <path
                        d="M23.045 18.2348C22.754 18.2346 22.475 18.1188 22.2694 17.9129L16.6557 12.2992C16.4859 12.1293 16.2842 11.9945 16.0622 11.9026C15.8403 11.8106 15.6023 11.7633 15.3621 11.7633C15.1218 11.7633 14.8839 11.8106 14.6619 11.9026C14.44 11.9945 14.2383 12.1293 14.0684 12.2992L8.46208 17.9056C8.25508 18.1055 7.97783 18.2161 7.69005 18.2136C7.40228 18.2111 7.12699 18.0957 6.9235 17.8922C6.72 17.6887 6.60457 17.4134 6.60207 17.1256C6.59957 16.8379 6.7102 16.5606 6.91013 16.3536L12.5121 10.7473C13.2674 9.99344 14.2909 9.57007 15.3581 9.57007C16.4252 9.57007 17.4487 9.99344 18.204 10.7473L23.8213 16.3609C23.9749 16.5144 24.0796 16.71 24.1219 16.923C24.1643 17.136 24.1426 17.3567 24.0595 17.5574C23.9764 17.758 23.8356 17.9294 23.655 18.05C23.4745 18.1706 23.2622 18.2349 23.045 18.2348Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_420_256">
                        <rect
                          width="17.561"
                          height="17.561"
                          fill="white"
                          transform="translate(24.1462 5.12183) rotate(90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              :id="`collapse${index}`"
              :class="`!visible ${index > 0 ? 'hidden' : null}`"
              data-twe-collapse-item
            >
              <div class="px-16 pb-4 text-xl">
                {{ item.a }}
              </div>
            </div>
          </div>
          <!-- <div
            class="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark"
          >
            <h2 class="mb-0" id="headingTwo5">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                type="button"
                data-twe-collapse-init
                data-twe-target="#collapseTwo5"
                :aria-expanded="index !== 0"
                aria-controls="collapseTwo5"
              >
                Accordion Item #2
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
              id="collapseTwo5"
              class="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingTwo5"
            >
              <div class="px-5 py-4">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div
            class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark"
          >
            <h2 class="mb-0" id="headingThree5">
              <button
                class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg data-[twe-collapse-collapsed]:transition-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#collapseThree5"
                aria-expanded="false"
                aria-controls="collapseThree5"
              >
                Accordion Item #3
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
              id="collapseThree5"
              class="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingThree5"
            >
              <div class="px-5 py-4">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="bg-green">
      <div class="container py-16">
        <div class="flex flex-col items-center gap-3 text-3xl font-bold">
          <div class="mb-6">
            <img width="350" src="/img/title-transportation.svg" alt="" />
          </div>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="mb-1 text-xl font-bold text-primary-500">如何到達？</div>
          <div class="my-3 text-center">
            <iframe
              class="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3623542421947!2d121.47821782537727!3d25.05570482780247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8fac6152a05%3A0x3821847e329dcd64!2z5paw5YyX5aSn6YO95pyD5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1710127332403!5m2!1szh-TW!2stw"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="mb-1 text-xl font-bold text-primary-500">
            新北大都會公園
          </div>
          <div>地址:新北市三重區水漾路一段</div>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="mb-1 text-xl font-bold text-primary-500">捷運</div>
          <div class="flex flex-col gap-3">
            <div>1.捷運中和線三重站，1出口即可抵達。</div>
            <div>2.機場捷運線A2三重站，從1A出口即可抵達</div>
          </div>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="mb-1 text-xl font-bold text-primary-500">公車</div>
          <div class="flex flex-col gap-3">
            <div>1.捷運三重站:62、227區、232、264、640。</div>
            <div>
              2.菜寮（重陽路）站:14、227、227區、232、292、292副、621、640、662、803、806、1212、忠孝幹線。
            </div>
            <div>
              3.菜寮（重新路）站:14、62、111、227、264、292、616、622、636、638、639、801、803、820、857、1209、1803、9102、F301及忠孝幹線。
            </div>
          </div>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="mb-1 text-xl font-bold text-primary-500">微笑單車</div>
          <div>捷運三重站(3號出口)</div>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="mb-1 text-xl font-bold text-primary-500">
            停車資訊(附近有多個付費停車場)
          </div>
          <div class="flex flex-col gap-3">
            <div>
              1.幸褔水漾停車場：新北市三重區重新橋北側自行車道與疏洪十六路交叉口
            </div>
            <div>
              2.觀光市集北側停車場：新北市三重區重新橋北側/新莊堤外道路及疏洪十六路交叉口
            </div>
            <div>
              3.觀光市集南側停車場：新北市三重區重新橋南側/新莊堤外道路與疏洪十六路交叉口
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-yellow">
      <div class="container py-16">
        <div class="scroll-animate-fadeIn mb-8">
          <div class="txt-xl mb-3 font-bold">特別聲明</div>
          <ul class="flex flex-col gap-3">
            <li>
              1.本活動網頁僅為報名用途，非現場各項活動預約報名。各攤位現場活動體驗因適合年齡及容納人數皆不同，以現場排隊指示為主。
            </li>
            <li>
              2.主辦單位保有活動場地、時間、形式異動與解釋之權利，若有更改將另行通知。
            </li>
            <li>
              3.參加本活動即同意無償授權主辦單位使用活動期間所拍攝之照片與影片，並運用刊登於主辦單位所發行之包括但不限於平面刊物、網站、部落格、Facebook粉絲專頁及相關社群平台、電子報、EDM等相關之行銷活動規劃。
            </li>
            <li>
              4.參與對象以家庭(訂單)為單位，憑報到序號領取乙張闖關卡，若資料有重複者，將以時間序取第一次報名為主。
            </li>
            <li>
              5.所有贈品及獎項以實物為準，如遇產品缺貨或其他不可抗力之事由，主辦單位得保留更換等值獎品之權利，不另行告知。
            </li>
          </ul>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="txt-2xl mb-3 font-bold">早鳥獎項</div>
          <div>
            登記報名並於現場報到完成者，可獲得超值驚喜包一份，依網路報名先後順序取符合資格者，於活動網頁上公告得獎名單。
          </div>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="txt-2xl mb-3 font-bold">領取方式</div>
          <ul class="flex flex-col gap-3">
            <li>
              1.早鳥報名得獎名單將於活動前一周公布在本網頁，敬請密切留意相關資訊。
            </li>
            <li>
              2.活動當天攜帶官方發送之報到序號簡訊及身分證明文件報到完成，即可領取福袋禮(報到禮)。
            </li>
            <li>
              ※
              若不符合參加資格，主辦單位有權取消得獎資格，獎項不後補，不得異議。
            </li>
          </ul>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="txt-2xl mb-3 font-bold">現場舞台抽獎</div>
          <ul class="flex flex-col gap-3">
            <li>
              1.活動現場將提供：一個家庭(一筆訂單)一張闖關卡，合計2,000張供索取，發完為止。
            </li>
            <li>
              2.須依闖關卡指示完成指定任務後，方可將抽獎聯投入摸彩箱，參加舞台抽獎。
            </li>
            <li>
              3.所有舞台抽出之獎項皆須本人在場，主持人唱名三次未回覆將取消得獎資格。
            </li>
            <li>
              4.若活動當天遇到不可抗力之因素，主辦單位得調整抽獎方式，以現場公告為主。
            </li>
          </ul>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="txt-2xl mb-3 font-bold">注意事項</div>
          <ul class="flex flex-col gap-3">
            <li>
              1.參加者於參加活動時，即視同為同意接受本活動規範，若本活動因不可抗力之因素(例如：天候狀況)無法執行時，主辦單位有權決定取消、終止、修改或暫停本活動及相關獎項得獎資格。
            </li>

            <li>
              2.早鳥報名名單內若發現資料不全將取消報名資格；若有重覆報名，將以時間序取第一次報名為主。
            </li>

            <li>3.早鳥登記報名後不接受任何理由修改報名資料。</li>

            <li>
              4.抽獎中獎者務必攜帶雙證件影本(或手機清晰拍照檔案)供主辦單位核對身分，若無法驗證身分，將視同放棄領獎資格。
            </li>

            <li>
              5.贈品以主辦單位提供實物為準，不得要求更換、指定款式或折換現金。
            </li>

            <li>
              6.參加者同意填寫或提出之資料均為真實且正確，未冒用或盜用任何第三人之資料。如有致損害於主辦單位或其他第三人，參加者應負一切相關責任。
            </li>

            <li>
              7.為求活動之公平及公正，參加者若以惡意之電腦程式或其他明顯違反活動公平性之方式，意圖混淆或影響活動結果者，一經主辦單位察覺得立即取消參賽者之參賽與得獎資格，並得追回獎品及活動執行單位將保留法律追訴權力。
            </li>

            <li>
              8.本活動有任何因電腦、網路、技術或其他不可歸責於主辦單位之事由，而使參與本活動者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無效之情況，活動小組不負任何法律責任，參加者與得獎者亦不得異議。
            </li>

            <li>
              9.本活動相關獎項屬於機會中獎，依中華民國所得稅法及各類所得扣繳率標準規定，機會中獎金額超過新台幣20,000元者，得獎者需先行繳納10%機會中獎所得稅款(不足1元部分，則四捨五入至元)，非中華民國境內居住者，無論金額大小皆需先行繳納20%機會中獎所得稅款，詳細規定，請參閱財政部稅務入口網。無論扣繳與否，均需列入活動得獎人當年度之個人機會中獎所得，並由本公司開立扣繳憑單予活動得獎人，活動得獎人需依規定填寫並繳交相關資料方可領獎。如不願意配合者，則視為自動放棄得獎資格。
            </li>

            <li>
              10.中獎者若為未滿20歲之未成年人，須檢附戶口名簿影本、法定代理人身分證正本及影本，並提出法定代理人所簽署之領獎同意書，方可辦理獎項領取。中獎者(或代為領獎之法定代理人)須自行負擔因兌獎所產生之稅金及後續衍生之所有費用(包含領牌、保險等相關程序費用)。
            </li>

            <li>
              11.因獎項內容而遭受之任何損失損害(包括但不限於間接或衍生性損失)或任何索賠、債務和任何種類的損害(包含合理的律師費和費用)或人身傷害，主辦單位概不負責。
            </li>
          </ul>
        </div>
        <div class="scroll-animate-fadeIn mb-8">
          <div class="txt-2xl mb-3 font-bold">個資保護聲明</div>
          <ul class="flex flex-col gap-3">
            <li>
              遠見天下文化出版股份有限公司蒐集、處理及利用個人資料告知事項
            </li>
            <li>
              遠見天下文化出版股份有限公司為蒐集、處理及利用您的個人資料，提供各項服務，依個人資料保護法規定，明確告知您下列事項，請您詳為閱讀
            </li>
            <li>一、公司名稱：遠見天下文化出版股份有限公司。</li>
            <li>
              二、蒐集目的：遠見‧天下文化事業群及各委外服務廠商基於客戶管理、統計及調查分析、會員管理、演講活動報名、行銷及其他合於營業登記項目或章程所定業務需要之特定目的。
            </li>
            <li>
              三、資料類別：得包括姓名、身分證字號、性別、出生年月日、電話、傳真、Email、地址、學校名稱，或其他得直接或間接識別您個人的資料(詳如網頁的填載欄位)。
            </li>
            <li>
              四、利用期間、地區、對象及方式：(1)期間：蒐集目的存續期間或法令規定得為保存的期間。(2)地區：中華民國境內及本公司業務或服務所及的其他地區、利用對象所在的地區。(3)對象：本公司及其關係企業、活動合作夥伴、委外廠商、往來金融機構、政府機關等。(4)方式：電子處理、郵寄、電話、簡訊、傳真及其他為達成蒐集目的之利用方式。
            </li>
            <li>
              五、就您的個人資料，您得依個人資料保護法規定，向本公司行使以下權利：(1)查詢或請求閱覽。(2)請求製給複製本。(3)請求補充或更正。(4)請求停止蒐集、處理及利用。(5)請求刪除。但本公司為執行業務有保存或利用該個人資料之必要，或法令另有規定者，不在此限。本公司得請您提供身分證明及為適當的釋明，並得向您酌收閱覽個人資料或製給複製本的必要成本費用。
            </li>
            <li>
              六、您得自由選擇是否提供您的個人資料。但若您未提供本公司所需的個人資料，本公司將無法向您提供部分或全部的服務。
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
