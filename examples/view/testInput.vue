<template>
  <div>
    <div class="box">
      <g-input value="张三"></g-input>
      <g-input value="李四"></g-input>
      <g-input value="disabled" disabled></g-input>
      <g-input value="readonly" readonly></g-input>
    </div>
    <div class="box">
      <g-input error="输入有误！"></g-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="stylus" scoped></style>
