const state = {
  word: "",
  area: "",
  price: "",
  level: "",
  sort: "",
};

const mutations = {
  set_search: (state, data) => {
    state[data.key] = data.value;
    sessionStorage.setItem("search", JSON.stringify(state));
  },
  reset_type: (state) => {
    for (let key of Object.keys(state)) {
      if (key !== "word" && key !== "area") {
        state[key] = "";
      }
    }
  },
  getSessionStorage(state) {
    if (sessionStorage.getItem("search") != null) {
      const tmp = JSON.parse(sessionStorage.getItem("search"));
      for (let [key, val] of Object.entries(tmp)) {
        state[key] = val;
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
