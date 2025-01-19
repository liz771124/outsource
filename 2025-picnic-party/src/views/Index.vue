<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Tooltip, Modal, Collapse, initTWE } from 'tw-elements'

  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
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
    gsap.utils.toArray('.animate-zoom-right').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: 50 },
        {
          scrollTrigger: {
            trigger: element,
            start: 'left 80%',
            toggleActions: 'play none none none'
          },
          duration: 0.8,
          opacity: 1,
          x: 0,
          ease: 'power3.out'
        }
      )
    })

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
      <!-- <router-link to="/">
        <img src="/img/kv-index.png" alt="" width="650" />
      </router-link> -->
    </Header>

    <div>
      <div class="bg-yellow py-16">
        <div class="container">
          <div class="animate-zoom-in flex flex-wrap gap-3">
            <iframe
              class="aspect-video mx-auto w-full max-w-[700px] md:h-[450px]"
              src="https://www.youtube.com/embed/Sef8LyqvRJk?si=qtjNJwouQu-pgyAa&amp;controls=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div
              class="flex grow flex-col items-center justify-center gap-3 text-xl font-black text-kv-blue md:px-5"
            >
              <p class="animate-zoom-in">未來親子野餐日陪伴孩子10週年啦！</p>
              <p class="animate-zoom-in">
                不只是我們共創的里程碑，也象徵著「幸福永續」
              </p>
              <p class="animate-zoom-in">
                期待能陪伴孩子，朝著更美好的未來邁進！
              </p>
              <p class="animate-zoom-in">更多歡樂、甜蜜的親子時光，</p>
              <p class="animate-zoom-in">就從今年的10歲生日派對開始吧！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green py-16">
        <div class="container flex flex-col gap-10">
          <a
            href="#"
            class="animate-zoom-right rounded-rl-2xl relative rounded-bl-[50px] rounded-tr-[50px] bg-primary-500 p-6 text-white"
          >
            <div
              class="flex flex-wrap items-stretch justify-between md:flex-nowrap md:gap-10"
            >
              <div class="lg:shrink-0">
                <img class="w-full" src="/img/index-intro-02.png" alt="" />
              </div>
              <div class="relative grow p-5">
                <div class="relative mb-3 inline-block pe-5 ps-3">
                  <span
                    class="absolute bottom-0 left-0 w-full rounded-tr-xl bg-kv-yellow px-6 py-2"
                  ></span>
                  <span
                    class="relative z-10 text-4xl font-black tracking-wide text-white"
                    >精彩表演</span
                  >
                </div>
                <div class="flex w-full flex-col text-2xl tracking-wider">
                  <div class="border-b border-dashed border-white py-2">
                    孩子的春日派對、大人的歡聚時光！
                  </div>
                  <div class="border-b border-dashed border-white py-2">
                    最精彩好看的舞台節目都在這，
                  </div>
                  <div class="border-b border-dashed border-white py-2">
                    準備好一起 High 翻天吧！
                  </div>
                </div>
                <div class="absolute -bottom-10 start-10 hidden md:block">
                  <img
                    class="w-[130px]"
                    src="/img/index-intro-icon-01.png"
                    alt=""
                  />
                </div>
                <div
                  class="absolute -bottom-10 end-0 inline-block rounded-tr-xl bg-kv-green px-10 py-1.5 text-2xl tracking-wide text-white"
                >
                  看看表演
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            class="animate-zoom-left rounded-rl-2xl relative rounded-br-[50px] rounded-tl-[50px] bg-kv-green p-6 text-white"
          >
            <div
              class="flex flex-wrap items-stretch justify-between md:flex-nowrap md:gap-10"
            >
              <div class="order-2 lg:shrink-0">
                <img class="w-full" src="/img/index-intro-02.png" alt="" />
              </div>
              <div class="relative grow p-5">
                <div class="relative mb-3 inline-block pe-5 ps-3">
                  <span
                    class="absolute bottom-0 left-0 w-full rounded-tr-xl bg-kv-yellow px-6 py-2"
                  ></span>
                  <span
                    class="relative z-10 text-4xl font-black tracking-wide text-white"
                    >趣味闖關</span
                  >
                </div>
                <div class="flex w-full flex-col text-2xl tracking-wider">
                  <div class="border-b border-dashed border-white py-2">
                    十大主題，兼具知識與趣味的闖關挑戰，
                  </div>
                  <div class="border-b border-dashed border-white py-2">
                    親子共同完成任務，還有小農市集，
                  </div>
                  <div class="border-b border-dashed border-white py-2">
                    美好回憶獎不完！
                  </div>
                </div>
                <div class="end-15 absolute -bottom-10 hidden md:block">
                  <img
                    class="w-[130px]"
                    src="/img/index-intro-icon-02.png"
                    alt=""
                  />
                </div>
                <div
                  class="absolute -bottom-10 end-0 inline-block rounded-tl-xl bg-primary-500 px-10 py-1.5 text-2xl tracking-wide text-white"
                >
                  看看闖關
                </div>
              </div>
            </div>
          </a>
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
              class="mb-16 flex flex-wrap items-center justify-between gap-8 md:flex-nowrap"
            >
              <a class="animate-zoom-in relative" href="#">
                <img src="/img/ticket-01.png" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl bg-kv-green px-10 py-3 text-center text-2xl font-bold tracking-wide text-white"
                >
                  立即購票
                </div>
              </a>
              <a class="animate-zoom-in relative" href="#">
                <img src="/img/ticket-02.png" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl bg-primary-500 px-10 py-3 text-center text-2xl font-bold tracking-wide text-white"
                >
                  立即購票
                </div>
              </a>
              <a class="animate-zoom-in relative" href="#">
                <img src="/img/ticket-03.png" alt="" />
                <div
                  class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl bg-kv-green px-10 py-3 text-center text-2xl font-bold tracking-wide text-white"
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
