import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./", // Change from "/vendas-mauro-carol/" to "./"
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks(id) {
          console.log("Chunk path:", id);
          return null;
        },
      },
    },
  },
}));
