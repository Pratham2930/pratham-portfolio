import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'ui-utils': ['react-icons', 'react-hot-toast', 'react-type-animation'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
