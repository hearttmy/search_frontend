<template>
  <div class="block">
    <el-carousel trigger="click" height="400px" >
      <el-carousel-item v-for="item in pics" :key="item">
        <img v-bind:src="item" class="picwrap" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import pic1URL from "@/assets/img/wKgB3FDn5Z-ARvoZABFCIed9B3Q44.jpeg";
import pic2URL from "@/assets/img/wKgBs1cotEWAPrdIAAgrS_ozwjU65.jpeg";
import pic3URL from "@/assets/img/wKgE2l1AT1yAN-EiACb1k6AmZkU591.jpg";


export default {
  name: "Carouselfig",
  data() {
    return {
      pics: [pic1URL, pic2URL, pic3URL],

    };
  },

};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.picwrap {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
