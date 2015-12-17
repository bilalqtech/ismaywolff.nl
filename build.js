/**
 * Dependencies
 */

var argv = require('yargs').argv;
var assets = require('metalsmith-assets');
var autoprefixer = require('metalsmith-autoprefixer');
var calc = require('postcss-calc');
var cleanCss = require('metalsmith-clean-css');
var collections = require('metalsmith-collections');
var concat = require('metalsmith-concat');
var convert = require('metalsmith-convert');
var customMedia = require('postcss-custom-media');
var customProperties = require('postcss-custom-properties');
var define = require('metalsmith-define');
var duo = require('metalsmith-duo');
var filenames = require('metalsmith-filenames');
var fingerprint = require('metalsmith-fingerprint-ignore');
var imagemin = require('metalsmith-imagemin');
var inPlace = require('metalsmith-in-place');
var metalsmith = require('metalsmith');
var minify = require('metalsmith-html-minifier');
var mozjpeg = require('imagemin-mozjpeg');
var postcss = require('metalsmith-postcss');
var rename = require('metalsmith-rename');
var sitemap = require('metalsmith-mapsite');
var uglify = require('metalsmith-uglify');
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

// Set postcss plugins
var plugins = [
  customMedia,
  customProperties,
  calc
];

// Set autoprefixer settings
var supported = {
  browsers: ['> 1%', 'last 2 versions', 'IE >= 9']
};

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
  .use(duo({entry: ['css/styles.css']}))
  .use(autoprefixer(supported))
  .use(postcss(plugins))
  .use(when(production, cleanCss({files: 'css/styles.css'})))
  .use(when(production, fingerprint({pattern: ['css/styles.css']})))

  // Process js
  .use(concat({
    files: [
      'js/fontfaceobserver.js',
      'js/fontfaceobserver-init.js',
      'js/fluidbox.js',
      'js/fitvids.js',
      'js/analytics.js'
    ],
    output: 'js/scripts.js'
  }))
  .use(when(production, uglify({filter: 'js/*.js'})))
  .use(when(production, rename([
    ['js/scripts.min.js', 'js/scripts.js'],
    ['js/jquery.min.js', 'js/jquery.js']
  ])))
  .use(when(production, fingerprint({pattern: ['js/*.js']})))

  // Process assets
  .use(when(production, assets({
    source: 'lib/assets'
  })))

  // Process images
  // Resize thumbnails
  .use(when(production, convert([{
    src: 'img/thumbnails/*.jpg',
    target: 'jpg',
    resize: {width: 550, resizeStyle: 'aspectfit'},
    nameFormat: '%b%e'
  }])))
  // Resize gallery full-size images
  .use(when(production, convert([{
    src: 'img/{induction,mould,subject,eye-of-the-beholder}/*.jpg',
    target: 'jpg',
    resize: {height: 1000, resizeStyle: 'aspectfit'},
    nameFormat: '%b%e'
  }])))
  // Create gallery thumbnail images, by suffixing the name with '-thumb'
  .use(when(production, convert([{
    src: 'img/{induction,mould,subject,eye-of-the-beholder}/*.jpg',
    target: 'jpg',
    resize: {width: 600, resizeStyle: 'aspectfit'},
    nameFormat: '%b-thumb%e'
  }])))
  .use(when(production, imagemin({
    use: [mozjpeg({
      quality: 90
    })]
  })))
  .use(when(production, fingerprint({pattern: ['img/**/*.jpg']})))

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
  .use(when(production, minify({
    collapseBooleanAttributes: false,
    conservativeCollapse: true,
    minifyJS: true,
    removeAttributeQuotes: false,
    removeEmptyAttributes: false,
  })))

  // Generate sitemap
  .use(when(production, sitemap({
    hostname: metadata.host.remote,
    lastmod: new Date()
  })))

  // Watch for changes (when in development mode)
  .use(when(development, watch({
    paths: {
      '${source}/**/*.css': true,
      '${source}/js/*.js': 'js/*.js', // Rebuild all js on changes, for concat
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
