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
import {useTranslation} from 'react-i18next';
import {WIDTH} from '../../helper/globalFunctions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

const TVAgesModal = (props) => {
  const {t} = useTranslation();
  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState([
    {id:1,age:"Any"},
    {id:2,age:18},
    {id:3,age:17},
    {id:4,age:16},
    {id:5,age:15},
    {id:6,age:14},
    {id:7,age:13},
    {id:8,age:11},
    {id:9,age:9},
    {id:10,age:7},
    {id:11,age:4},
    {id:12,age:2},
  ]);
  const onPressClick = (val) => {
    val.selected = true;
    props.action(props.keySort,val);
    setSelected(val.id);
  };
  const onFocus = useCallback(() => {
    console.log('OnFocus called***');
    setFocus(0);
  }, [0]);

  const onBlur = useCallback(() => {
    console.log('onBlur called***');
    // setFocus(-1);
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     fetch('https://60cde54091cc8e00178dc16b.mockapi.io/ages')
  //       .then((res) => res.json())
  //       .then((resJson) => {
  //         console.log('age data',resJson);
  //         setData(resJson);

  //       })
  //       .catch((e) => console.log(e));
  //   }

  //   fetchData();
  // }, []);
  return (
    <CommonFilterTvModal
    {...props}

      visible={props?.visible}
      oncloseModal={props.oncloseModal}
      onclose={props?.onclose}
      title={t('texts.id_141')}>
      <ScrollView style={{margin: StyleConfig.resWidth(15)}}>
        {data.map((item, index) => {
          return (
            <Pressable
              onPress={() => onPressClick(item)}
              onFocus={() => setFocus(item.id)}
              style={  props.focus== 'remove'  && item.id == focus ? styles.focusBackWrap : styles.backWrap}>
              <Text
                numberOfLines={1}
                style={
                  props.focus== 'remove'  && item.id == focus
                    ? styles.whiteStyle
                    : item.id == selected
                    ? styles.tomatoStyle
                    : styles.blackStyle
                }>
                {item.age === 'Any'? 'Any': item.age + '+'}
              </Text>
              {/* <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid() ? 15: 30,fontWeight:'400', color: item.id == focus ? colors.white : colors.black}}>{item.ages+'+'}</Text> */}
            </Pressable>
          );
        })}
      </ScrollView>
    </CommonFilterTvModal>
  );
};

// export default TVAgesModal;
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
  
  },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(TVAgesModal);