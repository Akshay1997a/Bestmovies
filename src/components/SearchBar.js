/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import primary_regular_font from '../helper/fonts';
import {fontScale, heightScale, widthScale} from '../helper/ResponsiveFonts';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={widthScale(19)}
        style={{marginRight: widthScale(7)}}
      />
      <TextInput
        style={styles.inputStyle}
        allowFontScaling={false}
        {...props}
      />
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
          height: heightScale(38),
        }}>
        <Icon name="search" size={widthScale(19)} color="#232323" />
      </TouchableOpacity>
      <TextInput
        allowFontScaling={false}
        style={{
          flex: 1,
          fontSize: fontScale(18),
          padding: 0,
          paddingHorizontal: widthScale(6),
          height: heightScale(28),
          ...styles.inputStyle2,
        }}
        placeholder={t('texts.id_20')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    height: heightScale(38),
    width: widthScale(325),
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  inputStyle: {
    flex: 1,
    color: '#999999',
    padding: 0,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(20),
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  inputStyle2: {
    flex: 1,
    color: '#999999',
    padding: 0,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(18),
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
});
