var path = require('path');
var webpack = require('webpack');

var prod = process.env.NODE_ENV === 'production';
console.log('Production:', prod);

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'build', 'js'),
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: prod ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
