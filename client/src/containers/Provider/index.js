import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from '../App';

export default class ProviderWrapper extends Component {
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <App />
        </Provider>
      </div>
    );
  }
}
