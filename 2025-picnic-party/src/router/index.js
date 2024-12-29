import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Gift from "../views/Gift.vue";
import Game from "../views/Game.vue";
import Knowledge from "../views/Knowledge.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/gift", component: Gift },
  { path: "/game", component: Game },
  { path: "/knowledge", component: Knowledge },
];

const router = createRouter({
  history: createWebHashHistory(), // 使用 Hash 模式，避免靜態頁面無法處理路由
  routes,
});

export default router;
