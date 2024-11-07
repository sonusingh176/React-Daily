import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
   port:5173,
    proxy:{
      '/api': {
        target: 'http://localhost:5000',
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [react()],
})

/**
 * https://www.rockyourcode.com/how-to-set-a-vite-proxy-to-your-backend/#:~:text=This%20behavior%20is%20similar%20to%20Create%20React%20App's%20proxy%20setting.&text=The%20setting%20re%2Droutes%20all,real%E2%80%9D%20URL%20localhost%3A4000%20.
 */
