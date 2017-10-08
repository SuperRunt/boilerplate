import express from 'express';

const counterRouter = express.Router();


counterRouter.post('/counter/get-random', getRandom);

export function getRandom(req, res){
  const random = Math.round(Math.random()*10);

  res.json({ random });
}

export default counterRouter;
