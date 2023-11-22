import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const blue = "car";
export default defineConfig({
  plugins: [react()],
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },
});
