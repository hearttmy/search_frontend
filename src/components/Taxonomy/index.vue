<template>
  <div class="taxonomy">
    <div class="first-line">
      <sapn class="title">{{ title }}</sapn>

      <el-collapse-transition>
        <span>
          <div
            v-show="showFirst"
            v-for="(item, index) in items.slice(0, 5)"
            v-bind:key="index"
            class="item"
            :class="index == selected ? 'selected' : 'unselected'"
            @click="selected = index"
          >
            {{ item }}
          </div>
        </span>
      </el-collapse-transition>

      <span class="el-dropdown-link" @click="dropdown">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    </div>
    <el-collapse-transition>
      <div class="dropdown-line" v-show="!showFirst">
        <span
          class="c-type"
          v-for="(item, index) in items"
          v-bind:key="index"
          :class="['item', index == selected ? 'selected' : 'unselected']"
          @click="selected = index"
          >{{ item }}</span
        >
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: "Taxonomy",
  props: {
    title: String,
    items: Array,
    id: Number,
    selected: -1,
  },
  data() {
    return {
      showFirst: true,
    };
  },
  methods: {
    dropdown() {
      this.showFirst = !this.showFirst;
    },
  },
};
</script>

<style scoped>
.taxonomy {
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #ddd;
  font-family: "elementdoc" !important;
}
.title {
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
}
.item {
  display: inline-flex;
  padding: 2px 5px 2px 5px;
  border-radius: 16px;
  cursor: pointer;
  width: 100px;
  margin-left: 20px;
  text-align: center;
  font-size: 16px;
  align-items: center;
  justify-content: center;
}
.el-dropdown-line {
  margin-left: 20vh;
}
.el-dropdown-link {
  float: right;
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
