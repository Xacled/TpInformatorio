import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/TpInformatorio',
  build: {
    sourcemap: false,  // Desactiva los source maps en producción
  },
})
