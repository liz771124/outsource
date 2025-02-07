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
    class="scroll-animate-zoomIn group relative rounded-tl-2xl bg-white p-3 shadow-md"
    v-for="(item, index) in list"
    :key="index"
    @mouseenter="isHovered = index"
    @mouseleave="isHovered = null"
  >
    <div class="overflow-hidden">
      <span
        class="group:hover:translate-x-0 absolute inset-0 z-10 h-full overflow-hidden bg-white p-6 transition-opacity duration-300"
        :class="isHovered === index ? 'opacity-100' : 'opacity-0'"
      >
        <div class="mb-2 text-xl font-bold">{{ item.brand }}</div>
        <div v-html="item.description" class="h-full overflow-auto text-justify"></div>
      </span>
      <div
        class="aspect-h-3 aspect-w-3 overflow-hidden rounded-tl-2xl bg-gray-100 transition-opacity duration-300"
      >
        <img
          class="h-full w-full object-contain"
          :class="isHovered === index ? 'opacity-0' : 'opacity-100'"
          :src="`${imagePath}${item.id}`"
          alt=""
        />
      </div>
      <span
        :class="`absolute -end-3 -top-[23px] z-10 inline-block w-full max-w-[300px] rounded-tr-xl px-4 py-1.5 font-bold tracking-wide text-white ${className}`"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>
