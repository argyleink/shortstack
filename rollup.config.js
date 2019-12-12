import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
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
      inject: false,
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
      extract: false,
      inject: false,
      minimize: { preset: 'default' },
    }),
    terser(),
  ]
}

export default isProd ? prodConfig : devConfig
