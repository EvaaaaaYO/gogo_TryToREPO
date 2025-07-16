import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // 上傳到github
  base: '/gogo_TryToREPO/', 
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

 server: {
    proxy: {
      // 將 /api 開頭的請求轉發到 ASP.NET API 伺服器
      '/api': {
        target: 'https://localhost:5263', // 你的 ASP.NET API 本地網址
        changeOrigin: true,
        secure: false, // 如果是 https 且是自簽憑證，要加這行
      },
    },
  },



})
