<template>
  <div class="container">
    <el-tag
      class="tag"
      size="big"
      type="danger"
      closable
      @close="deleteOption(index)"
      v-for="(tag, index) in tags"
      :key="index"
      v-show="tag != null"
      >{{ tag }}</el-tag
    >
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Tags",
  data() {
    return {
      tags: this.$store.state.classify.optionNames,
      selecteds: this.$store.state.classify.options,
    };
  },
  methods: {
    deleteOption(index) {
      Vue.set(this.tags, index, null);
      Vue.set(this.selecteds, index, -1);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.tag {
  margin-right: 10px;
}
</style>
