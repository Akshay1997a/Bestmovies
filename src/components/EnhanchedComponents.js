import React from 'react';
import {Text as RNText} from 'react-native';

export function Text(props) {
  return <RNText allowFontScaling={false} {...props} />;
}
