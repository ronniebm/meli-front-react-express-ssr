const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.config.js');

let config = {
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server/bundle.js',
  },
  externals: [webpackNodeExternals()],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportOnlyLocals: true,
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

module.exports = merge(sharedConfig, config);
