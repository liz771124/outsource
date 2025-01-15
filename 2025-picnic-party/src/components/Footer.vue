<script setup>
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>
<template>
  <footer class="bg-primary-500 text-white">
    <div class="container">
      <div class="py-4">
        <div class="text-center">
          <div class="text-sm">
            Copyright© 1999~2025 遠見天下文化出版股份有限公司. All rights
            reserved.<br />

            未來親子學習平台 | 小天下 | 未來出版 | 未來少年 | 未來兒童 |
            未來Family | 遠見‧天下文化教育基金會<br />

            服務專線：(02)2662-0012 服務時間：週一~週五 9:00~12:30,13:30~17:00
          </div>
        </div>
        <div class="fixed bottom-5 right-3 w-[80px]">
          <img src="/img/fixed-buy.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>
