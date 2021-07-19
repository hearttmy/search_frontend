<template>
  <div>
    <div class="title"><i class="el-icon-map-location" /> 地图定位</div>
    <div id="container"></div>
    <div class="traffic" v-if="item.traffic.length">
      <div class="title"><i class="el-icon-map-location" /> 交通路线</div>
      <div class="content" v-for="_traffic in item.traffic" :key="_traffic">
        {{ _traffic }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.item = this.$store.state.detail.item;
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new window.BMapGL.Map("container");
      const point = new window.BMapGL.Point(this.item.lon, this.item.lat);
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);
      const marker = new window.BMapGL.Marker(point);
      map.addOverlay(marker);
      const opts = {
        width: 250,
        height: 100,
        title: this.item.sight,
      };
      const content = "地址：" + this.item.address;
      const infoWindow = new window.BMapGL.InfoWindow(content, opts);
      map.openInfoWindow(infoWindow, point);
    },
  },
  computed: {},
};
</script>
<style scoped>
#container {
  margin-top: 20px;
  width: 100%;
  height: 300px;
}
.title {
  color: #1cafc5;
  font-size: 18px;
}
.content {
  text-indent: 20px;
  margin-top: 10px;
  line-height: 30px;
}
.traffic {
  margin-top: 40px;
}
</style>
