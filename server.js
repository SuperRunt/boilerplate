import "babel-polyfill"; // eslint-disable-line
import express from 'express';

import envConfig from './server/config/environment';
import appConfig from './server/config/express';
import apiRouter from './server/api';
import renderRouter from './server/renderRouter';

const app = express();




appConfig(app);

apiRouter(app);

renderRouter(app);




app.listen(envConfig.port, function(){
  console.log(`Listening at http://localhost:${envConfig.port}`);
});
