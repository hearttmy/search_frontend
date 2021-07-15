<template>
  <div class="line-wrapper">
    <span>{{ post.title }}</span>
    <ul>
      <li v-for="city in post.citys" :key="city"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ClassiftyCard",
  props: ["post"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.line-wrapper {
  display: flex;
  text-align: center;
}
span {
  background-color: greenyellow;
  color: white;
  padding: 1px auto;
  flex: 2;
}
li {
  display: inline;
  color: blue;
  padding: 1px auto;
  flex: 1;
}
</style>
