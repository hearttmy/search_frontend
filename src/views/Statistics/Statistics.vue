<template>
  <div>
    <div v-show="this.stat.baidu_search_index">
      <div class="title"><i class="el-icon-menu" /> 百度搜索指数</div>
      <div class="line-chart" id="baidu-search" />
    </div>
    <div v-show="this.stat.age_index">
      <div class="title"><i class="el-icon-menu" /> 百度人群画像</div>
      <div class="chart-wrapper">
        <div class="bar-chart" id="baidu-age" />
        <div class="bar-chart gender-chart" id="baidu-gender"></div>
      </div>
    </div>
    <div>
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
    <div v-if="this.stat.wordcloud_path" class="wrapper">
      <div class="title"><i class="el-icon-menu" /> 评论词云</div>
      <div class="cloud-wrapper">
        <img
          class="cloud-pic"
          :src="require(`../../${this.stat.wordcloud_path}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchProvider from "@/api/request/search";

export default {
  name: "Statistics",
  data() {
    return {
      item: {},
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      stat: {},
      pieChart: "",
      baiduSearch: "",
      baiduAge: "",
      baiduMedia: "",
    };
  },
  created() {
    this.item = this.$store.state.detail.item;
  },
  mounted() {
    this.searchStat({ id: this.item.id });
    this.drawPie("commentPie");
  },
  methods: {
    searchStat(payload) {
      SearchProvider.searchStat(payload).then((res) => {
        res.wordcloud_path = res.wordcloud_path.replace("\\", "/");
        this.stat = res;
        console.log(this.stat.baidu_search_index);
        if (this.stat.baidu_search_index) {
          this.drawBaiduSearch("baidu-search");
        }
        if (this.stat.age_index) {
          this.drawBaiduAge(
            "baidu-age",
            this.stat.age_index,
            "年龄分布",
            ["≤19", "20~29", "30~39", "40~49", "≥50"],
            "auto"
          );
        }
        if (this.stat.gender_index) {
          this.drawBaiduAge(
            "baidu-gender",
            this.stat.gender_index,
            "性别分布",
            ["男", "女"],
            30
          );
        }
      });
    },
    drawBaiduSearch(id) {
      this.baiduSearch = this.$echarts.init(document.getElementById(id));
      this.baiduSearch.setOption({
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          axisTick: {
            show: false,
          },
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "rgba(12,102,173,.5)",
              width: 2,
            },
          },
          data: [
            "08",
            "09",
            "10",
            "11",
            "12",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            type: "line",
            symbol: "none",
            smooth: true,
            data: this.stat.baidu_search_index,
            itemStyle: {
              color: "#09b0f5",
            },
            areaStyle: {
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#09b0f5",
                },
                {
                  offset: 1,
                  color: "rgba(12,102,173,.5)",
                },
              ]),
            },
          },
        ],
      });
    },
    drawBaiduAge(id, obj, title, xAxisData, barWidth) {
      const tgi = [];
      const word_rate = [];
      const all_rate = [];
      for (let key of Object.keys(obj.tgi)) {
        tgi.push(obj.tgi[key]);
        word_rate.push(obj.word_rate[key]);
        all_rate.push(obj.all_rate[key]);
      }
      this.baiduAge = this.$echarts.init(document.getElementById(id));
      this.baiduAge.setOption({
        title: {
          text: title,
          textStyle: {
            fontWeight: "normal",
            fontSize: 14,
            color: "#1cafc5",
          },
          x: "center",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          top: 80,
        },
        xAxis: {
          type: "category",
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(12,102,173,.5)",
              width: 2,
            },
          },
          data: xAxisData,
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}%",
            },
          },
          {
            type: "value",
            name: "TGI",
            nameLocation: "end",
            nameTextStyle: {
              fontWeight: "bold",
              padding: [0, 0, 0, 30],
            },
            splitLine: {
              //网格线
              show: false,
            },
          },
        ],
        legend: {
          data: [this.item.sight, "全网分布", "TGI"],
          top: "10%",
        },
        series: [
          {
            name: "TGI",
            type: "line",
            symbol: "emptyCircle",
            data: tgi,
            yAxisIndex: 1,
          },
          {
            name: this.item.sight,
            type: "bar",
            barWidth: barWidth,
            data: word_rate,
            yAxisIndex: 0,
            color: "rgba(51,198,247)",
          },
          {
            name: "全网分布",
            type: "bar",
            barWidth: barWidth,
            data: all_rate,
            yAxisIndex: 0,
            color: "rgba(0,0,0,.1)",
          },
        ],
      });
    },
    drawPie(id) {
      this.pieChart = this.$echarts.init(document.getElementById(id));
      this.pieChart.setOption({
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
              position: "outside", // 设置标签向外
              formatter: "{b}\n{c}条 ({d}%)", // 设置标签格式
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
  margin-top: 15px;
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

.cloud-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cloud-pic {
  margin-top: 30px;
  width: 400px;
}

.line-chart {
  width: 860px;
  height: 300px;
}
.bar-chart {
  width: 400px;
  height: 300px;
}
.gender-chart {
  margin-left: 70px;
}
.chart-wrapper {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}
</style>
