import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      viteCompression({
        verbose: true,
        disable: false,
        deleteOriginFile: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
      }),
      viteCompression({
        verbose: true,
        disable: false,
        deleteOriginFile: false,
        threshold: 10240,
        algorithm: "brotliCompress",
        ext: ".br",
      }),
    ],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    build: {
      outDir: "dist",
    },
    server: {
      port: 3000,
    },
  };
});
