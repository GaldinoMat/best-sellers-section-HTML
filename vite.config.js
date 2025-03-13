import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    minify: true,
  },
});
