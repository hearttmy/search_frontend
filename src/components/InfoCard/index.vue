<template>
  <div class="container">
    <div class="img-wrapper">
      <img :src="post.imgurl" @click="jump" />
    </div>
    <div class="info-wrapper">
      <h3>
        <a :href="post.href" class="sight" @click="jump">{{ post.sight }}</a>
      </h3>
      <div class="line">
        <p class="area little-text">[{{ post.area }}]</p>
        <p class="hot-text little-text">热度</p>
        <el-rate
          class="hot little-text"
          v-model="post.score"
          disabled
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
      </div>
      <div class="line">
        <p class="address little-text">地址：{{ post.address }}</p>
      </div>
      <div class="line">
        <p class="intro little-text">{{ post.intro }}</p>
      </div>
    </div>
    <div class="browsers">
      <p class="little-text">{{ browsers }}次浏览</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    post: {
      id: String,
      imgurl: String,
      intro: String,
      address: String,
      area: String,
      sight: String,
      score: Number,
      href: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$router.push(this.post.href);
    },
  },
  computed: {
    // TODO:完善浏览量
    browsers() {
      return 0;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid #ddd;
  width: 800px;
  height: 200px;
}
.img-wrapper {
  float: left;
}
.info-wrapper {
  padding-left: 20px;
}
.line {
  line-height: 35px;
}

.little-text {
  display: inline;
  font-size: 13px;
  color: #999;
  padding: auto;
}
.area {
  color: #333;
  font-size: 12px;
}
.hot-text {
  margin-left: 10px;
}
.sight {
  overflow: hidden;
  width: 400px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  font-size: 25px;
  color: #333;
}
a:hover {
  color: orange;
}
</style>
