<template>
  <div class="wrapper">
    <img class="logo" src="~@/assets/img/home_logo.png" @click="toHomePage" />
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
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo {
  height: 80%;
  cursor: pointer;
}
</style>
