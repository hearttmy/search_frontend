<template>
  <div>
    <div>
      <div class="title"><i class="el-icon-menu" /> 百度指数</div>
      <div class="content">{{ item.desc }}</div>
    </div>
    <div class="wrapper">
      <div class="title"><i class="el-icon-menu" /> 用户评论</div>
      <div class="comment-wrapper">
        <div class="comment">
          <el-rate
            v-model="item.score"
            disabled
            show-score
            text-color="#ff9900"
            :colors="colors"
            class="rate"
          />
          <div class="comment-text">评论总数：{{ item.total }}</div>
          <div class="comment-text">好评数：{{ item.praise }}</div>
          <div class="comment-text">中评数：{{ item.medium }}</div>
          <div class="comment-text">差评数：{{ item.critic }}</div>
        </div>
        <div id="commentPie" class="pie" />
      </div>
    </div>

    <div class="wrapper">
      <div class="title"><i class="el-icon-menu" /> 热门评论</div>
      <div class="content">{{ item.comment }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      item: {},
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      chart: "",
    };
  },
  created() {
    this.item = this.$store.state.detail.item;
  },
  mounted() {
    if (this.chart === "") {
      this.drawPie("commentPie");
    }
  },
  methods: {
    drawPie(id) {
      this.chart = this.$echarts.init(document.getElementById(id));
      this.chart.setOption({
        title: {
          text: "评论分布",
          textStyle: {
            color: "#1cafc5",
          },
        },
        tooltip: {},
        series: [
          {
            name: this.评论分布,
            type: "pie",
            selectedMode: "single",
            radius: ["50%", "70%"], // 将0改成50%，修改圆的内径
            clockwise: false,
            label: {
              normal: {
                position: "outside", // 设置标签向外
                formatter: "{b}\n{c}条 ({d}%)", // 设置标签格式
              },
            },
            data: [
              { value: this.item.praise, name: "好评" },
              { value: this.item.medium, name: "中评" },
              { value: this.item.critic, name: "差评" },
            ],
          },
        ],
        graphic: {
          // 添加原生图形元素组件
          elements: [
            {
              type: "text", // 组件类型
              left: "center", //定位
              top: "43%", // 定位
              style: {
                // 样式
                text: "评论总数", //文字
                fontSize: 13, //文字大小
                textAlign: "center", //定位
                width: 30,
                height: 30,
                fill: "darkgray", // 字体颜色
              },
            },
            {
              type: "text",
              left: "center",
              top: "52%",
              style: {
                text: `${this.item.total}条`,
                fontSize: 18,
                textAlign: "center",
                width: 30,
                height: 25,
                fill: "#3BA5D9",
              },
            },
          ],
        },
      });
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
  padding: 20px;
  border: 1px solid #ddd;
}
.wrapper {
  margin-top: 40px;
}

.comment-wrapper {
  margin-top: 20px;
  padding: 20px;
  height: 300px;
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
}

.comment {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rate {
  height: auto;
  /deep/ .el-rate__icon {
    font-size: 30px;
  }
  /deep/ .el-rate__text {
    font-size: 24px;
  }
}

.comment-text {
  display: flex;
  color: #888;
}

.pie {
  margin-left: 100px;
  width: 400px;
}
</style>
