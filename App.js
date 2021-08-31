import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/setup/Router';
import {Provider} from 'react-redux';
// Imports: Redux Store
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {enableScreens} from 'react-native-screens';
import {AnimationProvider} from './src/Providers/CollapsibleHeaderProvider';

enableScreens(true);

// React Native App
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <PersistGate persistor={persistor}>
        <AnimationProvider>
          <Router />
        </AnimationProvider>
      </PersistGate>
    </Provider>
  );
}
