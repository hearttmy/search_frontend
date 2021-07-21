<template>
  <div id="app">
    <TopBar />
    <div class="main">
      <transition name="el-fade-in-linear">
        <router-view :key="routeKey"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar";

export default {
  name: "App",
  components: {
    TopBar,
  },
  created() {
    this.$store.commit("search/getSessionStorage");
  },
  computed: {
    routeKey() {
      const pathList = this.$route.path.split("/");
      if (pathList.length >= 3) {
        return pathList[2];
      }
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/base.css";
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  // overflow-y: scroll;
}
.main {
  flex: 1;
}
.el-dropdown-menu {
  overflow-y: scroll;
  height: 300px;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 5px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: inset006pxrgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}
</style>
