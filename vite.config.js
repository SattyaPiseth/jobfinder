import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
    build: {
      outDir: 'dist',
    },
    server: {
      port: 3000,
    },
  };
});
