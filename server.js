const webpack = require('webpack');
const express = require('express');
// const path = require('path');
const app = express();

const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const appConfig = require('./server/config/express');

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath
  // publicPath: './cliend/dist/'
}));

app.use(require('webpack-hot-middleware')(compiler));

appConfig(app);

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  // if(err){
  //   return console.error(err);
  // }

  console.log('Listening at http://localhost:3000/');
});
