/* eslint-disable */

const validate = require('webpack-validator');

// Load .env and map to process.env
require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  module.exports = validate(require('./webpack/webpack.config.prod'));
} else {
  module.exports = validate(require('./webpack/webpack.config.dev'));
}
