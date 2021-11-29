import React from 'react';
import {Platform, LogBox} from 'react-native';
import Router from './src/setup/Router';
import {Provider} from 'react-redux';
// Imports: Redux Store
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {enableScreens} from 'react-native-screens';
import {AnimationProvider} from './src/Providers/CollapsibleHeaderProvider';
import {useState} from 'react';
import Loader from './src/components/Loader';

export const StatusBarContext = React.createContext();

console.log = function () {};
console.group = function () {};

enableScreens(true);
// React Native App
console.log('store1', store);
export default function App(props) {
  const [statusBarColor, setStatusBarColor] = useState('#fff');
  return (
    <StatusBarContext.Provider
      value={{value: statusBarColor, setStatusBarColor}}>
      <Provider store={store}>
        <Loader />
        {/* <StatusBar backgroundColor={statusBarColor} /> */}
        <PersistGate persistor={persistor}>
          <AnimationProvider>
            <Router />
          </AnimationProvider>
        </PersistGate>
      </Provider>
    </StatusBarContext.Provider>
  );
}
