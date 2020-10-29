<template>
  <div class="toast">
    <slot></slot>
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

export default {
  name: "toast",
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  display: flex;
  align-items: center;
  height: $toast-height;
  line-height: 1.8;
  color: white;
  top: 0;
  left: 50%;
  transform: translateX(-50);
  font-size: 14px;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>
