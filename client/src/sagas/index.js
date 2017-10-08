import * as constants from '../constants';
import * as api from '../services/api';
import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

export function* incrementAsync(){
  yield call(delay, 1000);
  yield put({ type: constants.INCREASE });
}
export function* watchIncrementAsync(){
  yield takeEvery(constants.INCREASE_ASYNC, incrementAsync);
}

export function* getRandom(){
  const newValue = yield call(api.getRandom);

  try{
    yield put({
      type: constants.SET_VALUE,
      payload: newValue.random
    });
  } catch(err){
    console.log('err', err);
    yield err;
  }
}
export function* watchGetRandom(){
  yield takeEvery(constants.GET_RANDOM, getRandom);
}

export default function* rootSaga(){
  yield all([
    watchIncrementAsync(),
    watchGetRandom()
  ]);
}
