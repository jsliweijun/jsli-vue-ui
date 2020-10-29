<template>
  <div class="container">
    <div class="menu">
      <ul>
        <li><router-link to="testButton">Button</router-link></li>
        <li><router-link to="testIcon">Icon</router-link></li>
        <li><router-link to="testInput">Input</router-link></li>
        <li><router-link to="testGrid">Grid</router-link></li>
        <li><router-link to="testToast">Toast</router-link></li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
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

<style lang="scss" scoped>
.container {
  display: flex;
  .menu {
    width: 140px;
    border-right: 1px solid #ccc;
  }
  .content {
    flex: 1;
  }
}
</style>
