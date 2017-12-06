import path from 'path';

module.exports = {
	entry: {
	  preload: './js/main.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '../dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
	}
};
