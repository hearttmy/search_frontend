<template>
  <div class="search-wrapper">
    <div class="top-wrapper">
      <img class="logo" src="~@/assets/img/logo.png" />
      <SearchBar
        mainColor="dark"
        :style="{ flex: 1 }"
        :initalWords="initalWords"
      />
    </div>

    <div class="content-wrapper">
      <el-card class="select-bar-wrapper" shadow="never">
        <SelectBar typeTitle="地区" :typeArray="typeArray.areaArray" />
        <SelectBar class="select-bar-margin" typeTitle="排序" />
      </el-card>

      <div class="result-wrapper">
        <SearchCard
          v-for="item in resultList"
          :item="item._source"
          :key="item._id"
        />
      </div>
      <div class="page">
        <el-pagination
          background
          class="page"
          layout="prev, pager, next"
          :total="resultCount"
          :page-size="8"
          :pager-count="7"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SearchCard from "@/components/SearchCard";
import SelectBar from "@/components/SelectBar";
import SearchProvider from "@/api/request/search";

export default {
  name: "Search",
  components: { SearchBar, SelectBar, SearchCard },
  created() {
    this.$route.params.searchParams.split("&").forEach((item) => {
      const str_arr = item.split("=");
      this.payload[str_arr[0]] = str_arr[1];
    });
    this.payload.size = 8;
    this.payload.from = 0;
    this.initalWords = this.payload["word"] ? this.payload["word"] : "";
    SearchProvider.searchCount().then((res) => {
      this.resultCount = res;
    });
    SearchProvider.searchForList(this.payload).then((res) => {
      this.resultList = res;
      console.log(res);
    });
  },
  data() {
    return {
      typeArray: {
        areaArray: ["北京", "上海"],
      },
      resultList: [],
      resultCount: 0,
      initalWords: "",
      currentPage: 1,
      payload: {},
    };
  },
  methods: {
    handleCurrentChange() {
      this.payload.from = this.payload.size * (this.currentPage - 1);
      SearchProvider.searchForList(this.payload).then((res) => {
        this.resultList = res;
      });
    },
  },
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(247, 247, 247, 1);
  padding-bottom: 20px;
}
.top-wrapper {
  margin-top: 50px;
  width: 900px;
  display: flex;
  flex-direction: row;
}
.logo {
  height: 50px;
  margin-right: 50px;
}

.content-wrapper {
  width: 1000px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.select-bar-wrapper {
  border-radius: 20px;
}

.select-bar-margin {
  margin-top: 20px;
}

.result-wrapper {
  margin-top: 50px;
}
.page {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
