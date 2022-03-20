<template>
    <div id="app">
        <v-icon name="pin" @click="iconClick"></v-icon>
        <hr />
        <v-button>默认按钮</v-button>
        <!-- <button @click="click">123</button> -->
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    methods: {
        iconClick() {
            console.log('123');
        }
    }
};
</script>

<style lang="scss"></style>
