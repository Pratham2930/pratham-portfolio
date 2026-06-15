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
          'firebase': ['firebase/app', 'firebase/firestore'],
          'ui-utils': ['react-icons', 'react-hot-toast', 'react-type-animation', '@emailjs/browser'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
