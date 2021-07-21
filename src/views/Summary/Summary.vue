<template>
  <div>
    <div>
      <div class="title"><i class="el-icon-menu" /> 特色看点</div>
      <div class="content">{{ item.desc }}</div>
    </div>
    <div class="wrapper">
      <div class="title"><i class="el-icon-time" /> 开放时间</div>
      <div
        class="content"
        v-for="time in open_time"
        v-show="time !== ''"
        :key="time"
      >
        {{ time }}
      </div>
    </div>
    <div class="wrapper">
      <div class="title"><i class="el-icon-edit-outline" /> 入园公告</div>
      <div class="content-card">
        <div
          v-for="tip in tips"
          v-show="tip !== ''"
          :key="tip"
          :style="{ 'margin-top': '20px' }"
        >
          {{ tip }}
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="title"><i class="el-icon-picture-outline" /> 图片展示</div>
      <div class="pic-wrapper">
        <div class="pic-content">
          <el-carousel trigger="click" height="300px">
            <el-carousel-item
              v-for="pic in item.pic_url"
              v-show="pic !== ''"
              :key="pic"
            >
              <img class="pic" :src="'https://' + pic" />
            </el-carousel-item>
          </el-carousel>
        </div>
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
    this.item.pic_url = this.item.pic_url.slice(0, 5);
  },
  computed: {
    open_time() {
      if (!this.item.open_time) {
        return [];
      }
      const timeList = this.item.open_time.split("\n");
      return timeList;
    },
    tips() {
      if (!this.item.tips[0]) {
        return [];
      }
      const tipList = this.item.tips[0].split("\n");
      return tipList;
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

.pic-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pic-content {
  margin-top: 15px;
  width: 600px;
}
.pic {
  width: 100%;
  height: 100%;
}
</style>
