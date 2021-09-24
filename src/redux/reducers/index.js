// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import counterReducer from './counterReducer';
import currFocusReducer from './currFocusReducer';
import uiReducer from './uiReducer';

// Redux: Root Reducer
export default combineReducers({
  counter: counterReducer,
  focus: currFocusReducer,
  UI: uiReducer,
});
