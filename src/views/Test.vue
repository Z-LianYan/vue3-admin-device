<template>
    <div>test</div>

    <div v-for="(item,index) of menuList" :key="index">{{ item.name }}</div>
</template>
<script setup lang="ts">
const props = defineProps({
  menuList: {
    required: true,
    default: () => {
      return [];
    },
    type: Array<any>,
  },
//   basePath: {
//     type: String,
//     required: true,
//   },
});

</script>
<style scoped lang="scss">
 
</style>