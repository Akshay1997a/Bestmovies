import {createStore, combineReducers, applyMiddleware} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import persistStore from 'redux-persist/es/persistStore';
import FilterReducer from './FilterModule/FilterReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middleware = [thunk];

const config = {
  key: 'best_movie',
  storage: AsyncStorage,
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
