<template>
  <div id="allmap"></div>
</template>

<script
  type="text/javascript"
  src="http://api.map.baidu.com/api?v=2.0&ak=&callback=init"
></script>
<script>
export default {
  methods: {
    loadScript() {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=&callback=init";//此处ak需到百度地图申请再将ak粘贴至此处作为参数
      script.onload(this.init);
    },
    init() {
      var x = 116.404158; // 后台返回的x坐标
      var y = 39.909201; // 后台返回的y坐标
      var map = new BMap.Map("allmap"); // 创建Map实例
      var point = new BMap.Point(x, y); // 创建点坐标
      map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); // 启用滚轮放大缩小
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      map.panTo(point); // 将地图中心移动到指定的经纬度坐标
    },
  },
  mounted() {
    this.loadScript();
  },
};
</script>

<style long="scss scoped">
#allmap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>
