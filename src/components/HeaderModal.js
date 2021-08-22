import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
            size={25}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FF3300',
    fontFamily: 'VAG Rounded Next',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  closeBut: {
    position: 'absolute',
    left: 10,
  },
});
