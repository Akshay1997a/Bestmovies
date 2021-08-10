import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default function Loader() {
  return (
    <View style={styles.container}>
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
