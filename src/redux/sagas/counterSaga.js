// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { SET_COUNTER, INCREASE_COUNTER, DECREASE_COUNTER } from '../const'
// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* increaseCounter() {
  try {
    // Delay 4 Seconds
    yield delay(4000);
    // Dispatch Action To Redux Store
    yield put({
      type: INCREASE_COUNTER,
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
};
// Watcher: Increase Counter Async
export function* watchIncreaseCounter() {
  // Take Last Action Only
  yield takeLatest(INCREASE_COUNTER, increaseCounter);
};


// Worker: Decrease Counter
function* decreaseCounter() {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: DECREASE_COUNTER,
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
};
// Watcher: Decrease Counter
export function* watchDecreaseCounter() {
  // Take Last Action Only
  yield takeLatest(DECREASE_COUNTER, decreaseCounter);
};


// Worker: Decrease Counter
function* setCounter(value) {
    try {
      // Dispatch Action To Redux Store
      yield put({
        type: SET_COUNTER,
        value: value,
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  // Watcher: Decrease Counter
  export function* watchSetCounter() {
    // Take Last Action Only
    yield takeLatest(SET_COUNTER, setCounter);
  };