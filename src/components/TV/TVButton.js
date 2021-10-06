import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Platform} from 'react-native';
import colors from '../../helper/colors';
import primary_regular_font from '../../helper/fonts';

const isAndroid = () => {
  return Platform.OS == 'android';
};
const TVButton = ({text, bgColor, selected, textColor, disabled = false}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        // backgroundColor: bgColor,
        borderRadius: 20,
        // borderWidth:1,
        // marginRight:20,
        // paddingRight: 15,
        width: '30%',
        // height: 100,
        // alignItems:'center'
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
      }}>
      <View
        style={{
          backgroundColor: {bgColor},
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          numberOfLines={2}
          style={[
            selected == 1 || 2 || 3 ? styles.focusText : styles.text,
            {color: textColor},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#efefef',
    borderRadius: 20,
    // borderWidth:1,
    // marginRight:20,
    // paddingRight: 15,
    width: '29%',
    // height: 100,
    // alignItems:'center'
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  text: {
    // borderWidth:1,
    fontSize: isAndroid() ? 10 : 30,
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_regular_font,
    color: '#999999',
    textAlign: 'center',
  },
  focusText: {
    width: isAndroid() ? 100 : 200,
    // borderWidth:1,
    fontSize: isAndroid() ? 14 : 30,
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_regular_font,
    color: colors.white,
    textAlign: 'center',
  },
});

export default TVButton;
