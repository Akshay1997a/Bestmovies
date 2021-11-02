// Imports: Dependencies
import {combineReducers} from 'redux';
import { providerReducer } from '../actions/providersModule/providerReducer';
// Imports: Reducers
import counterReducer from './counterReducer';
import currFocusReducer from './currFocusReducer';
import uiReducer from './uiReducer';

// Redux: Root Reducer
export default combineReducers({
  counter: counterReducer,
  focus: currFocusReducer,
  UI: uiReducer,
  userProvider:providerReducer,
});
