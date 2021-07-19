<template>
  <div class="tags-container">
    <el-tag
      class="tag"
      v-show="$store.state.search[type] != ''"
      v-for="type in types"
      :key="type"
      closable
      type="success"
      hit="true"
      @close="handleClose(type)"
    >
      {{ $store.state.search[type] }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return {
      types: ["area", "sort"],
    };
  },
  methods: {
    handleClose(type) {
      this.$store.commit("search/set_" + type, "");
      this.$emit("handleClose");
    },
  },
};
</script>

<style scoped>
.tags-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tag {
  margin-right: 10px;
  font-size: 12px;
}
</style>
