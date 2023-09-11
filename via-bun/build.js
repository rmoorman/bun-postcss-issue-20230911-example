import postCssPlugin from "@deanc/esbuild-plugin-postcss";
import autoprefixer from "autoprefixer";

const result = await Bun.build({
  entrypoints: ["./src/index.js"],
  outdir: "build",
  plugins: [
    postCssPlugin({
      plugins: [autoprefixer],
    }),
  ],
});

console.log({result});
