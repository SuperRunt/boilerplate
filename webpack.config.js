const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client/',
    './client/index.js',
    './client/assets/scss/style.scss'
  ],
  // devServer: {
  //   contentBase: './client/dist',
  //   hot: true
  // },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js',
    publicPath: '/',
    // publicPath: './client/',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [ 'env', 'es2015', 'stage-3', 'react' ],
            plugins: [
              require('babel-plugin-transform-es2015-computed-properties')
            ]
          }
        }]
      },
      {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [ 'css-loader', 'sass-loader' ]
      })
    }]
  },
  devtool: 'source-map'
};
