const path = require("path");

module.exports = {
  entry: {
    app: "./src/13.webpack/index.ts",
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.frontend.json",
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "frontend", "assets", "js"),
    clean: true,
  },
};
