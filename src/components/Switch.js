import React from 'react';
import {Switch as RNSwitch} from 'react-native';

export default function Switch(props) {
  return (
    <RNSwitch
      thumbColor={'#fff'}
      trackColor={{true: '#ff3300', false: '#EFEFEF'}}
      {...props}
    />
  );
}
