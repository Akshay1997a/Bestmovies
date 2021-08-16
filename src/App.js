import React from 'react';
import StyleConfig from 'src/helper/StyleConfig'
import Router from './setup/Router'
import TVRouter from './setup/TVRouter'
import { Provider } from 'react-redux';
// Imports: Redux Store
import store  from 'src/redux/store';

// React Native App
export default function App() {
  console.log("App()......")
  return (
    <Provider store={store}>
      <TVRouter />
    </Provider>
  );
}

