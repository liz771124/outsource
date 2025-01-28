<script setup>
  import { ref, onMounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'
  import gsap from 'gsap'
  const props = defineProps({
    className: {
      type: String,
      default: 'bg-primary-500'
    },
    list: {
      type: Array,
      required: true
    }
  })
  const { list } = props
  const isHovered = ref(null)
  const imagePath = import.meta.env.VITE_IMAGE_PATH
</script>

<template>
  <div
    v-for="(item, index) in list"
    :key="index"
    class="scroll-animate-fadeInUp ms:p-2.5 animate-slideIn px-1 pb-5"
  >
    <a
      :href="item.link"
      target="_blank"
      class="relative block rounded-tl-2xl bg-white px-3 pt-3 shadow-lg"
    >
      <div class="flex flex-col">
        <div class="mb-3">
          <img class="rounded-tl-2xl" :src="item.src" :alt="item.title" />
        </div>
      </div>
      <div
        :class="`relative -bottom-3 -start-0 line-clamp-2 inline-block h-[58px] w-[calc(100%+30px)] rounded-tr-xl px-2 py-1.5 text-left font-bold tracking-wide text-white ${className}`"
      >
        {{ item.title }}
      </div>
    </a>
  </div>
</template>
