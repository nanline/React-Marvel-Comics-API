import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    resolve: {
      alias: [{ find: "@", replacement: "/src" }],
    },
  };

  if (command !== "serve") {
    config.base = "/React-Marvel-Comics-API/";
  }

  return config;
});
