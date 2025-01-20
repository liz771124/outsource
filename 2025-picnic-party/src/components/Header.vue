<script setup>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import kvMain from '@/assets/img/kv-main.png'
</script>
<template>
  <header
    class="flex h-[600px] w-screen items-center justify-center bg-cover bg-no-repeat p-5"
    :style="{ backgroundImage: `url(${kvMain})`, backgroundPosition: 'center' }"
  >
    <div class="flex flex-col gap-5">
      <slot />
    </div>
  </header>
</template>
