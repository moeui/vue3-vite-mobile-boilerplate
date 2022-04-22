<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName" :fill="color" />
    </svg>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
const props = defineProps({
    iconClass: {
        type: String,
        required: true
    },
    className: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '#889aa4'
    }
})
const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => {
    if (props.className) {
        return `svg-icon ${props.className}`
    }
    return 'svg-icon'
})
</script>

<style scope lang="stylus">
.svg-icon
    width: 1em
    height: 1em
    fill: currentColor
    vertical-align: middle
</style>
