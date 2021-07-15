<template>
  <div class="line-wrapper">
    <ul>
      <li class="title">{{ title }}</li>
      <li class="city" v-for="city in citys" :key="city">
        <a href="/">{{ city }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ClassifyCard",
  props: {
    title: String,
    citys: Array,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  padding: 8px;
}
.line-wrapper {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  font-size: 20px;
}
.title {
  display: inline;
  background-color: greenyellow;
  color: white;
}
.citys {
  display: inline;
  color: blue;
}
</style>
