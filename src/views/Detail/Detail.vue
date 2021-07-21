<template>
  <div class="detail-wrapper">
    <el-card
      :body-style="{
        padding: '20px',
      }"
    >
      <div class="card-wrapper">
        <div class="back-wrapper" @click="handleBack">
          <i class="el-icon-back" /><span class="back-text">返回搜索结果</span>
        </div>
        <div class="cover-wrapper">
          <DetailCover :item="detail" />
        </div>
        <div class="tap-wrapper">
          <DetailNavBar />
        </div>
        <div class="content-wrapper" v-if="detail.id">
          <transition name="el-fade-in-linear">
            <router-view></router-view>
          </transition>
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
        this.$store.commit("detail/set_item", this.detail);
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
  margin-bottom: 10px;
}
.back-wrapper {
  color: #1cafc5;
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}
.back-text {
  font-size: 14px;
  margin-left: 5px;
}
</style>
