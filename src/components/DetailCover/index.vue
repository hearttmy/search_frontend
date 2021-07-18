<template>
  <div class="card-wrapper">
    <img class="cover" :src="item.img_url" />
    <div class="text-wrapper">
      <div class="caption">{{ item.sight }}</div>
      <div class="intro">{{ item.intro }}</div>
      <div class="address">位置：{{ item.address }}</div>
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
      <div class="price">
        <span>￥{{ price }}</span>
        <span class="small-font"> 起</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCover",
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
  width: 500px;
  height: 300px;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}

.caption {
  color: #333;
  font-size: 28px;
  margin-top: 15px;
  height: 80px;
}

.hot {
  display: flex;
  font-size: 15px;
  margin-top: 15px;
  color: #999;
}

.address {
  margin-top: 20px;
  font-size: 15px;
  color: #999;
}

.intro {
  margin-top: 10px;
  font-size: 18px;
  color: #999;
}

.price {
  color: #f60;
  font-size: 30px;
  margin-top: 30px;
}
.small-font {
  font-size: 12px;
  color: #999;
}

.count {
  margin-top: 10px;
}
</style>
