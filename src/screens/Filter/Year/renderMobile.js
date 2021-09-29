import React from 'react';
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

const WIDTH = Dimensions.get('window').width;

export default function RenderMobile(props) {
  let {t} = useTranslation();

  return (
    <View style={styles.container}>
      <HeaderModal title="Year of release" {...props} />
      <ScrollView contentContainerStyle={{padding: 10}}>
        <Button title={t('texts.id_172')} isActive={true} />
        <Button title="Last week" isActive={false} />
        <Button title={t('texts.id_118')} isActive={false} />
        <Button title={t('texts.id_119')} isActive={false} />
        <Button title={t('texts.id_121')} isActive={false} />
        <Button title={t('texts.id_122')} isActive={false} />
        <Button title={t('texts.id_123')} isActive={false} />
        <Button title={t('texts.id_124')} isActive={false} />
        <Button title={t('texts.id_125')} isActive={false} />
        <Button title={t('texts.id_126')} isActive={false} />
        <View style={styles.SliderContainer}>
          <MultiSlider
            sliderLength={WIDTH - 40}
            values={[0, 10]}
            min={0}
            max={10}
            step={1}
            allowOverlap
            snapped
          />
          <View style={{height: 20}} />
          <View style={styles.row}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="from"
              textAlign="center"
            />
            <View style={{width: 20}} />
            <TextInput
              style={styles.textInputStyle}
              placeholder="to"
              textAlign="center"
            />
          </View>
        </View>
      </ScrollView>
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
