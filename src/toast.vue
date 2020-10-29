<template>
  <div class="toast" ref="toastRef" :class="toastClass">
    <!-- <slot></slot>  不用slot 让用户可以传html片段-->
    <slot v-if="!enableHtml"></slot>
    <span v-else v-html="$slots.default[0]"></span>
    <span class="line" ref="lineRef"></span>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
//
//import Vue from "vue";
// 可能 vue 变成 vue2 ，要导入，就会有问题
// 不知道能不能改，侵入性太强
// Vue.prototype.$toast = function () {
//   console.log("我是 toast");
// };

// 这是构建组件的选项
export default {
  name: "toast",
  data() {
    return {};
  },
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 50,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  computed: {
    toastClass() {
      return `position-${this.position}`;
    },
  },
  mounted() {
    this.updateLineStyle();
    this.execAutoClose();
  },
  methods: {
    updateLineStyle() {
      // 由于容器没有高度，造成中间的线也没高度，height:100% 不生效了。
      this.$nextTick(() => {
        this.$refs.lineRef.style.height =
          this.$refs.toastRef.getBoundingClientRect().height + "px";
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("cloce");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px; // 不要加高度
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.toast {
  animation: fade-in 1s;
  position: fixed;
  display: flex;
  align-items: center;
  min-height: $toast-min-height;
  line-height: 1.8;
  color: white;
  font-size: 14px;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.5);
  padding: 0 16px;
  left: 50%;
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
