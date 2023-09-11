import esbuild from "esbuild";
import postCssPlugin from "@deanc/esbuild-plugin-postcss";
import autoprefixer from "autoprefixer";

await esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  outdir: "build",
  plugins: [
    postCssPlugin({
      plugins: [autoprefixer],
    }),
  ],
});
