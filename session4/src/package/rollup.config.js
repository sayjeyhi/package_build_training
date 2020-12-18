import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

import pkg from "./package.json";

const makeMinifiedName = (name) => {
  return `${name.replace(".js", "")}.min.js`;
};

export default {
  input: "./src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: makeMinifiedName(pkg.main),
      format: "cjs",
      plugins: [terser()],
    },
    {
      file: pkg.module,
      format: "es",
    },
    {
      file: makeMinifiedName(pkg.module),
      format: "es",
      plugins: [terser()],
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
    filesize({
      showBrotliSize: true,
    }),
  ],
};
