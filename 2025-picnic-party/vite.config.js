import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  base: './',
  plugins: [vue(), Pages(), Components({ dirs: ['src/components'] })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    copyPublicDir: true, // 確保複製 public 目錄
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const type = assetInfo.name.split('.').pop()
          const folder = /\.(png|jpe?g|gif|svg|webp|ico)$/i.test(type)
            ? 'img'
            : type
          return `assets/${folder}/[name][extname]`
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    }
  }
})
