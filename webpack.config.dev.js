var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      'webpack-dev-server/client?' + process.env.DEV_BASE + ':' + process.env.DEV_PORT,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: path.join(process.cwd(), '/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(process.cwd(), '/src'),
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
          'style-loader',
          'css-loader'
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
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: process.env.DEV_PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        DEV_BASE: JSON.stringify(process.env.DEV_BASE),
        DEV_PORT: JSON.stringify(process.env.DEV_PORT),
        PROD_BASE: JSON.stringify(process.env.PROD_BASE)
      }
    }),
    new HtmlWebpackPlugin({ template: 'src/index.ejs' }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      filename: '200.html'
    })
  ]
}
