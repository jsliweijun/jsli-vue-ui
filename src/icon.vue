<template>
  <svg class="g-icon test">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>
