<template>
  <nav class="sticky top-0 z-50 bg-primary-500 px-3 py-2">
    <div class="container flex items-center justify-between px-3">
      <h1>
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt="logo" width="180" height="90" />
        </router-link>
      </h1>
      <ul class="flex items-center gap-5">
        <li><router-link to="/" class="text-xl font-bold text-white hover:text-gray-50">首頁</router-link></li>
        <li><router-link to="/gift" class="text-xl font-bold text-white hover:text-gray-50">報名拿好禮</router-link></li>
        <li><router-link to="/game" class="text-xl font-bold text-white hover:text-gray-50">主題體驗區</router-link></li>
      </ul>
      <nav>
      <a href="/">首頁</a>
      <a href="/gift">禮物</a>
      <a href="/game">遊戲</a>
      <a href="/knowledge">知識</a>
    </nav>
    </div>
  </nav>
</template>