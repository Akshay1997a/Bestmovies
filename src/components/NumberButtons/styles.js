const React = require('react-native');
import {
  View,
  Image,
  Text,
  Pressable,
  Platform
} from 'react-native';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import primary_regular_font from '../../helper/fonts';
const isAndroid = () => {
	return Platform.OS == "android";
};



export default {

  container: {
    flex:1,
    // borderWidth:1,
  },

  txtDefault: {
    color: colors.black,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize:  isAndroid() ? 18  : 34,
    // fontWeight: 'bold',
  },

  contRow: {
    flex: 1,
    flexDirection: 'row',
  },
  pressableFocused:{
    padding: isAndroid()? 12: 20,
    borderRadius:10,
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: colors.tomatoRed},
    pressable:{ 
      // borderWidth:1,
      padding: isAndroid()? 12: 20,
      borderRadius:10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:  isAndroid()? 1:  3,
      borderColor: 'white',
      backgroundColor: '#e5e5e5'},

  contButton: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#e5e5e5',
    
  },
  symbolButton: {
    // borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:10   
  },
  back_bk:{
    // borderWidth:1,

    // marginRight:100,
    // padding: isAndroid()? 10: 30,
    // borderRadius:10,
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    borderColor: 'white',
    // backgroundColor: colors.black
  
  },
  deleteButton: {
    width:30,
    height:30,
    // borderWidth:1,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    // borderColor: 'white',
    // backgroundColor: '#e5e5e5',
    // padding:17  
  },
  deleteAllButton: {

    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#e5e5e5',
    padding:32 
  },
  spaceButton: {
    // height:30,
    // flex: 1,
    width:200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#e5e5e5',
    padding:40
  },
  contButtonClick: {
    width: StyleConfig.resWidth(10),
    height: StyleConfig.resHeight(20),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: '#ecf0f1',
    backgroundColor: 'red',
    
  }
};