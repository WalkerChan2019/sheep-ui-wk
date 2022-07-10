/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// JSX支持
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    // jest like api
    globals: true,
    //模拟dom环境
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
