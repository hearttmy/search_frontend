<template>
  <div class="home">
    <img class="logo" src="~@/assets/img/giligili_white.png" />
    <div class="wrapper">
      <Search />
      <el-card v-if="isSearch">...</el-card>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
export default {
  name: "Home",
  components: {
    Search,
  },
  data() {
    return {
      isSearch: false,
    };
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 300px;
  margin-top: 150px;
}
.wrapper {
  width: 540px;
  background-color: transparent;
}
</style>
