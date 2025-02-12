import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production'
      ? './'
      : '/outsource/2025-picnic-party/dist/',
  plugins: [vue(), Pages(), Components({ dirs: ['src/components'] })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    copyPublicDir: true,
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
        entryFileNames: 'js/[name]-[hash].js',
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          swiper: ['swiper']
        }
      }
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 2000
  }
})
