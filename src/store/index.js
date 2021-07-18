import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import theme from "./modules/theme";
import search from "./modules/search";
import detail from "./modules/detail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme,
    search,
    detail,
  },
  getters,
});
