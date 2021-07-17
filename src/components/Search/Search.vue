<template>
  <div>
    <el-input
      v-model="searchWords"
      @focus="focus"
      @blur="blur"
      @keyup.enter.native="searchHandler"
      placeholder="搜索电影"
    />
    <el-button
      class="searchBtn"
      icon="el-icon-search"
      @click="searchHandler"
    ></el-button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      isSearch: false,
      searchWords: "",
    };
  },
};
</script>

<style scoped></style>
