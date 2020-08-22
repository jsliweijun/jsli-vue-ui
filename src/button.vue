// 单文件组件
<template>
  <button class="v-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon", "iconPosition"],
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss"  scoped>
.v-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // inline 影响同一行元素上下不对齐
  vertical-align: middle;
  &:hover {
    border-color: var(--horder-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
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
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
}
</style>
