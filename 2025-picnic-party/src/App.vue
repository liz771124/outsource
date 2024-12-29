<template>
  <div>
    <nav>
      <a href="#/">首頁</a>
      <a href="#/gift">禮物</a>
      <a href="#/game">遊戲</a>
      <a href="#/knowledge">知識</a>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  color: blue;
}
a:hover {
  text-decoration: underline;
}
</style>
