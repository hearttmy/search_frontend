<template>
  <el-table :data="tableData" stripe style="width: 100%" show-header="false">
    <el-table-column prop="attr" label="" width="150" border> </el-table-column>
    <el-table-column prop="value" label="" width="500" border>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      address: "北京市东城区天安门广场人民英雄纪念碑南面",
      opentime: "8:30至17：30正常营业",
      traffic: "可乘一路公交车，车费一元",
      tableData: [
        {
          attr: "地址",
          value: "北京市东城区天安门广场人民英雄纪念碑南面",
        },
        {
          attr: "开放时间",
          value: "8:30至17：30正常营业",
        },
        {
          attr: "交通方式",
          value: "可乘一路公交车，车费一元",
        },
      ],
    };
  },
};
</script>
