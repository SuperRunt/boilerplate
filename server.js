const webpack = require('webpack');
const express = require('express');
const app = express();

const config = require('./server/config/environment.js');
const WP_CONFIG_PATH = './' + config.WP_CONFIG;

const webpackConfig = require(WP_CONFIG_PATH);
const compiler = webpack(webpackConfig);
const appConfig = require('./server/config/express');

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

appConfig(app);

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  console.log('Listening at http://localhost:3000/');
});
