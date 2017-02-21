var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?' + process.env.DEV_BASE + ':' + process.env.DEV_PORT,
      'webpack/hot/only-dev-server',
      './client/index.jsx'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
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
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{ from: 'static' }]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        DEV_BASE: JSON.stringify(process.env.DEV_BASE),
        DEV_PORT: JSON.stringify(process.env.DEV_PORT),
        SPACE_ID: JSON.stringify(process.env.SPACE_ID),
        CONTENT_PREVIEW_TOKEN: JSON.stringify(process.env.CONTENT_PREVIEW_TOKEN)
      }
    }),
    new HtmlWebpackPlugin({ template: 'client/index.ejs' })
  ]
}
