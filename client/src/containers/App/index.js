import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Breadcrumbs from '../../components/Breadcrumbs';
import HomePage from '../../components/HomePage';
import Counter from '../../components/Counter';

class App extends Component{
  render() {
    return (
      <div>
        Applc (^_^) 
        <Breadcrumbs />
        <Counter />
        <HomePage />
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.object
};

function mapStateToProps(state){
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch){
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
