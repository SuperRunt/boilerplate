import React, { Component } from 'react';

import Breadcrumbs from './components/Breadcrumbs';
import HomePage from './components/HomePage';

export default class App extends Component{
  render() {
    return (
      <div>
        App
        <Breadcrumbs />
        <HomePage />
      </div>
    );
  }
}
