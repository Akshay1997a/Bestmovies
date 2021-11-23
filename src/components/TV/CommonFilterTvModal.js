import React, {useState, useCallback} from 'react';

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
import primary_regular_font from '../../helper/fonts';
import {HEIGHT, WIDTH} from '../../helper/globalFunctions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const DATA = [
  {id: 0, name: 'Quality'},
  {id: 1, name: 'Match'},
  {id: 2, name: "Friend's Like"},
  {id: 3, name: 'Popularity'},
];

const isAndroid = () => {
  return Platform.OS == 'android';
};

const heightLayout = (title) => {
  // console.log('titi',title)
  if (title === 'sort_by') {
    return isAndroid() ? 130 : 250;
  } else if (title === 'liked_by') {
    return isAndroid() ? 300 : 600;
  } else if (title === 'age_rating') {
    return isAndroid() ? 250 : 600;
  } else if (title === 'release_year') {
    return isAndroid() ? 250 : 500;
  } else if (title === 'country_of_origin') {
    return isAndroid() ? 500 : 1000;
  } else if (title === 'genres') {
    return isAndroid() ? 300 : 500;
  } else if (title === 'price') {
    return isAndroid() ? 250 : 600;
  } else if (title === 'Providers') {
    // return isAndroid() ? 300 : 500;
  } else {
    return 500;
  }
};

const styles = StyleSheet.create({
  backWrap: {
    paddingHorizontal: StyleConfig.resWidth(10),
    paddingVertical: StyleConfig.resHeight(8),
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: StyleConfig.resWidth(10),
    paddingVertical: StyleConfig.resHeight(8),
    borderRadius: StyleConfig.resWidth(20),
  },
  highlightFocused: {
    height: 25,
    width: 15,
  },
  notHighlightFocused: {
    height: 100,
    width: 100,
  },
});

const CommonFilterTvModal = (props) => {
  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(DATA);
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => {
    console.log('OnFocus CommonFilterTvModal called***', focus);
    setFocus(-1);
    setIsFocus(false);
    props.reduxSetCurrFocus('commonFilterTvModal');

  }, [0]);

  const onBlur = useCallback(() => {
    console.log('onBlur  CommonFilterTvModal called***', focus);
    setFocus(-1);
    props.reduxSetCurrFocus('remove');

  }, []);
  // useEffect(() => {

  //     async function fetchData() {
  //         fetch('https://60cde54091cc8e00178dc16b.mockapi.io/generes')
  //         .then(res => res.json())
  //         .then(resJson => {
  //             setData(resJson)
  //         }).catch(e => console.log(e));
  //     }

  //     fetchData();
  //   }, [])
  return (
    <BaseModal visible={props?.visible} oncloseModal={props.oncloseModal}>
      <View
        style={{
          minWidth:
            Platform.OS==='ios' && props.titleId == 'id_99'
              ? StyleConfig.resWidth(700)
              : props.titleId == 'id_114'
              ? StyleConfig.resWidth(700)
              : props.titleId == 'id_127'
              ? StyleConfig.resWidth(700)
              : props.titleId == 'id_137'
              ? StyleConfig.resWidth(700)
              : props.titleId == 'id_141'
              ? StyleConfig.resWidth(700)
              : props.titleId == 'id_158'
              ? StyleConfig.resWidth(700)
              : props.titleId == 'id_140'
              ? StyleConfig.resWidth(700)
              : props.titleId == 'From'
              ? StyleConfig.resWidth(500)
              : 200,
          height:
           Platform.OS==='ios' && props.titleId == 'id_99'
              ? HEIGHT * 0.3
              : props.titleId == 'id_114'
              ? HEIGHT * 0.67
              : props.titleId == 'id_127'
              ? HEIGHT * 0.8
              : props.titleId == 'id_137'
              ? HEIGHT * 0.9
              : props.titleId == 'id_141'
              ? HEIGHT * 0.8
              : props.titleId == 'id_158'
              ? HEIGHT * 0.6
              : props.titleId == 'id_140'
              ? HEIGHT * 0.8
              : props.titleId == 'From'
              ? HEIGHT * 0.6
              : 200,
              // width:StyleConfig.resWidth(600),
              // height:StyleConfig.resHeight(302),

          // : HEIGHT * 0.9,
          backgroundColor: colors.white,
          // maxHeight: heightLayout(props.title),
          borderRadius: StyleConfig.resWidth(20),
          paddingVertical: 10,
          paddingStart: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Pressable
            onBlur={onBlur}
            onFocus={onFocus}
            onPress={props.onclose}
            style={({pressed, hovered, focused}) =>
              focused ? styles.focusBackWrap : styles.backWrap
            }>
            <Image source={AppImages.back_bk} style={[styles.highlightFocused,]} />
          </Pressable>
          <Text
          ellipsizeMode='tail'
            numberOfLines={1}
            style={{
              fontFamily: primary_regular_font.primary_bold_font,
              fontSize: StyleConfig.resWidth(34),
              fontWeight: '700',
              lineHeight:48,
              // ...Platform.select({
              //   android: {
              //     fontFamily: primary_bold_font.primary_light_font,
              //   },
              // }),
              width:StyleConfig.resWidth(300),
              textAlign: 'center',
              // maxWidth: WIDTH * 0.2,
            }}>
            {props?.title}
          </Text>
          <View style={{width: StyleConfig.resWidth(36), margin: 4,}}
           />
        </View>
        {props?.children}
      </View>
    </BaseModal>
  );
};

// export default CommonFilterTvModal;
// export default TVSortByModal;
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
  
  },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(CommonFilterTvModal);