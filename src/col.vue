<template>
  <div class="col" :class="[`col-${span}  offset-${offset}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;
  // 用 scss 变量进行测试 24 份的宽度
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
