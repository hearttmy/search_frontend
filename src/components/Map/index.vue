<template>
  <div id="allmap"></div>
</template>

<script>
export default {
  methods: {
    loadScript() {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "http://api.map.baidu.com/getscript?v=2.0&ak=TpqCuUxbTqvkbDhL24MjprRZZOQv2tei&services=&t=20210225162129";
      // var allmap = document.getElementById("allmap");
      // allmap.appendChild(script);
      script.onload = () => {
        this.init();
      };
      document.body.appendChild(script);

    },
    init() {
      let BMap = window.BMap;
      var x = 116.404158; // 后台返回的x坐标
      var y = 39.909201; // 后台返回的y坐标
      var map = new BMap.Map("allmap"); // 创建Map实例
      var point = new BMap.Point(x, y); // 创建点坐标
      map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); // 启用滚轮放大缩小
      map.setCurrentCity("北京");

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
  width: 80vh;
  height: 80vh;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
.anchorBL{
   	 display:none;
}
</style>
