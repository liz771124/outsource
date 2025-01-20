<script setup>
  import { ref, onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import gsap from 'gsap'

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#',
      required: true
    }
  })

  onMounted(() => {
    // 跳動與浮動的動畫
    gsap.to('.bounce-float', {
      y: '10px', // 向上移動 20px
      repeat: -1, // 無限重複
      yoyo: true, // 回彈效果
      ease: 'power1.inOut', // 平滑的加速與減速
      duration: 0.8 // 每個動作持續 0.8 秒
    })

    // 放大縮小的動畫
    gsap.to('.scale-bounce', {
      scale: 1.2, // 放大到 1.2 倍
      repeat: -1, // 無限重複
      yoyo: true, // 回彈效果
      ease: 'elastic.inOut(1, 0.5)', // 彈性動畫
      duration: 1.2 // 每個動作持續 1.2 秒
    })
  })
</script>
<template>
  <router-link
    :to="props.link"
    class="ms relative inline-block rounded-tl-3xl bg-kv-blue py-3 pe-20 ps-5 text-2xl font-bold tracking-wide text-white transition hover:bg-primary-500"
  >
    {{ props.title }}
    <span class="bounce-float absolute -end-[30px] -top-[50px]">
      <img src="/img/btn-d-01.png" alt="" />
    </span>
  </router-link>
</template>
