<template>
  <div class="wrapper">
    <div class="title">{{ typeTitle + ":" }}</div>
    <div class="content-wrapper">
      <div class="first-line">
        <div
          v-for="(item, i) in typeArray.slice(0, size)"
          :key="item"
          :style="{ color: itemColor(i) }"
          class="item-wrapper"
        >
          <div @click="handleSelect(i)" class="item">{{ item }}</div>
        </div>
        <span
          class="icon"
          v-if="!isDropdown"
          v-show="typeArray.length > size"
          @click="dropdown"
        >
          <i class="el-icon-arrow-right el-icon--right icon-color"></i>
        </span>
        <span
          class="icon"
          v-else
          v-show="typeArray.length > size"
          @click="dropdown"
        >
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </div>
      <transition-group name="el-fade-in-linear">
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
      </transition-group>
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
      size: 8,
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
        return "#1cafc5";
      }
      return "#888";
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 90px;
  text-align: center;
}

.item {
  cursor: pointer;
}

.icon {
  position: absolute;
  cursor: pointer;
  right: 270px;
}

.icon-color {
  color: #888;
}

.title {
  width: 60px;
}

.title,
.first-line,
.dropdown-line {
  display: flex;
  line-height: 30px;
}
</style>
