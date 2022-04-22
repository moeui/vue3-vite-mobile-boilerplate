<template>
    <h1>{{ msg }}</h1>
    <p>
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <button type="button" @click="color = '#999'">change</button>
    <van-button type="primary">主要按钮</van-button>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
const count = ref(0)
const props = defineProps({
    msg: {
        type: String,
        required: true
    }
})
const color = ref('#42b983')
</script>

<style scoped>
a {
    color: v-bind(color);
    height: 100px;
}
</style>
