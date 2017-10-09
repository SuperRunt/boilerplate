import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';
import Counter from '../../components/Counter';

class App extends Component{
  render() {
    const { counter: { value }, dispatch } = this.props;
    return (
      <div>
        Applico (^_^) 
        <Counter
          counterValue={value}
          dispatch={dispatch} />
        <Navbar />
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

export default connect(
  // https://github.com/ReactTraining/react-router/issues/3536
  mapStateToProps, mapDispatchToProps, null, { pure:false }
)(App);
