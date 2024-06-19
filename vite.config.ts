import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv,ConfigEnv, } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {
  name,
  version,
  engines,
  dependencies,
  devDependencies,
} from "./package.json";

const pathSrc = path.resolve(__dirname, 'src')

/** 平台的名称、版本、运行所需的`node`版本、依赖、构建时间的类型提示 */
const __APP_INFO__ = {
  pkg: { 
    name, 
    version, 
    engines, 
    dependencies, 
    devDependencies 
  },
  buildTimestamp: Date.now(),
};
import UnoCSS from "unocss/vite";
// https://vitejs.dev/config/
export default defineConfig(({ mode }:ConfigEnv)=>{
  console.log('import.meta======>>>',import.meta,fileURLToPath(new URL('./src', import.meta.url)))
  // mode: development
  // process.cwd(): /Users/lyz/Desktop/vue/vue-admin-device
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
      // MOCK 服务
      env.VITE_MOCK_DEV_SERVER === "true" ? mockDevServerPlugin() : null,
      UnoCSS({
        hmrTopLevelAwait: false,
      }),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      AutoImport({
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        // imports: ['vue', '@vueuse/core','pinia','vue-router'],
        imports: ["vue", "@vueuse/core", "pinia", "vue-router", "vue-i18n"],
        // imports: ['vue', 'pinia'],
  
        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver()
        ],
        // 是否在 vue 模板中自动导入
        vueTemplate: true,
        dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver()
        ],
        // 指定自定义组件位置(默认:src/components)
        dirs: ["src/components", "src/**/components"],
        // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)
        dts: false,
        // dts: "src/typings/components.d.ts",
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // resolve: {
    //   alias: {
    //     "@": pathSrc,
    //   },
    // },
    server: {
      // 允许IP访问
      host: "0.0.0.0",
      // 应用端口 (默认:3000)
      port: Number(env.VITE_APP_PORT),
      // 运行是否自动打开浏览器
      open: true,
      proxy: {
       /** 代理前缀为 /dev-api 的请求  */
       [env.VITE_APP_BASE_API]: {
          changeOrigin: false,
          // 接口地址
          target: env.VITE_APP_API_URL,
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
        },
      }
    },
    css: {
      preprocessorOptions: {
        // 这里可以配置sass的选项，例如全局变量、函数等
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "./src/styles/variables.scss" as *;`,
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  }
})
