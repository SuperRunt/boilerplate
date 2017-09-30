import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './src/App';

const render = (Copm) =>
  ReactDOM.render(
    <AppContainer>
      <Copm />
    </AppContainer>,
    document.getElementById('root')
  );

render(App);

if (module.hot) {
  // const NextApp = require('./src/App').default;
  // module.hot.accept('./reducer', () => {
  //   store.replaceReducer(appReducer);
  // });

  module.hot.accept('./src/App', () => {
    const NextApp = require('./src/App').default;
    console.log('NextApp', NextApp);

    render(NextApp);
    // ReactDOM.render(
    //   <AppContainer>
    //     <NextApp />
    //   </AppContainer>,
    //   document.getElementById('root')
    // );
  });
}
