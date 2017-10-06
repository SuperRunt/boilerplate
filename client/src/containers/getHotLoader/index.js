import React from 'react';
import { AppContainer } from 'react-hot-loader';

const getHotLoader = (Copm, store) => {
  return <AppContainer><Copm store={store} /></AppContainer>;
};

module.exports = getHotLoader;
