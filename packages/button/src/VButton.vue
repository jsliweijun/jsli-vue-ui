<template>
  <button>
    <svg class="icon">
      <use xlink:href="#i-setting" />
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="stylus" scoped>
.icon
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow hidden
</style>
