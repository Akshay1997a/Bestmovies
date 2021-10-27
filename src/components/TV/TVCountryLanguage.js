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
  getStaticData,
} from '../../network/requests';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {HEIGHT, WIDTH} from '../../helper/globalFunctions';
import {result} from 'lodash';

const COUNTRY = [
  {id: 0, name: 'United States'},
  {id: 1, name: 'English', code: 'en'},
  {id: 2, name: 'Spanish', code: 'es'},
];
const COUNTRY_LANGUAGE = [
  {id: 0, name: 'Country'},
  {id: 1, name: 'Language', code: 'en'},
  {id: 2, name: 'Title Country Version', code: 'es'},
  {id: 3, name: 'Title language Version', code: 'es'},
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
const LANGUAGES = [
  {id: 1, name: 'English'},
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
const languageMap = new Map();

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_regular_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_light_font,
      },
    }),
  },
  selectedText: {
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '700',
    color: colors.tomatoRed,
    fontFamily: primary_regular_font.primary_regular_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
  },
  focusText: {
    fontSize: StyleConfig.resWidth(28),
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    // paddingLeft: 10,
  },
  container: {
    paddingHorizontal: StyleConfig.resWidth(20),
    borderLeftWidth: 1,
    borderLeftColor: colors.borderColor,
  },
  backWrap: {
    paddingHorizontal: StyleConfig.resWidth(20),
    // padding: StyleConfig.resWidth(10),

    paddingVertical: StyleConfig.resWidth(15),
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: StyleConfig.resWidth(20),
    borderRadius: StyleConfig.resWidth(10),
    // margin: 4,
  },
  listbackWrap: {
    paddingHorizontal: StyleConfig.resWidth(10),
    paddingVertical: StyleConfig.resWidth(5),
    // // paddingHorizontal: isAndroid()
    //   ? StyleConfig.resWidth(0)
    //   : StyleConfig.resWidth(8),
    // paddingVertical: isAndroid()
    //   ? StyleConfig.resWidth(2)
    //   : StyleConfig.resHeight(4),
    margin: isAndroid() ? StyleConfig.resWidth(0) : StyleConfig.resWidth(4),

    // margin: 4,
  },
  listfocusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: isAndroid()
      ? StyleConfig.resWidth(8)
      : StyleConfig.resWidth(8),
    paddingVertical: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resHeight(4),
    paddingStart: StyleConfig.resHeight(15),
    // margin: isAndroid() ? StyleConfig.resWidth(10) : StyleConfig.resWidth(4),
    borderRadius: StyleConfig.resWidth(10),
  },
});

