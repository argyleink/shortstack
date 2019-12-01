const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const postcsseasings    = require('postcss-easings')
const importUrl         = require('postcss-import-url')

module.exports = {
  plugins: [
    importUrl(),
    postcssImport({
      path: 'app/css',
    }),
    postcsseasings(),
    postcssPresetEnv({
      stage: 0,
      browsers: [
        '>0.25%',
        'not ie 11',
        'not op_mini all',
      ],
    }),
  ]
}