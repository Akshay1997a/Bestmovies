/* eslint-disable react-native/no-inline-styles */
/* eslint-disable radix */
import React, { useState } from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { Text } from '../../../components/EnhanchedComponents';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import HeaderModal from '../../../components/HeaderModal';
import { useTranslation } from 'react-i18next';
import primary_regular_font from '../../../helper/fonts';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateYear } from '../../../redux/FilterModule/FilterActions';
import { YEARS_TYPE } from '../../../redux/FilterModule/FilterTypes';
import { FilterInitialState } from '../../../redux/FilterModule/FilterReducer';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../helper/ResponsiveFonts';

const WIDTH = Dimensions.get('window').width;

const Catagories = ["Comedy"]

export default function RenderMobile(props) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={50}>
      <HeaderModal title="Generes" {...props} />
      <ScrollView contentContainerStyle={{ marginHorizontal: widthScale(11) }}>
        {Catagories.map(i => (
          <Button
            title={i}
          />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Button = ({ title, isActive, onPress }) => (
  <TouchableOpacity
    style={[styles.butContainer, isActive && styles.butActive]}
    onPress={onPress}>
    <Text
      numberOfLines={1}
      ellipsizeMode="tail"
      style={[styles.butTitle, isActive && styles.butActiveText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  butContainer: {
    padding: 10,
    borderRadius: 15,
  },
  butActive: {
    backgroundColor: '#FF4D01',
  },
  butActiveText: {
    color: '#fff',
    fontWeight: '700',
  },
  butTitle: {
    color: '#000000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(20),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  SliderContainer: {
    padding: 10,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputStyle: {
    flex: 1,
    fontSize: fontScale(16),
    color: '#cccccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#eee',
    borderRadius: 20,
  },
});
