import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "./dist/bundle.es.js",
      format: "es",
    },
  ],
  plugins: [
    babel({
      exclude: /node_modules/,
      presets: ["@babel/preset-react"],
    }),
    copy({
      targets: [
        {
          src: "./package.json",
          dest: "dist/",
          transform: (contents) =>
            contents.toString().replace(/\/dist\//g, "/"),
        },
      ],
    }),
  ],
};
