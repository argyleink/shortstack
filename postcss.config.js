const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': postcssPresetEnv({
      browsers: [
        '>0.25%',
        'not ie 11',
        'not op_mini all',
      ],
    }),
  }
}