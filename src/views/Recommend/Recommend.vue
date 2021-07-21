<template>
  <div v-if="resultList.length" class="card-list">
    <div class="card-block" v-for="item in resultList" :key="item._id">
      <RecommendCard :item="item" />
    </div>
  </div>
</template>

<script>
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
      for (let i = 1; i < 9; i++) {
        this.resultList.push(this.$store.state.detail.item[`recommend${i}`]);
      }
    },
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card-block {
  width: 210px;
}
</style>
