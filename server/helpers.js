import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { AppContainer } from 'react-hot-loader';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Routes from '../client/src/containers/Routes/Routes';
import configureStore from '../client/src/store/configureStore';
const store = configureStore();

export function getHtml(req){
  const context = {};
  const RootApp = <AppContainer>
                    <StaticRouter
                      location={req.url}
                      context={context}>
                      <Provider store={store}>
                        <Routes />
                      </Provider>
                    </StaticRouter>
                  </AppContainer>;

  const AppHtml = ReactDOMServer.renderToString(RootApp);

  // RootApp
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Applico (^_^)</title>
      <link rel="stylesheet" href="/bundle.css">
    </head>
    <body>
      <div id="root"><div>${AppHtml}</div></div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `;
}
