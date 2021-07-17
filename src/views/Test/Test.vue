<template>
  <div>
    <table>
      <tr id="tagtr">
        <td width="100px" id="firsttd" @click="clickhandle1">
          <i class="el-icon-s-home"></i>
                    <p>概述</p>

        </td>
        <td width="100px" id="secondtd" @click="clickhandle2">
          <i class="el-icon-s-grid"></i>

                    <p>概述</p>

        </td>
      </tr>
    </table>
    <div>
      <!-- <h1 v-show="isdisplay">hello</h1> -->
    </div>
    <div id="first" v-show="isadisplay">
      <p id="intro">{{ intro }}</p>
      <hr />
      <div>
        <i class="el-icon-picture-outline" id="summary">景点图片</i>
      </div>
      <div>
        <br />
        <i class="el-icon-s-order" id="summary">景点简介</i>
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
export default {
  data() {
    return {
      isadisplay: true,
      isbdisplay: false,
    };
  },
  methods: {
    clickhandle1() {
      this.isadisplay = false;
      this.isbdisplay = true;
    },
    clickhandle2() {
      this.isadisplay = true;
      this.isbdisplay = false;
    },
  },
};
</script>
