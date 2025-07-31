import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));
