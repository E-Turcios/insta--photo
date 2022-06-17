'use strict';

const { resolve } = require('path');

module.exports = {
  entry: './client/app.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
