module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: __dirname + "/public",
    publicPath: "build/",
    filename: "bundle.js",
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // loader: 'babel-loader',
          loader: "ts-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
};
