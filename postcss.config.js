const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const postcsseasings    = require('postcss-easings')
const importUrl         = require('postcss-import-url')
const doiuse            = require('doiuse')

const browsers = [
  "defaults",
]

module.exports = {
  plugins: [
    postcsseasings(),
    importUrl(),
    postcssImport(),
    postcssPresetEnv({
      stage: 0,
      autoprefixer: { 
        grid: true,
      },
      browsers,
    }),
    doiuse({browsers}),
  ]
}