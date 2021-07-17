<template>
  <div>
    <Taxonomy :title="'热度'" :items="[111111111, 2, 3, 4, 5, 6, 7]"></Taxonomy>
    <h1>hello</h1>
  </div>
</template>

<script>
import Taxonomy from "@/components/Taxonomy";
export default {
  components: {
    Taxonomy,
  },
  methods: {},
  data() {
    return {};
  },
};
</script>
