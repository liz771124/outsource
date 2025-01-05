// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  base: './', // 使用相對路徑
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false
        }
      }
    }),
    Pages(),
    Components({ dirs: ['src/components'] })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // 關閉 sourcemap
    cssCodeSplit: false, // 禁用 CSS 代碼分割
    rollupOptions: {
      output: {
        // 確保生成的資源使用相對路徑
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|ico)(\?.*)?$/.test(assetInfo.name)) {
            extType = 'imgs'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    // 配置 Vite 不添加 crossorigin
    target: 'esnext',
    modulePreload: false
  }
})
