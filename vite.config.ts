import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // 需要引入 path 模块
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      // 配置 @ 指向 src 目录
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 6321,
    host: "0.0.0.0",
  },
  css: {
    preprocessorMaxWorkers: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`,
      },
    },
  },
});
