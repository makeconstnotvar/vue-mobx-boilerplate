const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new VueLoaderPlugin(),
    //new BundleAnalyzerPlugin(),
  ],
  entry: {
    //'admin': './admin/index.js',
    //'manager': './manager/index.js',
    'rick-and-morty': './rick-and-morty/index.js',
  },
  output: {
    clean: false,
    path: path.resolve(__dirname, 'build'),
    filename: '[name]/scripts/script.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          reactivityTransform: true
        }
      }
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
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        {from: /^\/admin/, to: '/admin/index.html'},
        {from: /^\/manager/, to: '/manager/index.html'},
      ],
    },
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 8080,
  },
}