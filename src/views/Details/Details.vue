<template>
  <el-container>
    <el-header>
      <p id="sight">毛主席纪念堂</p>
    </el-header>
    <el-main>
      <img class="logo" src="~@/assets/img/giligili_white.png" />

      <div class="search-wrapper">
        <div class="search-bar-wrapper">
          <SearchBar class="search-bar" />
        </div>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Details",
  components: {},


};
// eslint-disable-next-line no-undef
new vue({
  el: "#sight",
  data: {
    msg: "毛主席纪念堂",
  },
});
</script>

<style>
.el-header {
  background-color: transparent;
  color: #333;
  text-align: center;
  line-height: 80px;
  padding-left: 200px;
}

.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: left;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 1500px;
  padding-left: 200px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.sight {
  font-family: "Times New Roman";
  font-size: 28px;

  text-align: left;
  line-height: 0%;
}
</style>
