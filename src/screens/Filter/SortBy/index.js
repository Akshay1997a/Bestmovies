import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderModal from '../../../components/HeaderModal';

export default function SoryBy(props) {
  return (
    <View style={styles.container}>
      <HeaderModal title="Sort By" {...props} />
      <Button title="Rating" isActive={true} />
      <Button title="Match" isActive={false} />
      <Button title="Friend's likes" isActive={false} />
      <Button title="Popularity" isActive={false} />
    </View>
  );
}

const Button = ({title, isActive, onPress}) => (
  <TouchableOpacity style={[styles.butContainer, isActive && styles.butActive]}>
    <Text style={[styles.butTitle, isActive && styles.butActiveText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  butContainer: {
    padding: 10,
    borderRadius: 15,
  },
  butActive: {
    backgroundColor: '#FF4D01',
  },
  butActiveText: {
    color: '#fff',
    fontWeight: "700"
  },
  butTitle: {
    color: '#000000',
    fontFamily: "'VAG Rounded Regular'",
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
