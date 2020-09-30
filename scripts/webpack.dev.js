const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(p) {
  return path.resolve(__dirname, '../demo/', p)
}

module.exports = {
  entry: resolve('main.js'),
  output: {
    path: resolve('dist')
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true
  }
}
