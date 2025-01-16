<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
  })

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

    // 2. 單一 item 滑入時彈跳放大縮小效果
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
      <div class="container py-10">
        <div
          class="relative grid divide-x divide-white rounded-xl bg-primary-500 p-8 md:grid-cols-2"
        >
          <span
            class="bg-kv-yellow absolute -top-5 start-5 inline-block rounded-tr-3xl py-2 pe-5 ps-6 text-2xl font-bold tracking-wide"
          >
            報名送福袋
          </span>
          <div class="text-center">
            <img src="/img/gift-intro-07.svg" alt="" />
          </div>
          <div class="text-center">
            <img src="/img/gift-intro-08.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
