<template>
  <div class="wrapper">
    <div class="title">{{ typeTitle + ":" }}</div>
    <div class="content-wrapper">
      <div class="first-line">
        <div
          v-for="(item, i) in typeArray.slice(0, size)"
          :key="item"
          :style="{ color: itemColor(i) }"
          @click="handleSelect(i)"
          class="item-wrapper"
        >
          {{ item }}
        </div>
        <span class="icon" v-show="typeArray.length > size" @click="dropdown">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </div>
      <div class="dropdown-line" v-show="isDropdown" v-for="i in 20" :key="i">
        <div
          v-for="(item, j) in typeArray.slice(i * size, (i + 1) * size)"
          :key="item"
          :style="{ color: itemColor(j + i * size) }"
          @click="handleSelect(j + i * size)"
          class="item-wrapper"
        >
          {{ item }}
        </div>
      </div>
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
  data() {
    return {
      size: 11,
      isDropdown: false,
    };
  },
  methods: {
    handleSelect(index) {
      this.$store.commit("search/set_search", {
        key: this.typeKey,
        value: this.typeArray[index],
      });
      this.$emit("handleSelect");
    },
    itemColor(index) {
      if (index === this.selectedIndex) {
        return "blue";
      }
      return this.$store.getters.themeColor;
    },
    dropdown() {
      this.isDropdown = !this.isDropdown;
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
  margin-bottom: 10px;
}

.item-wrapper {
  width: 70px;
  cursor: pointer;
  text-align: center;
}

.icon {
  position: absolute;
  right: 300px;
}

.title,
.first-line,
.dropdown-line {
  display: flex;
  line-height: 30px;
}
</style>
