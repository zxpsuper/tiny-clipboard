// rollup.config.js
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'
import rollupTypescript  from 'rollup-plugin-typescript'
const pkg = require('./package.json')
export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'TinyClipbord',
        },
        {
            file: pkg.module,
            format: 'esm',
        },
    ],
    plugins: [json(), resolve(), common(), rollupTypescript()],
}
