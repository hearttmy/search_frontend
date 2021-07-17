<template>
  <div>
    <el-input
      class="search-input"
      @focus="focus"
      @blur="blur"
      @keyup.enter.native="searchHandler"
    >
      <i
        slot="suffix"
        class="el-input__icon el-icon-search"
        @click="searchHandler"
      >
      </i>
    </el-input>
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
  methods: {
    searchHandle() {},
  },
};
</script>

<style scoped>
.search-input {
  border-radius: 50px;
}
</style>
