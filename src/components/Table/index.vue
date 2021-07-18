<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="景区" width="170">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <!-- <p>{{ scope.row.sightname }}</p> -->
          <div slot="reference" class="sightname-wrapper">
            <el-tag size="medium">{{ scope.row.sightname }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="票价" width="170">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <!-- <p>姓名: {{ scope.row.price}}</p> -->
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.price }}元</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template>
        <el-button size="mini" type="danger" @click="bookticket()"
          >订票</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          sightname: "毛泽东纪念堂",
          price: 25,
        },
      ],
    };
  },
  methods: {
    bookticket() {
      if (confirm("确定订票吗？")) {
        window.location.href = "http://www.baidu.com";
      }
    },
  },
};
</script>
<style scoped>
.pricetable{
  color: #EFF7FF;
}
</style>
