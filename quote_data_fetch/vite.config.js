import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    proxy: {
      // any request starting with /zenquotes will be proxied to https://zenquotes.io
      '/zenquotes': {
        target: 'https://zenquotes.io',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/zenquotes/, '') // /zenquotes/api/random -> /api/random
      }
    }
  }
})
