<template>
  <div class="taxonomy">
    <div class="first-line">
      <span class="type">{{ title }}</span>
      <div
        v-for="(item, index) in items.slice(0, 5)"
        v-bind:key="index"
        class="item"
        :class="index == myselected ? 'selected' : 'unselected'"
        @click="myselected = selected = index"
      >
        {{ item }}
      </div>
      <span class="el-dropdown-link">
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
      myselected: -1,
    };
  },
};
</script>

<style scoped>
.taxonomy {
  margin-top: 10px;
  padding: auto;
  border-top: 1px solid #ddd;
}
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
  background-color: hsl(350, 85%, 60%);
  color: white;
}
.unselected {
  color: hsl(350, 85%, 60%);
}
.item:hover {
  background-color: hsl(350, 85%, 60%);
  color: white;
}
</style>
