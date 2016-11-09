// Load .env and map to process.env
require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./webpack/webpack.config.prod');
} else {
  module.exports = require('./webpack/webpack.config.dev');
}
