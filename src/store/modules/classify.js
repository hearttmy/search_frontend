import Vue from "vue";

const state = {
  options: [],
  optionNames: [],
};

const mutations = {
  setOption: (state, info) => {
    let id = info.id;
    let selected = info.selected;
    let name = info.name;
    Vue.set(state.optionNames, id, name);
    Vue.set(state.option, id, selected);
  },
  deleteOption: (state, id) => {
    state.options[id] = -1;
    state.optionNames[id] = null;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
};
