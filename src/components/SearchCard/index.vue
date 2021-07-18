<template>
  <el-card :body-style="{ padding: '0px' }" :style="{ 'margin-top': '15px' }">
    <div class="card-wrapper">
      <img class="cover" :src="item.img_url" @click="handleClick" />
      <div class="text-wrapper">
        <div class="caption" @click="handleClick">{{ item.sight }}</div>
        <div class="area-hot">
          <div>[{{ item.area }}]</div>
          <div class="hot">
            评分：
            <el-rate
              v-model="item.score"
              disabled
              show-score
              text-color="#ff9900"
              :colors="colors"
              class="rate"
            />
          </div>
        </div>
        <div class="address">地址：{{ item.address }}</div>
        <div class="intro">{{ item.intro }}</div>
      </div>
      <div class="price-wrapper">
        <div class="price">
          <span class="small-font">￥</span>
          <span>{{ price }}</span>
          <span class="small-font">起</span>
        </div>

        <el-button class="detail-btn" @click="handleClick"
          >查看景点>></el-button
        >
        <div class="count small-font">月销量：{{ item.count }}</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "SearchCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
  methods: {
    handleClick() {
      this.$router.push(`/detail/${this.item.id}`);
    },
  },
  computed: {
    price() {
      return parseInt(this.item.price);
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  display: flex;
  flex-direction: row;
}
.cover {
  width: 280px;
  height: 200px;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 500px;
}

.caption {
  color: #333;
  font-size: 28px;
  margin-top: 20px;
}
.caption:hover {
  cursor: pointer;
  color: #f80;
}

.area-hot {
  margin-top: 15px;
  display: flex;
  font-size: 12px;
}

.hot {
  display: flex;
  font-size: 12px;
  margin-left: 10px;
  color: #999;
}

.address {
  margin-top: 10px;
  font-size: 12px;
  color: #999;
}

.intro {
  margin-top: 10px;
  font-size: 12px;
  color: #999;
}

.price-wrapper {
  flex: 1;
  border-left: 1px dashed rgba(153, 153, 153, 0.301);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price {
  color: #fc361d;
  font-size: 30px;
  margin-top: 30px;
}
.small-font {
  font-size: 12px;
  color: #999;
}

.detail-btn {
  margin-top: 10px;
  width: 120px;
  background-color: #1cafc5;
  color: white;
  font-weight: 700;
  font-size: 14px;
}
.detail-btn:hover,
.detail-btn:active,
.detail-btn:focus {
  background-color: #189cb1;
  color: white;
}

.count {
  margin-top: 10px;
}
</style>
