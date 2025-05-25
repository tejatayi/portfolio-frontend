import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // 👈 allows access over local network
    port: 5173, // optional, makes sure port stays same
  },
  base: "/portfolio-frontend/",
  plugins: [react()],
});
