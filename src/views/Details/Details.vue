<template>
  <el-container>
    <div class="Pageheader-wrapper">
      <Pageheader />
    </div>
    <el-main>
      <p id="sight">{{ sightname }}</p>
      <p id="intro">{{ intro }}</p>

      <hr />
      <div class="carouselfig-wrapper">
        <Carouselfig />
      </div>
      <hr />
      <div class="description-wrapper">
        <p id="description">{{ description }}</p>
      </div>
      <hr />
      <!-- <div>
        <Map />
      </div> -->
      <div>
        <p id="address">地址：{{ address }}</p>
        <Table />
      </div>
    </el-main>
    <el-footer>
      <FootBar />
    </el-footer>
  </el-container>
</template>

<script>
import Carouselfig from "@/components/Carouselfig";
import Table from "@/components/Table";
import FootBar from "@/components/FootBar";
import Pageheader from "@/components/Pageheader";
// import Map from "@/components/Pageheader";

export default {
  name: "Details",
  components: {
    Carouselfig,
    Table,
    FootBar,
    Pageheader,
    // Map,
  },
  data() {
    return {
      sightname: "毛泽东纪念堂",
      intro: "一代伟人的传奇一生",
      description:
        "韶山主席纪念馆，生平事迹大汇展,伟岸塑像厅前立，资料图片讲清晰。六大革命纪念地，韶山上海加遵义。北京延安井冈山，危机转折化险关。不同时期毛泽东，工作生活列馆中。通过讲解和参观，伟人风范记心间。",
      address: "北京市东城区天安门广场人民英雄纪念碑南面",
    };
  },
};
</script>

<style>
.el-header {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 20 px;
  height: 20px;
}

.el-footer {
  background-color: rgb(189, 194, 189);
  color: #333;
  line-height: 60px;
  left: 200px;
  text-align: left;
  position: relative;

  width: 80%;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  left: 200px;
  width: 80%;

  height: 1500px;
  position: relative;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
#sight {
  font-family: "Times New Roman";
  font-size: 28px;

  text-align: left;
  line-height: 0%;
}
.carouselfig-wrapper {
  height: 300px;
}
.Pageheader-wrapper {
  height: 40px;
}
.description-wrapper {
  height: 200px;
  width: 1000px;
}
#intro {
  text-align: right;
  color: #616872;
}
#description {
  text-align: left;
}
#address {
  text-align: left;
}

</style>
