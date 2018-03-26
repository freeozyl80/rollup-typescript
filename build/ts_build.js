import typescript from 'rollup-plugin-typescript2';

let path = require('path')
let base = path.resolve(__dirname, '../')

let defaults = { compilerOptions: { declaration: true } };
let override = { compilerOptions: { declaration: false } };

module.exports = {
  	input: path.resolve(base, 'src/ts/index.ts'),
  	output: {
		file: path.resolve(base, `dist/ts/index.js`),
		format: 'iife'  // 这里支持iife, cjs, es, umd
	},
  	plugins: [
    	typescript(
    		{ verbosity: 2, abortOnError: false }
    	)
  	]
}