import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Platform} from 'react-native';
import colors from '../../helper/colors';
import primary_regular_font from '../../helper/fonts';
import StyleConfig from '../../helper/StyleConfig';

const isAndroid = () => {
  return Platform.OS == 'android';
};
const TVButton = ({
  styles,
  text,
  bgColor,
  selected,
  textColor,
  disabled = false,
}) => {
  console.log('style', styles);
  return (
    <View style={styles}>
      <Text
        numberOfLines={2}
        style={stylesl.text}
        // style={[
        //   selected == 1 || 2 || 3 ? styles.focusText : styles.text,
        //   {color: textColor},
        // ]}
      >
        {text}
      </Text>
    </View>
    // </TouchableOpacity>
  );
};

const stylesl = StyleSheet.create({
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
    // borderWidth: 1,

    width: StyleConfig.resWidth(200),
    fontSize: StyleConfig.resWidth(30),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
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
