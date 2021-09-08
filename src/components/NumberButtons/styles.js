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

  },

  txtDefault: {
    color: '#000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: 34,
    fontWeight: 'bold',
  },

  contRow: {
    flex: 1,
    flexDirection: 'row',
  },
  pressableFocused:{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: colors.tomatoRed},
    pressable:{ flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
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
    justifyContent: 'center',
    alignItems: 'center',
    padding:30  
  },
  deleteButton: {

    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#e5e5e5',
    padding:27  
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