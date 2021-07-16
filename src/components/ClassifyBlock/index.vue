<template>
  <div>
    <CityLine
      v-for="(line, index) in lines"
      :key="index"
      :post="line"
      class="line"
    ></CityLine>
  </div>
</template>

<script>
import CityLine from "@/components/CityLine";
export default {
  name: "ClassifyCard",
  components: {
    CityLine,
  },
  props: {
    lines: Array,
  },
};
</script>

<style scoped>
.line {
  display: block;
  margin-top: 25px;
}
dev {
  width: 40vh;
}
</style>
