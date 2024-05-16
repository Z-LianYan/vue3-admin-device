<template>
    <div>{{ result.msg }}</div>
    {{ name }}
</template>
<script setup lang="ts">
import { onMounted,reactive, ref} from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import request from "@/utils/request";

defineOptions({
  name: "Home",
  inheritAttrs: false,
});
const obj = { name: ref('张三') };
const { name } = obj;
// const { }
let result:any = reactive<any>({});
async function test(){
  console.log('234567')
  const res = await request({
    url: "/api/test",
    method: "get",
  });
  // if(res?.status === 200) result.value = res.data;
  console.log('res===>>',res.data);

  result = Object.assign(result,res.data);
  // result.value.msg = res.data.msg;
  
}
// onMounted(() => {
  test();
// });
</script>