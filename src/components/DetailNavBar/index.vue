<template>
  <div>
    <el-menu
      class="nav-bar"
      @select="selectIndex"
      :default-active="$route.path"
      router
    >
      <el-menu-item :index="'/detail/' + item_id + '/summary'">
        <i class="el-icon-reading"></i>信息简介
      </el-menu-item>
      <el-menu-item :index="'/detail/' + item_id + '/position'">
        <i class="el-icon-location-outline"></i>交通位置
      </el-menu-item>
      <el-menu-item :index="'/detail/' + item_id + '/statistics'">
        <i class="el-icon-tickets"></i>数据统计
      </el-menu-item>
      <el-menu-item :index="'/detail/' + item_id + '/recommend'">
        <i class="el-icon-star-off"></i>相关推荐
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "DetailNavBar",
  props: {
    item_id: {
      type: String,
      default: "",
    },
  },
  methods: {
    selectIndex() {},
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
  .el-menu-item.is-active {
    color: #1cafc5;
    border-bottom: 2px #1cafc5 solid;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: transparent;
    color: #1cafc5;
  }
  .el-menu-item:focus {
    border-bottom: 2px #1cafc5 solid;
  }
  .el-menu-item:hover i,
  .el-menu-item:focus i {
    color: inherit;
  }
}
</style>
