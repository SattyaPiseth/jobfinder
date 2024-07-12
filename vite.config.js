import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://136.228.158.126:50002",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  define: {
    "process.env": process.env,
  },
});
