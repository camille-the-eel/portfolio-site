import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

//GET https://camille-the-eel.github.io/src/main.js net::ERR_ABORTED 404
//GET https://camille-the-eel.github.io/favicons/site.webmanifest 404
//Manifest: Line: 1, column: 1, Syntax error.

//Uncaught TypeError: Failed to resolve module specifier "vue". Relative references must start with either "/", "./", or "../".

// import path from "path";
// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "@/": `${path.resolve(__dirname, "src")}/`,
//     },
//   },
// });
