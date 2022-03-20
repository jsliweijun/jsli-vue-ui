<template>
  <div class="col" :class="colClass" :style="colStryle">
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
    // 给出警告，使用 data，computed 来接收父组件在mounted时给子组件的传参
    // gutter: {
    //   type: [Number, String],
    // },
    phone: {
      type: Object,
      validate(value) {
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach((key) => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      },
    },
  },
  data() {
    return {
      gutter: 0,
      // 将样式变量放在这，由于依赖gutter动态传参，会有bug
      // colStryle: {
      //   paddingLeft: this.gutter / 2 + "px",
      //   paddingRight: this.gutter / 2 + "px",
      // },
    };
  },
  computed: {
    colClass() {
      // 通过js参数，变化到 html中，根据html的值不同，获取不同的css属性值，权重层叠
      let { span, offset, phone } = this;
      let phoneClass = [];
      if (phone) {
        phoneClass = [`col-phone-${phone.span}`];
      }
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...phoneClass,
      ];
    },
    colStryle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.col {
  // height: 100px;
  // background: grey;
  // width: 50%;
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
  // 同css切换手机端样式，媒体查询,优先级更高
  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 577px) and (max-width: 767px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (max-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
}
</style>
