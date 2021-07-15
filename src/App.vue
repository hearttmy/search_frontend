<template>
  <div id="app">
    <TopBar />
    <div class="main">
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar";

export default {
  name: "App",
  components: {
    TopBar
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/base.css";
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  flex: 1;
  background-image: url("./assets/img/background.jpg");
  background-size: cover;
}
</style>
