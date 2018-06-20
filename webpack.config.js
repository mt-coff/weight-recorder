const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // entry point
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    app: "./src/index.tsx"
  },
  // output file
  output: {
    path: path.join(__dirname, "dist"),
    filename: "static/js/[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader?module",
              options: { minimize: true }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "static/css/app.css"
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    port: 8080
  }
};
