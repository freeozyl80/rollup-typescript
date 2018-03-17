var Path = require('path')
var base = Path.resolve(__dirname, '../')
module.exports = {
	input: Path.resolve(base, 'src/normal/demo01.js'),
	output: {
		dest: Path.resolve(base, 'dist/normal/demo01.js'),
		format: 'umd'  // 这里支持iife, cjs, es, umd
	}
}