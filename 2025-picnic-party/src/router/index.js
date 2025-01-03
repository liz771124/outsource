import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Index.vue";
import Gift from "@/views/Gift.vue";
import Game from "@/views/Game.vue";
import Knowledge from "@/views/Knowledge.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/gift", component: Gift },
  { path: "/game", component: Game },
  { path: "/knowledge", component: Knowledge },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
