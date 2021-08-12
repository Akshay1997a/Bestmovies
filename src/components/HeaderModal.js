import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function HeaderModal(props) {
  console.log(props);
  const {title} = props;
  const {goBack} = props.navigation;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.closeBut}>
        <TouchableOpacity onPress={goBack}>
          <FontAwesomeIcon name="close" size={25} />
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
    fontFamily: "'VAG Rounded Next',Arial",
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  closeBut: {
    position: 'absolute',
    left: 10,
  },
});