<template>
  <nav class="sticky top-0 z-50 bg-primary-500 px-3 py-2">
    <div class="container flex items-center justify-between px-3">
      <h1>
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt="logo" width="180" height="90" />
        </router-link>
      </h1>
      <ul class="flex items-center gap-5">
        <li><router-link to="/" class="text-xl font-bold">首頁</router-link></li>
        <li><router-link to="/gift" class="text-xl font-bold">報名拿好禮</router-link></li>
        <li><router-link to="/game" class="text-xl font-bold">主題體驗區</router-link></li>
        <li><router-link to="/knowledge" class="text-xl font-bold">知識</router-link></li>
      </ul>
    </div>
  </nav>
</template>