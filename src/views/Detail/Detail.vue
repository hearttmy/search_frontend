<template>
  <div class="detail-wrapper">
    <el-card
      :body-style="{
        padding: '20px',
      }"
    >
      <div class="card-wrapper">
        <div class="back-wrapper" @click="handleBack">
          <i class="el-icon-back" />返回搜索结果
        </div>
        <div class="cover-wrapper">
          <DetailCover :item="detail" />
        </div>
        <div class="tap-wrapper">
          <DetailNavBar :item_id="detail.id" />
        </div>
        <div class="content-wrapper">
          <router-view :item="detail"></router-view>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import SearchProvider from "@/api/request/search";
import DetailCover from "@/components/DetailCover";
import DetailNavBar from "@/components/DetailNavBar";

export default {
  name: "Detail",
  components: {
    DetailCover,
    DetailNavBar,
  },
  data() {
    return {
      id: "",
      detail: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.searchDetail();
  },
  methods: {
    searchDetail() {
      SearchProvider.searchForDetail({ id: this.id }).then((res) => {
        this.detail = res;
        console.log(this.detail);
      });
    },
    handleBack() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
.detail-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(247, 247, 247, 1);
  padding-top: 20px;
  padding-bottom: 20px;
}

.card-wrapper {
  width: 900px;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.tap-wrapper {
  margin-top: 20px;
}
.back-wrapper {
  color: #1cafc5;
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
