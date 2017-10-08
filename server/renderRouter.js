import { getHtml } from './helpers';


export default function renderRouter(app){
  app.get('*', sendPage);
}


export function sendPage(req, res){
  const html = getHtml(req);

  res.send(`${html}`);
}
