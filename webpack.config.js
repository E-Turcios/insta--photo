'use strict';

const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: './client/main.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/',
  },
  devServer: {
    port: process.env.PORT,
    open: true,
    hot: true,
    historyApiFallback: true,
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
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: `./.env.${process.env.MODE}.local`,
    }),
  ],
};
