const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/server/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: nodeExternals(),
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'SPACE_ID',
      'CONTENT_DELIVERY_TOKEN'
    ])
  ]
}
