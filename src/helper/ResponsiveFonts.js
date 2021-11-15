'use strict';

import {Dimensions, Platform} from 'react-native';
export const {width, height} = Dimensions.get(
  Platform.OS === 'android' ? 'screen' : 'window',
);

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
export const heightScale = (size, factor = 1) => {
  if (Platform.OS === 'web') {
    factor = 0.12;
  }
  if (Platform.OS === 'android') {
    factor = 1;
  }
  return size + (verticalScale(size) - size) * factor;
};

export const widthScale = (size, factor = 1) => {
  if (Platform.OS === 'web') {
    factor = 0.12;
  }
  if (Platform.OS === 'android') {
    factor = 1;
  }
  return size + (horizontalScale(size) - size) * factor;
};
export const fontScale = (size) => {
  if (Platform.OS === 'web') {
    return heightScale(+size + 5);
  } else return heightScale(size);
};

export const isIphoneX = (size) => {
  if (Platform.OS === 'ios' && height > 800) {
    return true;
  } else return false;
};
export const isIphone8 = () => {
  if (Platform.OS === 'ios' && height < guidelineBaseHeight) {
    return true;
  } else return false;
};

export const isHeightgreaterThan800 = (size) => {
  if (height > 800) {
    return true;
  } else return false;
};

export const isHeightgreaterThan700 = (size) => {
  if (height > 700) {
    return true;
  } else return false;
};
// export default {scale, verticalScale, heightScale}
