import React, {useState, useEffect, useCallback} from 'react';

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
import StyleConfig from '../../helper/StyleConfig';
import AppImages from '../../assets';
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';
import primary_regular_font from '../../helper/fonts';
import i18next from 'i18next';
import i18n from 'i18next';
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {WIDTH} from '../../helper/globalFunctions';

const isAndroid = () => {
  return Platform.OS == 'android';
};
const styles = StyleSheet.create({
  whiteStyle: {
    paddingStart: StyleConfig.resWidth(20),
    maxWidth: WIDTH * StyleConfig.resWidth(0.22),
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? StyleConfig.resWidth(30) : StyleConfig.resWidth(30),
    fontWeight: '400',
    color: colors.white,
  },
  blackStyle: {
    paddingStart: StyleConfig.resWidth(20),
    maxWidth: WIDTH * StyleConfig.resWidth(0.22),
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? StyleConfig.resWidth(30) : StyleConfig.resWidth(30),
    fontWeight: '400',
    color: colors.black,
  },
  tomatoStyle: {
    paddingStart: StyleConfig.resWidth(20),
    maxWidth: WIDTH * StyleConfig.resWidth(0.22),
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? StyleConfig.resWidth(30) : StyleConfig.resWidth(30),
    fontWeight: '400',
    color: colors.tomatoRed,
  },
  backWrap: {
    paddingHorizontal: isAndroid()
      ? StyleConfig.resWidth(0)
      : StyleConfig.resWidth(8),
    paddingVertical: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resHeight(4),
    margin: isAndroid() ? StyleConfig.resWidth(0) : StyleConfig.resWidth(4),
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resWidth(8),
    paddingVertical: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resHeight(4),
    margin: isAndroid() ? StyleConfig.resWidth(0) : StyleConfig.resWidth(4),
    borderRadius: StyleConfig.resWidth(10),
  },
  selectedText: {
    fontSize: isAndroid() ? 12 : 32,
    fontWeight: '700',
    color: colors.tomatoRed,
    fontFamily: primary_regular_font.primary_regular_font,
  },
});

const TVCountryModal = (props) => {
  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [countryList, setCountryList] = useState(null);

  const {t} = useTranslation();
  //  const [selected, setSelected] = useState();

  // const [ data, setData] = useState([])

  const onPressClick = (val) => {
    val.selected = true;
    console.log('onPressClick TVCountryModal***', val);
    // props.action(props.keySort);
    // //   props.onclose();
    setSelected(val);

    props.action(val);
    // props.onclose();
  };
  const onBlur = useCallback(() => {
    // console.log('onBlur  CommonFilterTvModal called***', focus);
    setFocus(-1);
  }, []);

  useFocusEffect(() => {
    let lng = i18n.language;
    let countryData = i18next.getDataByLanguage(lng);
    let countryTemp = countryData?.translation?.countries_listed;
    countryTemp && setCountryList(countryTemp);
  });

  const onTileViewFocus = (val) => {
    console.log('val', val);
    props.onclose();
    // setShowSelected(true)
    // sidebar.current.setResetFocus()
  };

  return (
    <CommonFilterTvModal
      visible={props?.visible}
      oncloseModal={props.oncloseModal}
      onclose={props?.onclose}
      title={t('texts.id_137')}
      titleId={'country_of_origin'}>
      {/* <ScrollView style={{margin: StyleConfig.resWidth(15)}}> */}
        {countryList !== null &&
          Object.entries(countryList).map((item, index) => {
            let [temp, code] = item[0].split('_');
            return (
              <Pressable
                onBlur={onBlur}
                onPress={() => onPressClick(item)}
                onFocus={() => setFocus(code)}
                style={code == focus ? styles.focusBackWrap : styles.backWrap}>
                <Text
                  numberOfLines={1}
                  style={
                    code == focus
                      ? styles.whiteStyle
                      : item.selected
                      ? styles.tomatoStyle
                      : styles.blackStyle
                  }>
                  {/* <Text
                  style={{
                    paddingStart: StyleConfig.resWidth(20),
                    maxWidth: WIDTH * StyleConfig.resWidth(0.22),
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: isAndroid()
                      ? StyleConfig.resWidth(30)
                      : StyleConfig.resWidth(30),
                    fontWeight: '400',
                    color:
                      code == focus
                        ? colors.white
                        : item.selected
                        ? colors.tomatoRed
                        : // : styles.text
                          colors.black,
                  }}> */}
                  {item[1]}
                </Text>
              </Pressable>
            );
          })}
      {/* </ScrollView> */}
    </CommonFilterTvModal>
  );
};

export default TVCountryModal;
