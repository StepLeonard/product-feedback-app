// we import defineConfig from vite
import { defineConfig } from "vite";

// we import the react plugin for vite
import react from "@vitejs/plugin-react";

// this exports our vite settings
export default defineConfig({
  // this turns on react support
  plugins: [react()],

  // this sets up the local proxy for api calls
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});