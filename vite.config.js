import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // JSX ó���� ���� �߰� ����
    include: "**/*.{jsx,js}",
  })],
  
  base: "/",
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  test: {
    globals: true,
    include: ["src/**/*.test.js", "src/**/*.test.jsx"],
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    transformMode: {
      web: [/\.[jt]sx?$/],  // ��� JS/JSX/TS/TSX ������ web ���� ��ȯ
    },
  },
  build: {
    chunkSizeWarningLimit: 100000000,
  },
  // .js ���Ͽ��� JSX ������ �����ϵ��� ����
  esbuild: {
    loader: "jsx",
    include: /\.[jt]sx?$/,  // .js, .jsx, .ts, .tsx ��� ����
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".jsx": "jsx",
      },
    },
  },
});
