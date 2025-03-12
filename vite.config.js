import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

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
