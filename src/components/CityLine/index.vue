<template>
  <div class="line-wrapper">
    <el-row>
      <el-col :span="2" class="title-row">
        <a class="title" :href="getUrl(post.title)">{{ post.title }}</a>
      </el-col>
      <el-col :span="20" class="city-row">
        <a
          class="cities"
          v-for="(city, index) in post.cities.slice(0, 6)"
          v-bind:key="index"
          :href="getUrl(city)"
          >{{ city }}
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CityLine",
  props: {
    post: {
      cities: Array,
      title: String,
    },
  },
  methods: {
    getUrl(keyword) {
      return "/key?=" + keyword;
    },
  },
};
</script>

<style scoped>
.title-row {
  margin-right: 4vh;
}
.title {
  font-size: 18px;
  color: #444;
}
.cities {
  text-decoration: none;
  font-size: 16px;
  color: #666;
  margin: 2vh;
  line-height: 1.5;
  padding: 2px;
  /* border-right: 1px solid #ddd; */
}

a:hover {
  text-decoration: underline;
  color: orange;
}
</style>
