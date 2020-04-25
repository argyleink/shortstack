import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const plugins = process.env.NODE_ENV === 'production'
  ? [resolve(), terser()]
  : [resolve()]

const config = {
  input: 'app/houdini/index.js',
  output: {
    file: 'app/houdini.entry.js',
    format: 'esm',
    sourcemap: 'inline',
  },
  plugins,
  watch: {
    exclude: ['node_modules/**'],
  }
}

export default config
