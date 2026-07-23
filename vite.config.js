import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    cssCodeSplit: false, // Bundle all CSS into a single file
    rollupOptions: {
      output: isSsrBuild
        ? undefined
        : {
            manualChunks: {
              vendor: ['react', 'react-dom'],
            },
          },
    },
  },
  css: {
    devSourcemap: true,
  },
}))
