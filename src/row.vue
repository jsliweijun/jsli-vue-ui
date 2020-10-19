<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  data() {
    return {};
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px",
      };
    },
  },
  components: {},
  created() {
    // 没有子组件
  },
  mounted() {
    // 有子组件
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
