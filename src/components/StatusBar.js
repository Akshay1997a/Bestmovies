/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StatusBar as RNStatusBar, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function StatusBar(props) {
  const insets = useSafeAreaInsets();
  const STATUS_BAR_HEIGHT =
    Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight;
  if (Platform.OS === 'android') {
    return (
      <RNStatusBar
        barStyle="dark-content"
        backgroundColor={props.backgroundColor}
      />
    );
  } else {
    return (
      <View
        style={{
          height: STATUS_BAR_HEIGHT,
          width: '100%',
          position: 'absolute',
          zIndex: 100,
          backgroundColor: props.backgroundColor,
        }}>
        <RNStatusBar
          barStyle="dark-content"
          backgroundColor={props.backgroundColor}
        />
      </View>
    );
  }
}
