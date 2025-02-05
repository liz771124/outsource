<script setup>
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { Offcanvas, initTWE } from 'tw-elements'
  const route = useRoute()
  const navItems = [
    { to: '/', label: '首頁' },
    { to: '/gift', label: '互動好禮' },
    { to: '/game', label: '歡樂闖關' },
    { to: '/show', label: '精采表演' },
    { to: '/Article', label: '閱讀好文' },
    { to: '/notice', label: '詳細資訊' }
  ]

  onMounted(() => {
    initTWE({ Offcanvas })
  })
</script>
<template>
  <nav class="sticky top-0 z-20 h-[65px] bg-kv-green py-1.5 shadow-lg">
    <div class="container flex items-center justify-between">
      <h1>
        <router-link to="/">
          <img src="/img/logo.svg" alt="logo" width="135" />
        </router-link>
      </h1>
      <ul class="hidden items-center gap-3 lg:flex">
        <li v-for="(item, index) in navItems" :key="index">
          <router-link
            :to="item.to"
            :class="[
              'rounded-full bg-white px-4 py-1 text-xl font-bold transition hover:bg-primary-500 hover:text-white',
              route.path === item.to ? 'text-primary-500' : 'text-kv-green'
            ]"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
      <div class="text-white lg:hidden">
        <svg
          data-twe-offcanvas-toggle
          data-twe-target="#offcanvasTop"
          aria-controls="offcanvasTop"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          fill="currentColor"
          width="35"
          height="35"
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
        class="invisible fixed bottom-0 left-0 right-0 top-0 z-[1045] flex h-[200px] max-h-full max-w-full -translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none dark:bg-body-dark dark:text-white"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        data-twe-offcanvas-init
      >
        <div class="flex items-center justify-between p-4">
          <h5 class="mb-0 font-semibold leading-normal" id="offcanvasTopLabel">
            <router-link to="/">
              <img src="/img/logo.svg" alt="logo" width="135" />
            </router-link>
          </h5>
          <button
            type="button"
            class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
            data-twe-offcanvas-dismiss
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
        <div class="flex-grow overflow-y-auto px-4">
          <ul class="grid grid-cols-3 justify-between gap-3 text-2xl">
            <li
              v-for="(item, index) in navItems"
              :key="index"
              data-twe-offcanvas-dismiss
            >
              <router-link
                :to="item.to"
                :class="[
                  'block rounded-full px-4 py-2 text-center text-xl font-bold text-white',
                  route.path === item.to ? 'bg-primary-500' : 'bg-kv-green'
                ]"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
