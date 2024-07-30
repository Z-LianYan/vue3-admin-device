<template>
    <div>Home1</div>
  
</template>
<script setup lang="ts">


defineOptions({
  name: "Home1",
  inheritAttrs: false,
});
onMounted(() => {
  // test();
  console.log('home1--------->>>')
});
</script>
<style scoped lang="scss">
  // @use "../styles/variables.scss" as *;
  .box{
    border: 1px solid blue;
    .p{
      background: red; 
    }
  }


  .custom-class {
    --el-tag-bg-color: blue;
  }

  .ptest{
    color: var(--el-color-primary);
  }
</style>