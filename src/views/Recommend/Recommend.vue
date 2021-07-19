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
      idList: "",
      resultList: [],
    };
  },
  created() {
    this.idList = this.parseId(this.$store.state.detail.item.recommend);
    this.searchForRecommend();
  },
  methods: {
    searchForRecommend() {
      SearchProvider.searchForRecommend(this.idList).then((res) => {
        this.resultList = res;
      });
    },
    parseId(id_str) {
      if (!id_str || id_str === "") return [];
      const id_list = id_str.split(",");
      id_list.splice(id_list.length - 1, 1);
      return id_list;
    },
  },
};
</script>

<style scoped></style>
