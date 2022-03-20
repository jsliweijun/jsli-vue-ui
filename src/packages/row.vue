<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [Number, String],
    },
    // 如果没传，可以判断有时再使用
    align: {
      type: String,
      validate(value) {
        return ["left", "right", "center"].includes(value);
      },
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
    rowClass() {
      let { align } = this;
      return [align && `align-${align}`];
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
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
