<template>
  <div>
    <MainLayout>
      <div class="search-wrapper">
        <img class="logo" src="~@/assets/img/giligili_white.png" />
        <div class="search-bar-wrapper">
          <SearchBar class="search-bar" />
        </div>
      </div>
      <div class="carousel-wrapper">
        <div class="carousel-bar-wrapper">
          <Carousel class="carousel-bar"> </Carousel>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MainLayout from "@/components/MainLayout";
import Carousel from "@/components/Carousel";
export default {
  name: "Details",
  components: {
    SearchBar,
    MainLayout,
    Carousel,
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
.carousel-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
  padding: 0.8em;
}
.carousel-bar-wrapper {
  display: flex;
  width: 500vh;
}
.carousel-bar {
  flex: 1;
}
</style>
