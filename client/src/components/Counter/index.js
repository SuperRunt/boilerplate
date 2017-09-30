import React, { Component } from 'react';

import * as actions from '../../actions';

 export default class Counter extends Component {
   constructor(props){
     super(props);

     this.state = {
       value: this.props.value
     };
   }

   incrementCounter(){
     this.props.dispatch(actions.increaseValue());
   }

   decrementCounter(){
     this.props.dispatch(actions.decreaseValue());
   }

   render(){
     return (
       <div>
         <h4>Counter</h4>
         <button onClick={this.incrementCounter.bind(this)}>+</button>
         {this.props.counterValue}
         <button onClick={this.decrementCounter.bind(this)}>-</button>
       </div>
     );
   }
 }
