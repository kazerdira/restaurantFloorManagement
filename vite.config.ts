import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Library mode for building as package
  if (mode === 'library') {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'RestaurantFloorPlanner',
          formats: ['es', 'umd'],
          fileName: (format) => `restaurant-floor-planner.${format}.js`
        },
        rollupOptions: {
          external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'three',
            'lucide-react'
          ],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'react/jsx-runtime',
              three: 'THREE',
              'lucide-react': 'LucideReact'
            }
          }
        },
        sourcemap: true,
        emptyOutDir: true
      }
    }
  }

  // Development mode (default)
  return {
    plugins: [react()],
    server: {
      port: 3008,
      host: true,
      allowedHosts: [
        'e57922710467.ngrok-free.app'
      ]
    }
  }
})