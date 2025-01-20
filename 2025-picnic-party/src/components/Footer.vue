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
          <svg
            @click="goTop"
            class="mt-5 cursor-pointer"
            width="40"
            height="40"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.01 45.9001C35.5911 45.9001 45.79 35.7011 45.79 23.1201C45.79 10.539 35.5911 0.340088 23.01 0.340088C10.429 0.340088 0.22998 10.539 0.22998 23.1201C0.22998 35.7011 10.429 45.9001 23.01 45.9001Z"
              fill="#DBDCDC"
            />
            <path
              d="M22.37 15.99L22.4101 15.96H22.4201L22.45 15.93H22.48C22.51 15.88 22.54 15.85 22.58 15.84H22.61L22.6401 15.81C22.6801 15.8 22.7201 15.78 22.7601 15.77H22.7701L22.84 15.75H22.9201L22.98 15.74H23.1701L23.25 15.77H23.2601C23.2601 15.77 23.3401 15.8 23.3801 15.82L23.4101 15.84H23.44V15.85C23.48 15.86 23.5001 15.89 23.5401 15.93H23.5601L23.59 15.96H23.6L23.6401 16.01L30.96 23.33C31.31 23.7 31.31 24.27 30.96 24.63C30.6 24.98 30.0201 24.98 29.6601 24.63L23.9001 18.87V29.62C23.9001 30.12 23.49 30.54 22.99 30.54C22.49 30.54 22.08 30.12 22.08 29.62V18.87L16.33 24.63C15.97 24.98 15.4001 24.98 15.0301 24.63C14.6801 24.27 14.6801 23.7 15.0301 23.33L22.33 16.03H22.35L22.37 15.99Z"
              fill="#231815"
            />
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>
