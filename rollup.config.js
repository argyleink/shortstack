import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

import { default as importHTTP } from 'import-http/rollup'

const isProd = process.env.NODE_ENV === 'production'

const devConfig = {
  input: 'app/index.js',
  output: {
    file: 'app/bundle.js',
    format: 'esm',
    sourcemap: 'inline',
  },
  plugins: [
    resolve(),
    importHTTP(),
    postcss({
      inject:  false,
    }),
  ],
  watch: {
    exclude: ['node_modules/**'],
  }
}

const prodConfig = {
  input: 'app/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    importHTTP(),
    postcss({
      extract: true,
      minimize: true,
    }),
  ]
}

export default isProd ? prodConfig : devConfig