<script setup>
  import BG from '@/assets/img/kv-main.png'
</script>
<template>
  <header
    class="flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat p-5"
    :style="{ backgroundImage: `url(${BG})` }"
  >
    <div class="flex flex-col gap-5">
      <slot />
    </div>
  </header>
</template>
