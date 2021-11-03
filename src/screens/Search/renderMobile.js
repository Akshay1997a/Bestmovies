/* eslint-disable react-native/no-inline-styles */
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  InteractionManager,
  StyleSheet,
} from 'react-native';
import {Text} from '../../components/EnhanchedComponents';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardView from '../Movies/CardView';
import Loader from '../../components/Loader';
import {HEADER_HEIGHT, TOTAL_HEADER_HEIGHT} from '../../components/Header';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import primart_font, {isAndroid} from '../../helper/fonts';
import {fontScale, heightScale, widthScale} from '../../helper/ResponsiveFonts';

export function RenderMobile() {
  const [isLoaded, setLoaded] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    <Loader />;
  }

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: TOTAL_HEADER_HEIGHT,
      }}>
      <View
        style={{
          paddingHorizontal: widthScale(10),
          height: heightScale(30),
          justifyContent: 'center',
        }}>
        <Text style={styles.title}>Recent searches</Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: widthScale(10),
        }}>
        <CardView />
      </View>
    </KeyboardAvoidingView>
  );
}

export default RenderMobile;

const styles = StyleSheet.create({
  title: {
    fontFamily: primart_font.primary_bold_font,
    fontSize: fontScale(16),
    // lineHeight: heightScale(15),
    color: '#333333',
    height: heightScale(19),
    width: widthScale(355),
    ...(!isAndroid() && {
      fontWeight: '700',
    }),
  },
});
