require('babel-core/register');
const express = require('express');
// import express from 'express';
const app = express();

const envConfig = require('./config/environment');
const appConfig = require('./config/express');



appConfig(app);





import React from 'react';
import ReactDOMServer from 'react-dom/server';
const Home = require('../../client/src/components/Home/index.js').default;
const html = ReactDOMServer.renderToString(<Home />);

app.get('/', function(req, res){
  res.send(`${html}`);

  // console.log('req.url', req.url);
  // res.render('index');
});


//   console.log('req.url', req.url);






app.listen(envConfig.port, function(){
  console.log(`Listening at http://localhost:${envConfig.port}`);
});
