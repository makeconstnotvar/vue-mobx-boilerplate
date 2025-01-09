const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename:'[name]/index.html',
      publicPath :''
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/styles/style.css'
    })
    //new BundleAnalyzerPlugin(),
  ],
  entry: {
    //'admin': './admin/index.js',
    //'manager': './manager/index.js',
    //'rick-and-morty': './rick-and-morty/index.js',
    ram: './ram/index.js'
  },
  output: {
    clean: false,
    path: path.resolve(__dirname, 'build'),
    filename: '[name]/scripts/script.js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          reactivityTransform: true
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.vue', '.js'],
    modules: [
      './node_modules',
      './src'
    ],
    alias: {
      "@": './src'
    }
  },
  stats: {
    modules: false,
  }
}