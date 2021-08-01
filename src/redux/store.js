import {createStore, combineReducers, applyMiddleware} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import persistStore from 'redux-persist/es/persistStore';
import FilterReducer from './FilterModule/FilterReducer';

const middleware = [thunk];

const config = {
  key: 'best_movie',
  storage: storage,
};

const rootReducer = combineReducers({
  filterConfig: FilterReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);
const persistor = persistStore(store);

store.subscribe(() => {
  console.log('NEW STATE', store.getState());
});

export {store, persistor};
