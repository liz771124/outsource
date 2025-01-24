<script setup>
  import { ref, onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import gsap from 'gsap'

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  onMounted(() => {
    // 放大縮小的動畫
    gsap.to('.scale-bounce', {
      scale: 0.9,
      repeat: -1,
      yoyo: true,
      ease: 'elastic.inOut(.2, 0.5)',
      duration: 1.2
    })
  })
</script>
<template>
  <footer class="bg-primary-500 text-white">
    <div class="container">
      <div class="py-4">
        <div class="text-center">
          <div class="text-sm">
            <ul
              class="flex flex-wrap justify-center gap-y-1 divide-x text-center md:mx-0 md:flex-nowrap md:text-start"
            >
              <li class="px-2">
                <a
                  href="https://futureparenting.cwgv.com.tw/"
                  title="未來親子學習平台"
                  target="_blank"
                  >未來親子</a
                >
              </li>
              <li class="px-2">
                <a
                  href="https://futureparenting.cwgv.com.tw/kids"
                  title="小天下．未來出版"
                  target="_blank"
                  >小天下．未來出版</a
                >
              </li>
              <li class="px-2">
                <a
                  href="https://futureparenting.cwgv.com.tw/junior"
                  title="未來兒童"
                  target="_blank"
                  >未來兒童
                </a>
              </li>
              <li class="px-2">
                <a
                  href="https://futureparenting.cwgv.com.tw/youth"
                  title="未來少年"
                  target="_blank"
                  >未來少年</a
                >
              </li>
              <li class="px-2">
                <a
                  href="https://futureacademy.cwgv.com.tw/"
                  title="線上學院"
                  target="_blank"
                  >線上學院</a
                >
              </li>
            </ul>
            <div class="mt-3">
              服務專線：(02)2662-0012 服務時間：週一~週五 9:00~12:30 13:30~17:00
            </div>
            <div>
              Copyright© 1999~2025 遠見天下文化出版股份有限公司. All rights
            </div>
            <ul class="mt-5 flex items-center justify-center gap-5">
              <li>
                <a href="#" target="_blank">
                  <img src="/img/icon-facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="/img/icon-instagram.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="/img/icon-line.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="fixed bottom-5 end-3 z-30 flex flex-col items-center justify-center"
        >
          <router-link to="/#purchase" class="scale-bounce w-[80px]">
            <img src="/img/fixed-buy-02.svg" alt="" />
          </router-link>
          <div @click="goTop" class="mt-5 h-[65px] w-[65px] cursor-pointer">
            <img src="/img/gotop.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
