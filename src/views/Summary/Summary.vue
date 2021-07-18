<template>
  <div>
    <div class="desc">
      <div class="title"><i class="el-icon-menu" /> 特色看点</div>
      <div class="content">{{ item.desc }}</div>
    </div>
    <div class="open-time">
      <div class="title"><i class="el-icon-time" /> 开放时间</div>
      <div class="content" v-for="item in open_time" :key="item" v-show="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: {
    item: {},
  },
  computed: {
    open_time() {
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
  margin-top: 20px;
  line-height: 30px;
}
.open-time {
  margin-top: 20px;
}
</style>
