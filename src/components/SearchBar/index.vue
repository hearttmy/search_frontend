<template>
  <div>
    <el-input
      class="search-input"
      v-model="searchWords"
      @keyup.enter.native="searchHandler"
    >
      <i
        slot="suffix"
        class="el-input__icon el-icon-search search-icon"
        :class="[
          mainColor === 'light' ? 'search-icon-light' : 'search-icon-dark',
        ]"
        @click="searchHandler"
      >
      </i>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    mainColor: {
      type: String,
      default: "light",
    },
    initalWords: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isSearch: false,
      searchWords: this.initalWords,
    };
  },
  methods: {
    searchHandler() {
      this.$router.push(`/search/word=${this.searchWords}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  /deep/ .el-input__inner {
    border-radius: 50px;
    background-color: transparent;
    color: black;
  }
  /deep/ .search-icon {
    cursor: pointer;
  }
}
/deep/ .search-icon-light {
  color: #c0c4cc;
}

/deep/ .search-icon-dark {
  color: black;
}
</style>
