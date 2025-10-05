import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3008,
    host: true, // Listen on all addresses
    allowedHosts: [
      //https://e57922710467.ngrok-free.app 
      'e57922710467.ngrok-free.app' // your ngrok domain
    ]
  }
})