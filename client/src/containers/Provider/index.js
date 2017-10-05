import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from '../Routes';

export default class ProviderWrapper extends Component {
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}
