<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
    <div style="border: 1px solid green; height: 100px">
      <slot></slot>
    </div>
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
    // 给出警告，使用 data，computed 来接收父组件在mounted时给子组件的传参
    // gutter: {
    //   type: [Number, String],
    // },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  // background: grey;
  width: 50%;
  // border: 1px solid red;
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
