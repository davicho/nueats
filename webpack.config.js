// webpack v4
 
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/assets/js')
    publicPath: '/app/assets/'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // fallback to style-loader in development
            //devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            //loader: MiniCssExtractPlugin.loader
            loader: 'style-loader',
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
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('app/assets/js/*.js'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      //filename: devMode ? '[name].css' : '[name].[hash].css',
      //chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      
      filename: '../css/style.css',
      chunkFilename: '../css/style.css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './app',
    hot: false,
    overlay: true
  }
};
