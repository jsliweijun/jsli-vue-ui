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
      this.$toast(
        "很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字，完",
        {
          position: "middle",
          closeButton: {
            text: "关闭",
            callback() {
              console.log("知道了");
            },
          },
        }
      );
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
