<template>
  <div class="topBar" :style="{ backgroundColor: bgColor }">
    <Logo class="logo-wrapper" />
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
import Logo from "@/components/Logo";

export default {
  name: "TopBar",
  components: { Logo },
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    searchType(v) {
      this.$router.push(`/search/type/${v}`);
    },
  },
  computed: {
    bgColor() {
      return this.$store.getters.themeColor;
    },
  },
};
</script>

<style scoped>
.topBar {
  height: 6vh;
  min-height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo-wrapper {
  height: 100%;
  margin-left: 20px;
}

.btnListWrapper {
  display: flex;
  flex-direction: row;
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