const TVCountryLanguage = (props) => {
  // console.log('props>>>', props);
  const {t, i18n} = useTranslation();

  const [selected, setSelected] = useState(0);
  const [focus, setFocus] = useState('DZ');
  const [data, setData] = useState(COUNTRY_LANGUAGE);
  const [country, setCountry] = useState(null);
  const [isCountryClick, setCountryClick] = useState(true);
  const [dataList, setDataList] = useState(null);
  const [language, setLanguageList] = useState(null);
  const [titleLanguage, setTitleLanguageList] = useState(null);
  const [aboutUs, setAboutUsData] = useState(null);

  // const [country, setContryList] = useState(null);

  useFocusEffect(() => {
    // let lng = i18n.language;
    // let countryData = i18next.getDataByLanguage(lng);
    // let countryTemp = countryData?.translation?.countries_listed;
    // console.log('CountryDataaasasassadadfasaffq', countryTemp);
    // for (const item of LANGUAGES) {
    //   languageMap.set('code_AD', 'Andorra');
    // }
    // countryTemp && setCountryList(countryTemp);
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
    let lng = i18n.language;
    let countryData = i18next.getDataByLanguage(lng);
    let countryTemp = countryData?.translation?.countries_listed;
    for (const item of LANGUAGES) {
      languageMap.set('code_AD', 'Andorra');
    }
    countryTemp && setDataList(countryTemp);
    setCountry(countryTemp);

    props.getLanguageData((res) => {
      let data = convertArrayToObject(res.data.display, 'code');
      let titleLanguage = convertArrayToObject(res.data.list, 'code');
      setLanguageList(data);
      setTitleLanguageList(titleLanguage);
    });
    props.getStaticData((res) => {
      setAboutUsData(res);
      // let data = res;

    });
  }, []);

  const countryPress = (code, item) => {
    console.log('responseeeeee>>>>>>itemitemitemitem', item);

    let data = {
      cd: code?.toLowerCase(),
    };
    if (code) {
      i18n.changeLanguage(code);
      changeLanguage();
    }
    props.getLanguageList(data, (res) => {
      console.log('responseeeeee', res);
    });
  };

  const onPressHandle = async (item) => {
    console.log(
      'hi-------------------------------------------------------',
      item,
    );
    // setCountryClick(true);
    setSelected(item.id);
    if (item.id == 0) {
      setDataList(country);
    } else if (item.id == 1) {
      setDataList(language);
    } else if (item.id == 2) {
      setDataList(country);
    } else if (item.id == 3) {
      setDataList(titleLanguage);
    }
    // setCountryList(language);
    // let lng = i18n.language;
    // let countryData = i18next.getDataByLanguage(lng);
    // let countryTemp = countryData?.translation?.countries_listed;
    // console.log('CountryDataaasasassadadfasaffq', countryTemp);
    // if (item?.code) {
    //   i18n.changeLanguage(item?.code);
    // changeLanguage();
    // }
  };

  const onFocus = useCallback((val) => {
    // props.reduxSetCurrFocus('countryLang');
    setFocus(val);
  });

  const onBlur = useCallback(() => {
    console.log('onBlur');

    setFocus(false);
  }, []);

  const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce(
      (obj, item) => ((obj['code_' + item.code] = item.name), obj),
      {},
    );
    // obj[curr.code]='', obj;
    // return {
    //   // ...obj,
    //   [item.code]: item.name,
    // };
    // }, initialValue);
  };

  return (
    // <ScrollView>
    <View style={{flexDirection: 'row'}}>
      <View style={styles.container}>
        {data.map((item, index) => {
          return (
            <View style={[{width: WIDTH * 0.27}]}>
              <Pressable
                onPress={() => onPressHandle(item)}
                onFocus={() => onFocus(item.id)}
                style={
                  item.id == focus
                    ? styles.listfocusBackWrap
                    : styles.listbackWrap
                }>
                <Text
                  style={
                    focus == item.id
                      ? styles.focusText
                      : selected == item.id
                      ? styles.selectedText
                      : styles.text
                  }>
                  {item.name}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>
      {isCountryClick ? (
        <ScrollView>
          <View
            style={{
              width: WIDTH * 0.2,
              // borderWidth:1,
              height: HEIGHT,
              // marginLeft: isAndroid() ? 100 : 160,
              paddingLeft: StyleConfig.resWidth(20),
              borderLeftWidth: 1,
              borderLeftColor: colors.borderColor,
            }}>
            {dataList !== null &&
              Object.entries(dataList).map((item, index) => {
                let [temp, code] = item[0].split('_');
                return (
                  <Pressable
                    onPress={() => countryPress(code, item)}
                    onFocus={() => onFocus(code)}
                    style={
                      // props.focus === 'code' &&
                      focus == code
                        ? styles.listfocusBackWrap
                        : styles.listbackWrap
                      // ? styles.focusText
                      // : selected == 0
                      // ? styles.listfocusBackWrap
                      // : styles.listbackWrap
                    }>
                    <Text
                      style={code == focus ? styles.focusText : styles.text}>
                      {item[1]}
                    </Text>
                  </Pressable>
                );
              })}
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTranslateFile,
      getLanguageList,
      getLanguageData,
      getStaticData,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(TVCountryLanguage);
