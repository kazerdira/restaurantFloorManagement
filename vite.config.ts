import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3008,
    host: true, // Listen on all addresses
    allowedHosts: [
      'bf1576bcc4d9.ngrok-free.app' // your ngrok domain
    ]
  }
})