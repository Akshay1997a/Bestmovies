/* eslint-disable react-native/no-inline-styles */
/* eslint-disable radix */
import React from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Text} from '../../../components/EnhanchedComponents';
import HeaderModal from '../../../components/HeaderModal';
import primary_regular_font from '../../../helper/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {updateAgeRating} from '../../../redux/FilterModule/FilterActions';
import {fontScale, widthScale} from '../../../helper/ResponsiveFonts';

const WIDTH = Dimensions.get('window').width;

const AGES = [
  '18+',
  '17+',
  '16+',
  '15+',
  '14+',
  '13+',
  '11+',
  '9+',
  '7+',
  '4+',
  '2+',
].map((item, index) => {
  return {
    id: index + 1,
    age: item,
  };
});

export default function Ages(props) {
  const ageRating = useSelector((state) => state.filterConfig.ageRating);
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(updateAgeRating([item]));
  };

  const clearGenres = () => {
    dispatch(updateAgeRating([]));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={50}>
      <HeaderModal title="Age rating" {...props} />
      <ScrollView contentContainerStyle={{marginHorizontal: widthScale(11)}}>
        <Button
          key={'0'}
          title={'Any'}
          isActive={ageRating.length === 0}
          onPress={clearGenres}
        />
        {AGES.map((item) => (
          <Button
            key={item.id.toString()}
            title={item.age}
            isActive={ageRating.some((i) => i.id === item.id)}
            onPress={() => addItem(item)}
          />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Button = ({title, isActive, onPress}) => (
  <TouchableOpacity
    style={[styles.butContainer, isActive && styles.butActive]}
    onPress={onPress}>
    <Text
      numberOfLines={1}
      ellipsizeMode="tail"
      style={[styles.butTitle, isActive && styles.butActiveText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontWeight: '700',
  },
  butTitle: {
    color: '#000000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(20),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  SliderContainer: {
    padding: 10,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputStyle: {
    flex: 1,
    fontSize: fontScale(16),
    color: '#cccccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#eee',
    borderRadius: 20,
  },
});
