import * as constants from '../constants';

const initialState = {
  value: 0
};

export default function counterReducer(state = initialState, action){
  switch (action.type) {
    case constants.INCREASE:
      return { ...state, value: ++state.value };

     case constants.DECREASE:
      return { ...state, value: --state.value };

     default:
      return state;
  }
}
