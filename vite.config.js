import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Mettez ici vos alias pour résoudre les imports de MUI
      '@mui/material': path.resolve(__dirname, 'node_modules', '@mui/material'),
      '@mui/icons-material': path.resolve(__dirname, 'node_modules', '@mui/icons-material'),
      '@mui/system': path.resolve(__dirname, 'node_modules', '@mui/system'),
      '@mui/styled-engine': path.resolve(__dirname, 'node_modules', '@mui/styled-engine'),
      '@mui/styled-engine-sc': path.resolve(__dirname, 'node_modules', '@mui/styled-engine-sc'),
    },
  },
})
