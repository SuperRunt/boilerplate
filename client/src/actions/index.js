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
