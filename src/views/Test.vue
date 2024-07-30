<template>
    <div>test</div>
  <ComponentTest>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>

    <template #default>
      <p>default</p>
      <p>And default</p>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </ComponentTest>
  <h1>{{ JSON.stringify($attrs) }}</h1>
  <div v-for="(value, key) in $attrs" :key="key">{{ key }}: {{ value }}</div>
</template>
<script setup lang="ts">
import ComponentTest from "@/views/ComponentTest.vue"
defineOptions({
  name: "Test",
  inheritAttrs: false,
});
const props = defineProps({
  aa: {
    type: String,
    required: false
  }
});
onMounted(()=>{
  console.log('test--------->>>')
})
</script>
<style scoped lang="scss">
 
</style>