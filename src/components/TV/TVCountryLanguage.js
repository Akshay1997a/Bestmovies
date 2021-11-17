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
import {WIDTH} from '../../helper/globalFunctions';

const COUNTRY = [
  {id: 0, name: 'Country',code:'co'},
  {id: 1, name: 'Language', code: 'la'},
  {id: 2, name: 'Titles country version', code: 'tc'},
  {id: 3, name: 'Titles language version', code: 'tl'},

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
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  container: {
    // flexDirection: 'row',
    marginLeft: isAndroid() ? 10 : 150,
    borderLeftWidth: 1,
    borderLeftColor: colors.borderColor,
  },
  backWrap: {
    paddingHorizontal: StyleConfig.resWidth(8),
    // paddingVertical:   isAndroid() ? 0: StyleConfig.resHeight(2),
    margin: 4,
  },
  focusText: {
    fontSize: StyleConfig.resWidth(28),
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
    paddingLeft: 10,
    fontWeight: '700',

  },
  text: {
    color: colors.black,
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    fontFamily: primary_regular_font.primary_regular_font,
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: isAndroid() ? 0 : StyleConfig.resWidth(8),
    // paddingVertical:  isAndroid() ? 0 :StyleConfig.resHeight(2),
    margin: isAndroid() ? 0 : 4,
    borderRadius: 10,
  },
  selectedText: {
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: colors.tomatoRed,
    fontFamily: primary_regular_font.primary_regular_font,
  },
});

const TVCountryLanguage = (props) => {
  console.log('props>>>', props);
  const {t, i18n} = useTranslation();

  const [selected, setSelected] = useState(-1);
  const [middleSelected, setMiddleSelected] = useState(0);

  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(COUNTRY);
  // const [country, setCountry] = useState(DATA);
  // const [isCountryClick, setCountryClick] = useState(true);
  const [countryList, setCountryList] = useState(null);
  const [country, setCountry] = useState(null);
  const [titleCountry, setTitleCountry] = useState(null);

    const [isCountryClick, setCountryClick] = useState(true);
    const [dataList, setDataList] = useState(null);
    const [language, setLanguageList] = useState(null);
    const [titleLanguage, setTitleLanguageList] = useState(null);
    const [aboutUs, setAboutUsData] = useState(null);
  useEffect(() => {
    let lng = i18n.language;
    let countryData = i18next.getDataByLanguage(lng);
    let countryTemp = countryData?.translation?.countries_displayed;
    let countryVersion = countryData?.translation?.countries_listed;

    // for (const item of LANGUAGES) {
    //   languageMap.set('code_AD', 'Andorra');
    // }
    countryTemp && setDataList(countryTemp);
    setCountry(countryTemp);
    setTitleCountry(countryVersion)
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
  useFocusEffect(() => {
    // let lng = i18n.language;
    // let countryData = i18next.getDataByLanguage(lng);
    // let countryTemp = countryData?.translation?.countries_listed;
    // console.log('CountryDataaa', countryData);
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

  // const onPressHandle = async (item) => {
  //   setCountryClick(true);

  //   if (item?.code) {
  //     //   await AsyncStorage.setItem('langType', item?.code);
  //     i18n.changeLanguage(item?.code);
  //     changeLanguage();
  //   }
  //   // console.log('key',val);
  //   // setFocus(val);
  // };
  const countryPress = (code, item) => {
    console.log('responseeeeee>>>>>>itemitemitemitem', item);
    setSelected(code)
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
    setMiddleSelected(item.id);
    if (item.id == 0) {
      setDataList(country);
    } else if (item.id == 1) {
      setDataList(language);
    } else if (item.id == 2) {
      setDataList(titleCountry);
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
    props.reduxSetCurrFocus('countryLang');
    setFocus(val);
  });
  const onBlur = useCallback(() => {
    console.log('onBlur');

    setFocus(-1);
  }, []);

  console.log('countryList', countryList);
  return (
    // <ScrollView>
      <View style={{flexDirection: 'row',height:1000}}>
        <View style={styles.container}>
          {data.map((item, index) => {
            return (
              <View style={[{width: WIDTH * 0.28, marginLeft: 10}]}>
                <Pressable
                  onPress={() => onPressHandle(item)}
                  //  onBlur={onBlur()}
                  onFocus={() => onFocus(item.id)}
                  //   onFocus={()=> setFocus(item.id)}
                  style={
                    props.focus === 'countryLang' && item.id == focus
                      ? styles.focusBackWrap
                      : styles.backWrap
                  }>
                  <Text
                    style={
                    //   {
                    //   fontFamily: primary_regular_font.primary_regular_font,
                    //   fontSize: StyleConfig.resWidth(28),
                    //   fontWeight: '400',
                    //   // padding: isAndroid() ? 2 : 8,
                    //   paddingHorizontal: 15,
                    //   color:
                    //    item.id == focus
                    //       ? colors.white
                    //       :
                    //       props.focus === 'countryLang' &&   middleSelected == item.id
                    //         ? colors.tomatoRed
                    //       : colors.black,
                    // }

                    props.focus === 'countryLang' && item.id == focus   ? styles.focusText
                    :  props.focus === 'countryLang' &&   middleSelected == item.id
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
        <View style={styles.verticleLine}></View>

        <ScrollView>
          
        {isCountryClick ? (
          <View
          // hasTVPreferredFocus={true}
            style={{
              // marginLeft: isAndroid() ? 100 : 160,
                  // flexDirection:'row',
              // borderLeftWidth: 1,
              borderLeftColor: colors.borderColor,
            }}>
            {dataList !== null &&
              Object.entries(dataList).map((item, index) => {
                let [temp, code] = item[0].split('_');
                return (
                  <Pressable
                    onPress={() => countryPress(code,item)}
                    onFocus={() => onFocus(code)}
                    // onFocus={() => setFocus(code)}
                    style={
                      props.focus === 'countryLang' &&  code == focus
                        ? styles.focusBackWrap
                        : styles.backWrap
                    }>
                    <Text
                      style={
                        props.focus === 'countryLang' && code == focus   ? styles.focusText
                        :  props.focus === 'countryLang' &&    selected == code
                        ? styles.selectedText
                        : styles.text
                      //   {
                      //   fontFamily: primary_regular_font.primary_regular_font,
                      //   fontSize: StyleConfig.resWidth(28),
                      //   fontWeight: '400',
                      //   color:
                      //   props.focus === 'countryLang' && code == focus
                      //       ? colors.white :
                      //       props.focus === 'countryLang' &&    selected == code
                      //       ? colors.tomatoRed  : colors.black,
                      // }
                      }>
                      {item[1]}
                    </Text>
                  </Pressable>
                );
              })}
              
          </View>
          
        ) : null}
     </ScrollView>

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
