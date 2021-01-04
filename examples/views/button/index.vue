<template>
  <div @click="test">
    <VButton>1234</VButton>
    <svg class="icon">
      <use xlink:href="#i-setting" />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    test() {
      const a = 22;
      a = 33;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
