import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import compression from 'compression';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';



import envConfig from './environment';
const WP_CONFIG_CONFIG = '../../' + envConfig.WP_CONFIG;
const webpackConfig = require(WP_CONFIG_CONFIG);
const compiler = webpack(webpackConfig);



function appConfig(app){
  // must be first!
  app.use(compression());

  app.disable('x-powered-by');

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));

  app.set('view engine', 'ejs');
  app.set('views', './client');

  app.use(express.static(webpackConfig.output.publicPath));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
}

export default appConfig;
