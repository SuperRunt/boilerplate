'use strict';

var express = require('express');
var webpack = require('webpack');
var bodyParser = require('body-parser');
var compression = require('compression');

var envConfig = require('./environment');
var WP_CONFIG_PATH = '../../../' + envConfig.WP_CONFIG;
var webpackConfig = require(WP_CONFIG_PATH);
var compiler = webpack(webpackConfig);

module.exports = function appConfig(app) {
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WP_CONFIG_PATH, 'WP_CONFIG_PATH', 'server/src/config/express.js');

  __REACT_HOT_LOADER__.register(compiler, 'compiler', 'server/src/config/express.js');
}();

;