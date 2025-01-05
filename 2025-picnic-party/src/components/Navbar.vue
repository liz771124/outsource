<template>
  <nav class="sticky top-0 z-10 bg-primary-500 px-3 py-3">
    <div class="container flex items-center justify-between px-3">
      <h1>
        <router-link to="/">
          <img
            src="../assets/img/logo.svg"
            alt="logo"
            width="180"
            height="90"
          />
        </router-link>
      </h1>
      <ul class="flex items-center gap-5">
        <li>
          <router-link to="/gift" class="text-xl font-bold text-white"
            >互動好禮</router-link
          >
        </li>
        <li>
          <router-link to="/game" class="text-xl font-bold text-white"
            >闖關好樂</router-link
          >
        </li>
        <li>
          <router-link to="/show" class="text-xl font-bold text-white"
            >派對好秀</router-link
          >
        </li>
        <li>
          <router-link to="/knowledge" class="text-xl font-bold text-white"
            >知識好訊</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
