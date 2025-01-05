<script setup>
  // import sponsors from '@/composables/useSponsors'
</script>

<template>
  <div>
    <div class="container">
      <div>
        <div class="border-6 mb-3 border-b border-black py-3 font-bold">
          主辦單位
        </div>
        <div class="flex gap-3">
          <a href="#" target="_blank">
            <img src="/img/sponsor/logo01.jpg" alt="" />
          </a>
          <a href="#" target="_blank"
            ><img src="/img/sponsor/logo02.jpg" alt="" />
          </a>
        </div>
      </div>
      <div>
        <div class="border-6 mb-3 border-b border-black py-3 font-bold">
          協辦單位
        </div>
        <div class="flex gap-3">
          <a href="#" target="_blank">
            <img src="/img/sponsor/logo03.jpg" alt="" />
          </a>
        </div>
      </div>
      <div>
        <div class="border-6 mb-3 border-b border-black py-3 font-bold">
          共同主辦
        </div>
        <div class="flex gap-3">
          <a href="#" target="_blank">
            <img src="/img/sponsor/logo04.png" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="/img/sponsor/logo05.png" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="/img/sponsor/logo06.png" alt="" />
          </a>
        </div>
      </div>
      <!-- <div class="grid grid-cols-2 items-center md:grid-cols-4">
        <div v-for="(src, name) in sponsors" :key="name" class="text-center">
          <img :src="src" :alt="name" class="mx-auto" />
        </div>
      </div> -->
    </div>
  </div>
</template>
