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
    }
  ]

  onMounted(() => {
    const cards = container.value.querySelectorAll('.flip-card')
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.value,
        start: 'top 80%'
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
              <h2 class="text-center text-xl">
                {{ item.title }}
              </h2>
              <span class="h-full w-full scale-75 border border-white"></span>
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
    </div>
    <div class="container py-10">
      <div class="mb-8 text-center">
        <img class="mx-auto" width="300" src="/img/title-game.png" alt="" />
      </div>
      <div class="flex flex-col items-center gap-5">
        <div class="rounded-full bg-kv-green px-5 py-1 text-white">
          #十在好玩
        </div>
        <div class="text-center">
          各大知名品牌帶來寓教於樂、全家共玩的親子活動，<br />
          一起享受闖關集章、學習知識，共度好時光！
        </div>
      </div>
      <div class="mb-5 grid grid-cols-2 py-10 md:grid-cols-4 md:gap-5">
        <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
          <div>
            <span
              class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
        </div>
        <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
          <div>
            <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
            <span
              class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
        </div>
        <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
          <div>
            <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
            <span
              class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
        </div>
        <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
          <div>
            <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
            <span
              class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-5">
        <div class="rounded-full bg-kv-orange px-5 py-1 text-white">
          #十在好玩
        </div>
        <div class="text-center">
          小農市集一起來到野餐日！<br />
          產地直送有機蔬果及加工品一次購足，走走逛逛更要吃好、吃健康！
        </div>
      </div>
      <div class="mb-5 grid grid-cols-2 py-10 md:grid-cols-4 md:gap-5">
        <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
          <div>
            <span
              class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-orange px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
        </div>
        <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
          <div>
            <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
            <span
              class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-orange px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
        </div>
        <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
          <div>
            <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
            <span
              class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-orange px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
        </div>
        <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
          <div>
            <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
            <span
              class="absolute -end-3 -top-3 inline-block w-full max-w-[250px] rounded-tr-xl bg-kv-orange px-6 py-1.5 font-bold tracking-wide text-white"
            >
              早鳥加碼送
            </span>
          </div>
        </div>
      </div>
      <div class="mb-5 grid grid-cols-2 py-10 md:grid-cols-3 md:gap-10">
        <div class="relative rounded-tl-2xl bg-white p-3 shadow-md">
          <div>
            <img class="rounded-tl-2xl" src="/img/gift_01.png" alt="" />
          </div>
          <div class="relative">
            <div
              class="relative -end-8 -top-3 inline-block w-full rounded-tr-xl bg-kv-green px-6 py-1.5 font-bold tracking-wide text-white"
            >
              HALL搖滾樂團孩子搖滾演唱會
            </div>
            <div>
              平均年齡只有10歲的「J
              HALL樂團」成軍3年，是華語樂壇史上最年輕的兒童樂團，將帶來孩子也能搖滾的演唱會，為現場爸爸媽媽與小朋友帶來多首朗朗上口的歌曲，也為野餐日慶生，一起來搖滾Party吧！
            </div>
          </div>
        </div>
      </div>

      <div>
        <swiper
          :slides-per-view="isMobile ? 2.5 : 4"
          :space-between="isMobile ? 10 : 20"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false
          }"
          :pagination="{
            clickable: true
          }"
          :modules="[Pagination, Navigation]"
          navigation
          loop
        >
          <swiper-slide class="flex flex-col gap-3">
            <div
              class="h-[200px] w-full overflow-hidden"
              data-twe-toggle="modal"
              data-twe-target="#exampleModalCenter"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img src="/img/ticket-01.png" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div
        data-twe-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalCenter2"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-twe-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div
            class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark"
          >
            <div
              class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10"
            >
              <h5
                class="text-xl font-medium leading-normal text-surface dark:text-white"
                id="exampleModalCenterTitle"
              >
                Modal title
              </h5>
              <button
                type="button"
                class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                data-twe-modal-dismiss
                aria-label="Close"
              >
                <span class="[&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <!-- Modal body -->
            <div class="relative p-4">
              <p>This is a vertically centered modal.</p>
            </div>

            <!-- Modal footer -->
            <div
              class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10"
            >
              <button
                type="button"
                class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
                data-twe-modal-dismiss
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Close
              </button>
              <button
                type="button"
                class="ms-1 inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
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
