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
  Dimensions
  } from 'react-native';
import Router from './setup/Router'
import { Provider } from 'react-redux';
// Imports: Redux Store
import store  from 'src/redux/store';

// React Native App
export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

