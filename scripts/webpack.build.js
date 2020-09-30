const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function resolve(p) {
  return path.resolve(__dirname, '..', p)
}

module.exports = {
  mode: 'production',
  entry: resolve('lib/index.js'),
  output: {
    path: resolve('dist'),
    filename: 'index.min.js',
    library: 'VueElementPopup',
    libraryTarget: 'umd'
  },
  resolve: {
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
}
