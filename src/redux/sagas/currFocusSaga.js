// Imports: Dependencies
import { delay, take, takeLatest, put } from 'redux-saga/effects';
import { SET_CURR_FOCUS, RESET_CURR_FOCUS } from '../const'
// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* resetFocus() {
  try {
    // Delay 4 Seconds
    // yield delay(4000);
    // Dispatch Action To Redux Store
    yield put({
      type: SET_CURR_FOCUS
    });
  }
  catch (error) {
    console.log(error);
  }
};
export function* watchResetFocus() {
  yield take(SET_CURR_FOCUS, resetFocus);
};


// Worker: Decrease Counter
function* setCurrFocus(value) {
    try {
      // Dispatch Action To Redux Store
      yield put({
        type: RESET_CURR_FOCUS,
        value: value,
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  // Watcher: Decrease Counter
  export function* watchSetCurrFocus() {
    // Take Last Action Only
    yield take(RESET_CURR_FOCUS, setCurrFocus);
  };