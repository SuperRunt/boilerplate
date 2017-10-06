'use strict';

require('babel-core/register');
var express = require('express');
// import express from 'express';
var app = express();

var envConfig = require('./config/environment');
var appConfig = require('./config/express');

appConfig(app);

var AppHiestContainer = require('../../client/index');
// const { renderToString }  = require('react-dom/server');
// const { StaticRouter } = require('react-router-dom');
// console.log('StaticRouter', StaticRouter);
// console.log('renderToString', renderToString);
console.log('AppHiestContainer', AppHiestContainer);

app.get('/', function (req, res) {
  console.log('req.url', req.url);
  res.render('index');
});

// app.get('/', function(req, res){
//   console.log('req.url', req.url);
//   res.render('index');
// });

app.listen(envConfig.port, function () {
  console.log('Listening at http://localhost:' + envConfig.port);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'server/src/index.js');
}();

;