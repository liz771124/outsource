<script setup>
  import { onMounted } from 'vue'
  import { Offcanvas, initTWE } from 'tw-elements'
  onMounted(() => {
    initTWE({ Offcanvas })
  })
</script>
<template>
  <nav class="sticky top-0 z-10 bg-kv-green py-2">
    <div class="container flex items-center justify-between">
      <h1>
        <router-link to="/">
          <img src="/img/logo.svg" alt="logo" width="150" />
        </router-link>
      </h1>
      <ul class="hidden items-center gap-5 md:flex">
        <li>
          <router-link
            to="/gift"
            class="rounded-full bg-white px-4 py-2 text-xl font-bold text-kv-green"
            >互動好禮</router-link
          >
        </li>
        <li>
          <router-link
            to="/game"
            class="rounded-full bg-white px-4 py-2 text-xl font-bold text-kv-green"
            >歡樂闖關</router-link
          >
        </li>
        <li>
          <router-link
            to="/show"
            class="rounded-full bg-white px-4 py-2 text-xl font-bold text-kv-green"
            >精彩表演</router-link
          >
        </li>
        <li>
          <router-link
            to="/information"
            class="rounded-full bg-white px-4 py-2 text-xl font-bold text-kv-green"
            >延伸閱讀</router-link
          >
        </li>
        <li>
          <router-link
            to="/notice"
            class="rounded-full bg-white px-4 py-2 text-xl font-bold text-kv-green"
            >更多資訊</router-link
          >
        </li>
      </ul>
      <div class="text-white md:hidden">
        <svg
          data-twe-offcanvas-toggle
          data-twe-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          fill="currentColor"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="menu-2">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />

              <circle cx="4" cy="12" r="1" />

              <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />

              <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />

              <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
            </g>
          </g>
        </svg>
      </div>

      <div
        class="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none dark:bg-body-dark dark:text-white"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-twe-offcanvas-init
      >
        <div class="offcanvas-body flex-grow overflow-y-auto p-4">
          <ul class="flex flex-col gap-5 text-2xl">
            <li class="border-b">
              <router-link to="/gift" class="text-xl font-bold"
                >互動好禮</router-link
              >
            </li>
            <li class="border-b">
              <router-link to="/game" class="text-xl font-bold"
                >闖關好樂</router-link
              >
            </li>
            <li class="border-b">
              <router-link to="/show" class="text-xl font-bold"
                >派對好秀</router-link
              >
            </li>
            <li class="border-b">
              <router-link to="/knowledge" class="text-xl font-bold"
                >知識好訊</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
