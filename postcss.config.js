const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const importUrl         = require('postcss-import-url')
const cssnano           = require('cssnano')
const doiuse            = require('doiuse')

const dev = {
  plugins: [
    importUrl(),
    postcssImport({
      path: 'app/css',
    }),
    postcssPresetEnv({
      stage: 0,
      features: {
        'logical-properties-and-values': false, 
        'prefers-color-scheme-query': false, 
        'gap-properties': false,
      }
    }),
    doiuse(),
  ]
}

const prod = {
  plugins: [
    importUrl(),
    postcssImport({
      path: 'app/css',
    }),
    postcssPresetEnv({
      stage: 0,
      features: {
        'logical-properties-and-values': false, 
        'prefers-color-scheme-query': false, 
        'gap-properties': false,
      }
    }),
    doiuse(),
    cssnano({
      preset: 'default'
    }),
  ]
}

module.exports = process.env.NODE_ENV === 'production' 
  ? prod 
  : dev
