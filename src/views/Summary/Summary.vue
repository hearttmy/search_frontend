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
      <div class="title"><i class="el-icon-edit-outline" /> 入园公告</div>
      <div class="content-card">
        <div
          v-for="tip in item.tips"
          :key="tip"
          :style="{ 'margin-top': '20px' }"
        >
          {{ tip }}
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="title"><i class="el-icon-picture-outline" /> 图片展示</div>
      <div
        class="pic-content"
        v-for="pic in item.pic_url"
        :key="pic"
        v-show="pic !== ''"
      >
        <img class="pic" :src="'https://' + pic" />
      </div>
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
      const timeList = this.item.open_time.split("\r\n");
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
  margin-top: 40px;
}

.content-card {
  padding: 20px;
  padding-top: 0px;
  margin-left: 10px;
  margin-top: 20px;
  font-size: 15px;
  line-height: 30px;
  color: #555;
  border: 1px solid #ddd;
}

.pic-content {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pic {
  width: 80%;
  height: 80%;
}
</style>
