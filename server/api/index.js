import counterRouter from './counter';

export default function apiRouter(app){

  // app.use('/counter', counterRouter);
  app.use('', counterRouter);
}
