<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { scrollToElement } from '../../utils/scrollToElement'
  gsap.registerPlugin(ScrollTrigger)
  const isHovered = ref(null)
  const imagePath = import.meta.env.VITE_IMAGE_PATH

  const lotteryList = [
    // {
    //   id: '01.jpg',
    //   brand: '妙管家',
    //   name: '瞬潔洗潔精(果香葡萄柚)500g',
    //   description: '',
    //   price: '＄獎項價值 元 /  名'
    // },
    {
      id: '01.png',
      brand: 'igogosport思博特',
      name: 'myFirst Fone S3 4G 智慧兒童手錶',
      description:
        'S3除了具備精準的GPS定位，更具有完善的APP，介面美觀且多功能! 手錶上更有通話、視訊、MP3和SOS求救功能，還有專門設計給孩子的社交圈CIRCLE，讓孩子可以自由上傳心情與分享圖片，讓孩子與家長之間0距離！',
      price: '＄獎項價值 5,980 元 / 1 名'
    },
    {
      id: '02.jpg',
      brand: 'igogosport思博特',
      name: 'myFirst 3D Pen Make - 3D 列印筆',
      description:
        '培養孩子的美感，從小開始！myFirst 3D筆，選用無毒材料，孩子開心玩，爸媽好安心！此外加熱顏料更是溫感不燙，讓孩子可以盡情發揮創意做出獨特的3D作品，畫筆更不需要時刻充電，外出攜帶更方便！',
      price: '＄獎項價值 1,580元$ / 1 名'
    },
    {
      id: '03.jpg',
      brand: 'igogosport思博特',
      name: 'myFirst Camera 3 雙鏡頭兒童相機',
      description:
        '熱銷款兒童相機！鏡頭具備1600萬像素，此外更具備微距鏡頭，幫助寶貝更好對焦，還有前鏡頭讓寶貝輕鬆自拍、記錄生活，LED閃光燈，在黑暗的地方也可以捕捉畫面，內建麥克風，還可以錄影！是孩子記錄生活的最好玩伴！',
      price: '＄獎項價值 2,680 元 / 1 名'
    },
    {
      id: '04.jpg',
      brand: '台北喜來登大飯店',
      name: '手拉手樂園親子主題房住宿1晚',
      description:
        '台北喜來登大飯店以莫蘭迪色系融合動物童話繪本元素，打造四大主題「動物森林」、「叢林小鎮」、「史前探險」與「恐龍王國」故事場景客房，讓小孩玩到不想回家。入住主題親子客房皆可免費體驗樓層專屬「手拉手樂園」，分齡設計的室內遊戲區包含娃娃廚房、小車積木、樹洞滑梯，以及適合大小朋友的科技電玩區，為家庭的每一位成員打造一段充滿童趣與奇思妙想的歡聚之旅。（房型照片僅供參考，依實際入住房型為主）',
      price: '＄獎項價值 $13,000 元 / 1 名'
    },
    {
      id: '05.jpg',
      brand: '知覺優格',
      name: '優格飲12入 (口味隨機)',
      description:
        '清爽果粒 益菌隨行知覺優格飲採用100%無調整鮮乳，搭配精心手工調製的果醬，口感豐盈綿密，完美呈現真實水果的酸甜風味！首創添加「菊苣膳食纖維護好菌」，嚴選優質菌種與法國專利菌株，幫助維持消化道機能，輕鬆搖一搖，即可隨時補充活性益生菌，健康與美味隨行無負擔！',
      price: '＄獎項價值 1,176 元 / 10 名'
    },
    {
      id: '06.jpg',
      brand: '象印',
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
      price: '＄獎項價值 1,450 元 / 10 名'
    },
    {
      id: '07.jpg',
      brand: '福容大飯店-高雄店',
      name: '精緻豪華雙床房─動物園主題房型入住一晚(含早餐)',
      description:
        '交通位置相當便利的福容高雄店，步行5分鐘到輕軌真愛碼頭站、8分鐘到捷運鹽埕埔站。可搭乘輕軌一路玩高雄流行音樂中心、駁二藝術特區、棧貳庫，也可悠閒在愛河畔散步、騎單車、搭乘愛之船欣賞高雄港灣的日夜之美。',
      price: '＄獎項價值 10,780 元 / 1 名'
    },
    {
      id: '08.jpg',
      brand: '德恩奈',
      name: '專業口腔保健禮盒組',
      description:
        '內含德恩奈清新雙效漱口水500mlx1瓶+清淨涼牙膏156gx1支+美白牙膏125gx1支+夜用牙膏126gx1支+兒童牙膏90gx1支+前觸兒童牙刷x1支+極淨細絲牙刷2支 (總價值1125元) 適合全家人使用。',
      price: '＄獎項價值 1,125 元 / 10 名'
    },
    {
      id: '09.jpg',
      brand: '享居',
      name: '天絲兩用被(DtD)（圖案隨機）',
      description: `
           <p>DOTDOT 天絲兩用被，利用材質透氣與親膚度，可自由調整厚度，打造最單純的簡單舒適！</p>
           <p>輕巧多功能，雙面天絲材質，適合台灣氣候四季使用。額外可搭配水洗被胎來增加保暖度，還可以與DtD睡袋睡墊進行單邊結合。</p>
         `,
      price: '＄獎項價值 1,810 元 / 10 名'
    },
    {
      id: '10.jpg',
      brand: '未來親子',
      name: '小天下|書購書金 12,000元',
      description: `
        <p>小天下及未來出版所製作的書籍，不但備受小讀者的喜愛，更受師長父母的肯定。在每年所公布的金鼎獎、好書大家讀、行政院優良固書推薦等得獎書單中，小天下的出版品往往囊括超過三分之一的獎項。</p>
      `,
      price: '＄獎項價值 12,000 元 / 1 名'
    },
    {
      id: '11.jpg',
      brand: '未來親子',
      name: '小天下|書購書金 6,000元',
      description: `
        <p>小天下及未來出版所製作的書籍，不但備受小讀者的喜愛，更受師長父母的肯定。在每年所公布的金鼎獎、好書大家讀、行政院優良固書推薦等得獎書單中，小天下的出版品往往囊括超過三分之一的獎項。</p>
      `,
      price: '＄獎項價值 6,000 元 / 1 名'
    }
    // {
    //   id: '',
    //   brand: '',
    //   name: '',
    //   description: '',
    //   price: '＄獎項價值 元 /  名'
    // }
  ]

  const game01List = [
    {
      id: '/game-01/01.jpg',
      name: '懂吃！早餐小博士',
      description:
        '想要長高高又跑得快，早餐記得要吃、而且營養要均衡喔！快來找超人氣「小初牛牛」，帶你到初鹿牧場，一起認識好吃又營養的早餐，還有好玩的闖關遊戲，讓寶貝變身懂吃的早餐小博士！'
    },
    {
      id: '/game-01/02.jpg',
      name: 'myFirst 快樂「喀擦」冒險',
      description: `
          <p>喀擦！喀擦！還記得第一次使用相機的感動嗎？現在，讓孩子也來感受這份快樂吧！現場不僅可以體驗myFirst Camera50兒童相機，開啟充滿驚喜的「喀擦」冒險！用孩子的視角捕捉生活中美好瞬間，無論是小小的快樂、奇妙的發現，還是成長的點滴，每一張照片都是美好記憶！</p>
          <p>喀擦後，愛要分享！現場還可以利用myFirst Frame電子相框，把孩子作品瞬間送達爸媽爺奶身邊，讓全家人一起感受幸福時刻！myFirst 系列產品不僅記錄下孩子的快樂，也讓全家人的心更靠近！喀擦一下，開啟全家人的溫馨冒險！</p>
        `
    },
    {
      id: '/game-01/03.jpg',
      name: '食農趣學園',
      description:
        '快來接受「蔬果校長」的挑戰吧！土裡還是樹上？一起揭開蔬果的生長祕密！完成任務後，分享家人最愛吃的蔬菜和水果，還能探索它們從產地到餐桌的奇妙旅程。現場還有趣味小知識和互動闖關，讓大朋友小朋友輕鬆變身「食農小專家」，玩得開心又學到滿滿知識！'
    },
    {
      id: '/game-01/04.jpg',
      name: '太空補給站的玩具發送任務',
      description:
        '太空補給站發送緊急玩具需求！快看看手邊的玩具，將玩具分類，也將符合需求的玩具發送給補給站，分享給其他小朋友吧！'
    },
    {
      id: '/game-01/05.jpg',
      name: '「可爾必思」Peace小問答',
      description: `
        <p>「可爾必思」Peace小問答	"你對「可爾必思」認識多少呢?等你來挑戰! </p>
        <p>活動1.轉動輪盤回答問題，答對即可獲得口袋摺疊扇一個(數量有限)、闖關章一枚!</p>
        <p>活動2.「可爾必思」試飲</p>
        <p>活動3.按讚「可爾必思」FB或IG，與現場拍照道具合照，分享至個人FB或IG並tag#可爾必思，送水槍一支(數量有限)</p>
        `
    },
    {
      id: '/game-01/06.png',
      name: '保護萌牙大作戰',
      description:
        '可愛的小萌牙陪伴著我們開心吃飯、哈哈大笑，真的好重要！到底該怎麼保護寶貝小萌牙呢？快和牙寶寶迪恩一起來對抗蛀牙蟲，用德恩奈兒童口腔保健組每天認真刷牙，一起成為迪恩的好朋友！'
    }
    // {
    //   id: '/game-01/02.jpg',
    //   name: '',
    //   description: ''
    // }
  ]

  const game02List = [
    {
      id: '/game-02/01.jpg',
      name: '隨野家',
      description:
        '隨野家提供自由放養的優質雞蛋及加工品，同時致力於推廣友善農業與食農教育。我們精心設計兼具趣味與知識的多元體驗活動，適合各年齡層參與，讓大家在互動中深入了解從土地到餐桌的過程，並培養對環境永續的重視與實踐行動力。'
    },
    {
      id: '/game-02/02.jpeg',
      name: '五寮尖山羊乳',
      description:
        '讓你喝新鮮直送的羊奶！這是離台北最近的羊場：位於三峽，五寮尖山的酪農：阿順一家人，每日餵養自己種牧草，並常清洗羊床管理糞便（羊的身體乾淨了，奶也不騷了）他採用低溫巴士殺菌，無均值化處理，直接展現天然的乳脂肪的清爽口感，準備好來一罐嗎？'
    },
    {
      id: '/game-02/03.jpg',
      name: '錦川食堂	',
      description:
        '純米研磨、手工製作之港式蘿蔔糕 & 草仔粿，用料實在，無添加香精香料，讓您吃的健康吃的安心。蘿蔔糕讓您每一口都吃的到蘿蔔絲及綿密香甜 ; 而當您咬下草仔粿的第一口，Q彈的外皮加上層次感豐富的內餡，讓您一口接一口，停不下來。'
    },
    {
      id: '/game-02/04.jpg',
      name: '芭寶米生態農場',
      description:
        '「芭寶米」五代務農位於中壢市的芝芭里，主要種植桃園3號米、帶有淡淡芋香味，怎麼煮都好吃。碗糕使用100%在來米製作有著濃濃米香，讓人人都愛吃台灣米！'
    },
    {
      id: '/game-02/05.jpg',
      name: '添丁養生黑木耳',
      description:
        '(Tien-Ding)想找現炸菇菇、菇餅、白木耳露、黑木耳露和水果這裡通通有！新鮮養生又好吃！'
    },
    {
      id: '/game-02/06.png',
      name: '甜馨農場',
      description: '有機藍莓、無農藥草莓，品嚐每一口甜蜜～'
    },
    {
      id: '/game-02/07.jpg',
      name: '春蜂滿蜜大丘園',
      description: `
          <p>堅信「有樹枝，就有鳥棲」。腳踏實地養好每一隻蜂、採好每一滴蜜、做好每一個環節，用專業打磨每個“樹枝”，必會有識者擇木而棲。</p>
          <p>自然的天工是生命在綻放，養蜂的匠心是對這份事業的追求。打造一片養蜂「迦南之地」，流淌著蜂蜜的人間樂土，消費者值得信賴的蜂蜜代名詞。大丘園養蜂場用匠心致敬大自然，用誠意回饋每位消費者。</p>
        `
    },
    {
      id: '/game-02/08.jpg',
      name: '古稻樂埕',
      description: `
          <p>講究「古」早傳統的飼養方法，採用天然酵母配方的酒糟「稻」穀作飼料，追求和「樂」自然、環境友善的飼養空間，創造人文和雞隻豐饒薈萃的大「埕」院。</p>
          <p>孫家古道樂埕”的原創精神，就是堅持以給家人吃的真誠心意，來飼養每隻令人感動幸福的雞。期盼這份真心，同時也傳承分享給每一個值得健康的人。</p>
          <p>販售商品茶葉蛋、雞肉肉鬆、麻油雞湯、蔥油雞</p>
        `
    },
    {
      id: '/game-02/09.jpg',
      name: '遇米甜',
      description: `
          <p>白龍王水果玉米生食帶點像水梨，甘蔗香甜</p>
          <p>日本雙色水果玉米文青甜的特色，有點甜不會膩</p>
          <p>紫色甜玉米獨特少有的濃郁花青素，健康滿分甜玉米</p>
          <p>彩虹甜糯玉米口感QQ帶有嚼勁</p>
          <p>鮮嫩玉米筍高纖減重減脂的最佳蔬菜，玉米鬚還能煮茶喝，促進代謝</p>
          <p>水煮水果玉米孩子們的最愛</p>
        `
    },
    {
      id: '/game-02/10.jpg',
      name: '芭樂主子與辣小妹',
      description:
        '珍珠芭樂珍珠芭樂成熟時由濃綠轉為淡綠色，沾染晨露的果實特別脆口，質地細緻，但香甜回甘。'
    }
  ]

  const game03List = [
    {
      id: '/game-03/01.jpg',
      name: '新北市家教中心 無圖待補',
      description: '無圖代補'
    }
  ]

  const game04List = [
    {
      id: '/game-04/01.jpg',
      name: '探索縣市特色食材與永續飲食之旅',
      description:
        '來一場美味又綠意盎然的冒險吧！深入探索台灣各縣市的特色蔬果！從台北的多汁柑橘、台南的甜蜜鳳梨，到高雄的清新蓮霧，每一口都是在地的鮮美。如何將這些食材與低碳、零浪費的飲食理念結合，打造不僅好吃、還能幫助地球的永續生活方式？快來一起了解、品嚐並實踐！'
    },
    {
      id: '/game-04/02.jpg',
      name: '義美如木鮮乳永續自造所',
      description: ''
    }
  ]

  const game05List = [
    {
      id: '/game-05/01.jpg',
      name: '我是未來知識王',
      description:
        '浩瀚的知識宇宙，你掌握了多少奧秘呢？趕快加入這場知識宇宙大冒險，成為未來知識王，還可抽萬元大獎並獲得《未來兒童》《未來少年》雜誌及多項精美好禮。'
    },
    {
      id: '/game-05/02.jpg',
      name: '小天下',
      description: ''
    },
    {
      id: '/game-05/02.jpg',
      name: '未來親子故事屋',
      description:
        '	嚴選小天下人氣書籍與未來親子的小故事，跟著未來姐姐與來寶的腳步，一起進入歡樂有趣的故事樂園！'
    }
  ]

  const activityList2 = [
    {
      id: '',
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
      <span
        class="absolute right-3 top-0 z-10 w-[80px] md:-right-16 md:top-24 md:w-[150px]"
      >
        <img src="/img/kv-main-img.svg" alt="" width="150" />
      </span>
    </Header>
    <div class="bg-green">
      <div
        class="mx-5 flex max-w-[500px] divide-x divide-white rounded-bl-xl rounded-br-xl bg-primary-500 py-3 md:mx-auto"
      >
        <div
          class="cursor-pointer px-5 py-1 md:px-8"
          @click="scrollToElement('game-01')"
        >
          <img src="/img/game-tag-title-01.svg" alt="" />
        </div>
        <div
          class="cursor-pointer px-5 py-1 md:px-8"
          @click="scrollToElement('game-02')"
        >
          <img src="/img/game-tag-title-02.svg" alt="" />
        </div>
      </div>
      <div class="container py-16">
        <div class="mb-20 text-center">
          <img
            class="mx-auto mb-5 block"
            src="/img/title-game-main-01.svg"
            alt=""
          />
          <div class="text-center text-[20px] font-black">
            <div>兼具知識、趣味的闖關挑戰</div>
            <div>在未來親子野餐日10週年活動就玩得到！</div>
            <div>爸爸媽媽陪著孩子共同完成任務</div>
            <div>多樣品牌小禮拿滿滿，集滿10章再抽大獎！</div>
          </div>
        </div>
        <div id="game-01" class="text-center">
          <img class="mx-auto" width="450" src="/img/title-game.svg" alt="" />
        </div>
        <div class="flex flex-wrap items-center justify-center gap-5">
          <div
            class="w-[220px] px-5 py-1 pe-5 text-kv-green md:w-auto md:border-e md:border-kv-green"
          >
            <img src="/img/game-title-01.svg" alt="" />
          </div>
          <div class="text-[20px] font-black">
            各大知名品牌帶來寓教於樂、全家共玩的親子活動，<br
              class="hidden md:block"
            />
            一起享受闖關集章、學習知識，共度好時光！
          </div>
        </div>
        <div class="mb-5 grid gap-8 py-10 md:grid-cols-3">
          <GameItem :list="game01List" :className="'bg-kv-green'" />
        </div>

        <div class="flex flex-wrap items-center justify-center gap-5">
          <div
            class="w-[220px] px-5 py-1 pe-5 text-primary-500 md:w-auto md:border-e md:border-primary-500"
          >
            <img src="/img/game-title-02.svg" alt="" />
          </div>
          <div class="text-[20px] font-black">
            小農市集一起來到野餐日！<br class="hidden md:block" />
            產地直送有機蔬果及加工品一次購足，走走逛逛更要吃好、吃健康！
          </div>
        </div>
        <div class="mb-5 grid gap-8 py-10 md:grid-cols-3">
          <GameItem :list="game02List" />
        </div>

        <div class="flex flex-wrap items-center justify-center gap-5">
          <div
            class="w-[220px] px-5 py-1 pe-5 text-kv-green md:w-auto md:border-e md:border-kv-green"
          >
            <img src="/img/game-title-03.svg" alt="" />
          </div>
          <div class="text-[20px] font-black">
            讓教育與愛永續！新北市政府各單位攜手進駐，宣導政策並提供新知。<br
              class="hidden md:block"
            />
            全家人一起共學共讀，不能不知道的快訊一次掌握！
          </div>
        </div>
        <div class="mb-5 grid gap-8 py-10 md:grid-cols-3">
          <GameItem :list="game03List" :className="'bg-kv-green'" />
        </div>

        <div class="flex flex-wrap items-center justify-center gap-5">
          <div
            class="w-[220px] px-5 py-1 pe-5 text-kv-green md:w-auto md:border-e md:border-kv-green"
          >
            <img src="/img/game-title-04.svg" alt="" />
          </div>
          <div class="text-[20px] font-black">
            由四大品牌共同打造環保、低負擔的永續迷宮，<br
              class="hidden md:block"
            />
            讓資源與永續教育持續善的循環，帶孩子一起愛地球！
          </div>
        </div>
        <div class="mb-5 grid gap-8 py-10 md:grid-cols-3">
          <GameItem :list="game04List" />
        </div>

        <div class="flex flex-wrap items-center justify-center gap-5">
          <div
            class="w-[220px] px-5 py-1 pe-5 text-kv-green md:w-auto md:border-e md:border-kv-green"
          >
            <img src="/img/game-title-05.svg" alt="" />
          </div>
          <div class="text-[20px] font-black">
            未來親子推廣專區，跟著來寶一起聽故事、玩知識、塗塗鴉、看看書，<br
              class="hidden md:block"
            />
            感受知識與閱讀的無限樂趣！
          </div>
        </div>
        <div class="mb-5 grid gap-8 py-10 md:grid-cols-3">
          <GameItem :list="game05List" :className="'bg-kv-green'" />
        </div>
      </div>
      <span class="absolute -bottom-[80px] start-0 h-[100px] w-full">
        <img class="w-full" src="/img/bg-green-line-b.svg" alt="" />
      </span>
    </div>
    <div id="game-02" class="bg-yellow relative">
      <div class="container py-24">
        <div class="relative z-10 text-center">
          <img
            width="450"
            class="mx-auto"
            src="/img/title-lottery.svg"
            alt=""
          />
        </div>
        <div class="text-center text-[20px] font-black">
          <div>集滿10個闖關印章，就能兌換抽獎券！</div>
          <div>超過60個幸運獎項，超級豪禮等你來拿！</div>
        </div>
        <div class="my-8 grid items-stretch gap-8 md:grid-cols-3">
          <div
            v-for="(item, index) in lotteryList"
            :key="index"
            class="scroll-animate-zoomIn relative flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg"
            @mouseenter="isHovered = index"
            @mouseleave="isHovered = null"
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
            <div class="mb-3 px-3 text-center text-xl">
              <div class="mb-1 font-semibold text-primary-500">
                【{{ item.brand }}】
              </div>
              <h2 class="font-semibold text-primary-500">
                {{ item.name }}
              </h2>
            </div>
            <div
              class="mt-auto border-t p-3 text-center text-sm font-bold text-gray2-500"
            >
              {{ item.price }}
            </div>
            <div
              :class="`absolute inset-0 z-10 bg-white p-3 px-3 transition-opacity duration-300 ${
                isHovered === index ? 'opacity-100' : 'opacity-0'
              }`"
            >
              <div class="flex h-full flex-col">
                <div
                  class="mb-1 shrink-0 border-b p-2 text-center text-xl font-semibold text-primary-500"
                >
                  <span>【{{ item.brand }}】</span>
                  <h2 class="font-semibold text-primary-500">
                    {{ item.name }}
                  </h2>
                </div>
                <div
                  class="h-full grow overflow-auto py-3"
                  v-html="item.description"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
