const path = require('path');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.config.js');

const clientPort = 8080;

const config = {
  target: 'web',

  entry: './client/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client/bundle.js',
    publicPath: `http://localhost:${clientPort}/`,
  },

  devtool: 'inline-source-map',
  devServer: {
    port: clientPort,
    liveReload: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
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
