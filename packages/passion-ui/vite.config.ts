import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcss from './postcss.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ reactivityTransform: true }), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      shared: fileURLToPath(new URL('./packages/shared', import.meta.url)),
      'passion-ui': fileURLToPath(new URL('../passion-ui/packages', import.meta.url)),
      website: fileURLToPath(new URL('../../website/docs/components', import.meta.url))
    }
  },
  server: {
    port: 3001
  },
  css: {
    postcss
  }

})
