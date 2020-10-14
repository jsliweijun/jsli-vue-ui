<template>
  <svg v-if="name" class="icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>
