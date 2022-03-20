<template>
    <i class="vue2-icon--set" :class="`vue2-icon-${name}`" @click="onClick"></i>
</template>

<script>
export default {
    name: 'v-icon',
    props: {
        name: String,
        click: {
            type: Function
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
};
</script>

<style scoped lang="scss">
@import '../../style/css/vue2-icons.scss';
</style>
