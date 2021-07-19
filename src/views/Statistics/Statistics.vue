<template>
  <div>
    <div>
      <div class="title"><i class="el-icon-menu" /> 百度指数</div>
      <div class="content">{{ item.desc }}</div>
    </div>
    <div class="wrapper">
      <div class="title"><i class="el-icon-menu" /> 用户评论</div>
      <div class="content">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.item = this.$store.state.detail.item;
  },
};
</script>

<style scoped>
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
  margin-top: 40px;
}
</style>
