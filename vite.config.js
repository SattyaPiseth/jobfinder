import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import sitemap from "vite-plugin-sitemap";
import { VitePWA } from "vite-plugin-pwa";

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
        hostname: "https://jobquick.techinsights.guru/",
      }),
      VitePWA({
        manifest: {
          name: "Job Quick - Find Your Dream Job",
          short_name: "JobQuick",
          description:
            "A platform to find your dream job quickly and efficiently.",
          theme_color: "#4a90e2",
          background_color: "#ffffff",
          display: "standalone",
          start_url: "/",
          scope: "/",
          icons: [
            {
              src: "https://ecommerce.techinsights.guru/file/3d3e78e2-5f53-4d18-8818-7b01f9cef98c.png", // Make sure to provide the correct path to your icons
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "https://ecommerce.techinsights.guru/file/3d3e78e2-5f53-4d18-8818-7b01f9cef98c.png", // Provide higher resolution icons
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: ({ url }) => url.pathname.startsWith("/api/"),
              handler: "NetworkFirst", // Prioritize getting the latest data from the API
              options: {
                cacheName: "api-cache",
                networkTimeoutSeconds: 10,
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
                },
              },
            },
            {
              urlPattern: ({ url }) => url.pathname.endsWith(".json"),
              handler: "StaleWhileRevalidate", // Useful for mock data or static JSON files
              options: {
                cacheName: "json-cache",
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24 * 7, // Cache for 7 days
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "google-fonts-stylesheets",
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-webfonts",
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    build: {
      outDir: "dist",
      sourcemap: true, // Enable source maps
      cssCodeSplit: true, // Enable CSS code splitting
      minify: "esbuild",
    },
    server: {
      port: 3000,
    },
  };
});
