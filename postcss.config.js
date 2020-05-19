const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const postcsseasings    = require('postcss-easings')
const importUrl         = require('postcss-import-url')
const cssnano           = require('cssnano')

module.exports = {
  plugins: [
    importUrl(),
    postcssImport({
      path: 'src/css',
    }),
    postcsseasings(),
    postcssPresetEnv({
      stage: 0,
    }),
    cssnano({
      preset: 'default'
    }),
  ]
}