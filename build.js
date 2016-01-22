/**
 * Dependencies
 */

var argv = require('yargs').argv;
var assets = require('metalsmith-assets');
var collections = require('metalsmith-collections');
var define = require('metalsmith-define');
var filenames = require('metalsmith-filenames');
var fingerprint = require('metalsmith-fingerprint-ignore');
var inPlace = require('metalsmith-in-place');
var metalsmith = require('metalsmith');
var postcss = require('metalsmith-postcss');
var postcssAutoprefixer = require('autoprefixer');
var postcssCalc = require('postcss-calc');
var postcssImport = require('postcss-import');
var postcssMedia = require('postcss-custom-media');
var postcssProperties = require('postcss-custom-properties');
var rename = require('metalsmith-rename');
var sitemap = require('metalsmith-mapsite');
var watch = require('metalsmith-watch');
var when = require('metalsmith-if');

/**
 * Init
 */

// Assign command line arguments
var development = argv.development;
var production = !development;

// Set build directory
var destination = development ? '.tmp' : 'build';

// Import metadata
var metadata = require('./metadata');

// Set autoprefixer settings
var supported = {
  browsers: ['> 1%', 'last 2 versions', 'IE >= 9']
};

// Set postcss plugins
var plugins = [
  postcssImport(),
  postcssAutoprefixer(supported),
  postcssMedia,
  postcssProperties,
  postcssCalc
];

/**
 * Build
 */

metalsmith(__dirname)
  .destination(destination)

  // Set metadata
  .metadata(metadata)
  .use(define({
    development: development,
    production: production
  }))

  // Process css
  .use(postcss(plugins))
  .use(when(production, fingerprint({pattern: ['css/*.css']})))

  // Process js
  .use(when(production, fingerprint({pattern: ['js/*.js']})))

  // Process assets
  .use(when(production, assets({
    source: 'lib/assets'
  })))

  // Process templates
  .use(filenames())
  .use(collections({
    works: {
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(inPlace({
    cache: false,
    engine: 'swig',
    pattern: '**/*.swig'
  }))
  .use(rename([[/\.swig$/, '.html']]))

  // Generate sitemap
  .use(when(production, sitemap({
    hostname: metadata.host.remote,
    lastmod: new Date()
  })))

  // Watch for changes (when in development mode)
  .use(when(development, watch({
    paths: {
      '${source}/**/*.css': true,
      '${source}/js/*.js': true,
      '${source}/**/*.swig': true,
      'lib/**/*.css': '**/*.css',
      'lib/**/*.js': '**/*.js',
      'lib/**/*.swig': '**/*.swig'
    }
  })))

  // Build site
  .build(function(err){
    if (err) throw err;
  });
