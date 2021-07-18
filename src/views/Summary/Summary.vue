<template>
  <div>
    <div>
      <div class="title"><i class="el-icon-menu" /> 特色看点</div>
      <div class="content">{{ item.desc }}</div>
    </div>
    <div class="wrapper">
      <div class="title"><i class="el-icon-time" /> 开放时间</div>
      <div class="content" v-for="time in open_time" :key="time" v-show="time">
        {{ time }}
      </div>
    </div>
    <div class="wrapper">
      <div class="title"><i class="el-icon-menu" /> 特色看点</div>
      <div class="content">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.item = this.$store.state.detail.item;
  },
  computed: {
    open_time() {
      if (!this.item.open_time) {
        return [];
      }
      const timeList = this.item.open_time.split("\r\n").slice(1);
      return timeList;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: #1cafc5;
  font-size: 18px;
}
.content {
  text-indent: 20px;
  margin-top: 15px;
  line-height: 30px;
}
.wrapper {
  margin-top: 30px;
}
</style>
