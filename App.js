import React from 'react';
import { Platform, LogBox } from 'react-native';
import Router from './src/setup/Router';
import { Provider } from 'react-redux';
// Imports: Redux Store
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { enableScreens } from 'react-native-screens';
import { AnimationProvider } from './src/Providers/CollapsibleHeaderProvider';
import { useSafeAreaInsets, withSafeAreaInsets, SafeAreaView, } from 'react-native-safe-area-context';
import StatusBar from './src/components/StatusBar';
import { useState } from 'react';

export const StatusBarContext = React.createContext()

enableScreens(true);
// React Native App
export default function App(props) {
  const [statusBarColor, setStatusBarColor] = useState("#fff")
  return (
    <StatusBarContext.Provider value={{ value: statusBarColor, setStatusBarColor }}>
      <Provider store={store}>
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
