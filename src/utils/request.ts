import axios from "axios";
// import { useUserStoreHook } from "@/store/modules/user";
import { ResultEnum } from "@/enums/ResultEnum";
import { ElMessage } from 'element-plus';
// import { TOKEN_KEY } from "@/enums/CacheEnum";

// 创建 axios 实例
console.log('import.meta==>>',import.meta)
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截器
service.interceptors.request.use(
  (config:any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log('response',response)
    // 检查配置的响应类型是否为二进制类型（'blob' 或 'arraybuffer'）, 如果是，直接返回响应对象
    // if (
    //   response.config.responseType === "blob" ||
    //   response.config.responseType === "arraybuffer"
    // ) {
    //   return response;
    // }

    const { code, data, msg } = response.data;
    if (code === ResultEnum.SUCCESS) {
      return data;
    }

    ElMessage.error(msg || "系统出错");
    return Promise.reject(new Error(msg || "Error"));
  },
  (error: any) => {
    console.log('error==>>',error)
    // 异常处理
    if (error.response.data) {
      const { code, msg } = error.response.data;
      // if (code === ResultEnum.TOKEN_INVALID) {
      //   ElMessageBox.confirm("当前页面已失效，请重新登录", "提示", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning",
      //   }).then(() => {
      //     const userStore = useUserStoreHook();
      //     userStore.resetToken().then(() => {
      //       location.reload();
      //     });
      //   });
      // } else {
      //   ElMessage.error(msg || "系统出错");
      // }
    }
    return Promise.reject(error.message);
  }
);

// 导出 axios 实例
export default service;
