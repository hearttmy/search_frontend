<template>
  <div>
    <MainLayout>
      <div class="search-wrapper">
        <img class="logo" src="~@/assets/img/giligili_white.png" />
        <div class="search-bar-wrapper">
          <SearchBar class="search-bar" />
        </div>
      </div>
      <h2>热门目的地</h2>
      <div class="block">
        <ClassifyBlock :lines="lines" />
        <ClassifyBlock :lines="lines" />
      </div>
    </MainLayout>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MainLayout from "@/components/MainLayout";
import ClassifyBlock from "@/components/ClassifyBlock";
export default {
  name: "Search",
  components: {
    SearchBar,
    MainLayout,
    ClassifyBlock,
  },
  data() {
    return {
      lines: [
        {
          title: "北京",
          cities: [
            "t111wewe1",
            "l111111",
            "xxxxxxx",
            "t111wewe1",
            "xxxxxxxxxx",
            "l111111",
          ],
        },
        {
          title: "北京",
          cities: [
            "t111wewe1",
            "l111111",
            "xxxxxxx",
            "t111wewe1",
            "l111111",
            "xxxxxxx",
          ],
        },
        {
          title: "北京",
          cities: [
            "t111wewe1",
            "l111111",
            "xxxxxxx",
            "t111wewe1",
            "l111111",
            "xxxxxxx",
          ],
        },
        {
          title: "北京",
          cities: [
            "t111wewe1",
            "l111111",
            "xxxxxxx",
            "t111wewe1",
            "l111111",
            "xxxxxxx",
          ],
        },
      ],
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
.block {
  display: flex;
}
div {
  font-family: Arial, "Lucida Grande", "Microsoft Yahei", "Hiragino Sans GB",
    "Hiragino Sans GB W3", SimSun, "PingFang SC", STHeiti;
}
/* h2 {
  text-align: center;
} */
</style>
