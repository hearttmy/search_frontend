import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Search from "../views/Search/Search.vue";
import Detail from "../views/Detail/Detail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/search", name: "Search", component: Search },
  {
    path: "/detail/:id",
    name: "Detail",
    redirect: "/detail/:id/summary",
    component: Detail,
    children: [
      {
        path: "summary",
        name: "summary",
        component: () => import("@/views/Summary/Summary"),
        meta: {
          title: "概览",
        },
      },
      {
        path: "position",
        name: "position",
        component: () => import("@/views/Position/Position"),
        meta: {
          title: "交通位置",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  const fromPath = from.path.split("/")[1];
  const toPath = to.path.split("/")[1];
  if (toPath !== fromPath) {
    window.scrollTo(0, 0);
  }
});

export default router;
