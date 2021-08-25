import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../helper/colors';
import primary_regular_font from '../../helper/fonts';

const TVButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lightGrey,
    borderRadius:20,
    paddingTop: 19,
    width: '28%',
    // height: 100,
    alignItems:'center'


  },
  text: {
    fontSize: 30,
    fontWeight:'700',
     fontFamily:  primary_regular_font.primary_regular_font,
    color: 'white',
    textAlign: 'center',
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center'
  },
});

export default TVButton;