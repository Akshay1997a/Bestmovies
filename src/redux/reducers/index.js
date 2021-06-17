// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counterReducer from './counterReducer';
// Redux: Root Reducer
export default combineReducers({
  counter: counterReducer,
});
