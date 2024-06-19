<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import en from 'element-plus/dist/locale/en.mjs'
const locale = zhCn;
</script>

<template>
  
  <el-config-provider :locale="locale" size="large">
    <RouterView />
  </el-config-provider>
  
</template>

<style scoped>
</style>
