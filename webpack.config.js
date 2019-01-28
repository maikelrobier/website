const path = require("path")
const webpack = require("webpack")

const env = process.env.NODE_ENV

const modes = {
  'development': 'development',
  'production': 'production',
}

module.exports = {
  entry: "./src/main.js",
  mode: modes[env] || 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "public/build/"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 8085,
    hotOnly: true
  },
}
