import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TouchableOpacity, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <Icon name="search" size={23} style={{marginRight: 5}} />
      <TextInput style={styles.inputStyle} {...props} />
      <TouchableOpacity onPress={props.onClear}>
        <Icon name="close" size={23} style={{marginRight: 5}} />
      </TouchableOpacity>
    </View>
  );
}

export function SearchTitle(props) {
  const {t} = useTranslation();
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
        placeholder={t('texts.id_20')}
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
    flex: 1,
    color: '#999999',
    fontFamily: 'VAG Rounded Next',
    fontSize: 20,
    fontWeight: '400',
  },
});
