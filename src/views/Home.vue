<template>
    <div>12345</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import request from "@/utils/request";
async function test(){
  console.log('234567')
  const res = await request({
      url: "/api/test",
      method: "get",
  });
}
onMounted(() => {
  test();
});
</script>