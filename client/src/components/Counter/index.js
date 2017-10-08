import React, { Component } from 'react';

import * as actions from '../../actions';

 export default class Counter extends Component {
   constructor(props){
     super(props);
   }

   incrementCounter(){
     this.props.dispatch(actions.increaseValue());
   }

   decrementCounter(){
     this.props.dispatch(actions.decreaseValue());
   }

   incrementCounterAsync(){
     this.props.dispatch(actions.increaseValueAsync());
   }

   getRandomValue(){
     this.props.dispatch(actions.getRandomValue());
   }

   render(){
     return (
       <div>
         <h4>Counter</h4>
         <button onClick={this.incrementCounter.bind(this)}>+</button>
         {this.props.counterValue}
         <button onClick={this.decrementCounter.bind(this)}>-</button>
         <div></div>
         <button
           onClick={this.incrementCounterAsync.bind(this)}
           >Increase async
         </button>
         <button
           onClick={this.getRandomValue.bind(this)}
           >Get random value
         </button>
       </div>
     );
   }
 }
