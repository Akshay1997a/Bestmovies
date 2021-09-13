import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View,Platform} from 'react-native';
import colors from '../../helper/colors';
import primary_regular_font from '../../helper/fonts';

const isAndroid = () => {
	return Platform.OS == "android";
};
const TVButton = ({text,bgColor}) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: bgColor,
      borderRadius:20,
      // borderWidth:1,
      // marginRight:20,
      // paddingRight: 15,
      width: '29%',
      // height: 100,
      // alignItems:'center'
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal:15
    }}>
      <View style={{ backgroundColor:{bgColor}, justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center'}}>
      <Text style={styles.text}>{text}</Text>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lightGrey,
    borderRadius:20,
    // borderWidth:1,
    // marginRight:20,
    // paddingRight: 15,
    width: '29%',
    // height: 100,
    // alignItems:'center'
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:15


  },
  text: {
    fontSize:  isAndroid() ? 16: 30,
    fontWeight:'700',
     fontFamily:  primary_regular_font.primary_regular_font,
    color: 'white',
    textAlign: 'center',
  },
});

export default TVButton;