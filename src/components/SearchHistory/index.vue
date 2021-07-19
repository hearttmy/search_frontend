<template>
  <div class="container" v-show="$store.state.search.showHistory&&historyList.length>0">
    <div class="wrapper">
      <span class="tip">搜索记录</span>
      <i class="icon el-icon-delete-solid" @click="deleteHistory"></i>
    </div>
    <div class="history" v-for="history in historyList" :key="history" @click="changeInput(history)">
      {{ history }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHistory",
  props: {
    historyList: [],
  },
  methods: {
    deleteHistory() {
      this.historyList.splice(0, this.historyList.length);
      localStorage.removeItem("historyList");
    },
    changeInput(history){
      this.$emit("changeInput",history);
    }
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 65vh;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 10;
}

.wrapper{
  display: flex;
  flex-direction: row;
}
.icon {
  flex: 1;
}
.tip {
  flex: 30;
}
.history{
  margin-bottom: 4px;
  padding: 12px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
</style>
