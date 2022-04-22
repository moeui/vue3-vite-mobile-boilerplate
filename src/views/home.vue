<template>
    <img src="../assets/logo.png" alt="" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <svg-icon icon-class="logo" />
    <div>
        <router-link to="/dome">dome</router-link>
    </div>
    <div @click="router.push('/dome')">dome</div>
    <div><span @click="changeViewWidth">change viewWidth</span></div>
    <div>viewWidth: {{ viewWidth }}</div>
    <div @click="changeLanguage">change language: {{ t('home') }}</div>
</template>

<script lang="ts" setup>
import storage from '@moeui/storage'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import { useStore } from '../store'

const { t, locale } = useI18n()
const router = useRouter()
const store = useStore()
const viewWidth = computed(() => store.state.base.viewWidth)
const changeViewWidth = () => {
    // store.commit('base/SET_VIEW_WIDTH', 222)
    store.dispatch('base/setViewWidth', 111)
    console.log(store.state.base.viewWidth, store)
}
const changeLanguage = () => {
    if (locale.value === 'en_US') {
        locale.value = 'zh_CN'
        storage.set('language', `zh_CN`)
    } else {
        locale.value = 'en_US'
        storage.set('language', `en_US`)
    }
}
</script>
