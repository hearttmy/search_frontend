<template>
  <div class="taxonomy">
    <div class="first-line">
      <span class="type">{{ title }}</span>
      <div
        v-for="(item, index) in items.slice(0, 7)"
        v-bind:key="index"
        :class="['item', index === selected ? 'selected' : 'unselected']"
      >
        {{ item }}
      </div>
      <span class="el-dropdown-link" @click="dropdown">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    </div>
    <div class="dropdown-line" v-show="isShow">
      <span
        class="c-type"
        v-for="(item, index) in items"
        v-bind:key="index"
        :class="['item', index === selected ? 'selected' : 'unselected']"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Taxonomy",
  props: {
    title: String,
    items: Array,
    rowNum: Number,
    selected: Number,
  },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style scoped>
.item {
  display: inline-flex;
  padding: 2px 5px 2px 5px;
  border-radius: 16px;
  cursor: pointer;
  width: 100px;
  margin-left: 20px;
  text-align: center;
  font-size: 14px;
  align-items: center;
  justify-content: center;
}

.selected {
  background-color: hsl(350, 81%, 72%);
  color: white;
}
.unselected {
  color: pink;
}
</style>
