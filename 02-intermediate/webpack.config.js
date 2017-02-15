var path = require("path");
module.exports = {
  entry: './intermediate.ts',
  output: {
    filename: 'bundle.js',
    publicPath: '/build'
  },
  devtool: 'source-map',
  resolve: {
    // Add '.ts' as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      // all files with a '.ts'  extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
