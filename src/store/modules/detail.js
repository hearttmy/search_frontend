const state = {
  item: {},
};

const mutations = {
  set_item: (state, data) => {
    state.item = data;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
