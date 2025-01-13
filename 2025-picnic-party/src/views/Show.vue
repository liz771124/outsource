<script setup>
  import { onMounted, ref } from 'vue'
  import { gsap } from 'gsap'
  const container = ref(null)
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const showItems = [
    {
      src: 'show-01.png',
      description: 'J HALL樂團，華語樂壇最年輕的兒童樂團，來搖滾吧！',
      link: '#'
    },
    {
      src: 'show-01.png',
      description: 'J HALL樂團，帶來多首朗朗上口的歌曲，慶生Party！',
      link: '#'
    },
    {
      src: 'show-01.png',
      description: 'J HALL樂團，一起來搖滾Party吧！',
      link: '#'
    }
  ]

  onMounted(() => {
    const cards = container.value.querySelectorAll('.flip-card')
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.value,
        start: 'top 80%' // 滑入觸發
      }
    })

    cards.forEach((card, index) => {
      timeline.to(
        card,
        {
          opacity: 1,
          rotateY: 0,
          duration: 0.6,
          delay: index * 0.25,
          ease: 'power2.out'
        },
        index * 0.3
      )
    })
  })
</script>
<template>
  <div>
    <Header />
    <div class="container py-10">
      <div ref="container" class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="(item, index) in showItems"
          :key="index"
          class="flip-card opacity-0"
        >
          <div class="flip-card-inner">
            <div class="flip-card-front flex flex-col">
              <img
                :src="`${imagePath}${item.src}`"
                :alt="item?.title"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="flex flex-col p-4">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div>舞台時程表</div>
      <div>
        <ol class="relative border-s border-gray-600">
          <li class="mb-10 ms-4">
            <div
              class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary-500"
            ></div>
            <time
              class="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500"
              >11:00~11:30</time
            >
            <h3 class="text-2xl font-semibold text-gray-900">
              活動開始 來寶唱跳秀
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500">
              說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字
            </p>
            <!-- <a
              href="#"
              class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >Learn more
              <svg
                class="ms-2 h-3 w-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> -->
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style>
  .flip-card {
    perspective: 1000px;
    transform: rotateY(-180deg);
  }
  .flip-card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .flip-card-front,
  .flip-card-back {
    backface-visibility: hidden;
  }
  .flip-card-back {
    transform: rotateY(180deg);
  }
</style>
