import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Modal,
  Image,
  Dimensions,
} from 'react-native';
import Router from './src/setup/Router';
import {Provider} from 'react-redux';
// Imports: Redux Store
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

// React Native App
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}
