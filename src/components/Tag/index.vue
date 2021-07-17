<template>
  <div>
    <table>
      <tr id="tagtr">
        <td
          width="100px"
          @click="clickfirsttd"
          @mouseover="overfirst"
          id="firsttd"
        >
          <i class="el-icon-s-home"></i>
          <p>概述</p>
        </td>
        <td width="100px" id="secondtd" @click="clicksecondtd">
          <i class="el-icon-s-grid"></i>

          <p>相关</p>
        </td>
      </tr>
    </table>
    <div id="first" v-show="isadisplay">
      <p id="intro">{{ intro }}</p>
      <hr />
      <div>
        <i class="el-icon-picture-outline" id="summary">景点图片</i>
        <div class="carouselfig-wrapper">
          <Carouselfig />
        </div>
      </div>
      <div>
        <br />
        <i class="el-icon-s-order" id="summary">景点简介</i>

        <div class="description-wrapper">
          <p id="description">{{ description }}</p>
        </div>
      </div>
    </div>
    <div id="second" v-show="isbdisplay">
      <div>
        <p id="address">地址：{{ address }}</p>
        <Table />
      </div>
    </div>
  </div>
</template>
<script>
import Carouselfig from "@/components/Carouselfig";
import Table from "@/components/Table";

export default {
  data() {
    return {
      activeName: "first",
      intro: "一代伟人的传奇一生",
      description:
        "韶山主席纪念馆，生平事迹大汇展,伟岸塑像厅前立，资料图片讲清晰。六大革命纪念地，韶山上海加遵义。北京延安井冈山，危机转折化险关。不同时期毛泽东，工作生活列馆中。通过讲解和参观，伟人风范记心间。",
      address: "北京市东城区天安门广场人民英雄纪念碑南面",
      isadisplay: true,
      isbdisplay: false,
    };
  },
  methods: {
    clicksecondtd() {
      this.isadisplay = false;
      this.isbdisplay = true;
    },
    overfirst() {
      // alert("hello");
    },
  },
  components: {
    Carouselfig,
    Table,
  },
  mounted() {
    this.loadScript();
  },
};
</script>
<style scoped>
.carouselfig-wrapper {
  height: 400px;
  width: 800px;
}
.description-wrapper {
  height: 200px;
  width: 800px;
}
#intro {
  text-align: right;
  color: #616872;
}
#description {
  text-align: left;
  text-indent: 2em;
  line-height: 40px;
}
#address {
  text-align: left;
}
#rapage {
  text-align: left;
  position: relative;
  top: 100px;
  height: 1000px;
}
#summary {
  color: red;
  position: relative;
  right: 548px;
  line-height: 50px;
}
.el-icon-s-home,
.el-icon-s-grid {
  color: chocolate;
}
#tagtr {
  align-content: center;
  text-align: center;
}
#tagtr {
  position: relative;
  left: 400px;
}
/* #firsttd:hover {
  background-color: red;
} */
#secondtd:hover {
  background-color: red;
}
</style>
