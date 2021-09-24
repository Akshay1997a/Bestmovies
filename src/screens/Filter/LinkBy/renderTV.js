import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class RenderTV extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default RenderTV;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
});
