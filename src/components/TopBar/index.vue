<template>
  <div class="topBar" :style="{ backgroundColor: bgColor }">
    <WhiteLogo class="logo-wrapper" />
    <div class="btnListWrapper">
      <el-dropdown class="btnWrapper" trigger="click" @command="searchType">
        <span class="el-dropdown-link">
          地区<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, index) in areaArray"
            :key="item"
            :command="index"
            >{{ item }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import WhiteLogo from "@/components/WhiteLogo";

export default {
  name: "TopBar",
  components: { WhiteLogo },
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      areaArray: [
        "北京",
        "天津",
        "河北",
        "山西",
        "辽宁",
        "上海",
        "江苏",
        "浙江",
        "安徽",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "广西",
        "重庆",
        "四川",
        "贵州",
        "陕西",
        "甘肃",
        "内蒙古",
        "宁夏",
        "西藏",
        "香港",
        "澳门",
      ],
    };
  },
  methods: {
    searchType(v) {
      this.$store.commit("search/set_search", {
        key: "area",
        value: this.areaArray[v],
      });
      this.$router.push("/search");
    },
  },
  computed: {
    bgColor() {
      return this.$store.getters.themeColor;
    },
  },
};
</script>

<style scoped>
.topBar {
  height: 6vh;
  min-height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo-wrapper {
  height: 100%;
  margin-left: 20px;
}

.btnListWrapper {
  display: flex;
  flex-direction: row;
  padding-right: 30px;
}

.btnWrapper {
  margin-left: 10px;
}

.el-dropdown-link {
  cursor: pointer;
  color: white;
}
</style>
