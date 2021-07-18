<template>
  <div>
    <MainLayout>
      <div class="search-wrapper">
        <img class="logo" src="~@/assets/img/giligili_white.png" />
        <div class="search-bar-wrapper">
          <SearchBar class="search-bar" />
        </div>
      </div>
      <Tags></Tags>
      <Taxonomy
        v-for="i in [0, 1, 2, 3, 4]"
        :key="i"
        :title="'热度' + i"
        :id="i"
        :selected="selected[i]"
        :items="[111111111, 2, 3, 4, 5, 6, 7, 2313, 23123, 123123]"
      ></Taxonomy>
    </MainLayout>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MainLayout from "@/components/MainLayout";
import Taxonomy from "@/components/Taxonomy";
import Tags from "@/components/Tags";
export default {
  name: "Search",
  components: {
    SearchBar,
    MainLayout,
    Taxonomy,
    Tags,
  },
  data() {
    return {
      selected: this.$store.state.classify.options,
    };
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
div {
  font-family: Arial, "Lucida Grande", "Microsoft Yahei", "Hiragino Sans GB",
    "Hiragino Sans GB W3", SimSun, "PingFang SC", STHeiti;
}
</style>
