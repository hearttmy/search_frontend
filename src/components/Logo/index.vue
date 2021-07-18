<template>
  <div>
    <img class="logo" src="~@/assets/img/logo.png" @click="toHomePage" />
  </div>
</template>
<script>
export default {
  name: "Logo",
  methods: {
    toHomePage() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style scoped>
.logo {
  height: 100%;
  cursor: pointer;
}
</style>
