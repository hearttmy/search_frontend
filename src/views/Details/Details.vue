<template>
  <el-container>
    <el-main>
      <div class="Pageheader-wrapper">
        <Pageheader />
      </div>
      <el-row :gutter="20">
        <el-col :span="6.1">
          <div class="grid-content">
            <img v-bind:src="imgURL" /></div
        ></el-col>
        <el-col :span="9"
          ><div class="grid-content" id="intro">
            <p id="sight">{{ sightname }}</p>
            <p id="area">{{ areaname }}</p>
            <p id="introsent">{{ intro }}</p>
          </div></el-col
        >
        <el-col :span="8"
          ><div class="grid-content" id="rate">
            <el-rate
              v-model="score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <div id="level">
              {{ level }}
            </div>
          </div></el-col
        >
      </el-row>
      <!-- <div>
        <Map />
      </div> -->
      <div>
        <Tag />
      </div>
    </el-main>
    <el-footer>
      <FootBar />
    </el-footer>
  </el-container>
</template>

<script>
import FootBar from "@/components/FootBar";
import Pageheader from "@/components/Pageheader";
import Tag from "@/components/Tag";
import Imiga from "@/assets/img/wKgE2l1AT1yAN-EiACb1k6AmZkU591.jpg";

// import Map from "@/components/Pageheader";

export default {
  name: "Details",
  components: {
    FootBar,
    Pageheader,
    Tag,
    // Map,
  },
  data() {
    return {
      sightname: "毛泽东纪念堂",
      imgURL: Imiga,
      intro: "一代伟人的传奇一生",
      areaname: "北京 北京 东城区",
      score: 3.7,
      level: "4A景区",
    };
  },
};
</script>

<style>

.el-footer {
  background-color: rgb(236, 241, 236);
  color: #333;
  line-height: 60px;
  left: 200px;
  text-align: left;
  position: relative;

  width: 80%;
}



.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  left: 200px;
  width: 80%;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);

  height: 2000px;
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

.Pageheader-wrapper {
  height: 40px;
}
#sight {
  font-family: "Times New Roman";
  font-size: 28px;
  display: inline-block;
  text-align: left;
  line-height: 0%;
  color: rgb(141, 170, 34);
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  width: 300px;
  text-align: left;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
#intro {
  position: relative;
  top: 80px;
  left: 20px;
}
#introsent {
  text-align: right;
  color: #616872;
}
#level {
  width: 18%;
  line-height: 20px;
  height: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-color: yellow;
  border-style: solid;
  text-align: center;
}
</style>
