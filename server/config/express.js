const express = require('express');
const bodyParser = require('body-parser');
const webpackConfig = require('../../webpack.config');


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
