var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.resolve(__dirname, 'dist/');
const webpack = require('webpack');
const dotenv = require('dotenv');

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;
// console.log('ENV IN WEBPACK', env);

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

// console.log('envKEYS', envKeys);

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    filename: 'bundle.js',
    publicPath: '/dist/',
    path: DIST_DIR
  },
  plugins: [new webpack.DefinePlugin(envKeys)]
};
