<template>
  <div>
    <MainLayout>
      <div class="search-wrapper">
        <img class="logo" src="~@/assets/img/giligili_white.png" />
        <div class="search-bar-wrapper">
          <SearchBar class="search-bar" />
        </div>
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
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
  padding: 0.8em;
}
.logo {
  margin: 3vh;
  width: 15vh;
  background-color: pink;
  border-right: pink 1px solid;
}
.search-bar-wrapper {
  display: flex;
  width: 80vh;
}
.search-bar {
  flex: 1;
}
</style>
