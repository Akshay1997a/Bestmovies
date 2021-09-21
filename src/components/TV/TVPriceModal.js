import React, {useState, useEffect} from 'react';
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

const DATA = [
  {id: 0, name: 'Any'},
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
  backWrap: {
    paddingHorizontal: isAndroid() ? 0 : StyleConfig.resWidth(8),
    paddingVertical: isAndroid() ? 0 : StyleConfig.resHeight(4),
    margin: isAndroid() ? 0 : 4,
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: isAndroid() ? 0 : StyleConfig.resWidth(8),
    paddingVertical: isAndroid() ? 0 : StyleConfig.resHeight(4),
    margin: isAndroid() ? 0 : 4,
    borderRadius: 10,
  },
});

const TVPriceModal = (props) => {
  const {t} = useTranslation();

  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(DATA);

  const onPressClick = (val) => {
    val.selected = true;
    console.log('onPressClick TVAgesModal***', val);
    props.action(props.keySort);
    // props.visible = true;

    //   props.onclose();
    setSelected(val);
  };

  return (
    <CommonFilterTvModal
      visible={props?.visible}
      oncloseModal={props.oncloseModal}
      onclose={props?.onclose}
      title={strings.price}
      titleId={'price'}>
      <ScrollView>
        {data.map((item, index) => {
          return (
            <Pressable
              onPress={() => onPressClick(item)}
              onFocus={() => setFocus(item.id)}
              style={item.id == focus ? styles.focusBackWrap : styles.backWrap}>
              <Text
                style={{
                  fontFamily: primary_regular_font.primary_regular_font,
                  fontSize: isAndroid() ? 15 : 30,
                  fontWeight: '400',
                  color:
                    item.id == focus
                      ? colors.white
                      : item.selected
                      ? colors.tomatoRed
                      : colors.black,
                }}>
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
