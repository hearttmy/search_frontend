<template>
  <el-container>
    <el-main>
      <div class="Pageheader-wrapper">
        <Pageheader />
      </div>
      <hr />
      <p id="sight">{{ sightname }}</p>

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

.Pageheader-wrapper {
  height: 40px;
}
#sight {
  font-family: "Times New Roman";
  font-size: 28px;

  text-align: left;
  line-height: 0%;
}

</style>
