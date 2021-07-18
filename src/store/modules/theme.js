const state = {
  themeColor: "#1cafc5",
};

const mutations = {
  set_themeColor: (state, themeColor) => {
    state.themeColor = themeColor;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};
