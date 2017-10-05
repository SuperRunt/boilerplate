const express = require('express');
const app = express();

const envConfig = require('./server/config/environment');
const appConfig = require('./server/config/express');


appConfig(app);


app.get('/', function(req, res){
  res.render('index');
});

app.listen(envConfig.port, function(){
  console.log(`Listening at http://localhost:${envConfig.port}`);
});
