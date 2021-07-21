<template>
  <div>
    <el-input
      class="search-input"
      v-model="searchWords"
      @keyup.enter.native="searchHandler"
      @focus="$store.state.search.showHistory = true"
      @input="$store.state.search.showHistory = true"
      @blur="closeHistory"
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
    <div class="history-wrapper">
      <SearchHistory
        :historyList="historyList"
        @changeInput="changeInput"
      ></SearchHistory>
    </div>
  </div>
</template>

<script>
import SearchHistory from "@/components/SearchHistory";
export default {
  name: "SearchBar",
  components: { SearchHistory },
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
      historyList: [],
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("historyList"))) {
      this.historyList = [...JSON.parse(localStorage.getItem("historyList"))];
    }
  },
  methods: {
    changeInput(history) {
      this.searchWords = history;
    },
    closeHistory() {
      clearTimeout(this.timer); //清除延迟执行
      this.timer = setTimeout(() => {
        //设置延迟执行
        this.$store.state.search.showHistory = false;
      }, 100);
    },
    searchHandler() {
      this.closeHistory();
      this.$store.commit("search/set_word", this.searchWords);
      this.addHistory(this.searchWords);
      if (this.$route.path !== "/search") this.$router.push("/search");
    },
    addHistory(word) {
      // 没有搜索记录，把搜索值push进数组首位，存入本地
      if (!this.historyList.includes(word)) {
        this.historyList.unshift(word);
        localStorage.setItem("historyList", JSON.stringify(this.historyList));
      } else {
        //有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
        let i = this.historyList.indexOf(word);
        this.historyList.splice(i, 1);
        this.historyList.unshift(word);
        localStorage.setItem("historyList", JSON.stringify(this.historyList));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  /deep/ .el-input__inner {
    border-radius: 50px;
    background-color: transparent;
  }
  /deep/ .search-icon {
    cursor: pointer;
  }
}
/deep/ .search-icon-light {
  color: black;
}

/deep/ .search-icon-dark {
  color: black;
}

.history-wrapper {
  margin: 0 auto;
}
</style>
