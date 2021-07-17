<template>
  <div class="search">
    <el-input
      v-model="input"
      type="text"
      @focus="focus"
      @blur="blur"
      @keyup.enter.native="searchHandler"
    >
      <div class="tag-wrapper">
        <el-tag
          class="tags"
          size="medium"
          v-for="(tag, index) in tags"
          v-bind:key="index"
          closable
          >{{ tag }}</el-tag
        >
        <p>12231</p>
      </div>
      <i
        slot="suffix"
        class="el-input__icon el-icon-search"
        @click="searchHandler"
      ></i>
    </el-input>
    <el-card v-if="isSearch">...</el-card>
  </div>
</template>

<script>
export default {
  name: "SearchBarPlus",
  props: {
    tags: Array,
  },
  data() {
    return {
      input: "",
      hasTags: true,
    };
  },
  methods: {
    searchHandler() {
      if (this.input.length > 0) {
        //this.$router.push("/search/?key=" + this.input);
      }
    },
  },
};
</script>

<style scoped>
.search >>> .el-input__inner {
  border-radius: 18px;
  max-width: 600px;
  color: black;
}
i {
  color: #888;
}
</style>
