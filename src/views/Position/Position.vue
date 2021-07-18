<template>
  <div>
    <div class="title"><i class="el-icon-map-location" /> 地图定位</div>
    <div id="container"></div>
    <div class="traffic">
      <div class="title"><i class="el-icon-map-location" /> 交通路线</div>
      <div class="content">{{ traffic }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {},
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new window.BMapGL.Map("container");
      const point = new window.BMapGL.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);
      const marker = new window.BMapGL.Marker(point);
      map.addOverlay(marker);
      const opts = {
        width: 250, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: this.item.sight, // 信息窗口标题
      };
      const content = "地址：" + this.item.address;
      const infoWindow = new window.BMapGL.InfoWindow(content, opts); // 创建信息窗口对象
      map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    },
  },
  computed: {
    traffic() {
      const result = this.item.traffic.split(/\s+/)[1];
      return result;
    },
  },
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
