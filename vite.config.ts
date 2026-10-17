import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

declare const process: {
  env: {
    VERCEL?: string
  }
}

const base = process.env.VERCEL === '1'
  ? '/'
  : '/CyberGuard-Chronicles-The-Battle-Of-Digital-Safety/'

export default defineConfig({
  plugins: [react()],
  base,
})
