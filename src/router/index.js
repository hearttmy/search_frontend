import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Search from "../views/Search/Search.vue";
import Test from "../views/Test/Test.vue";
import Details from "../views/Details/Details.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
