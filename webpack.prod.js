const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  //devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            // options: {
            //   publicPath: 'http://localhost:3000/app/assets/css/'
            // }
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      //filename: devMode ? '[name].css' : '[name].[hash].css',
      //chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      
      filename: '../css/style.css',
      chunkFilename: '../css/style.css'
    })
    //new webpack.HotModuleReplacementPlugin()
  ]
});