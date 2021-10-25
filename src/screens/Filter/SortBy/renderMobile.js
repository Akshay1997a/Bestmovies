import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderModal from '../../../components/HeaderModal';
import {updateSortByAction} from '../../../redux/FilterModule/FilterActions';
import {SORT_BY_FILTER} from '../../../redux/FilterModule/FilterTypes';
import primary_regular_font from '../../../helper/fonts';
import {widthScale} from '../../../helper/ResponsiveFonts';

const {height} = Dimensions.get('screen');

export default function RenderMobile(props) {
  const {sortBy} = useSelector((state) => state.filterConfig);
  let {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <HeaderModal title={t('texts.id_99')} {...props} />
      <View style={{paddingHorizontal: widthScale(11)}}>
        {Object.entries(SORT_BY_FILTER).map((value, index) => (
          <Button
            key={index.toString()}
            title={t(value[1])}
            isActive={sortBy === SORT_BY_FILTER[value[0]]}
            onPress={() => dispatch(updateSortByAction(value[1]))}
          />
        ))}
      </View>
    </View>
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
    height: height,
    backgroundColor: '#fff',
    marginTop: 'auto',
  },
  butContainer: {
    padding: 10,
    borderRadius: 10,
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
    fontSize: 20,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
});
