import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
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
import {bindActionCreators} from 'redux';
import {getLanguageList, getTranslateFile} from '../../network/requests';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {runTimeTranslations} from '../../i18n';
import {useFocusEffect} from '@react-navigation/core';
import i18next from 'i18next';

const COUNTRY = [
  {id: 0, name: 'United States'},
  {id: 1, name: 'English', code: 'en'},
  {id: 2, name: 'Spanish', code: 'es'},
];
const DATA = [
  {id: 10, name: 'countries.code_US'},
  {id: 11, name: 'countries.code_AL'},
  {id: 112, name: 'countries.code_DZ'},
  {id: 3, name: 'countries.code_AS'},
  {id: 4, name: 'countries.code_AD'},
  {id: 5, name: 'countries.code_AO'},
  {id: 6, name: 'countries.code_AI'},
  {id: 7, name: 'countries.code_AQ'},
  {id: 9, name: 'countries.code_AG'},
  {id: 110, name: 'countries.code_AR'},
  {id: 111, name: 'countries.code_AM'},
  {id: 12, name: 'countries.code_AW'},
  {id: 13, name: 'countries.code_AU'},
  {id: 14, name: 'countries.code_AT'},
  {id: 15, name: 'countries.code_AZ'},
  {id: 16, name: 'countries.code_BS'},
  {id: 17, name: 'countries.code_BH'},
  {id: 18, name: 'countries.code_BD'},
  {id: 19, name: 'countries.code_BB'},

  //   {id: 10, name: 'countries.code_BY'},
  //   {id: 11, name: 'countries.code_BE'},
  //   {id: 2, name: 'countries.code_BZ'},
  //   {id: 3, name: 'countries.code_BJ'},
  //   {id: 4, name: 'countries.code_BM'},
  //   {id: 5, name: 'countries.code_BT'},
  //   {id: 6, name: 'countries.code_BO'},
  //   {id: 7, name: 'countries.code_BQ'},
  //   {id: 9, name: 'countries.code_BA'},
  //   {id: 110, name: 'countries.code_BW'},
  //   {id: 111, name: 'countries.code_BV'},
  //   {id: 12, name: 'countries.code_BV'},
  //   {id: 13, name: 'countries.code_IO'},
  //   {id: 14, name: 'countries.code_BN'},
  //   {id: 15, name: 'countries.code_BG'},
  //   {id: 16, name: 'countries.code_BF'},
  //   {id: 17, name: 'countries.code_BI'},
  //   {id: 18, name: 'countries.code_KH'},
  //   {id: 19, name: 'countries.code_CM'},

  //   {id: 10, name: 'countries.code_CA'},
  //   {id: 11, name: 'countries.code_CV'},
  //   {id: 2, name: 'countries.code_KY'},
  //   {id: 3, name: 'countries.code_CF'},
  //   {id: 4, name: 'countries.code_TD'},
  //   {id: 5, name: 'countries.code_CL'},
  //   {id: 6, name: 'countries.code_CN'},
  //   {id: 7, name: 'countries.code_CX'},
  //   {id: 9, name: 'countries.code_CC'},
  //   {id: 110, name: 'countries.code_CO'},
  //   {id: 111, name: 'countries.code_KM'},
  //   {id: 12, name: 'countries.code_CG'},
  //   {id: 13, name: 'countries.code_CD'},
  //   {id: 14, name: 'countries.code_CK'},
  //   {id: 15, name: 'countries.code_CR'},
  //   {id: 16, name: 'countries.code_HR'},
  //   {id: 17, name: 'countries.code_CU'},
  //   {id: 18, name: 'countries.code_CW'},
  //   {id: 19, name: 'countries.code_CY'},

  //   {id: 10, name: 'countries.code_CZ'},
  //   {id: 11, name: 'countries.code_CI'},
  //   {id: 2, name: 'countries.code_DK'},
  //   {id: 3, name: 'countries.code_DJ'},
  //   {id: 4, name: 'countries.code_DM'},
  //   {id: 5, name: 'countries.code_DO'},
  //   {id: 6, name: 'countries.code_EC'},
  //   {id: 7, name: 'countries.code_EG'},
  //   {id: 9, name: 'countries.code_SV'},
  //   {id: 110, name: 'countries.code_GQ'},
  //   {id: 111, name: 'countries.code_ER'},
  //   {id: 12, name: 'countries.code_EE'},
  //   {id: 13, name: 'countries.code_ET'},
  //   {id: 14, name: 'countries.code_EU'},
  //   {id: 15, name: 'countries.code_FK'},
  //   {id: 16, name: 'countries.code_FO'},
  //   {id: 17, name: 'countries.code_FJ'},
  //   {id: 18, name: 'countries.code_FI'},
  //   {id: 19, name: 'countries.code_FR'},

  //   {id: 10, name: 'countries.code_GF'},
  //   {id: 11, name: 'countries.code_PF'},
  //   {id: 2, name: 'countries.code_TF'},
  //   {id: 3, name: 'countries.code_GA'},
  //   {id: 4, name: 'countries.code_GM'},
  //   {id: 5, name: 'countries.code_GE'},
  //   {id: 6, name: 'countries.code_DE'},
  //   {id: 7, name: 'countries.code_GH'},
  //   {id: 9, name: 'countries.code_GI'},
  //   {id: 110, name: 'countries.code_AR'},
  //   {id: 111, name: 'countries.code_GR'},
  //   {id: 12, name: 'countries.code_GL'},
  //   {id: 13, name: 'countries.code_GD'},
  //   {id: 14, name: 'countries.code_GP'},
  //   {id: 15, name: 'countries.code_GU'},
  //   {id: 16, name: 'countries.code_GT'},
  //   {id: 17, name: 'countries.code_GG'},
  //   {id: 18, name: 'countries.code_GN'},
  //   {id: 19, name: 'countries.code_GW'},
];
const isAndroid = () => {
  return Platform.OS == 'android';
};
const styles = StyleSheet.create({
  container: {
    marginLeft: isAndroid() ? 10 : 160,
    borderLeftWidth: 1,
    borderLeftColor: colors.borderColor,
  },
  backWrap: {
    // paddingHorizontal: StyleConfig.resWidth(8),
    paddingVertical: isAndroid() ? 0 : StyleConfig.resHeight(4),
    margin: 4,
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRedLight,
    paddingHorizontal: isAndroid() ? 0 : StyleConfig.resWidth(8),
    // paddingVertical: StyleConfig.resHeight(4),
    margin: isAndroid() ? 0 : 4,
    borderRadius: 10,
  },
});

