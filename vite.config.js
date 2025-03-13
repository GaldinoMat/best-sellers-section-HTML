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
    outDir: "assets",
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: "tailwind.css",
      output: {
        dir: "assets",
        assetFileNames: "styles.css",
      },
    },
  },
});
