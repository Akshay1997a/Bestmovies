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
import {
  updateAgeRating,
  updatePricing,
} from '../../../redux/FilterModule/FilterActions';
import {fontScale, widthScale} from '../../../helper/ResponsiveFonts';

const WIDTH = Dimensions.get('window').width;

const PRICES = Array(10)
  .fill(0)
  .map((val, ind) => {
    return {
      id: ind + 2,
      price: `< ${ind + 1} $`,
    };
  });

export default function Price(props) {
  const pricing = useSelector((state) => state.filterConfig.pricing);
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(updatePricing([item]));
  };

  const clearGenres = () => {
    dispatch(updatePricing([]));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={50}>
      <HeaderModal title="Price" {...props} />
      <ScrollView contentContainerStyle={{marginHorizontal: widthScale(11)}}>
        <Button
          key={'0'}
          title={'Any'}
          isActive={pricing.length === 0}
          onPress={clearGenres}
        />
        <Button
          key={'1'}
          title={'Free'}
          isActive={pricing.some((i) => i.id === 1)}
          onPress={() => addItem({id: 1, price: 'Free'})}
        />
        {PRICES.map((item) => (
          <Button
            key={item.id.toString()}
            title={item.price}
            isActive={pricing.some((i) => i.id === item.id)}
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
