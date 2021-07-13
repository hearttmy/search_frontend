<template>
  <div class="topBar" :style="{ backgroundColor: $store.getters.themeColor }">
    <div class="btnListWrapper">
      <el-dropdown class="btnWrapper" trigger="click" @command="searchType">
        <span class="el-dropdown-link">
          地区<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="恐怖">黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    searchType(v) {
      this.$router.push(`/search/type/${v}`);
    },
  },
};
</script>

<style scoped>
.topBar {
  height: 6vh;
  min-height: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.btnListWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30px;
}

.btnWrapper {
  margin-left: 10px;
}

.el-dropdown-link {
  cursor: pointer;
  color: white;
}
</style>
