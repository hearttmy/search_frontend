<template>
  <el-card
    :body-style="{ padding: '0px', 'padding-bottom': '10px' }"
    :style="{ 'margin-top': '15px' }"
  >
    <div class="card-wrapper" @click="handleClick">
      <img class="cover" :src="item.imgUrl" />
      <div class="caption">{{ item.name }}</div>
      <div class="text-wrapper">
        <div class="intro">{{ item.feature }}</div>
        <div class="price-wrapper">
          <span class="small-font">
            <span class="red-font">￥{{ item.qunarPrice }}</span>
            <span> 起</span>
          </span>
          <span class="small-font market-price"
            >票面价: {{ item.marketPrice }}</span
          >
        </div>
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
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push(`/detail/${this.item.id}`);
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.cover {
  height: 150px;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.caption {
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 30px;
  top: 120px;
  height: 30px;
  color: white;
  font-size: 11px;
  background: rgba(0, 0, 0, 0.5);
}

.intro {
  margin-top: 10px;
  font-size: 12px;
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  color: #999;
}
.red-font {
  color: #f80;
}
.small-font {
  font-size: 12px;
  color: #999;
}

.market-price {
  margin-left: 20px;
}
</style>
