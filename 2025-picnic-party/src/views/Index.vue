<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'

  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  const imagePath = import.meta.env.VITE_IMAGE_PATH

  const initializeAnimations = () => {
    // 清除所有 ScrollTrigger，避免動畫重疊
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    // Zoom In 動畫
    gsap.utils.toArray('.animate-zoom-in').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          duration: 0.8,
          opacity: 1,
          scale: 1,
          y: 0,
          ease: 'power3.out'
        }
      )
    })

    // Zoom Right 動畫
    // gsap.utils.toArray('.animate-zoom-right').forEach((element) => {
    //   gsap.fromTo(
    //     element,
    //     { opacity: 0, x: 50 },
    //     {
    //       scrollTrigger: {
    //         trigger: element,
    //         start: 'left 80%',
    //         toggleActions: 'play none none none'
    //       },
    //       duration: 0.8,
    //       opacity: 1,
    //       x: 0,
    //       ease: 'power3.out'
    //     }
    //   )
    // })

    // Zoom Left 動畫
    gsap.utils.toArray('.animate-zoom-left').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        {
          scrollTrigger: {
            trigger: element,
            start: 'right 80%',
            toggleActions: 'play none none none'
          },
          duration: 0.8,
          opacity: 1,
          x: 0,
          ease: 'power3.out'
        }
      )
    })
  }

  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse })
    initializeAnimations()
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })
</script>
<template>
  <div>
    <Header>
      <router-link to="/">
        <div class="relative">
          <img src="/img/kv-main.svg" alt="" width="650" />
          <img
            class="animate-bounceFloat absolute right-0 top-20"
            src="/img/kv-pic.svg"
            alt=""
            width="160"
          />
        </div>
      </router-link>
    </Header>

    <!-- <div class="animate-bounceFloat">上下跳動元素</div>
    <div class="animate-scaleBounce">放大縮小元素</div>
    <div class="animate-fadeIn">淡入元素</div>
    <div class="animate-slideIn">滑入元素</div>
    <div class="animate-rotateIn">旋轉元素</div>
    <div class="scroll-animate-fadeIn">滾動到這裡時淡入</div>
    <div class="scroll-animate-fadeInUp">從底部淡入</div>
    <div class="scroll-animate-slideInLeft">從左側滑入</div>
    <div class="scroll-animate-slideInRight">從右側滑入</div>
    <div class="scroll-animate-zoomIn">放大淡入</div>
    <div class="scroll-animate-flipIn">翻轉效果</div>
    <div class="scroll-animate-bounceIn">彈跳效果</div>
    <div class="scroll-animate-rotateIn">旋轉淡入</div>
    <div class="scroll-animate-flip3D">3D翻頁效果</div>
    <div class="scroll-animate-shake">震動效果</div>
 -->
    <div>
      <div class="bg-yellow py-16">
        <div class="container">
          <div class="animate-zoom-in flex flex-wrap gap-3 md:flex-nowrap">
            <iframe
              class="aspect-video mx-auto w-full max-w-[600px] md:h-[330px]"
              src="https://www.youtube.com/embed/Sef8LyqvRJk?si=qtjNJwouQu-pgyAa&amp;controls=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div
              class="flex grow flex-col items-center justify-center gap-3 text-xl font-black text-kv-blue"
            >
              <img class="w-full" src="/img/index-video-into.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green py-16">
        <span class="absolute -bottom-10 start-0">
          <img class="w-full" src="/img/bg-green-line-b.svg" alt="" />
        </span>
        <div class="container relative flex flex-col gap-10">
          <router-link
            class="animate-zoom-right rounded-rl-2xl relative rounded-bl-[50px] rounded-tr-[50px] bg-primary-500 p-6 text-white"
            to="/show"
          >
            <div
              class="flex flex-wrap items-stretch justify-between md:flex-nowrap md:gap-10"
            >
              <div class="lg:shrink-0">
                <img class="w-full" src="/img/index-intro-02.png" alt="" />
              </div>
              <div class="relative grow p-5">
                <div
                  class="relative z-10 flex text-[50px] font-black tracking-wide text-primary-500"
                >
                  <span
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-white"
                    >精</span
                  >
                  <span
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-white"
                    >彩</span
                  >
                  <span
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-white"
                    >表</span
                  >
                  <span
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-white"
                    >演</span
                  >
                </div>
                <div class="dashed-text-container">
                  孩子的春日派對、大人的歡聚時光！最精彩好看的舞台節目都在這，準備好一起
                  High 翻天吧！
                </div>
                <div class="absolute -bottom-10 start-10 hidden md:block">
                  <img
                    class="w-[130px]"
                    src="/img/index-intro-icon-01.png"
                    alt=""
                  />
                </div>
                <div
                  class="absolute -bottom-10 end-0 inline-block rounded-tr-xl bg-kv-green px-10 py-1.5 text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue"
                >
                  看看表演
                </div>
              </div>
            </div>
          </router-link>
          <router-link
            class="animate-zoom-left rounded-rl-2xl relative rounded-br-[50px] rounded-tl-[50px] bg-kv-green p-6 text-white"
            to="/game"
          >
            <div
              class="flex flex-wrap items-stretch justify-between md:flex-nowrap md:gap-10"
            >
              <div class="order-2 lg:shrink-0">
                <img class="w-full" src="/img/index-intro-03.png" alt="" />
              </div>
              <div class="relative order-2 grow p-5 md:order-1">
                <div
                  class="relative z-10 flex text-[50px] font-black tracking-wide text-kv-green"
                >
                  <span
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-white"
                    >趣</span
                  >
                  <span
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-white"
                    >味</span
                  >
                  <span
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-white"
                    >闖</span
                  >
                  <span
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-white"
                    >關</span
                  >
                </div>
                <div class="dashed-text-container">
                  十大主題，兼具知識與趣味的闖關挑戰，親子共同完成任務，還有小農市集，美好回憶獎不完！
                </div>
                <div class="end-15 absolute -bottom-10 hidden md:block">
                  <img
                    class="w-[130px]"
                    src="/img/index-intro-icon-03.png"
                    alt=""
                  />
                </div>
                <div
                  class="absolute -bottom-10 end-0 inline-block rounded-tl-xl bg-primary-500 px-10 py-1.5 text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue"
                >
                  看看闖關
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="bg-yellow py-16">
        <div class="container flex flex-col gap-10">
          <div class="flex flex-col items-center gap-2 text-2xl font-bold">
            <div class="mb-5">
              <img src="/img/title-ticket.png" alt="" />
            </div>
            <div>2025年4月3日10:30-15:00</div>
            <div>新北大都會公園</div>
          </div>
          <div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
              <div class="animate-zoom-in relative bg-white p-5 shadow-xl">
                <div>
                  <span class="bounce-float absolute -start-[30px] -top-[30px]">
                    <img
                      class="hidden md:block"
                      width="100"
                      src="/img/title-gift-01.svg"
                      alt=""
                    />
                  </span>
                  <img src="/img/gift_01.png" alt="" />
                  <span
                    class="absolute end-0 top-0 inline-block rounded-bl-3xl bg-primary-500 py-2 pe-5 ps-6 text-2xl font-bold tracking-wide text-white"
                  >
                    報名送福袋
                  </span>
                </div>
                <div
                  class="mt-3 text-center text-2xl font-black text-primary-500"
                >
                  限量 600 組！
                </div>
              </div>
              <div class="animate-zoom-in relative bg-white p-5 shadow-xl">
                <div>
                  <span class="bounce-float absolute -start-[30px] -top-[30px]">
                    <img
                      class="hidden md:block"
                      width="100"
                      src="/img/title-gift-02.svg"
                      alt=""
                    />
                  </span>
                  <img src="/img/gift_01.png" alt="" />
                  <span
                    class="absolute end-0 top-0 inline-block rounded-bl-3xl bg-primary-500 py-2 pe-5 ps-6 text-2xl font-bold tracking-wide text-white"
                  >
                    早鳥加碼送
                  </span>
                </div>
                <div
                  class="mt-3 text-center text-2xl font-black text-primary-500"
                >
                  限量 600 組！
                </div>
              </div>
            </div>
            <div
              id="purchase"
              class="m-10 mb-16 flex flex-wrap items-center justify-between gap-8 md:flex-nowrap"
            >
              <a class="animate-zoom-in group relative" href="#">
                <img src="/img/ticket-01.png" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl bg-kv-green px-10 py-3 text-center text-2xl font-bold tracking-wide text-white transition group-hover:bg-kv-blue"
                >
                  立即購票
                </div>
              </a>
              <a class="animate-zoom-in group relative" href="#">
                <img src="/img/ticket-02.png" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl bg-primary-500 px-10 py-3 text-center text-2xl font-bold tracking-wide text-white transition group-hover:bg-kv-blue"
                >
                  立即購票
                </div>
              </a>
              <a class="animate-zoom-in group relative" href="#">
                <img src="/img/ticket-03.png" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl bg-kv-green px-10 py-3 text-center text-2xl font-bold tracking-wide text-white transition group-hover:bg-kv-blue"
                >
                  立即購票
                </div>
              </a>
            </div>
            <div class="mt-5 text-center font-bold">
              ※【單組票】、【揪團票】、【慶生套票】下訂後，恕不接受換票。
            </div>
            <div class="mt-20 text-center font-bold">
              <ButtonJoin :title="'報名注意事項'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .dashed-text-container {
    width: 100%;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    line-height: 1.8;
    background-image: linear-gradient(
      to bottom,
      transparent,
      transparent calc(2em - 1px),
      rgba(255, 255, 255, 0.5) calc(2em - 1px),
      rgba(255, 255, 255, 0.5) 2em,
      transparent 2em
    );
    background-size: 100% 2em;
    background-position: 0 0;
    padding: 0.5em 0;
    font-weight: bolder;
  }
</style>
