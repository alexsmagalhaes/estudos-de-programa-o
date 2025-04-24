const path = require("path");

module.exports = {
  entry: {
    app: "./src/13.webpack/index.ts",
  },
  mode:"development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist", "assets", "js"),
    clean: true,
  },
};
