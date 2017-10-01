const express = require('express');
const bodyParser = require('body-parser');

const envConfig = require('./environment');
const WP_CONFIG_PATH = '../../' + envConfig.WP_CONFIG;
const webpackConfig = require(WP_CONFIG_PATH);


module.exports = function appConfig(app){
  app.disable('x-powered-by');

  app.set('view engine', 'ejs');
  app.set('views', './client');

  app.use(express.static(webpackConfig.output.publicPath));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
};
