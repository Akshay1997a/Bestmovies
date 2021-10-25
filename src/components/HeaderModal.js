import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import primary_regular_font from '../helper/fonts';
import {fontScale, heightScale, widthScale} from '../helper/ResponsiveFonts';

export default function HeaderModal(props) {
  const inset = useSafeAreaInsets();
  const {title} = props;
  const {goBack, canGoBack} = props.navigation;
  const {name} = props.route;
  const initialModalScreens = ['Filter', 'MenusList'];
  return (
    <View style={[styles.headerContainer]}>
      <View style={styles.closeBut}>
        <TouchableOpacity onPress={goBack}>
          <FontAwesomeIcon
            name={initialModalScreens.includes(name) ? 'close' : 'chevron-left'}
            size={widthScale(25)}
          />
        </TouchableOpacity>
      </View>
      <Text numberOfLines={1} style={[styles.title, {width: widthScale(300)}]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#fff',
    height: heightScale(51),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FF3300',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(22),
    fontStyle: 'normal',
    marginHorizontal: 70,
    textAlign: 'center',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  closeBut: {
    position: 'absolute',
    left: 20,
  },
});
