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
import Switch from '../../../components/Switch';

const WIDTH = Dimensions.get('window').width;

const Catagories = [
  {
    type: 'Action & Adventure',
    subTitles: ['Action', 'Adventure', 'Western', 'Sports'],
  },
  {type: 'Comedy', subTitles: []},
  {type: 'Documentary', subTitles: []},
  {type: 'Drama', subTitles: ['Drama', 'Biography']},
  {type: 'Family & animation', subTitles: ['Family', 'Animation']},
  {type: 'Horror', subTitles: []},
  {type: 'Music & musicals', subTitles: ['Music', 'musicals']},
  {type: 'Romance', subTitles: []},
  {type: 'Sci-Fi & fantasy', subTitles: ['Science friction', 'Fantacy']},
  {type: 'TV Programs', subTitles: ['Talk show', 'Game shows', 'Reality TV']},
  {type: 'Thriller & crime', subTitles: ['Thriller', 'Mistry', 'Crime']},
  {type: 'War & history', subTitles: ['War', 'History']},
].map((item, index) => {
  return {
    id: index + 1,
    ...item,
  };
});

export default function RenderMobile(props) {
  const [isSubGenresVisible, setSubGeneresVisible] = useState(false);
  const genres = useSelector((state) => state.filterConfig.genres);
  const dispatch = useDispatch();

  const addItem = (item) => {
    if (genres.some((i) => i.value === item.value)) {
      let newArr = genres.filter((i) => i.value !== item.value);
      dispatch(updateGenres(newArr));
    } else {
      dispatch(updateGenres([...genres, item]));
    }
  };

  const addByCatagory = (items) => {
    if (genres.some((i) => i.type === items.type)) {
      let newArr = genres.filter((i) => i.type !== items.type);
      dispatch(updateGenres(newArr));
    } else {
      let newArr;
      if (items.values.length) {
        newArr = items.values.map((i) => {
          return {type: items.type, value: i};
        });
      } else {
        newArr = [{type: items.type, value: items.type}];
      }
      dispatch(updateGenres([...genres, ...newArr]));
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
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: widthScale(11),
          marginTop: heightScale(5),
          marginBottom: heightScale(10),
        }}>
        <Switch
          style={{marginRight: widthScale(10)}}
          value={isSubGenresVisible}
          onValueChange={(val) => setSubGeneresVisible(val)}
        />
        <Text style={styles.butTitle}>See subgenres</Text>
      </View>
      <ScrollView contentContainerStyle={{marginHorizontal: widthScale(11)}}>
        <Button
          key={'0'}
          title={'Any'}
          isActive={genres.length === 0}
          onPress={clearGenres}
        />
        {!isSubGenresVisible
          ? Catagories.map((item) => {
              return item.subTitles.map((i, ind) => (
                <Button
                  key={ind.toString()}
                  title={i}
                  isActive={genres.some((el) => el.value === i)}
                  onPress={() => addItem({type: item.type, value: i})}
                />
              ));
            })
          : Catagories.map((item) => {
              return [item.type, ...item.subTitles].map((i, ind) => (
                <Button
                  key={ind.toString()}
                  title={i}
                  isActive={
                    ind === 0
                      ? genres.some((el) => el.type === item.type)
                      : genres.some((el) => el.value === i)
                  }
                  style={ind !== 0 && {paddingHorizontal: 40}}
                  onPress={() => {
                    if (ind === 0) {
                      addByCatagory({
                        type: item.type,
                        values: [...item.subTitles],
                      });
                    } else {
                      addItem({type: item.type, value: i});
                    }
                  }}
                />
              ));
            })}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Button = ({title, isActive, onPress, ...rest}) => (
  <TouchableOpacity
    style={[styles.butContainer, rest.style, isActive && styles.butActive]}
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
    marginBottom: heightScale(5),
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
