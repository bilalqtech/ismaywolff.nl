var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      './client/index.jsx'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      './client',
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?sourceMap'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?sourceMap'
        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    port: process.env.DEV_PORT,
    host: process.env.DEV_HOST
  },
  performance: {
    hints: false
  },
  plugins: [
    new CopyWebpackPlugin([{ from: path.join(__dirname, 'static')}]),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'DEV_BASE',
      'DEV_PORT',
      'SPACE_ID',
      'CONTENT_PREVIEW_TOKEN'
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.ejs')
    })
  ]
}
