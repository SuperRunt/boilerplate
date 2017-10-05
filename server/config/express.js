const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const compression = require('compression');

const envConfig = require('./environment');
const WP_CONFIG_PATH = '../../' + envConfig.WP_CONFIG;
const webpackConfig = require(WP_CONFIG_PATH);
const compiler = webpack(webpackConfig);



module.exports = function appConfig(app){
  // must be first!
  app.use(compression());

  app.disable('x-powered-by');

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.set('view engine', 'ejs');
  app.set('views', './client');

  app.use(express.static(webpackConfig.output.publicPath));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
};
