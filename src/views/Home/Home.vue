<template>
  <div class="home">
    <img class="logo" src="~@/assets/img/home_logo.png" />
    <div class="wrapper">
      <SearchBar />
      <el-card v-if="isSearch">...</el-card>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  name: "Home",
  components: {
    SearchBar,
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
  background-image: url("../../assets/img/background.jpg");
  background-size: cover;
}

.logo {
  width: 500px;
  margin-top: 150px;
}
.wrapper {
  margin-top: 50px;
  width: 540px;
  background-color: transparent;
}
</style>
