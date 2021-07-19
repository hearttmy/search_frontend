<template>
  <div class="container">
    <el-button type="info">历史记录</el-button>
    <div class="history" v-for="history in historyList" :key="history">
      {{ history }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHistory",
  data() {
    return {
      historyList: [],
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("historyList"))) {
      this.historyList = JSON.parse(localStorage.getItem("historyList"));
    }
  },
};
</script>
