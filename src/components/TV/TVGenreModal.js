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

const styles = StyleSheet.create({
  backWrap: {
    paddingHorizontal: StyleConfig.resWidth(8),
    paddingVertical: StyleConfig.resHeight(4),
    margin: 4,
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRedLight,
    paddingHorizontal: StyleConfig.resWidth(8),
    paddingVertical: StyleConfig.resHeight(4),
    margin: 4,
    borderRadius: 10,
  },
});
const isAndroid = () => {
  return Platform.OS == 'android';
};
const TVGenreModal = (props) => {
  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState([]);

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
      title={strings.genre}>
      <ScrollView>
        <View style={{marginStart: 10, flexDirection: 'row'}}>
          <ToggleSwitch size="small" disabled isOn={true} />
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: primary_regular_font.primary_regular_font,
              fontSize: isAndroid() ? 15 : 30,
              fontWeight: '400',
              color: colors.black,
            }}>
            Sub generes
          </Text>
        </View>
        {data.map((item, index) => {
          return (
            <Pressable
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
              {/* <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize:30,fontWeight:'400', padding:8,paddingHorizontal:15, color: item.id == focus ? colors.white : colors.black}}>{item.generes}</Text> */}
              <Text
                style={{
                  fontFamily: primary_regular_font.primary_regular_font,
                  fontSize: isAndroid() ? 15 : 30,
                  fontWeight: '400',
                  color: item.id == focus ? colors.white : colors.black,
                }}>
                {item.generes}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </CommonFilterTvModal>
  );
};

export default TVGenreModal;
