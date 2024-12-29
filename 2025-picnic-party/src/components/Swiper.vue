<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import SwiperComponent from '../components/Swiper.vue'

const container = ref(null)
const circle = ref(null)
const items = ref([{ text: '我的第一個待辦事項' }])

function onClickGood(event) {
  gsap.to(event.target, { rotation: '+=360' })
}

onMounted(() => {
  gsap.from('.box', { opacity: 0, stagger: 0.1 })
  gsap.to('.box', { rotation: '+=360', duration: 3 })
  gsap.to(circle.value, { rotation: '-=360', duration: 3 })
})

function addItem(formData) {
  const newItem = formData.get('item')
  items.value.push({ text: newItem })
}
</script>

<template>
  <header class="flex h-screen items-center justify-center bg-cover bg-no-repeat p-5">
    <div class="flex flex-col gap-5">
      <router-link to="/">
        <img src="../assets/img/date.png" alt="date" width="500" height="400" />
      </router-link>
    </div>
  </header>

  <section>
    <div class="flex flex-col gap-5 text-center">
      <div>未來親子野餐日陪伴孩子10週年啦！</div>
      <div>期待能陪伴孩子，朝著更美好的未來邁進！</div>
    </div>
  </section>

  <div class="grid min-h-screen grid-rows-[20px_1fr_20px] items-center gap-16 p-8 pb-20">
    <SwiperComponent />
  </div>

  <div ref="container">
    <button @click="onClickGood" class="good h-20 w-20 bg-red-500">111</button>
    <div class="box h-10 w-10 rounded-full bg-yellow-400">selector</div>
    <div ref="circle" class="circle h-10 w-10 rounded-full bg-green-400">Ref</div>
  </div>
</template>
