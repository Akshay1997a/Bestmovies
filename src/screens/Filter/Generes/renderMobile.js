/* eslint-disable react-native/no-inline-styles */
/* eslint-disable radix */
import React, {useState} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {Text} from '../../../components/EnhanchedComponents';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import HeaderModal from '../../../components/HeaderModal';
import {useTranslation} from 'react-i18next';
import primary_regular_font from '../../../helper/fonts';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  updateGenres,
  updateYear,
} from '../../../redux/FilterModule/FilterActions';
import {YEARS_TYPE} from '../../../redux/FilterModule/FilterTypes';
import {FilterInitialState} from '../../../redux/FilterModule/FilterReducer';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../helper/ResponsiveFonts';

const WIDTH = Dimensions.get('window').width;

const Catagories = [
  {
    name: 'Action & adventure',
  },
  {
    name: 'Comedy',
  },
  {
    name: 'Documentary',
  },
  {
    name: 'Drama',
  },
  {
    name: 'Family & animation',
  },
  {
    name: 'Horror',
  },
  {
    name: 'Music & musicals',
  },
  {
    name: 'Romance',
  },
  {
    name: 'Sci-Fi & fantasy',
  },
  {
    name: 'TV programs',
  },
  {
    name: 'Thriller & crime',
  },
  {
    name: 'War & history',
  },
].map((item, index) => {
  return {
    id: index + 1,
    ...item,
  };
});

export default function RenderMobile(props) {
  const genres = useSelector((state) => state.filterConfig.genres);
  const dispatch = useDispatch();

  const addItem = (item) => {
    if (genres.some((i) => i.id === item.id)) {
      let newArr = genres.filter((i) => i.id !== item.id);
      dispatch(updateGenres(newArr));
    } else {
      dispatch(updateGenres([...genres, item]));
    }
  };

  const clearGenres = () => {
    dispatch(updateGenres([]));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={50}>
      <HeaderModal title="Genres" {...props} />
      <ScrollView contentContainerStyle={{marginHorizontal: widthScale(11)}}>
        <Button
          key={'0'}
          title={'Any'}
          isActive={genres.length === 0}
          onPress={clearGenres}
        />
        {Catagories.map((item) => (
          <Button
            key={item.id.toString()}
            title={item.name}
            isActive={genres.some((i) => i.id === item.id)}
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
