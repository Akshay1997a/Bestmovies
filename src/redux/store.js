//FOr TVos need to use below store

// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import rootReducer from './reducers';

// Imports: Redux Root Saga
import {rootSaga} from './sagas';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, thunkMiddleware, createLogger()),
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

export default store;

//// FOr mobile need to use that store hereeee

// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import persistReducer from 'redux-persist/es/persistReducer';
// import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import persistStore from 'redux-persist/es/persistStore';
// import FilterReducer from './FilterModule/FilterReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import createSagaMiddleware from 'redux-saga';
// import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';
// import rootReducer from './reducers';

// // Middleware: Redux Saga
// const sagaMiddleware = createSagaMiddleware();

// const middleware = [thunk, sagaMiddleware, thunkMiddleware, createLogger()];

// const config = {
//   key: 'best_movie',
//   storage: AsyncStorage,
// };

// const rootReducerOrg = combineReducers({
//   filterConfig: FilterReducer,
//   rootReducer: rootReducer,
// });

// const persistedReducer = persistReducer(config, rootReducerOrg);

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(...middleware)),
// );
// const persistor = persistStore(store);

// store.subscribe(() => {
//   console.log('NEW STATE', store.getState());
// });

// export {store, persistor};
