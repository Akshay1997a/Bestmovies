import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <Icon name="search" size={23} style={{marginRight: 5}} />
      <TextInput style={styles.inputStyle} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  inputStyle: {
    color: '#999999',
    fontFamily: "'VAG Rounded Next',Arial",
    fontSize: 20,
    fontWeight: '400',
  },
});
