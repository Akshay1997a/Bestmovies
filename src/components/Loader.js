import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default function Loader({containerStyle}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator color="red" size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
