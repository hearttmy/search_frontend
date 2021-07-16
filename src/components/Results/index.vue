<template>
  <div class="container">
    <InfoCard
      v-for="(card, index) in results"
      :post="card"
      :key="index"
      class="info-card"
    ></InfoCard>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard";
export default {
  name: "Results",
  props: {
    results: Array,
  },
  components: {
    InfoCard,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.info-card {
  margin-top: 20px;
}
</style>
