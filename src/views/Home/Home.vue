<template>
  <div class="home">
    <img class="logo" src="~@/assets/img/giligili_white.png" />
    <div class="wrapper">
      <el-input @focus="focus" @blur="blur" @keyup.enter.native="searchHandler">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
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
  width: 540px;
  background-color: transparent;
}
</style>
