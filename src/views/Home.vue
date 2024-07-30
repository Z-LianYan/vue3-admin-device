<template>
    <div>{{ result.msg }}</div>
    {{ name }}
    <div class="box">
      <p class="p">p</p>
    </div>

    <el-button 
    type="primary" 
    style="margin-top: 10px;">我是 ElButton</el-button>

    <el-tag type="primary">Tag</el-tag>

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


  <p>语言：{{$t('navbar.logout')}}</p>
  <h3>切换语言</h3>
  <el-button @click="onChangeLanguageZh">中文</el-button>
  <el-button @click="onChangeLanguageEn">英文</el-button>

  <el-button @click="onChangeTheme">改变主题色</el-button>


  <p class="ptest">123</p>
    <!-- <router-view/> -->

  <!-- <div style="height: 100vh;"></div> -->
  
</template>
<script setup lang="ts">
// import { onMounted,reactive, ref, getCurrentInstance} from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import request from "@/utils/request";
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();
const testS = useStorage('test-key',666);
console.log('testS===>>>',testS.value)

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



function onChangeTheme(){
  // console.log('getCurrentInstance()',getCurrentInstance().appContext.config.globalProperties)
  document.documentElement.style.setProperty('--el-color-primary', 'red')
}


function onChangeLanguageZh(){
  console.log('2345')
  locale.value = 'zh-cn';
}
function onChangeLanguageEn(){
  locale.value = 'en';
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
  // const res = await request({
  //   url: "/api/test",
  //   method: "get",
  // });
  // console.log('res===>>',res.data);

  // result = Object.assign(result,res.data);
  
}
onMounted(() => {
  // test();
  console.log('home--------->>>')
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