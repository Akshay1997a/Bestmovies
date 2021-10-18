import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import BaseModal from './BaseModal';
import colors from '../../helper/colors';
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets';
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';
import primary_regular_font from '../../helper/fonts';
import {useTranslation} from 'react-i18next';
import {useFocusEffect} from '@react-navigation/core';
import i18next from 'i18next';
import {runTimeTranslations} from '../../i18n';
import {
  getLanguageData,
  getLanguageList,
  getTranslateFile,
} from '../../network/requests';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {WIDTH} from '../../helper/globalFunctions';

const COUNTRY = [
  {id: 0, name: 'United States'},
  {id: 1, name: 'English', code: 'en'},
  {id: 2, name: 'Spanish', code: 'es'},
];

const DATA = [
  {id: 10, name: 'United States'},
  {id: 11, name: 'Albaniya'},
  {id: 2, name: 'Algeria'},
  {id: 3, name: 'American Samoa'},
  {id: 4, name: 'Andorra'},
  {id: 5, name: 'Angola'},
  {id: 6, name: 'Aruba'},
  {id: 7, name: 'Australia'},
  {id: 9, name: 'Azerbaizan'},
  {id: 110, name: 'Algeria'},
  {id: 111, name: 'Andorra'},
  {id: 12, name: 'Aruba'},
  {id: 13, name: 'Australia'},
  {id: 14, name: 'Andorra'},
  {id: 15, name: 'Albaniya'},
  {id: 16, name: 'Aruba'},
  {id: 17, name: 'Australia'},
  {id: 18, name: 'Andorra'},
  {id: 19, name: 'Albaniya'},
];
const isAndroid = () => {
  return Platform.OS == 'android';
};
const styles = StyleSheet.create({
  container: {
    marginLeft: isAndroid() ? 10 : 150,
    borderLeftWidth: 1,
    borderLeftColor: colors.borderColor,
  },
  backWrap: {
    paddingHorizontal: StyleConfig.resWidth(8),
    margin: 4,
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: isAndroid() ? 0 : StyleConfig.resWidth(8),
    borderRadius: 10,
    margin: 4,
  },
});

const TVCountryLanguage = (props) => {
  console.log('props>>>', props);
  const {t, i18n} = useTranslation();

  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(COUNTRY);
  const [country, setCountry] = useState(DATA);
  const [isCountryClick, setCountryClick] = useState(true);
  const [countryList, setCountryList] = useState(null);

  useFocusEffect(() => {
    let lng = i18n.language;
    let countryData = i18next.getDataByLanguage(lng);
    let countryTemp = countryData?.translation?.countries_listed;
    console.log('CountryDataaa', countryData);
    countryTemp && setCountryList(countryTemp);
  });

  const changeLanguage = () => {
    props.getTranslateFile(
      (res) => {
        console.log('Response from translate api', res);
        runTimeTranslations(res, res?.language);
      },
      (err) => {
        console.log('Error from translate file', err);
      },
    );
  };

  useEffect(() => {
    props.getLanguageData((res) => {
      console.log('responseeeeee90909090', res);
    });
  }, []);

  const countryPress = (code) => {
    let data = {
      cd: code?.toLowerCase(),
    };
    props.getLanguageList(data, (res) => {
      console.log('responseeeeee', res);
    });
  };

  const onPressHandle = async (item) => {
    setCountryClick(true);
    if (item?.code) {
      i18n.changeLanguage(item?.code);
      changeLanguage();
    }
  };

  const onFocus = useCallback((val) => {
    props.reduxSetCurrFocus('countryLang');
    setFocus(val);
  });

  const onBlur = useCallback(() => {
    console.log('onBlur');

    setFocus(false);
  }, []);

  return (
    <ScrollView>
      <View style={{flexDirection: 'row', minHeight: 1000}}>
        <View style={styles.container}>
          {data.map((item, index) => {
            return (
              <View style={[{width: WIDTH * 0.14, marginLeft: 10}]}>
                <Pressable
                  onPress={() => onPressHandle(item)}
                  onFocus={() => onFocus(item.id)}
                  style={
                    props.focus === 'countryLang' && item.id == focus
                      ? styles.focusBackWrap
                      : {}
                  }>
                  <Text
                    style={{
                      fontFamily: primary_regular_font.primary_regular_font,
                      fontSize: isAndroid() ? 16 : 28,
                      fontWeight:
                        props.focus === 'countryLang' && item.id == focus
                          ? '700'
                          : '400',
                      padding: isAndroid() ? 2 : 8,
                      paddingHorizontal: 15,
                      color:
                        props.focus === 'countryLang' && item.id == focus
                          ? colors.white
                          : colors.black,
                    }}>
                    {item.name}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>
        {isCountryClick ? (
          <View
            style={{
              marginLeft: isAndroid() ? 100 : 160,
              paddingLeft: 15,
              borderLeftWidth: 1,
              borderLeftColor: colors.borderColor,
            }}>
            {countryList !== null &&
              Object.entries(countryList).map((item, index) => {
                let [temp, code] = item[0].split('_');
                return (
                  <Pressable
                    onPress={() => countryPress(code)}
                    onFocus={() => onFocus(code)}
                    onFocus={() => setFocus(code)}
                    style={
                      // props.focus === 'code' &&
                      code == focus ? styles.focusBackWrap : styles.backWrap
                    }>
                    <Text
                      style={{
                        fontFamily: primary_regular_font.primary_regular_font,
                        fontSize: isAndroid() ? 16 : 28,
                        fontWeight: code == focus ? '700' : '400',
                        color: code == focus ? colors.white : colors.black,
                      }}>
                      {item[1]}
                    </Text>
                  </Pressable>
                );
              })}
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTranslateFile,
      getLanguageList,
      getLanguageData,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(TVCountryLanguage);
