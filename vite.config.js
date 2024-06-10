import { defineConfig } from "vite";

export default defineConfig({
  base: '/dillo-docs/',
  server: {
    port: 3005,
    host: "0.0.0.0"
  },
});
