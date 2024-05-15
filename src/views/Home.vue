<template>
    <div>{{ result }}</div>
</template>
<script setup lang="ts">
import { onMounted,reactive} from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import request from "@/utils/request";

defineOptions({
  name: "Home",
  inheritAttrs: false,
});
let result:any = reactive<any>({})
async function test(){
  console.log('234567')
  const res = await request({
    url: "/api/test",
    method: "get",
  });
  if(res?.status === 200) result.value = res.data;
  
}
onMounted(() => {
  test();
});
</script>