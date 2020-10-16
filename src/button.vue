<template>
  <button
    @click="$emit('click')"
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: true }"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  // props: ["icon", "iconPosition"],
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        if (value !== "left" && value !== "right") {
          return false;
        } else {
          return true;
        }
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    x() {
      this.$emit("click");
    },
  },
  components: {
    "g-icon": Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/var.scss";
// 声明动画
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  // 给按钮加 flex布局，可以让icon和内容进行排序
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // inline 影响同一行元素上下不对齐
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: spin 0.5s infinite linear;
  }
}
</style>
