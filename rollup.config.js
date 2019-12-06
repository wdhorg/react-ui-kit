import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import { uglify } from "rollup-plugin-uglify";
import json from "rollup-plugin-json";

const input = "cjs/index.js";

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  namedExports: {}
};

const plugins = [
  resolve(),
  commonjs(commonjsOptions),
  json(),
  cleanup(),
  uglify(),
  filesize()
];

const globals = {
  react: "React",
  "react-doc": "ReactDOM"
};

export default [
  {
    input,
    output: {
      file: "umd/wdh-ui.production.min.js",
      format: "umd",
      name: "WDH-UI",
      globals
    },
    external: Object.keys(globals),
    plugins
  }
];
