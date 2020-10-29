<template>
  <div><button @click="showToast">testToast</button></div>
</template>

<script>
export default {
  data() {
    return {
      message: "hi",
    };
  },
  methods: {
    showToast() {
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
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
