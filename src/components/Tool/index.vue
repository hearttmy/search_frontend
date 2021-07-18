//本文件仅测试用
<template>
  <div>
    <div
      v-for="i in is"
      v-bind:key="i"
      :class="i == selected ? 'selected' : 'unselected'"
      @click="selected = i"
    >
      {{ a }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Tool",
  props: {
    a: Number,
  },
  data() {
    return {
      is: [1, 2, 3, 4, 5, 6],
      selected: -1,
    };
  },
};
</script>

<style scoped>
.selected {
  background-color: hsl(350, 85%, 60%);
  color: white;
}
.unselected {
  color: hsl(350, 85%, 60%);
}
</style>
