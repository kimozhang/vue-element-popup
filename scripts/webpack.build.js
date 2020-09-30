const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

function resolve(p) {
  return path.resolve(__dirname, '..', p)
}

module.exports = {
  mode: 'none',
  entry: {
    'index': resolve('src/index.js'),
    'index.min': resolve('src/index.js')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    library: 'VueElementPopup',
    libraryExport: 'default',
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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js/
      })
    ]
  }
}
