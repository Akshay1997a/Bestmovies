const React = require('react-native');
const { StyleSheet } = React;
import StyleConfig from '../../helper/StyleConfig'
import primary_regular_font from '../../helper/fonts';

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

    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#e5e5e5',
    padding:22
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