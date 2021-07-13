<template>
  <div class="search">
    <el-input @focus="focus" @blur="blur" @keyup.enter.native="searchHandler">
      <i slot="suffix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-card v-if="isSearch">...</el-card>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>
