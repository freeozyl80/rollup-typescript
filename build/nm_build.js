import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

var path = require('path')
var base = path.resolve(__dirname, '../')


var cjsConfig = {
	input: path.resolve(base, 'src/normal/demo01.js'),
	output: {
		file: path.resolve(base, `dist/normal/${process.env.TARGET}/demo01.js`),
		format: 'cjs'  // 这里支持iife, cjs, es, umd
	},
	plugins: [
	    babel({
	      exclude: 'node_modules/**'  // 排除node_module下的所有文件
	    }),
	    eslint({})
	]
}

var iifeConfig = {
	input: path.resolve(base, 'src/normal/demo01.js'),
	moduleName: 'demo01',
	output: {
		file: path.resolve(base, `dist/normal/${process.env.TARGET}/demo01.js`),
		format: 'iife'  // 这里支持iife, cjs, es, umd
	},
	plugins: [
	    babel({
	      exclude: 'node_modules/**'  // 排除node_module下的所有文件
	    }),
	    eslint({})
	]
}

var umdConfig = {
	input: path.resolve(base, 'src/normal/demo01.js'),
	moduleName: 'demo01',
	output: {
		file: path.resolve(base, `dist/normal/${process.env.TARGET}/demo01.js`),
		format: 'umd'  // 这里支持iife, cjs, es, umd
	},
	plugins: [
	    babel({
	      exclude: 'node_modules/**'  // 排除node_module下的所有文件
	    }),
	    eslint({})
	]
}
function genConfig(arg) {
	switch(arg) {
		case 'cjs': return cjsConfig
		case 'iife': return iifeConfig
		case 'umd': return umdConfig
	}
}
if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
} 
