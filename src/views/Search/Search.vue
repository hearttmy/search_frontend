<template>
  <div class="search-wrapper">
    <div class="top-wrapper">
      <img class="logo" src="~@/assets/img/logo.png" />
      <SearchBar mainColor="dark" :style="{ flex: 1 }" />
    </div>

    <div class="content-wrapper">
      <div class="select-bar-wrapper">
        <SelectBar typeTitle="地区" :typeArray="typeArray.areaArray" />
        <SelectBar class="select-bar-margin" />
      </div>

      <div class="result-wrapper"></div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SelectBar from "@/components/SelectBar";
import SearchProvider from "@/api/request/search";

export default {
  name: "Search",
  components: { SearchBar, SelectBar },
  created() {
    const payload = {};
    this.$route.params.searchParams.split("&").forEach((item) => {
      const str_arr = item.split("=");
      payload[str_arr[0]] = str_arr[1];
    });
    SearchProvider.searchForList(payload).then((res) => {
      console.log(res);
    });
  },
  data() {
    return {
      typeArray: {
        areaArray: ["北京", "上海"],
      },
    };
  },
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-wrapper {
  margin-top: 50px;
  width: 600px;
  display: flex;
  flex-direction: row;
}
.logo {
  height: 50px;
  margin-right: 50px;
}

.content-wrapper {
  width: 800px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.select-bar-wrapper {
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.06);
}

.select-bar-margin {
  margin-top: 20px;
}

.result-wrapper {
  margin-top: 100px;
}
</style>
