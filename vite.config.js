import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import sitemap from 'vite-plugin-sitemap';

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
      sitemap({
        hostname: 'https://jobquick.techinsights.guru/',
      }),
    ],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    build: {
      outDir: "dist",
      sourcemap: true, // Enable source maps
      cssCodeSplit: true, // Enable CSS code splitting
      minify: "esbuild"
    },
    server: {
      port: 3000,
    },
  };
});
