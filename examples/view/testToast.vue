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
      this.$toast("test toast");
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
