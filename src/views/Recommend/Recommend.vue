<template>
  <div v-if="resultList.length">
    <RecommendCard
      v-for="item in resultList"
      :item="item._source"
      :key="item._id"
    />
  </div>
</template>

<script>
import SearchProvider from "@/api/request/search";
import RecommendCard from "@/components/RecommendCard";

export default {
  name: "Recommend",
  components: {
    RecommendCard,
  },
  data() {
    return {
      resultList: [],
    };
  },
  created() {
    this.idList = this.$store.state.detail.item.recommend;
    this.searchForRecommend();
  },
  methods: {
    searchForRecommend() {
      SearchProvider.searchForRecommend(this.idList).then((res) => {
        this.resultList = res;
      });
    },
  },
};
</script>

<style scoped></style>
