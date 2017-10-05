import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import About from '../../components/About';
import Home from '../../components/Home';
import Info from '../../components/Info';
import App from '../App';

export default class Routes extends Component{
  render(){
    return (
        <BrowserRouter path='/'>
          <div>
            <App />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/info' component={Info} />
          </div>
        </BrowserRouter>
    );
  }
}
