import {Platform, Appearance, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const RES_WIDTH = 1920, RES_HEIGHT = 1080 ;

export default {
    isIos: Platform.OS == 'ios',
    isAndroid: Platform.OS == 'android',
    isTV: Platform.isTV,
    isAppleTV: Platform.isTVOS,
    isDarkMode: Appearance.getColorScheme() == "dark",
    headerHeight: 60,
    resWidth: (val) => isNaN(val) ? 1 : val*width/RES_WIDTH,
    resHeight: (val) => isNaN(val) ? 1 : val*height/RES_HEIGHT,
    width:width,
    height:height,
    fontFamily:{
        "light":"VAGRoundedNext-Light.otf",
        "regular":"VAGRoundedNext-Regular.otf",
        "bold":"VAGRoundedNext-Bold.otf"
    }
}