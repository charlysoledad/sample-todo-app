import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],

  optimizeDeps: {
    exclude: [
      'vue-meteor-tracker',
    ],
  },

  meteor: {
    clientEntry: 'imports/ui/main.js',
  },
})