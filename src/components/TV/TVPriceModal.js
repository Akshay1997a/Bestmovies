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
import CommonFilterTvModal from './CommonFilterTvModal';
import strings from '../../helper/strings';
import primary_regular_font from '../../helper/fonts';
import {useTranslation} from 'react-i18next';
import {WIDTH} from '../../helper/globalFunctions';

const DATA = [
  {id: 0, name: 'texts.id_172'},
  {id: 1, name: 'texts.id_159'},
  {id: 2, name: '< $1'},
  {id: 3, name: '< $2'},
  {id: 4, name: '< $3'},
  {id: 5, name: '< $4'},
  {id: 6, name: '< $5'},
  {id: 7, name: '< $6'},
  {id: 8, name: '< $7'},
  {id: 9, name: '< $9'},
  {id: 10, name: '< $10'},
  {id: 11, name: '< $11'},
];
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
});

const TVPriceModal = (props) => {
  const {t} = useTranslation();

  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(DATA);

  const onPressClick = (val) => {
    val.selected = true;
    props.action(props.keySort);
    setSelected(val.id);
  };
  const onBlur = useCallback(() => {
    // console.log('onBlur  CommonFilterTvModal called***', focus);
    setFocus(-1);
  }, []);
  return (
    <CommonFilterTvModal
      visible={props?.visible}
      oncloseModal={props.oncloseModal}
      onclose={props?.onclose}
      title={t('texts.id_158')}
      titleId={'price'}>
      <ScrollView style={{margin: StyleConfig.resWidth(15)}}>
        {data.map((item, index) => {
          return (
            <Pressable
              onBlur={onBlur}
              onPress={() => onPressClick(item)}
              onFocus={() => setFocus(item.id)}
              style={item.id == focus ? styles.focusBackWrap : styles.backWrap}>
              <Text
                numberOfLines={1}
                style={
                  item.id == focus
                    ? styles.whiteStyle
                    : item.id == selected
                    ? styles.tomatoStyle
                    : styles.blackStyle
                }>
                {t(item.name)}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </CommonFilterTvModal>
  );
};

export default TVPriceModal;
