import {Platform, Appearance} from 'react-native'


export default {
    isIos: Platform.OS == 'ios',
    isAndroid: Platform.OS == 'android',
    isTV: Platform.isTV,
    isAppleTV: Platform.isTVOS,
    isDarkMode: Appearance.getColorScheme() == "dark"
}