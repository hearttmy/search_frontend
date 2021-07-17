<template>
  <div class="wrapper">
    <div class="title">{{ typeTitle + ":" }}</div>
    <div
      v-for="(item, i) in typeArray"
      :key="item"
      :style="{ color: itemColor(i) }"
      @click="handleSelect(item)"
      class="item-wrapper"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectBar",
  props: {
    typeTitle: {
      type: String,
      default: "分类",
    },
    typeArray: {
      type: Array,
      default: () => [],
    },
    selectedIndex: {
      type: Number,
    },
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
    itemColor(index) {
      if (index === this.selectedIndex) {
        return "blue";
      }
      return this.$store.getters.themeColor;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
}

.title {
  margin-right: 20px;
}

.item-wrapper {
  margin-left: 40px;
}
</style>
