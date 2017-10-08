import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import About from '../../components/About';
import Home from '../../components/Home';
import Info from '../../components/Info';
import App from '../App';

export default class Routes extends Component {
   render(){
     return (
       <div>
         <App />
         <Switch>
           <Route exact={true} path='/' component={Home} />
           <Route path='/about' component={About} />
           <Route path='/info' component={Info} />
           <Redirect to='/' />
         </Switch>
       </div>
     );
   }
}
