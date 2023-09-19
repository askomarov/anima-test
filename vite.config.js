import nunjucks from "@vituum/vite-plugin-nunjucks";
import vituum from "vituum";

export default {
  plugins: [vituum({
    imports: {
      filenamePattern: {
        "+.css": [],
        "+.scss": "src/styles"
      }
    }
  }), nunjucks({
    root: "./src"
  })],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  }
};
