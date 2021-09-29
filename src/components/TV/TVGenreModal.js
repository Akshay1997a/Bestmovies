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

const TVGenreModal = (props) => {
  const {t} = useTranslation();

  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState([]);
  const onPressClick = (val) => {
    val.selected = true;
    console.log('onPressClick TVCountryModal***', val);
    props.action(props.keySort);
    //   props.onclose();
    setSelected(val);
  };
  useEffect(() => {
    async function fetchData() {
      fetch('https://60cde54091cc8e00178dc16b.mockapi.io/generes')
        .then((res) => res.json())
        .then((resJson) => {
          setData(resJson);
        })
        .catch((e) => console.log(e));
    }
    fetchData();
  }, []);

  return (
    <CommonFilterTvModal
      visible={props?.visible}
      oncloseModal={props.oncloseModal}
      onclose={props?.onclose}
      title={t('texts.id_127')}
      titleId={'genres'}>
      <ScrollView>
        <View style={{marginStart: 10, flexDirection: 'row'}}>
          <ToggleSwitch size="small" disabled isOn={true} />
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
              onFocus={() => setFocus(item.id)}
              style={item.id == focus ? styles.focusBackWrap : styles.backWrap}>
              <Text
                numberOfLines={1}
                style={{
                  maxWidth: WIDTH * 0.25,
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
                {item.generes}
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
