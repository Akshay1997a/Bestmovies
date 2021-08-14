import React from 'react';
import {StyleSheet, TouchableOpacity, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <Icon name="search" size={23} style={{marginRight: 5}} />
      <TextInput style={styles.inputStyle} {...props} />
    </View>
  );
}

export function SearchTitle(props) {
  return (
    <View style={[styles.container, {flex: 1, marginBottom: 0}]}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 55,
          marginRight: 10,
        }}>
        <Icon name="search" size={20} color="#232323" />
      </TouchableOpacity>
      <TextInput
        style={{
          flex: 1,
          fontSize: 18,
        }}
        placeholder="Search title or artist"
      />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 55,
        }}>
        <Icon name="microphone" size={20} color="#232323" />
      </TouchableOpacity>
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
    fontFamily: "'VAG Rounded Regular'",
    fontSize: 20,
    fontWeight: '400',
  },
});
