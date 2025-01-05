<script setup>
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>
<template>
  <footer class="bg-white tracking-wide md:bg-transparent">
    <div
      class="container mx-auto flex flex-wrap items-center justify-between gap-5 px-3 py-5 text-sm"
    >
      <div class="flex grow flex-wrap items-center gap-2">
        <a class="mx-auto md:mx-0" href="#" target="_blank">
          <img
            class="max-f-full"
            width="120"
            src="../assets/img/footer-logo.svg"
            alt="logo"
          />
        </a>
        <div>
          <ul class="mb-2 flex flex-wrap divide-x">
            <li class="px-2">
              <a
                href="https://futureparenting.cwgv.com.tw/"
                title="未來親子學習平台"
                target="_blank"
                >未來親子學習平台</a
              >
            </li>
            <li class="px-2">
              <a
                href="https://futureparenting.cwgv.com.tw/kids"
                title="小天下 / 未來出版"
                target="_blank"
                >小天下 / 未來出版</a
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
                href="https://futureparenting.cwgv.com.tw/family"
                title="未來Family"
                target="_blank"
                >未來Family</a
              >
            </li>
          </ul>
          <div class="px-2">
            Copyright © 未來親子學習平台﹒All rights reserved.
          </div>
        </div>
      </div>
      <div>
        <ul class="mb-2 flex flex-wrap divide-x text-end">
          <li class="px-2">
            <a
              href="https://futuredata.cwgv.com.tw/copyright/index/A"
              title="著作權聲明"
              target="_blank"
              >著作權聲明</a
            >
          </li>
          <li class="px-2">
            <a
              href="https://futuredata.cwgv.com.tw/copyright/index/B"
              title="隱私權政策"
              target="_blank"
              >隱私權政策</a
            >
          </li>
        </ul>
        <ul class="flex divide-x text-end">
          <li class="px-2">
            <a
              href="https://futuredata.cwgv.com.tw/copyright/index/C"
              title="個資保護聲明"
              target="_blank"
              >個資保護聲明</a
            >
          </li>
          <li class="px-2">
            <a
              href="https://futuredata.cwgv.com.tw/qa"
              title="QA"
              target="_blank"
              >常見問題</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="fixed bottom-5 end-3 flex flex-col items-center gap-3">
      <img width="80" height="80" src="/img/fixed-btn-01.png" alt="" />
      <img width="80" height="80" src="/img/fixed-btn-02.png" alt="" />
      <img
        @click="goTop"
        class="cursor-pointer"
        width="40"
        height="40"
        src="/img/go-top.svg"
        alt=""
      />
    </div>
  </footer>
  <!-- <footer class="bg-primary-500 text-white">
    <div class="container">
      <div class="flex items-center py-4">
        <div>
          Copyright© 1999~2025遠見天下文化出版股份有限公司. All rights
          reserved.<br />

          未來親子學習平台 | 小天下 | 未來出版 | 未來少年 | 未來兒童 |
          未來Family | 遠見‧天下文化教育基金會<br />

          服務專線：(02)2662-0012 服務時間：週一~週五 9:00~12:30,13:30~17:00
        </div>
      </div>
    </div>
  </footer> -->
</template>