const TVCountryLanguage = (props) => {
  const {t, i18n} = useTranslation();
  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(COUNTRY);
  const [country, setCountry] = useState(DATA);
  const [isCountryClick, setCountryClick] = useState(true);
  const [countryList, setCountryList] = useState(null);
  const onPressHandle = async (item) => {
    setCountryClick(true);

    if (item?.code) {
      //   await AsyncStorage.setItem('langType', item?.code);
      i18n.changeLanguage(item?.code);
      changeLanguage();
    }
    // console.log('key',val);
    // setFocus(val);
  };

  useFocusEffect(() => {
    let lng = i18n.language;
    let countryData = i18next.getDataByLanguage(lng);
    let countryTemp = countryData?.translation?.countries_listed;
    // console.log('CountryDataaa', Object.entries(countryTemp));
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

  const getLanguageList = (code) => {
    let data = {
      cd: code.toLowerCase(),
    };
    props.getLanguageList(
      data,
      (res) => {
        console.log('response from langauge listttt', res);
      },
      (err) => {
        console.log('response errrrorr from langauge listttt', err);
      },
    );
  };
  const onBlur = useCallback(() => {
    console.log('onBlur');

    setFocus(false);
  }, []);

  return (
    // <BaseModal visible={props.visible} oncloseModal={props.oncloseModal} >
    //     <View style={{width: 350, minHeight: 300, backgroundColor: 'white'}}>
    //         <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
    //             <Pressable onPress={props.onclose} style={({ pressed, hovered, focused }) => focused ? styles.focusBackWrap : styles.backWrap }>
    //                 <Image style={{ width: StyleConfig.resWidth(20),
    //                     height: StyleConfig.resHeight(20),}} source={AppImages.icBackArrow} />
    //             </Pressable>
    //             <Text style={{fontSize:26, fontWeight:'700', textAlign:'center'}}>{strings.release}</Text>
    //             <View style={{width: StyleConfig.resWidth(36), margin:4}} />
    //         </View>
    <ScrollView>
      <View style={{flexDirection: 'row', minHeight: 1000}}>
        <View style={styles.container}>
          {data.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => onPressHandle(item)}
                //  onBlur={onBlur()}
                onFocus={() => setFocus(item.id)}
                style={
                  item.id == focus
                    ? {
                        borderRadius: 20,
                        marginHorizontal: 10,
                        backgroundColor: colors.tomatoRed,
                      }
                    : {}
                }>
                <Text
                  style={{
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: isAndroid() ? 16 : 30,
                    fontWeight: '400',
                    padding: isAndroid() ? 2 : 8,
                    paddingHorizontal: 15,
                    color: item.id == focus ? colors.white : colors.black,
                  }}>
                  {item.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
        {isCountryClick ? (
          <View
            style={{
              marginLeft: isAndroid() ? 100 : 160,
              borderLeftWidth: 1,
              borderLeftColor: colors.borderColor,
            }}>
            {countryList !== null &&
              Object.entries(countryList).map((item, index) => {
                let [temp, code] = item[0].split('_');
                return (
                  <Pressable
                    onPress={() => getLanguageList(code)}
                    onFocus={() => setFocus(code)}
                    style={
                      code == focus
                        ? {
                            borderRadius: 20,
                            marginHorizontal: 10,
                            backgroundColor: colors.tomatoRed,
                          }
                        : {marginHorizontal: 10}
                    }>
                    <Text
                      style={{
                        fontFamily: primary_regular_font.primary_regular_font,
                        fontSize: isAndroid() ? 16 : 30,
                        fontWeight: '400',
                        color: code == focus ? colors.white : colors.black,
                      }}>
                      {item[1]}
                    </Text>
                  </Pressable>
                );
              })}
            {/* {country.map((item, index) => {
              return (
                <Pressable
                  onPress={props.onclose}
                  onFocus={() => setFocus(item.id)}
                  style={
                    item.id == focus
                      ? {
                          borderRadius: 20,
                          marginHorizontal: 10,
                          backgroundColor: colors.tomatoRed,
                        }
                      : {marginHorizontal: 10}
                  }>
                  <Text
                    style={{
                      fontFamily: primary_regular_font.primary_regular_font,
                      fontSize: isAndroid() ? 16 : 30,
                      fontWeight: '400',
                      color: item.id == focus ? colors.white : colors.black,
                    }}>
                    {t(item.name)}
                  </Text>
                </Pressable>
              );
            })} */}
          </View>
        ) : null}
      </View>
    </ScrollView>
    //     </View>
    // </BaseModal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTranslateFile,
      getLanguageList,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(TVCountryLanguage);
