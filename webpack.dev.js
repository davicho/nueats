const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './app',
    hot: false,
    overlay: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          // {
          //   loader: "resolve-url-loader",
          //   options: {
          //     sourceMap: true
          //   }
          // },
          {
            loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
            options: {
              sourceMap: true,
              outputStyle: 'expanded'
            }
          },
          {
            loader: 'import-glob-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin()
  ]
});