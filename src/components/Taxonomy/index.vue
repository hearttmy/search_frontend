<template>
  <div class="taxonomy">
    <div class="title">{{ title }}</div>
    <div>
      <div class="first-line">
        <el-collapse-transition>
          <span>
            <div
              v-for="(item, index) in items.slice(0, 6)"
              v-bind:key="index"
              class="item"
              :class="index == selected ? 'selected' : 'unselected'"
              @click="setOption(index)"
            >
              {{ item }}
            </div>
          </span>
        </el-collapse-transition>
        <span class="icon" @click="dropdown">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </div>
      <el-collapse-transition>
        <div class="dropdown-line" v-show="!showFirst">
          <span
            class="c-type"
            v-for="(item, index) in items.slice(6, 100)"
            v-bind:key="index"
            :class="['item', index + 6 == selected ? 'selected' : 'unselected']"
            @click="setOption(index + 6)"
            >{{ item }}</span
          >
        </div>
      </el-collapse-transition>
    </div>
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
    setOption(index) {
      this.selected = index;
      this.$store.commit("classify/setOption", {
        id: this.id,
        name: this.items[this.selected],
        selected: this.selected,
      });
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
  display: inline-flex;
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
  width: 120px;
  margin-left: 40px;
  text-align: center;
  font-size: 16px;
  align-items: center;
  justify-content: center;
}
.icon {
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
