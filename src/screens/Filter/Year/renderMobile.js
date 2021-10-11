/* eslint-disable radix */
import React, {useState} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import HeaderModal from '../../../components/HeaderModal';
import {useTranslation} from 'react-i18next';
import primary_regular_font from '../../../helper/fonts';
import {connect, useDispatch, useSelector} from 'react-redux';
import {updateYear} from '../../../redux/FilterModule/FilterActions';
import {YEARS_TYPE} from '../../../redux/FilterModule/FilterTypes';
import {FilterInitialState} from '../../../redux/FilterModule/FilterReducer';

const WIDTH = Dimensions.get('window').width;

export default function RenderMobile(props) {
  let {t} = useTranslation();
  const year = useSelector((state) => state.filterConfig.year);
  const dispatch = useDispatch();

  const setYear = ({type, from, to}) => dispatch(updateYear({type, from, to}));

  const setFromDate = (type) => {
    setYear({type, from: 1950, to: new Date().getFullYear()});
  };

  return (
    <View style={styles.container}>
      <HeaderModal title="Year of release" {...props} />
      <ScrollView contentContainerStyle={{padding: 10}}>
        <Button
          title={t('texts.id_172')}
          isActive={year.type === YEARS_TYPE.ANY}
          onPress={() => {
            // setYear({type: YEARS_TYPE.ANY});
            setFromDate(YEARS_TYPE.ANY);
          }}
        />
        <Button
          title="Last week"
          isActive={year.type === YEARS_TYPE.LAST_WEEK}
          onPress={() => {
            // setYear({type: YEARS_TYPE.LAST_WEEK});
            setFromDate(YEARS_TYPE.LAST_WEEK);
          }}
        />
        <Button
          title={t('texts.id_118')}
          isActive={year.type === YEARS_TYPE.LAST_MONTH}
          onPress={() => {
            // setYear({type: YEARS_TYPE.LAST_MONTH});
            setFromDate(YEARS_TYPE.LAST_MONTH);
          }}
        />
        <Button
          title={t('texts.id_119')}
          isActive={year.type === YEARS_TYPE.LAST_3_MONTH}
          onPress={() => {
            // setYear({type: YEARS_TYPE.LAST_3_MONTH});
            setFromDate(YEARS_TYPE.LAST_3_MONTH);
          }}
        />
        <Button
          title={t('texts.id_121')}
          isActive={year.type === YEARS_TYPE.LAST_YEAR}
          onPress={() => {
            // setYear({type: YEARS_TYPE.LAST_YEAR});
            setFromDate(YEARS_TYPE.LAST_YEAR);
          }}
        />
        <Button
          title={t('texts.id_122')}
          isActive={year.type === YEARS_TYPE.LAST_2_YEARS}
          onPress={() => {
            // setYear({type: YEARS_TYPE.LAST_2_YEARS});
            setFromDate(YEARS_TYPE.LAST_2_YEARS);
          }}
        />
        <Button
          title={t('texts.id_123')}
          isActive={year.type === YEARS_TYPE.LAST_5_YEARS}
          onPress={() => {
            // setYear({type: YEARS_TYPE.LAST_5_YEARS});
            setFromDate(YEARS_TYPE.LAST_5_YEARS);
          }}
        />
        <Button
          title={t('texts.id_124')}
          isActive={year.type === YEARS_TYPE.LAST_10_YEARS}
          onPress={() => {
            // setYear({type: YEARS_TYPE.LAST_10_YEARS});
            setFromDate(YEARS_TYPE.LAST_10_YEARS);
          }}
        />
        <Button
          title={t('texts.id_125')}
          isActive={year.type === YEARS_TYPE.LAST_25_YEARS}
          onPress={() => {
            // setYear({type: YEARS_TYPE.LAST_25_YEARS});
            setFromDate(YEARS_TYPE.LAST_25_YEARS);
          }}
        />
        <Button
          title={t('texts.id_126')}
          isActive={year.type === YEARS_TYPE.LAST_50_YEARS}
          onPress={() => {
            // setYear({type: YEARS_TYPE.LAST_50_YEARS});
            setFromDate(YEARS_TYPE.LAST_50_YEARS);
          }}
        />
        <View style={styles.SliderContainer}>
          <MultiSlider
            sliderLength={WIDTH - 40}
            values={[year.from, year.to]}
            min={1950}
            max={new Date().getFullYear()}
            step={1}
            allowOverlap
            snapped
            markerStyle={{backgroundColor: '#CCCCCC', width: 25, height: 25}}
            trackStyle={{backgroundColor: '#CCCCCC'}}
            selectedStyle={{
              backgroundColor: '#CCCCCC',
              height: 3,
              ...(year.type === YEARS_TYPE.CUSTOME && {
                backgroundColor: 'red',
              }),
            }}
            onValuesChange={(values) => {
              console.log('Values', values);
              setYear({
                type: YEARS_TYPE.CUSTOME,
                from: values[0],
                to: values[1],
              });
            }}
          />
          <View style={{height: 20}} />
          <View style={styles.row}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="From"
              textAlign="center"
              value={
                year.type === YEARS_TYPE.CUSTOME ? year.from.toString() : ''
              }
              keyboardType="decimal-pad"
              onChangeText={(text) => {
                setYear({
                  type: YEARS_TYPE.CUSTOME,
                  from: parseInt(text),
                  to: year.to,
                });
              }}
            />
            <View style={{width: 20}} />
            <TextInput
              style={styles.textInputStyle}
              placeholder="to"
              textAlign="center"
              keyboardType="decimal-pad"
              value={year.type === YEARS_TYPE.CUSTOME ? year.to.toString() : ''}
              onChangeText={(text) => {
                setYear({
                  type: YEARS_TYPE.CUSTOME,
                  from: year.from,
                  to: parseInt(text),
                });
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const Button = ({title, isActive, onPress}) => (
  <TouchableOpacity
    style={[styles.butContainer, isActive && styles.butActive]}
    onPress={onPress}>
    <Text style={[styles.butTitle, isActive && styles.butActiveText]}>
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
    fontSize: 20,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  SliderContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputStyle: {
    flex: 1,
    fontSize: 16,
    color: '#cccccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#eee',
    borderRadius: 20,
  },
});
