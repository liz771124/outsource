<script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Pagination, Navigation } from 'swiper/modules'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  const imagePath = import.meta.env.VITE_IMAGE_PATH

  ScrollTrigger.create({
    start: 'top center',
    end: 'bottom center',
    debounce: true
  })

  const selectedModalItems = ref()
  const modalOrder = ref()

  const giftEarlyBird = [
    {
      id: '/gift-early-bird/01.jpg',
      brand: '美琪',
      title: '抗菌洗手慕斯隨身瓶50ml',
      description: `
          <ul>
            <li>★【輕便隨身攜帶】小巧50ML設計，輕鬆放入包包   或口袋，隨時隨地保持手部清潔。一瓶可洗淨雙手約60次。​</li>
            <li>★【植萃安心防護】含茶樹、百里香、金盞菊三大天然植萃精華，呵護肌膚並提供溫和抗菌效果，適合全家人使用。​</li>
            <li>★【實驗證明有效抗菌】採用衛福部認可的抗菌成分，並經 SGS 檢測驗證，能有效抑制有害細菌，守護健康。</li>
          </ul>
        `
    },
    {
      id: '/gift-early-bird/02.jpg',
      brand: '德恩奈​',
      title: '潔牙雙星組​',
      description: `
           <ul class='flex flex-col gap-3'>
              <li>內含德恩奈清淨涼牙膏1支+德恩奈極淨細絲牙刷2支。</li>
              <li>
                德恩奈清淨涼牙膏採用特選歐薄荷結合濃郁冬青香，讓口氣散發清新自然好口氣，開口微笑更有自信，專業氟鈣配方搭配正確刷牙習慣可幫助修護受損琺瑯質及預防蛀牙。歐洲百年牙膏大廠生產製造，100%德國原裝進口，堅持好品質。
              </li>
              <li>
                德恩奈極淨細絲牙刷，台灣製造，採用超柔軟纖絲立體刷毛，搭配「潔淨長纖」與「護齦短纖」二種刷毛，只要輕輕的刷洗，並配合貝氏刷牙法，即可輕鬆清潔口腔，確保牙齒及牙齦健康，預防牙周病及蛀牙。
              </li>
            </ul>
          `
    },
    {
      id: '/gift-early-bird/03.png',
      brand: '小兒利撒爾',
      title: '維生素D3+K2口含錠 (60粒)',
      description: `
          <ul class='flex flex-col gap-3'>
            <li>
              ★專業藥師、營養師推薦！專為兒童骨骼發育設計，結合維生素D3和K2，有助於鈣質吸收和利用，幫助骨骼與牙齒生長發育。
            </li>
            <li>★神奇雪花般速溶口感，免咀嚼、配水，適合飯後補充，微甜新滋味。</li>
            <li>納豆菌發酵K2，純淨來源營養。</li>
            <li>★羊毛脂萃取D3+</li>
            <li>
              ★小兒利撒爾60年的專業兒童健康守護，無塑化劑、重金屬、防腐劑、人工色素等拒絕成分，定期專業檢驗透明報告，媽媽安心的選擇。
            </li>
          </ul>
        `
    },
    {
      id: '/gift-early-bird/04.jpg',
      brand: '兒福聯盟',
      title: 'No Hit Zone｜野餐墊',
      description: `
          <ul class='flex flex-col gap-3'>
            <li>
              兒福聯盟致力於兒童福利發展、孩子的情緒與永續教育，野餐墊以象徵大人的「泡福」和代表小朋友的「心仔」為出發設計，闡述小朋友從起床、去學校，回家的一日生活。心仔整天會發生哪些事呢？當遇到圖上情境時，泡福要怎麼和心仔溝通，心仔又希望泡福如何和他討論傾聽心中的需求與期待，請家長帶著孩子一同演練吧！期待透過野餐墊陪伴您與孩子出遊共處，相信共同努力，能創造一個充滿愛、尊重和支持的家庭與社會。
            </li>
          </ul>
        `
    },
    {
      id: '/gift-early-bird/05.png',
      brand: '清淨海',
      title: '純淨泰迪植萃酵素洗衣膠囊(香味隨機) 5g*30顆/包',
      description: `
        <ul class='flex flex-col gap-3'>
          <li>
            清淨海純淨泰迪系列洗衣膠囊添加七大酵素瓦解多元髒污，堅持選用植物萃取配方，回歸原始潔淨感，不添加多餘的有害化學物質，友善敏感肌膚者，也不添加螢光增白劑，安心清洗貼身衣物與嬰幼兒衣服，適合各種家庭與族群。          </li>
          <li>★添加植萃配方與七大酵素</li>
          <li>★100%水溶性環保膠囊膜</li>
          <li>★榮獲臺美中發明專利</li>
          <li>★無動物實驗無有害成分</li>
          <li>★10倍超濃縮抗菌配方</li>
        </ul>
      `
    },
    {
      id: '/gift-early-bird/06.jpg',
      brand: '果利生技',
      title: 'SPD高濃度魚油EX (10粒/袋)',
      description: `
        <ul>
          <li>Omega-3高濃度魚油，SGS檢驗高達98.6%！促進新陳代謝的救星，讓健康全面升級。24項專利技術，榮獲世界品質評鑑金獎，品質值得信賴。國際GOED Omega-3會員認證與IFOS 五星最高評價，無腥味、新鮮度有保證，全球權威認可！獨特rTG型式，吸收率提升3倍，小顆易吞食，營養補充更有效！</li>
        </ul>
      `
    },
    {
      id: '/gift-early-bird/07.jpg',
      brand: '乖乖',
      title: '彎的脆果 煉乳-4入組合包',
      description: `
        <p>★彎的玉米脆果，讓心情轉個彎</p>
        <p>★可愛彎彎造型，療癒心情的秘密武器</p>
        <p>★香醇濃郁的煉乳，讓人深陷的厚奶風味</p>
        <p>規格：40g x 4包</p>
        <p>銷售通路：便利超商、超市、量販店、PChome24h購物、博客來</p>
      `
    }
    // {
    //   id: '',
    //   brand: '',
    //   title: '',
    //   description: ``
    // },
  ]

  const giftLuckyBag = [
    {
      id: '/gift-lucky-bag/01.jpg',
      brand: '德恩奈',
      title: '兒童口腔保健組',
      description: `
          <ul class='flex flex-col gap-3'>
            <li>每款內含兒童牙膏90g+前觸兒童牙刷各一支。</li>
            <li>
              德國原裝進口”德恩奈兒童牙膏含氟量1000ppm，專業配方"維他命E+氟+鈣"配合正確刷牙習慣，幫助預防蛀牙。
            </li>
          </ul>
        `
    },
    {
      id: '/gift-lucky-bag/02.jpg',
      brand: '德恩奈',
      title: '兒童防蛀漱口水500ml',
      description: `
         <ul cl ass="flex flex-col gap-3">
            <li>★強化琺瑯質、抗酸蝕 </li>
            <li>★去除引起蛀牙的細菌，預防蛀牙</li>
            <li>★幫助強健牙齦組織</li>
            <li>
              德恩奈兒童防蛀漱口水，添加「氟+木糖醇」雙效防蛀配方，氟能加強牙齒再礦化作用，木糖醇能中和口中酸性，配合正確刷牙習慣，能更有效幫助預防蛀牙，長期使用能降低蛀牙率35%~50%。
            </li>
            <li>
              不含酒精，口感溫和不刺激，清香葡萄口味，沒有藥水味，不含色素，減少口腔黏膜負擔，是最適合小朋友使用漱口水。"
            </li>
          </ul>
        `
    },
    {
      id: '/gift-lucky-bag/03.jpg',
      brand: 'PURE YU 純淨之羽',
      title: '超能營養QQ凍-晶亮醇兒童葉黃素凍 3入體驗包',
      description: `
          <ul class='flex flex-col gap-3'>
            <li>寶貝提早接觸平板手機，晶亮醇葉黃素凍改善乾澀不適，升級添加PS腦磷脂＋鋅，提升學習成長動力！</li>
            <li>100種蔬果酵素是挑食好幫手，輕鬆補充滿滿營養！</li>
          </ul>
          `
    },
    {
      id: '/gift-lucky-bag/04.jpg',
      brand: '小蚊清',
      title: '植萃沁涼防蚊液_隨身瓶 30g',
      description: `
          <ul class='flex flex-col gap-3'>
            <li>小蚊清全系列皆使用天然來源植萃配方，無添加DEET(敵避)、Paraben防腐劑、重金屬等化學成分，並添加法國有機認證的保濕成分，溫和不刺激，全家大小都適用！採美國高規格水霧噴頭，在皮膚表層形成清爽防護網，蚊蟲OUT！</li>
            <li>★使用日本蚊連草萃取液，天然來源植萃配方，質地清爽，防蚊不黏膩</li>
            <li>★添加法國有機認證保濕成份，溫和不刺激肌膚</li>
            <li>★SGS檢測不含DEET(敵避)、 Paraben防腐劑、重金屬</li>
            <li>★小黑蚊忌避率達99%，皮膚科醫師專業推薦，媽媽安心的選擇</li>
          </ul>
        `
    },
    {
      id: '/gift-lucky-bag/05.jpg',
      brand: '可爾必思',
      title: `開心成長1瓶 160 ml<span class='text-xs'>(原味/蘋果) 兩種口味隨機</span>`,
      description: `
          <ul class='flex flex-col gap-3'>
            <li>
              日本百年品牌「可爾必思」專為孩子打造的乳酸菌飲品，清爽酸甜的滋味榮獲袋鼠評鑑五星白金獎，滿足美味與健康雙重需求，陪伴您的寶貝開心成長。
            </li>
            <li>🥛 原味：含牛奶鈣，輕鬆灌鈣快快長大!</li>
            <li>🍎 蘋果：含葉黃素，輕鬆補給明亮元素!</li>
            <li></li>
            <li>★日本獨家乳酸菌，幫助消化好順暢。</li>
            <li>★160ml小包裝，一次一罐剛剛好。</li>
            <li>★常溫保存設計，隨身包裝好攜帶。</li>
          </ul>
        `
    },
    {
      id: '/gift-lucky-bag/06.png',
      brand: '妙管家',
      title: '瞬潔洗潔精(果香葡萄柚)500g',
      description: `
            <ul class='flex flex-col gap-3'>
              <li>#只要一點點 用量省，超去油！</li>
              <li>★【4倍特濃】高濃度去油因子，用量省起泡快，快速發揮深層潔淨力！</li>
              <li>★【  科研導入】妙管家突破性離子乳化科技，Oil-ER Tech高效去油配方，快速分解油污</li>
              <li>★【友善環境】添加歐盟ECOCERT洗淨因子，生物高分解度95%以上，洗後不殘留。</li>
              <li>★【安心溫和】中性配方，清潔碗盤時較不易傷手。</li>
            </ul>
          `
    },
    {
      id: '/gift-lucky-bag/07.jpg',
      brand: '初鹿牧場',
      title: '原味保久乳(200ml)',
      description: `成分天然、無添加的初鹿牧場保久乳，堅持使用在地最純淨的「初鹿生乳」，風味香醇無可取代，成分單純無添加，只給家人最好的。【原味牛乳】100%使用初鹿生乳，成份天然，無調整無添加。`
    },
    {
      id: '/gift-lucky-bag/08.jpg',
      brand: '初鹿牧場',
      title: '原味米牛乳(200ml)',
      description: `【原味米牛乳】“米+牛乳”是孩子們最熟悉的第一口大人的食物！使用「初鹿生乳x台東米」天然在地食材，快充早餐所需營養，成分單純、無添加，孩子愛喝，媽媽開心。`
    },
    {
      id: '/gift-lucky-bag/09.jpg',
      brand: '未來親子',
      title: '《未來兒童月刊》',
      description: `
        金鼎獎最佳兒童雜誌，適讀年齡：小學中低年級，搭配注音輕鬆讀、音檔下載隨時聽、精彩圖文好記憶，讓孩子生活知識一把罩！專業編輯團隊製作，頂尖專家把關，讓孩子贏在學習起跑點！
      `
    },
    {
      id: '/gift-lucky-bag/10.jpg',
      brand: '未來親子',
      title: '《用點心學校1（15週年暢銷慶祝版）》',
      description: `
        <ul>
          <li>鬼才作家林哲璋x超人氣畫家BO2聯手創作最受小孩喜愛的超人氣橋梁書系列 </li>
          <li>風靡校園15年，爆笑幽默+趣味想像，跟著點心人吸收美食情報、領會文字趣味。</li>
          <li>輕鬆連結圖畫書與文字書，自然導引孩子進入自主閱讀，創造無限的可能，一起朝全方位的點心人邁進吧！</li>
        </ul>
      `
    },
    {
      id: '/gift-lucky-bag/11.jpg',
      brand: '未來親子',
      title: '來寶圖鑑貼紙/來寶紋身貼紙',
      description: `深受小朋友喜愛的來寶推出圖鑑貼紙囉，9款實用生活情境，讓充滿好奇與熱愛閱讀的來寶，陪著小朋友一起探索學習；特別搭配10週年限定派對紋身貼紙，讓我們一起Party！一起狂歡！`
    },
    {
      id: '/gift-lucky-bag/12.jpg',
      brand: '乖乖',
      title: '孔雀香酥脆 香魚',
      description: `
        <p>★經典國民下酒零食</p>
        <p>★酥脆鹹香超唰嘴，非油炸清爽萬搭各飲品</p>
        <p>★使用挪威進口魚粉，口感酥脆 </p>
        <p>規格：60g x 1包</p>
        <p>銷售通路：便利超商、超市、量販店</p>
      `
    }

    // {
    //   id: '',
    //   brand: '',
    //   title: '',
    //   description: ``
    // },
  ]

  const initializeAnimations = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    gsap.utils.toArray('.animate-zoom-in').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            toggleActions: 'play none none none'
          },
          duration: 0.8,
          opacity: 1,
          scale: 1,
          y: 0,
          ease: 'power3.out'
        }
      )
    })

    // Zoom Right 動畫
    gsap.utils.toArray('.animate-zoom-right').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: 50 },
        {
          scrollTrigger: {
            trigger: element,
            start: 'left 100%',
            toggleActions: 'play none none none'
          },
          duration: 0.8,
          opacity: 1,
          x: 0,
          ease: 'power3.out'
        }
      )
    })

    // Zoom Left 動畫
    gsap.utils.toArray('.animate-zoom-left').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        {
          scrollTrigger: {
            trigger: element,
            start: 'right 100%',
            toggleActions: 'play none none none'
          },
          duration: 0.8,
          opacity: 1,
          x: 0,
          ease: 'power3.out'
        }
      )
    })
  }

  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
    initializeAnimations()

    nextTick(() => {
      const myModalEl = document.getElementById('modal01')
      myModalEl.addEventListener('hide.twe.modal', (e) => {
        const myModalElContainer = document.getElementById('modal01-container')
        myModalElContainer.scrollTop = 0
      })
    })
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })
</script>
<template>
  <div>
    <Header :height="'800px'">
      <img class="w-[450px] px-3 md:w-[600px]" src="/img/kv-main.svg" alt="" />
      <span
        class="absolute bottom-14 right-1 top-auto z-10 w-[70px] sm:-right-16 sm:top-24 sm:w-[150px]"
      >
        <img src="/img/kv-main-img.svg" alt="" width="150" />
      </span>
    </Header>

    <!-- <div class="animate-bounceFloat">上下跳動元素</div>
    <div class="animate-scaleBounce">放大縮小元素</div>
    <div class="animate-fadeIn">淡入元素</div>
    <div class="animate-slideIn">滑入元素</div>
    <div class="animate-rotateIn">旋轉元素</div>
    <div class="scroll-animate-fadeIn">滾動到這裡時淡入</div>
    <div class="scroll-animate-fadeInUp">從底部淡入</div>
    <div class="scroll-animate-slideInLeft">從左側滑入</div>
    <div class="scroll-animate-slideInRight">從右側滑入</div>
    <div class="scroll-animate-zoomIn">放大淡入</div>
    <div class="scroll-animate-flipIn">翻轉效果</div>
    <div class="scroll-animate-bounceIn">彈跳效果</div>
    <div class="scroll-animate-rotateIn">旋轉淡入</div>
    <div class="scroll-animate-flip3D">3D翻頁效果</div>
    <div class="scroll-animate-shake">震動效果</div>


    <div class="scroll-animate-bounceHorizontal">左右跳動</div>
    <div class="scroll-animate-bounceVertical">上下跳動</div>
    <div class="scroll-animate-bouncePulse">放大縮小跳動</div>

    <div class="scroll-animate-fadeInDown">從上方淡入</div>
    <div class="scroll-animate-fadeInLeft">從左側淡入</div>

    <div class="scroll-animate-lightSpeedIn">光速進入</div>
    <div class="scroll-animate-rubberBand">橡皮筋效果</div>
    <div class="scroll-animate-swing">搖擺效果</div>

    <div class="scroll-animate-tiltIn">傾斜進入</div>
    <div class="scroll-animate-rotateRoom">房間旋轉</div>

    <div class="scroll-animate-typewriter">打字機效果</div>
    <div class="scroll-animate-splitLetters">文字分裂效果</div>


     -->

    <div>
      <div class="bg-yellow py-16">
        <div class="container">
          <div
            class="flex flex-wrap items-center gap-3 md:mb-16 md:flex-nowrap"
          >
            <iframe
              class="aspect-video scroll-animate-slideInLeft order-2 mx-auto h-[250px] w-full max-w-[500px] md:order-1 md:h-[350px]"
              src="https://www.youtube.com/embed/Sef8LyqvRJk?si=qtjNJwouQu-pgyAa&amp;controls=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div
              class="scroll-animate-slideInRight order-1 flex grow flex-col items-center justify-center gap-3 pb-5 text-xl font-black text-kv-blue md:order-2 lg:p-5"
            >
              <img width="400" class="mb-4" src="/img/title-video.svg" alt="" />
              <div
                class="flex flex-col gap-1 text-center text-[1.1rem] font-black tracking-wide text-kv-blue"
              >
                <div>未來親子野餐日陪伴孩子10週年啦!</div>
                <div>這象徵著「幸福永續」的里程碑，</div>
                <div>期待能陪伴孩子，朝著更美好的未來邁進！</div>
                <div>更多歡樂、甜蜜的親子時光，</div>
                <div>就從今年的10歲生日派對開始吧！</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green py-16">
        <span class="absolute -top-[80px] start-0 h-[100px] w-full rotate-180">
          <img
            class="w-full object-cover"
            src="/img/bg-green-line-b.svg"
            alt=""
          />
        </span>
        <div class="container relative flex w-full flex-col gap-10">
          <router-link
            class="animate-zoom-right rounded-rl-2xl relative rounded-bl-[50px] rounded-tr-[50px] bg-primary-500 p-6 text-white"
            to="/show"
          >
            <div
              class="flex flex-wrap items-center justify-between md:flex-nowrap md:gap-5 lg:items-stretch"
            >
              <div class="lg:shrink-0">
                <img class="w-full" src="/img/index-intro-01.png" alt="" />
              </div>
              <div class="relative grow pt-5">
                <img width="250" src="/img/page-title-01.svg" alt="" />
                <!-- <div
                  class="relative z-10 flex text-[35px] font-black tracking-wide text-primary-500 md:text-[50px]"
                >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >精</span
                  >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >彩</span
                  >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >表</span
                  >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >演</span
                  >
                </div> -->
                <div class="dashed-text-container">
                  孩子的春日派對、大人的歡聚時光！最精彩好看的舞台節目都在這，準備好一起
                  High 翻天吧！
                </div>
                <div class="absolute -bottom-10 -start-3 hidden lg:block">
                  <img
                    class="w-[100px]"
                    src="/img/index-intro-icon-01.svg"
                    alt=""
                  />
                </div>
                <div
                  class="bottom-0 right-0 ms-auto mt-2 inline-block w-full rounded-tr-xl bg-kv-green px-10 py-1.5 text-center text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue md:mt-auto md:w-auto lg:absolute"
                >
                  看看表演
                </div>
              </div>
            </div>
          </router-link>
          <router-link
            class="animate-zoom-left rounded-rl-2xl relative rounded-br-[50px] rounded-tl-[50px] bg-kv-green p-6 text-white"
            to="/game#game-01"
          >
            <div
              class="flex flex-wrap items-center justify-between md:flex-nowrap md:gap-5 lg:items-stretch"
            >
              <div class="order-2 lg:shrink-0">
                <img class="w-full" src="/img/index-intro-02.png" alt="" />
              </div>
              <div class="relative order-2 grow pt-5 md:order-1">
                <img width="250" src="/img/page-title-02.svg" alt="" />
                <!-- <div
                  class="relative z-10 flex text-[35px] font-black tracking-wide text-kv-green md:text-[50px]"
                >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >趣</span
                  >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >味</span
                  >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >闖</span
                  >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >關</span
                  >
                </div> -->
                <div class="dashed-text-container">
                  十大主題，兼具知識與趣味的闖關挑戰，親子共同完成任務，還有小農市集，美好回憶獎不完！
                </div>
                <div class="end-15 absolute -bottom-10 hidden lg:block">
                  <img
                    class="w-[100px]"
                    src="/img/index-intro-icon-02.svg"
                    alt=""
                  />
                </div>
                <div
                  class="bottom-0 right-0 ms-auto mt-2 inline-block w-full rounded-tl-xl bg-primary-500 px-10 py-1.5 text-center text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue md:mt-auto md:w-auto lg:absolute"
                >
                  看看闖關
                </div>
              </div>
            </div>
          </router-link>
          <router-link
            class="animate-zoom-right rounded-rl-2xl relative rounded-bl-[50px] rounded-tr-[50px] bg-primary-500 p-6 text-white"
            to="/gift"
          >
            <div
              class="flex flex-wrap items-center justify-between md:flex-nowrap md:gap-5 lg:items-stretch"
            >
              <div class="lg:shrink-0">
                <img class="500" src="/img/index-intro-03.png" alt="" />
              </div>
              <div class="relative grow pt-5">
                <img width="250" src="/img/page-title-03.svg" alt="" />

                <div class="dashed-text-container">
                  歡慶十週年，活動好禮拿不完！快來看看這次活動有哪些超亮點，把限量好禮通通帶回家！
                </div>
                <div class="absolute -bottom-10 -start-3 hidden lg:block">
                  <img
                    class="w-[100px]"
                    src="/img/index-intro-icon-03.svg"
                    alt=""
                  />
                </div>
                <div
                  class="bottom-0 right-0 ms-auto mt-2 inline-block w-full rounded-tr-xl bg-kv-green px-10 py-1.5 text-center text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue md:mt-auto md:w-auto lg:absolute"
                >
                  看看好禮
                </div>
              </div>
            </div>
          </router-link>
          <router-link
            class="animate-zoom-left rounded-rl-2xl relative rounded-br-[50px] rounded-tl-[50px] bg-kv-green p-6 text-white"
            to="/game#game-02"
          >
            <div
              class="flex flex-wrap items-center justify-between md:flex-nowrap md:gap-5 lg:items-stretch"
            >
              <div class="order-2 w-full sm:max-w-[303px] lg:max-w-[590px]">
                <swiper
                  class="w-full"
                  :slides-per-view="1"
                  :autoplay="{
                    delay: 3500,
                    disableOnInteraction: false
                  }"
                  :modules="[Autoplay]"
                  loop
                >
                  <swiper-slide>
                    <img
                      class="w-full"
                      src="/img/index-intro-04-01.png"
                      alt=""
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      class="w-full"
                      src="/img/index-intro-04-02.png"
                      alt=""
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      class="w-full"
                      src="/img/index-intro-04-03.png"
                      alt=""
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      class="w-full"
                      src="/img/index-intro-04-04.png"
                      alt=""
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      class="w-full"
                      src="/img/index-intro-04-05.png"
                      alt=""
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      class="w-full"
                      src="/img/index-intro-04-06.png"
                      alt=""
                    />
                  </swiper-slide>
                </swiper>
              </div>
              <div class="relative order-2 grow pt-5 md:order-1">
                <img width="250" src="/img/page-title-04.svg" alt="" />
                <!-- <div
                  class="relative z-10 flex text-[35px] font-black tracking-wide text-kv-green md:text-[50px]"
                >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >歡</span
                  >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >樂</span
                  >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >抽</span
                  >
                  <span
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-16 md:w-16"
                    >獎</span
                  >
                </div> -->
                <div class="dashed-text-container">
                  完成闖關集章，即可兌換一張抽獎券，獎項超豐富，好禮總價值超過50萬！
                </div>
                <div class="absolute -bottom-10 -start-20 hidden lg:block">
                  <img
                    class="w-[180px]"
                    src="/img/index-intro-icon-04.svg"
                    alt=""
                  />
                </div>
                <div
                  class="ms-auto mt-2 inline-block w-full rounded-tl-xl bg-primary-500 px-10 py-1.5 text-center text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue md:bottom-0 md:right-0 md:mt-auto md:w-auto lg:absolute"
                >
                  看看抽獎
                </div>
              </div>
            </div>
          </router-link>
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
        <div class="container">
          <div
            class="mt-10 flex flex-col items-center gap-2 text-2xl font-bold"
          >
            <div class="mb-3">
              <img width="300" src="/img/title-ticket.svg" alt="" />
            </div>
            <div class="text-center text-[1.1rem] font-black">
              <div>2025年4月3日 10:30-15:00</div>
              <div>新北大都會公園</div>
            </div>
          </div>
          <div>
            <div
              id="purchase"
              class="flex flex-wrap items-end justify-between gap-10 md:mt-5 md:flex-nowrap md:gap-5"
            >
              <a class="animate-zoom-in group relative grow" href="#">
                <img class="w-full" src="/img/ticket-01.svg" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl border-4 border-kv-green bg-kv-green px-5 py-2 text-center text-[22px] font-bold tracking-wide text-white transition md:py-1.5 md:group-hover:bg-white md:group-hover:text-kv-green"
                >
                  立即購票
                </div>
              </a>
              <div
                class="animate-zoom-in group relative mt-6 grow text-primary-500 md:mt-0"
              >
                <a href="#" target="_blank">
                  <img class="w-full" src="/img/ticket-02.svg" alt="" />
                </a>
                <img
                  class="absolute bottom-20 right-6 w-[120px] cursor-pointer md:w-[100px] lg:bottom-12 lg:w-[120px]"
                  src="/img/ticket-02-img.png"
                  data-twe-toggle="modal"
                  data-twe-target="#modal02"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                />
                <a
                  href="#"
                  target="_blank"
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl border-4 border-primary-500 bg-primary-500 px-5 py-2 text-center text-[22px] font-bold tracking-wide text-white transition md:py-1.5 md:group-hover:bg-white md:group-hover:text-primary-500"
                >
                  立即購票
                </a>
              </div>
              <a class="animate-zoom-in group relative grow" href="#">
                <img class="w-full" src="/img/ticket-03.svg" alt="" />

                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl border-4 border-kv-green bg-kv-green px-5 py-2 text-center text-[22px] font-bold tracking-wide text-white transition md:py-1.5 md:group-hover:bg-white md:group-hover:text-kv-green"
                >
                  立即購票
                </div>
              </a>
            </div>

            <div
              class="flex flex-wrap gap-14 pt-[110px] md:flex-nowrap md:gap-8"
            >
              <div
                class="animate-zoom-in relative grow cursor-pointer bg-white p-5 shadow-xl"
                data-twe-toggle="modal"
                data-twe-target="#modal01"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                @click="((selectedModalItems = giftLuckyBag), (modalOrder = 1))"
              >
                <div>
                  <span class="absolute -start-[4px] -top-[55px] h-[80px]">
                    <img
                      class="h-full"
                      src="/img/index-gift-title-01.svg"
                      alt=""
                    />
                  </span>
                  <img
                    class="hidden h-full w-full md:block"
                    src="/img/gift_01-p.jpg"
                    alt=""
                  />
                  <img
                    class="block h-full w-full md:hidden"
                    src="/img/gift_01-m.jpg"
                    alt=""
                  />
                </div>
                <div
                  class="mt-3 text-center text-xl font-black text-primary-500"
                ></div>
              </div>

              <div
                class="animate-zoom-in relative grow cursor-pointer bg-white p-5 shadow-xl"
                data-twe-toggle="modal"
                data-twe-target="#modal01"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                @click="
                  ((selectedModalItems = giftEarlyBird), (modalOrder = 2))
                "
              >
                <div>
                  <span class="absolute -start-[4px] -top-[55px] h-[80px]">
                    <img
                      class="h-full"
                      src="/img/index-gift-title-02.svg"
                      alt=""
                    />
                  </span>
                  <img class="h-full w-full" src="/img/gift_02-m.jpg" alt="" />
                </div>
                <div
                  class="mt-3 text-center text-xl font-black text-primary-500"
                >
                  數量有限，要搶要快！
                </div>
              </div>
            </div>

            <div class="mb-8 mt-10 flex flex-col gap-2 text-center font-bold">
              <div>
                ※【單組票】、【揪團票】、【慶生套票】下訂後，恕不接受換票。
              </div>
              <div>
                ※
                產品圖片僅供示意，以現場實物為主，現場不挑款式、花色，隨機出貨。
              </div>
              <div>※ 報名前，請務必詳閱報名注意事項。</div>
              <div>
                <router-link
                  to="/notice#notice-02"
                  class="mt-5 inline-flex items-center gap-3 rounded-full bg-primary-500 px-8 py-2 text-2xl font-bold text-white transition md:hover:bg-kv-green"
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 0C7.8351 0 0 7.83475 0 17.5C0 27.1652 7.8351 35 17.5 35C27.1649 35 35 27.1652 35 17.5C35 7.83475 27.1649 0 17.5 0ZM17.5 3.5C25.232 3.5 31.5 9.7685 31.5 17.5C31.5 25.2315 25.232 31.5 17.5 31.5C9.76797 31.5 3.5 25.2315 3.5 17.5C3.5 9.7685 9.76797 3.5 17.5 3.5ZM17.5 8.75C16.5335 8.75 15.75 9.534 15.75 10.5C15.75 11.466 16.5335 12.25 17.5 12.25C18.4665 12.25 19.25 11.466 19.25 10.5C19.25 9.534 18.4665 8.75 17.5 8.75ZM17.5 14C16.5335 14 15.75 14.784 15.75 15.75V24.5C15.75 25.466 16.5335 26.25 17.5 26.25C18.4665 26.25 19.25 25.466 19.25 24.5V15.75C19.25 14.784 18.4665 14 17.5 14Z"
                      fill="white"
                    />
                  </svg>

                  報名注意事項
                </router-link>
              </div>
            </div>

            <div
              data-twe-modal-init
              class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden p-6 outline-none"
              id="modal01"
              tabindex="-1"
              aria-labelledby="modal01Label"
              aria-hidden="true"
            >
              <div
                data-twe-modal-dialog-ref
                class="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
              >
                <div
                  class="pointer-events-auto relative flex max-h-[100%] w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark"
                >
                  <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b p-4"
                  >
                    <h5 class="mx-auto text-xl font-bold" id="modal01Label ">
                      {{ modalOrder === 1 ? '福袋禮' : '早鳥禮' }}
                    </h5>
                    <button
                      type="button"
                      class="absolute -right-2 -top-2 z-10 box-content rounded-full border-none bg-white text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-twe-modal-dismiss
                      aria-label="Close"
                    >
                      <img width="40" src="/img/modal-close.svg" alt="" />
                    </button>
                  </div>

                  <div
                    id="modal01-container"
                    class="relative overflow-y-auto p-6"
                  >
                    <div class="flex flex-col gap-5 divide-y text-justify">
                      <div
                        v-for="(item, index) in selectedModalItems"
                        :key="index"
                        class="py-4"
                      >
                        <div class="mb-3">
                          <img
                            class="h-[300px] w-full bg-white object-contain text-center"
                            :src="`${imagePath}${item.id}`"
                            :alt="item.title"
                          />
                        </div>
                        <div class="mb-3 text-center text-xl font-bold">
                          <div class="mb-1">【{{ item.brand }}】</div>
                          <div v-html="item.title"></div>
                        </div>
                        <div v-html="item.description"></div>
                      </div>
                    </div>

                    <div
                      class="mt-4 rounded-lg bg-yellow-100 p-3 text-center text-xs font-bold text-primary-500"
                    >
                      <div>總價值超過 1,800 元</div>
                      <div>產品圖片僅供示意，以現場實物為主</div>
                      <div>現場不挑款式、花色，隨機出貨</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-twe-modal-init
              class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden p-6 outline-none"
              id="modal02"
              tabindex="-1"
              aria-labelledby="modal02Label"
              aria-hidden="true"
            >
              <div
                data-twe-modal-dialog-ref
                class="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
              >
                <div
                  class="pointer-events-auto relative flex max-h-[100%] w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark"
                >
                  <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b p-4"
                  >
                    <h5 class="mx-auto text-xl font-bold" id="modal02Label ">
                      乖乖桶-綜合水果軟糖
                    </h5>
                    <button
                      type="button"
                      class="absolute -right-2 -top-2 z-10 box-content rounded-full border-none bg-white text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-twe-modal-dismiss
                      aria-label="Close"
                    >
                      <img width="40" src="/img/modal-close.svg" alt="" />
                    </button>
                  </div>

                  <div class="relative overflow-y-auto p-6">
                    <div class="flex flex-col gap-5 divide-y text-justify">
                      <ul>
                        <li>
                          <img
                            class="h-[300px] w-full bg-white object-contain text-center"
                            src="/img/gift-lucky-bag/13.jpg"
                            alt=""
                          />
                        </li>
                        <li>★童年的回憶，經典軟糖</li>
                        <li>★口味繽紛，專屬你的甜蜜滋味。</li>
                        <li>★最經典的乖乖桶，陪每個世代長大的乖乖軟糖</li>
                        <li>規格：720g x 1桶</li>
                        <li>
                          銷售通路：超商、全聯、量販店、PChome24h購物、momo購物網、博客來
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .dashed-text-container {
    width: 100%;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    text-align: justify;
    line-height: 2;
    background-image: linear-gradient(
      to bottom,
      transparent,
      transparent calc(2em - 2px),
      rgba(255, 255, 255, 0.5) calc(2em - 2px),
      rgba(255, 255, 255, 0.5) 2em,
      transparent 2em
    );
    background-size: 100% 2em;
    background-position: 0 0;
    margin: 0.5em 0;
    font-weight: bolder;
  }
</style>
