<template>
  <div>
    <div>
      <table id="tag">
        <tr>
          <td width="100px" id="firsttd" @click="clickhandle1">
            <i class="el-icon-s-home"></i>
            <p>概述</p>
          </td>
          <td width="100px" id="secondtd" @click="clickhandle2">
            <i class="el-icon-s-grid"></i>

            <p>相关</p>
          </td>
        </tr>
      </table>
    </div>
    <div id="first" v-show="isadisplay">
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
      <div>
        <br />
        <i class="el-icon-s-promotion" id="summary">景点地图</i>

        <div class="description-wrapper">
          <p id="description">{{ description }}</p>
        </div>
      </div>
    </div>
    <div id="second" v-show="isbdisplay">
      <hr />
      <div id="information">
        <Informationtab />

      </div>
      <br />

      <div>
        <Table />
      </div>
      <div id="tips">
        <p>游览贴士:</p>

        <ol>
          <li>游玩过程中，请注意个人安全</li>
          <li>做文明乘客，保护景区环境</li>
          <li>请遵守景区相关规定</li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
import Carouselfig from "@/components/Carouselfig";
import Table from "@/components/Table";
import Informationtab from "@/components/Informationtab";


export default {
  data() {
    return {
      activeName: "first",
      description:
        "韶山主席纪念馆，生平事迹大汇展,伟岸塑像厅前立，资料图片讲清晰。六大革命纪念地，韶山上海加遵义。北京延安井冈山，危机转折化险关。不同时期毛泽东，工作生活列馆中。通过讲解和参观，伟人风范记心间。",


      isadisplay: true,
      isbdisplay: false,
    };
  },
  methods: {
    clickhandle2() {
      this.isadisplay = false;
      this.isbdisplay = true;
    },
    clickhandle1() {
      this.isadisplay = true;
      this.isbdisplay = false;
    },
  },
  components: {
    Carouselfig,
    Table,
    Informationtab,
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

#description {
  text-align: left;
  text-indent: 2em;
  line-height: 40px;
}
#information {
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
#tips{
  text-align: left;

}
.el-icon-s-home,
.el-icon-s-grid {
  color: chocolate;
}
#tag {
  align-content: center;
  text-align: center;
  position: relative;
  left: 400px;
}
/* #firsttd:hover {
  background-color: red;
} */
#secondtd:hover {
  border-bottom: 1px solid rgb(219, 40, 70);
}
#firsttd:hover {
  border-bottom: 1px solid rgb(219, 40, 70);
}

</style>
