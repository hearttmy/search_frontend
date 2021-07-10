const state = {
  themeColor: "#f06292",
};

const mutations = {
  SET_THEMECOLOR: (state, themeColor) => {
    state.themeColor = themeColor;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};
