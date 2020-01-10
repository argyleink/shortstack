import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import compiler from '@ampproject/rollup-plugin-closure-compiler'
import { default as importHTTP } from 'import-http/rollup'

const isProd = process.env.NODE_ENV === 'production'

const devConfig = {
  input: 'app/js/index.js',
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
  input: 'app/js/index.js',
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
      minimize: { preset: 'default' },
    }),
    compiler(),
    terser(),
  ]
}

export default isProd ? prodConfig : devConfig
