import express from 'express';

import envConfig from './server/config/environment';
import appConfig from './server/config/express';
import { getHtml } from './server/helpers';

const app = express();

appConfig(app);



app.get('*', function(req, res){
  const html = getHtml(req);

  res.send(`${html}`);
});




app.listen(envConfig.port, function(){
  console.log(`Listening at http://localhost:${envConfig.port}`);
});
