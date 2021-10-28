import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../helper/ResponsiveFonts';

export function CloseIcon({width, height}) {
  return (
    <Image
      source={require('../../assets/Icons/close_ic.png')}
      style={styles.close_ic}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  close_ic: {
    width: widthScale(15),
    height: heightScale(15),
  },
});
