import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv,ConfigEnv, } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig(({ mode }:ConfigEnv)=>{
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

      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
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
          changeOrigin: true,
          // 接口地址
          // target: env.VITE_APP_API_URL,
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
          additionalData: '@import "./src/styles/index.scss";',
        },
      },
    },
  }
})
