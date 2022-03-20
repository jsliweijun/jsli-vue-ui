<template>
    <button>
        <span v-if="this.$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'v-button'
};
</script>

<style scoped lang="scss"></style>
