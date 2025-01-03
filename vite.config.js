import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/IBC2025-Conference-Website/',
  build: { outDir: 'build' },  // Use this if deploying to a subdirectory
})

