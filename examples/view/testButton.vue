<template>
  <div>
    <div style="margin-top: 20px">
      <g-icon name="setting"></g-icon>
      <g-button :loading="loading1" @click="loading1 = !loading1"
        >按钮</g-button
      >
      <g-button icon="setting" :loading="true">按钮</g-button>
      <g-button icon="setting" icon-position="right" :loading="true"
        >按钮</g-button
      >
      <g-button-group>
        <g-button>上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading1: false,
    };
  },
  components: {},
};
</script>

<style lang="stylus" scoped></style>
