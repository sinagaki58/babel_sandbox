module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
