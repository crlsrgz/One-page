import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const blue = "car";
export default defineConfig({
  plugins: [react()],
  root: "src",
  base : "./",
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },
});
