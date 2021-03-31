"use strict";

var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

var WebpackBar = require('webpackbar');

var portfinder = require('portfinder');

var dotenv = require('dotenv');

dotenv.config();
portfinder.basePort = 3000;
var devConfig = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: true,
    clientLogLevel: 'silent',
    port: 3000,
    stats: 'errors-only',
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components'),
      pages: path.resolve(__dirname, '../src/pages'),
      utils: path.resolve(__dirname, '../src/utils'),
      services: path.resolve(__dirname, '../src/services'),
      constants: path.resolve(__dirname, '../src/constants'),
      routes: path.resolve(__dirname, '../src/routes'),
      store: path.resolve(__dirname, '../src/store')
    }
  },
  module: {
    rules: [{
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }]
    }, {
      test: /\.css$/,
      use: ['css-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|jpg|gif|svg|ico|cur)(\?[=a-z0-9]+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'images/[hash:6].[ext]',
          fallback: 'file-loader',
          publicPath: './'
        }
      }]
    }, {
      test: /\.(ttf|eot|otf|woff(2)?)(\?[\s\S]+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash:6].[ext]'
        }
      }]
    }]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new CleanWebpackPlugin({
    cleanStaleWebpackAssets: false
  }), new HtmlWebpackPlugin({
    template: 'public/index.html',
    filename: 'index.html',
    inject: true
  }), new WebpackBar()]
};
module.exports = new Promise(function (resolve, reject) {
  portfinder.getPort(function (err, port) {
    if (err) {
      reject(err);
      return;
    }

    devConfig.devServer.port = process.env.PORT = port;
    resolve(devConfig);
  });
});