<template>
  <div class="wrapper">
    <div class="title">{{ typeTitle + ":" }}</div>
    <div
      v-for="(item, i) in typeArray"
      :key="item"
      :style="{ color: itemColor(i) }"
      @click="handleSelect(i)"
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
    typeKey: {
      type: String,
    },
  },
  methods: {
    handleSelect(index) {
      this.$store.commit("search/set_area", this.typeArray[index]);
      this.$emit("handleSelect");
    },
    itemColor(index) {
      if (index === this.selectedIndex) {
        return "blue";
      }
      return this.$store.getters.themeColor;
    },
  },
  computed: {
    selectedIndex() {
      return this.typeArray.findIndex((e) => {
        if (e === this.$store.state.search[this.typeKey]) {
          return true;
        }
        return false;
      }, this);
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
  cursor: pointer;
}
</style>
