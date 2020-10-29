<template>
  <div>
    <button @click="showTop">top</button>
    <button @click="showMiddle">middle</button>
    <button @click="showBottom">bottom</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hi",
    };
  },
  methods: {
    showTop() {
      this.$toast(`你的智商是 ${parseInt(Math.random() * 100)}`, {
        position: "top",
        closeButton: {
          text: "关闭",
          callback() {
            console.log("知道了");
          },
        },
      });
    },
    showMiddle() {
      this.$toast(`你的智商是 ${parseInt(Math.random() * 100)}`, {
        position: "middle",
        closeButton: {
          text: "关闭",
          callback() {
            console.log("知道了");
          },
        },
      });
    },
    showBottom() {
      this.$toast(`你的智商是 ${parseInt(Math.random() * 100)}`, {
        position: "bottom",
        closeButton: {
          text: "关闭",
          callback() {
            console.log("知道了");
          },
        },
      });
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
