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

const WIDTH = Dimensions.get('window').width;

export default function RenderMobile(props) {
  let {t} = useTranslation();
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const year = useSelector((state) => state.filterConfig.year);
  const dispatch = useDispatch();

  const setYear = ({type, from, to}) => dispatch(updateYear({type, from, to}));

  const setFromDate = () => {
    let toDate = new Date();
    let fromDate;
    if (year.type === YEARS_TYPE.LAST_WEEK) {
      fromDate = new Date(
        toDate.getFullYear(),
        toDate.getMonth(),
        toDate.getDate() - 7,
      );
    } else if (year.type === YEARS_TYPE.LAST_MONTH) {
      fromDate = new Date(
        toDate.getFullYear(),
        toDate.getMonth() - 1,
        toDate.getDate(),
      );
    } else if (year.type === YEARS_TYPE.LAST_3_MONTH) {
      fromDate = new Date(
        toDate.getFullYear(),
        toDate.getMonth() - 3,
        toDate.getDate(),
      );
    } else if (year.type === YEARS_TYPE.LAST_YEAR) {
      fromDate = new Date(
        toDate.getFullYear() - 1,
        toDate.getMonth(),
        toDate.getDate(),
      );
    } else if (year.type === YEARS_TYPE.LAST_2_YEARS) {
      fromDate = new Date(
        toDate.getFullYear() - 2,
        toDate.getMonth(),
        toDate.getDate(),
      );
    } else if (year.type === YEARS_TYPE.LAST_5_YEARS) {
      fromDate = new Date(
        toDate.getFullYear() - 5,
        toDate.getMonth(),
        toDate.getDate(),
      );
    } else if (year.type === YEARS_TYPE.LAST_10_YEARS) {
      fromDate = new Date(
        toDate.getFullYear() - 10,
        toDate.getMonth(),
        toDate.getDate(),
      );
    } else if (year.type === YEARS_TYPE.LAST_25_YEARS) {
      fromDate = new Date(
        toDate.getFullYear() - 25,
        toDate.getMonth(),
        toDate.getDate(),
      );
    } else if (year.type === YEARS_TYPE.LAST_50_YEARS) {
      fromDate = new Date(
        toDate.getFullYear() - 50,
        toDate.getMonth(),
        toDate.getDate(),
      );
    } else {
      fromDate = new Date(
        toDate.getFullYear() - 50,
        toDate.getMonth(),
        toDate.getDate(),
      );
    }
    setFrom(fromDate);
  };

  return (
    <View style={styles.container}>
      <HeaderModal title="Year of release" {...props} />
      <ScrollView contentContainerStyle={{padding: 10}}>
        <Button
          title={t('texts.id_172')}
          isActive={year.type === YEARS_TYPE.ANY}
          onPress={() => {
            setYear({type: YEARS_TYPE.ANY});
            setFromDate();
          }}
        />
        <Button
          title="Last week"
          isActive={year.type === YEARS_TYPE.LAST_WEEK}
          onPress={() => {
            setYear({type: YEARS_TYPE.LAST_WEEK});
            setFromDate();
          }}
        />
        <Button
          title={t('texts.id_118')}
          isActive={year.type === YEARS_TYPE.LAST_MONTH}
          onPress={() => {
            setYear({type: YEARS_TYPE.LAST_MONTH});
            setFromDate();
          }}
        />
        <Button
          title={t('texts.id_119')}
          isActive={year.type === YEARS_TYPE.LAST_3_MONTH}
          onPress={() => {
            setYear({type: YEARS_TYPE.LAST_3_MONTH});
            setFromDate();
          }}
        />
        <Button
          title={t('texts.id_121')}
          isActive={year.type === YEARS_TYPE.LAST_YEAR}
          onPress={() => {
            setYear({type: YEARS_TYPE.LAST_YEAR});
            setFromDate();
          }}
        />
        <Button
          title={t('texts.id_122')}
          isActive={year.type === YEARS_TYPE.LAST_2_YEARS}
          onPress={() => {
            setYear({type: YEARS_TYPE.LAST_2_YEARS});
            setFromDate();
          }}
        />
        <Button
          title={t('texts.id_123')}
          isActive={year.type === YEARS_TYPE.LAST_5_YEARS}
          onPress={() => {
            setYear({type: YEARS_TYPE.LAST_5_YEARS});
            setFromDate();
          }}
        />
        <Button
          title={t('texts.id_124')}
          isActive={year.type === YEARS_TYPE.LAST_10_YEARS}
          onPress={() => {
            setYear({type: YEARS_TYPE.LAST_10_YEARS});
            setFromDate();
          }}
        />
        <Button
          title={t('texts.id_125')}
          isActive={year.type === YEARS_TYPE.LAST_25_YEARS}
          onPress={() => {
            setYear({type: YEARS_TYPE.LAST_25_YEARS});
            setFromDate();
          }}
        />
        <Button
          title={t('texts.id_126')}
          isActive={year.type === YEARS_TYPE.LAST_50_YEARS}
          onPress={() => {
            setYear({type: YEARS_TYPE.LAST_50_YEARS});
            setFromDate();
          }}
        />
        <View style={styles.SliderContainer}>
          <MultiSlider
            sliderLength={WIDTH - 40}
            values={[1950, new Date().getFullYear()]}
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
            }}
            onValuesChange={(values) => {
              setFrom(new Date(values[0], from.getMonth(), from.getDate()));
              setTo(new Date(values[1], to.getMonth(), to.getDate()));
            }}
          />
          <View style={{height: 20}} />
          <View style={styles.row}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="from"
              textAlign="center"
              value={from.toDateString()}
            />
            <View style={{width: 20}} />
            <TextInput
              style={styles.textInputStyle}
              placeholder="to"
              textAlign="center"
              value={to.toDateString()}
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#eee',
    borderRadius: 20,
  },
});
