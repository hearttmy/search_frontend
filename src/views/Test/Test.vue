<template>
  <div>
    <Tags></Tags>
    <Taxonomy
      v-for="i in [0, 1, 2, 3, 4]"
      :key="i"
      :title="'热度' + i"
      :id="i"
      :selected="selected[i]"
      :items="[
        111111111, 2, 3, 4, 5, 6, 7, 3, 34, 2334, 34243, 32443, 23423, 3244,
        23423, 324, 234, 3244, 324, 234,
      ]"
    ></Taxonomy>
    <h1>hello</h1>
  </div>
</template>

<script>
import Taxonomy from "@/components/Taxonomy";
import Tags from "@/components/Tags";
export default {
  components: {
    Taxonomy,
    Tags,
  },
  methods: {},
  data() {
    return {
      selected: this.$store.state.classify.options,
    };
  },
};
</script>
