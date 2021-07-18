import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import theme from "./modules/theme";
import classify from './modules/classify'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme,
    classify,
  },
  getters,
});
