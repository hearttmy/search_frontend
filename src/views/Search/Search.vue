<template>
  <div class="search-wrapper" id="search-page">
    <div class="top-wrapper">
      <Logo class="logo-wrapper" />
      <SearchBar
        mainColor="dark"
        :style="{ flex: 1 }"
        :initalWords="initalWords"
        @searchCallback="search"
      />
    </div>
    <Tags @handleClose="search"></Tags>
    <div class="content-wrapper">
      <el-card class="select-bar-wrapper" shadow="never">
        <SelectBar
          typeTitle="地区"
          :typeArray="typeArray.areaArray"
          typeKey="area"
          @handleSelect="search"
        />
        <SelectBar
          typeTitle="A级"
          :typeArray="typeArray.levelArray"
          typeKey="level"
          @handleSelect="search"
        />
        <SelectBar
          typeTitle="票价"
          :typeArray="typeArray.priceArray"
          typeKey="price"
          @handleSelect="search"
        />
      </el-card>
      <div class="result-wrapper" v-if="resultList.length" v-loading="loading">
        <SearchCard
          v-for="item in resultList"
          :item="item._source"
          :key="item._id"
        />
      </div>
      <div v-else class="search-failure">没有搜索结果</div>
      <div class="page" v-if="resultList.length">
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
import Tags from "@/components/Tags";
import Logo from "@/components/Logo";

export default {
  name: "Search",
  components: { SearchBar, SelectBar, SearchCard, Logo, Tags },
  created() {
    this.search();
  },
  data() {
    return {
      loading: "false",
      typeArray: {
        areaArray: [
          "北京",
          "天津",
          "河北",
          "山西",
          "辽宁",
          "上海",
          "江苏",
          "浙江",
          "安徽",
          "江西",
          "山东",
          "河南",
          "湖北",
          "湖南",
          "广东",
          "广西",
          "重庆",
          "四川",
          "贵州",
          "陕西",
          "甘肃",
          "内蒙古",
          "宁夏",
          "西藏",
          "香港",
          "澳门",
        ],
        levelArray: ["5A级", "4A级", "3A级"],
        priceArray: ["50以下", "50~100", "100~200", "200以上"],
        sortArray: [
          "价格降序",
          "价格升序",
          "销量降序",
          "销量升序",
          "评分降序",
          "评分升序",
        ],
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
      this.loading = true;
      this.payload.from = this.payload.size * (this.currentPage - 1);
      SearchProvider.searchForList(this.payload).then((res) => {
        this.resultList = res;
        this.loading = false;
      });
    },
    search() {
      this.loading = true;
      this.payload = { ...this.payload, ...this.$store.state.search };
      this.initalWords = this.payload["word"] ? this.payload["word"] : "";

      SearchProvider.searchCount(this.payload).then((res) => {
        this.resultCount = res;
      });
      SearchProvider.searchForList(this.payload).then((res) => {
        this.resultList = res;
        this.loading = false;
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
  position: relative;
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
  margin-top: 20px;
  min-height: 400px;
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
  margin-top: 20px;
}
.page {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.search-failure {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
