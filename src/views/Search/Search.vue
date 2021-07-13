<template>
  <div>
    <MainLayout>
      <div class="search-wrapper">
        <img class="logo" src="~@/assets/img/giligili_white.png" />
        <SearchBar class="search-bar" />
      </div>
    </MainLayout>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MainLayout from "@/components/MainLayout";
export default {
  name: "Search",
  components: {
    SearchBar,
    MainLayout,
  },
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color:red;
}
.logo {
  margin-left: 40px;
  width: 100px;
}
.search-bar {
  margin-left: 20px;
}
</style>
