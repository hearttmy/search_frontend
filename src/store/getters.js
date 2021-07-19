const getters = {
  themeColor: (state) => state.theme.themeColor,
  word: (state) => state.search.word,
  area: (state) => state.search.area,
  sort: (state) => state.search.sort,
};
export default getters;
