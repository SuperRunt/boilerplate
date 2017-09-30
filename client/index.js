import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';

import Provider from './src/containers/Provider';
import reducers from './src/reducers';

const store = createStore(reducers);

const render = (Copm) =>
  ReactDOM.render(
    <AppContainer>
      <Copm store={store} />
    </AppContainer>,
    document.getElementById('root')
  );

render(Provider);

if (module.hot) {
  module.hot.accept('./src/reducers', () => {
    store.replaceReducer(reducers);
  });

  module.hot.accept('./src/containers/Provider', () => {
    const NextProvider = require('./src/containers/Provider').default;

    render(NextProvider);
  });
}
