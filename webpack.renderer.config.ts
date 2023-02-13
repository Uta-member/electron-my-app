import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    alias: {
      "*": ["./src"],
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    modules: ["./src", "./node_modules"],
  },
};
