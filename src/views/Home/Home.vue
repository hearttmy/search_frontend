<template>
  <div class="home">
    <img class="logo" src="~@/assets/img/giligili_white.png" />
    <div class="wrapper">
      <el-input
        @focus="focus"
        @blur="blur"
        @keyup.enter.native="searchHandler"
      />
      <el-card v-if="isSearch">...</el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
}
</style>
