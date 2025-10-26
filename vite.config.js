import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    cssMinify: true,
    reportCompressedSize: false, // Speeds up build
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  server: {
    warmup: {
      // Pre-transform frequently used files
      clientFiles: ['./src/main.jsx', './src/App.jsx']
    }
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    strictPort: false,
    allowedHosts: [
      'ramaswamy-hospitals.onrender.com',
      '.onrender.com', // Allow all Render subdomains
    ]
  }
})
