<template>
  <div>
    <h1>hello</h1>
    <Results :results="results"></Results>
  </div>
</template>

<script>
import Results from "@/components/Results";
export default {
  components: {
    Results,
  },
  data() {
    return {
      results: [
        {
          id: "12313",
          imgurl:
            "https://imgs.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_280x200_10dd1963.jpg",
          intro: "人间清净之地",
          address: "浙江省*杭州市*西湖区*普陀山",
          area: "浙江省*杭州市*西湖区",
          sight: "普陀山风景区",
          score: 5,
          href: "/",
        },
        {
          id: "12313",
          imgurl:
            "https://publish-pic-cpu.baidu.com/85e6988b-18db-454d-a2c5-d6314d3d9a36.jpeg@w_228,h_152",
          intro: "人间清净之地",
          address: "浙江省*杭州市*西湖区*普陀山",
          area: "浙江省*杭州市*西湖区",
          sight: "普陀山风景区",
          score: 5,
          href: "/",
        },
      ],
    };
  },
};
</script>
