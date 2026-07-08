import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel sets VERCEL=1 during its build. Read it off globalThis so we don't need
// @types/node (which isn't guaranteed on a clean CI install) just for `process`.
const isVercel = Boolean(
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.VERCEL,
)

export default defineConfig({
  // Base path differs per host: Vercel (and local) serve from the domain root,
  // while GitHub Pages serves this project site from /fossilite-website/. Vercel
  // sets VERCEL=1 during its build, so we key off that. BrowserRouter reads the
  // same value via import.meta.env.BASE_URL, so routing follows automatically.
  base: isVercel ? '/' : '/fossilite-website/',
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'], // 👈 Add this line
  build: {
    // Split heavy vendors into their own cacheable chunks so the main bundle
    // stays small and browsers can fetch them in parallel.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // Split heavy libraries into their own chunks
          if (id.includes('three') || id.includes('@react-three')) return 'three'
          if (id.includes('framer-motion') || id.includes('/motion/')) return 'motion'
          if (id.includes('@mui') || id.includes('@emotion')) return 'mui'
          // Don't create a separate react chunk - let it stay in vendor to avoid circular deps
        },
      },
    },
    // Three.js legitimately exceeds 500 kB on its own; raise the warn ceiling
    // so the build output stays clean without hiding real regressions.
    chunkSizeWarningLimit: 700,
  },
})
