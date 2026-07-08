import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages serves this project site from /fossilite-website/. Without this
  // base, every built asset URL points at the domain root and 404s → blank screen.
  base: '/fossilite-website/',
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'], // 👈 Add this line
  build: {
    // Split heavy vendors into their own cacheable chunks so the main bundle
    // stays small and browsers can fetch them in parallel.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('three') || id.includes('@react-three')) return 'three'
          if (id.includes('framer-motion') || id.includes('/motion/')) return 'motion'
          if (id.includes('@mui') || id.includes('@emotion')) return 'mui'
          if (id.includes('react-router') || id.includes('/react-dom/') || id.includes('/react/')) return 'react'
          return 'vendor'
        },
      },
    },
    // Three.js legitimately exceeds 500 kB on its own; raise the warn ceiling
    // so the build output stays clean without hiding real regressions.
    chunkSizeWarningLimit: 700,
  },
})
