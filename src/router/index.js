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
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
