<template>
    <div>{{ result.msg }}</div>
    {{ name }}
    <div class="box">
      <p class="p">p</p>
    </div>

    <el-button type="primary" style="margin-top: 10px;">我是 ElButton</el-button>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>


    <el-date-picker
    v-model="value2"
    type="date"
    placeholder="Pick a day"
    :disabled-date="disabledDate"
    :shortcuts="shortcuts"
  />
</template>
<script setup lang="ts">
import { onMounted,reactive, ref} from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import request from "@/utils/request";

defineOptions({
  name: "Home",
  inheritAttrs: false,
});
const value2 = ref(new Date());

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}





const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])


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
<style scoped lang="scss">
  // @import "../styles/variables.scss";
  .box{
    border: 1px solid blue;
    .p{
      background: $subMenuBg;
    }
  }
</style>