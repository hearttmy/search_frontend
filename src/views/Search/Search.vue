<template>
  <div class="search-wrapper">
    <div class="top-wrapper">
      <Logo class="logo-wrapper" />
      <SearchBar
        mainColor="dark"
        :style="{ flex: 1 }"
        :initalWords="initalWords"
      />
    </div>

    <div class="content-wrapper">
      <el-card class="select-bar-wrapper" shadow="never">
        <SelectBar
          typeTitle="地区"
          :typeArray="typeArray.areaArray"
          typeKey="area"
          @handleSelect="search"
        />
        <!-- <SelectBar
          class="select-bar-margin"
          typeTitle="排序"
          typeKey="sort"
          @handleSelect="search"
        /> -->
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
import Logo from "@/components/Logo";

export default {
  name: "Search",
  components: { SearchBar, SelectBar, SearchCard, Logo },
  created() {
    this.search();
  },
  data() {
    return {
      typeArray: {
        areaArray: ["北京", "上海"],
        priceArray: [""],
      },
      resultList: [],
      resultCount: 0,
      initalWords: "",
      currentPage: 1,
      payload: {
        size: 8,
        from: 0,
      },
    };
  },
  methods: {
    handleCurrentChange() {
      this.payload.from = this.payload.size * (this.currentPage - 1);
      SearchProvider.searchForList(this.payload).then((res) => {
        this.resultList = res;
      });
    },
    search() {
      this.payload = { ...this.$store.state.search, ...this.payload };
      this.initalWords = this.payload["word"] ? this.payload["word"] : "";
      SearchProvider.searchCount().then((res) => {
        this.resultCount = res;
      });
      SearchProvider.searchForList(this.payload).then((res) => {
        this.resultList = res;
      });
    },
    toHomePage() {
      this.$router.push("/");
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
  align-items: center;
}
.logo-wrapper {
  height: 100px;
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
