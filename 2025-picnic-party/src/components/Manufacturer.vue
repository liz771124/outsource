<script setup>
  const imagePath = import.meta.env.VITE_IMAGE_PATH
</script>

<template>
  <div>
    <div class="container">
      <div>
        <div class="mb-3 py-3 font-bold">主辦單位</div>
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
        <div class="mb-3 py-3 font-bold">協辦單位</div>
        <div class="flex gap-3">
          <a href="#" target="_blank">
            <img src="/img/sponsor/logo03.jpg" alt="" />
          </a>
        </div>
      </div>
      <div>
        <div class="mb-3 py-3 font-bold">共同主辦</div>
        <div class="flex gap-3">
          <a href="#" target="_blank">
            <img :src="`${imagePath}sponsor/logo04.png`" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
