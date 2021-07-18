const state = {
  word: "",
  area: "",
  sort: "",
};

const mutations = {
  set_word: (state, data) => {
    state.word = data;
  },
  set_area: (state, data) => {
    state.area = data;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};