module.exports = {
  env: {
    browser: true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ['compat'],
  settings: {
    polyfills: ['fetch', 'promises']
  },
  extends: ['../../.eslintrc.js'],
  rules: {
    'compat/compat': 2
  }
}
