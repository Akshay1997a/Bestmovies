// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import { watchIncreaseCounter, watchDecreaseCounter, watchSetCounter } from './counterSaga';
import { watchResetFocus, watchSetCurrFocus } from './currFocusSaga';
// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchIncreaseCounter),
    fork(watchDecreaseCounter),
    fork(watchSetCounter),
    fork(watchResetFocus),
    fork(watchSetCurrFocus),
  ]);
};