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
import ToggleSwitch from 'toggle-switch-react-native';
import colors from '../..//helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import AppImages from '../../assets';
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';
import primary_regular_font from '../../helper/fonts';
import {useTranslation} from 'react-i18next';
import {WIDTH} from '../../helper/globalFunctions';
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

const DATA = [
  'genres.code_ac',
  'genres.code_ad',
  'genres.code_an',
  'genres.code_bi',
  'genres.code_co',
  'genres.code_cr',
  'genres.code_do',
  'genres.code_dr',
  'genres.code_fa',
  'genres.code_fi',
  'genres.code_fn',
  'genres.code_ga',
  'genres.code_hi',
  'genres.code_ho',
  'genres.code_ml',
  'genres.code_mu',
  'genres.code_my',
  'genres.code_ne',
  'genres.code_re',
  'genres.code_ro',
  'genres.code_sc',
  'genres.code_sh',
  'genres.code_sp',
  'genres.code_ta',
  'genres.code_th',
  'genres.code_wa',
  'genres.code_we',
  'genres.code_xx',
];

const TVGenreModal = (props) => {
  const {t} = useTranslation();

  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(DATA);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [toggleValue, setToggle] = useState(false);
  const [toggleBackgrpund, setToggleBackgrpund] = useState(false);

  const onPressClick = (val) => {
    // val.selected = true;
    if (selectedGenres.includes(val)) {
      let array = [...selectedGenres]; // make a separate copy of the array
      var index = array.indexOf(val);
      if (index !== -1) {
        array.splice(index, 1);
        setSelectedGenres(array);
      }
    } else {
      setSelectedGenres([...selectedGenres, val]);
    }

    console.log('onPressClick TVCountryModal***', val);
    // props.action(props.keySort);
    //   props.onclose();
    // setSelected(val);
  };

  return (
    <CommonFilterTvModal
      visible={props?.visible}
      oncloseModal={props.oncloseModal}
      onclose={props?.onclose}
      title={t('texts.id_127')}
      titleId={'genres'}>
      <ScrollView>
        <View style={{marginStart: 10, flexDirection: 'row'}}>
          <Pressable
            onPress={() => setToggle(!toggleValue)}
            onFocus={() => setToggleBackgrpund(true)}
            onBlur={() => {
              setToggleBackgrpund(false);
            }}
            style={toggleBackgrpund ? styles.focusBackWrap : styles.backWrap}>
            <ToggleSwitch
              size="small"
              isOn={toggleValue}
              onToggle={() => setToggle(!toggleValue)}
            />
          </Pressable>
          <Text
            numberOfLines={1}
            style={{
              maxWidth: WIDTH * 0.25,
              marginHorizontal: 10,
              fontFamily: primary_regular_font.primary_regular_font,
              fontSize: isAndroid() ? 15 : 30,
              fontWeight: '400',
              color: colors.black,
            }}>
            {t('texts.id_128')}
          </Text>
        </View>
        {data.map((item, index) => {
          return (
            <Pressable
              onPress={() => onPressClick(item)}
              onFocus={() => setFocus(index)}
              style={index == focus ? styles.focusBackWrap : styles.backWrap}>
              <Text
                numberOfLines={1}
                style={{
                  maxWidth: WIDTH * 0.25,
                  fontFamily: primary_regular_font.primary_regular_font,
                  fontSize: isAndroid() ? 15 : 30,
                  fontWeight: '400',
                  color:
                    index == focus
                      ? colors.white
                      : selectedGenres.includes(item)
                      ? colors.tomatoRed
                      : colors.black,
                }}>
                {t(item)}
              </Text>
              {/* <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize:30,fontWeight:'400', padding:8,paddingHorizontal:15, color: item.id == focus ? colors.white : colors.black}}>{item.generes}</Text> */}
              {/* <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid() ? 15: 30,fontWeight:'400', color: item.id == focus ? colors.white : colors.black}}>{item.generes}</Text> */}
            </Pressable>
          );
        })}
      </ScrollView>
    </CommonFilterTvModal>
  );
};

export default TVGenreModal;
