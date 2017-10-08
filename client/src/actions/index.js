import * as constants from '../constants';

export function increaseValue(){
  return {
    type: constants.INCREASE
  };
}

export function decreaseValue(){
  return {
    type: constants.DECREASE
  };
}

export function increaseValueAsync(){
  return {
    type: constants.INCREASE_ASYNC
  };
}

export function getRandomValue(){
  return {
    type: constants.GET_RANDOM
  };
}

export function setValue(action){
  return {
    type: constants.SET_VALUE,
    payload: action.payload
  };
}
