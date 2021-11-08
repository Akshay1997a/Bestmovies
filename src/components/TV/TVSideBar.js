import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import axios from 'axios';
import {View, Pressable, StyleSheet, Text, Image, Platform} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../../helper/colors';
import strings from '../../helper/strings';
import StyleConfig from '../../helper/StyleConfig';
import TVCountryLanguage from '../TV/TVCountryLanguage';
import primary_regular_font from '../../helper/fonts';
import Const from '../../helper/constants';
import {useTranslation} from 'react-i18next';
import {HEIGHT, WIDTH} from '../../helper/globalFunctions';
import AppImages from '../../assets';
import {
  getLanguageData,
  getLanguageList,
  getTranslateFile,
  getStaticData,
} from '../../network/requests';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const ICON_SIZE = 24;
let [
  NONE,
  SORT_BY,
  RELEASE,
  GENRE,
  COUNTRY,
  AGES,
  PRICE,
  INCLUDES,
  PROVIDERS,
  THEATERS,
  THREERENT,
  ALLFREE,
  LIKEDBY,
] = [-1, 0, 1, 2, 3, 4, 5, 6, 7];
let [SEARCH, MY_LIST, MOVIES, TV_SHOW, SHORTS, DIRECTOR, ACTOR, PROFILE, MENU] =
  [0, 1, 2, 3, 4, 5, 6, 7, 8];
let [
  COUNTRY_LANGUAGE,
  MOBILE_APP,
  INVITE_FRIEND,
  ABOUT_US,
  ADVERTISE,
  COLLABORATE,
  JOBS,
  TERMS_OF_USE,
  PRIVACY_POLICY,
] = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let [NOTIFICATION, FRIENDS, PREFERANCE, MY_PROVIDER, ACCOUNT, LANGUAGE] = [
  21, 22, 23, 24, 25, 26,
];
const ADVERTISE_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.advertise} : item,
);
const COLLABORATE_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.collaborate} : item,
);
const JOBS_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.jobs} : item,
);
const TERMS_OF_USE_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.terms_of_use} : item,
);
const PRIVACY_POLICY_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.privacy_policy} : item,
);

const MENU_DATA = [
  // {
  //   key: COUNTRY_LANGUAGE,
  //   title: strings.country_language,
  // },
  // {
  //   key: MOBILE_APP,
  //   title: 'texts.id_16',
  // },
  // {
  //   key: INVITE_FRIEND,
  //   title: 'texts.id_18',
  // },
  {
    key: ABOUT_US,
    title: strings.about_us,
  },
  // {
  //   key: ADVERTISE,
  //   title: strings.advertise,
  // },
  // {
  //   key: COLLABORATE,
  //   title: strings.collaborate,
  // },
  // {
  //   key: JOBS,
  //   title: strings.jobs,
  // },
  // {
  //   key: TERMS_OF_USE,
  //   title: strings.terms_of_use,
  // },
  {
    key: PRIVACY_POLICY,
    title: strings.privacy_policy,
  },
];
const TVSideBar = forwardRef(({onChangeSelected, ...props}, ref) => {
  console.log('props>>>', props);

  const {t} = useTranslation();

  const [focus, setFocus] = useState(NONE);
  const [key, setKey] = useState(0);
  const [selected, setSelected] = useState(0);
  const [aboutUs, setAboutUsData] = useState(null);

  const [terms_of_use, setTerms] = useState(null);

  const onFocus = useCallback((val) => {
    console.log('onFocus TVSideBar>>>', val);
    if (val == 12) {
      // getAboutUsData();
    }
    // props.reduxSetCurrFocus('menu');

    setFocus(val);
  });
  const onBlur = useCallback(() => {
    console.log('onBlur  CommonFilterTvModal called***', focus);
    // setFocus(-1);
  }, []);
  const onPressHandle = (val) => {
    setKey(val);
    setSelected(val);
    // setFocus(val);
    // onChangeSelected(val.key);

  };
  const getAboutUsData = () => {
    props.getTranslateFile(
      (res) => {
        console.log('Response from translate api', Object.keys(res));
        let data = Object.keys(res.static_pages);
        let slug = res.language === 'en' ? data[0] : data[1];
        axios
          .get('http://18.119.119.183:3002/static-pages?device=tv&slug=' + slug)
          .then(function (response) {
            // handle success
            setAboutUsData(response.data.data.static_pages);

            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        let slug1 = res.language === 'en' ? data[1] : data[2];

        axios
          .get('http://18.119.119.183:3002/static-pages?device=tv&slug=' + slug1)
          .then(function (response) {
            // handle success
            setTerms(response.data.data.static_pages);

            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        // runTimeTranslations(res, res?.language);
      },
      (err) => {
        console.log('Error from translate file', err);
      },
    );
  };
  useImperativeHandle(ref, () => ({
    setResetFocus() {
      setFocus(NONE);
    },
    setChangeFocus(val) {
      setFocus(val);
    },
  }));

  useEffect(() => {
    // props.getStaticData('dat').then(){
    //   setAboutUsData(res.data.static_pages);
    // })
    // let data = res;
    // });
  }, []);
  console.log(props.headerSelected, MENU_DATA);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: StyleConfig.resWidth(20),
          // marginTop: StyleConfig.resWidth(20),
          // borderWidth:1,
        }}>
        <View style={[styles.container]}>
          {MENU_DATA.map((item, index) => {
            return (
              <View
                key={index}
                style={[{width: isAndroid() ? WIDTH * 0.15 : WIDTH * 0.28}]}>
                <Pressable
                  key={item.key}

                  onFocus={() => {
                    onFocus(item.key);
                    onPressHandle(item.key);
                  }}
                  // onBlur={onBlur}
                  // onPress={() => onPressHandle(item.key)}
                  // tvParallaxProperties={{magnification: 1.1}}
                  style={
                    focus == item.key
                      ? styles.itemWrapperSelected
                      : styles.itemWrapper
                  }>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={
                      focus == item.key
                        ? styles.focusText
                        : selected == item.key
                        ? styles.selectedText
                        : styles.text
                    }>
                    {t(item.title)}
                  </Text>
                  {/* <Text style={focus == item.key ? styles.focusTextTitle : styles.text}>'hi'</Text> */}
                </Pressable>
              </View>
            );
          })}
        </View>

        </View>
    </>
  );
});
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

export default connect(null, mapDispatchToProps)(TVSideBar);

// export default TVSideBar;
const isAndroid = () => {
  return Platform.OS == 'android';
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // borderWidth:1,
    marginTop: StyleConfig.resHeight(30),
    height: HEIGHT,
    marginEnd: StyleConfig.resWidth(10),

  },
  itemWrapperSelected: {
    // marginHorizontal:10,
    marginVertical:StyleConfig.resHeight(10),
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: isAndroid()
      ? StyleConfig.resWidth(15)
      : StyleConfig.resWidth(8),
    paddingVertical: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resHeight(4),
    paddingStart: StyleConfig.resHeight(10),
    borderRadius: StyleConfig.resWidth(5),
  },
  itemWrapper: {
    // backgroundColor: colors.tomatoRed,
    // marginHorizontal:10,
    marginVertical:StyleConfig.resHeight(10),
    paddingHorizontal: isAndroid()
      ? StyleConfig.resWidth(15)
      : StyleConfig.resWidth(8),
    paddingVertical: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resHeight(4),
    paddingStart: StyleConfig.resHeight(10),
    borderRadius: StyleConfig.resWidth(10),
  },
  text: {
    width: StyleConfig.resWidth(250),
    color: colors.black,
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_regular_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_light_font,
      },
    }),
  },
  selectedText: {
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '700',
    color: colors.tomatoRed,
    fontFamily: primary_regular_font.primary_regular_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
  },
  focusText: {
    fontSize: StyleConfig.resWidth(28),
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    // paddingLeft: 10,
  },
  textTitle: {
    fontSize: StyleConfig.resWidth(28),

    fontWeight: '700',
    fontFamily: primary_regular_font.primary_regular_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
  },
  focusTextTitle: {
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '700',
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
  },
  textSelected: {
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
  },
  aboutUsImg: {
    height: isAndroid() ? StyleConfig.resWidth(300) : 400,
    width: WIDTH - 160,
    borderRadius: StyleConfig.resWidth(20),
    // marginTop: 20,
  },
  aboutUsTitle: {
    fontSize: StyleConfig.resWidth(40),
    fontWeight: '700',
    color: colors.tomatoRed,
    fontFamily: primary_regular_font.primary_regular_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    // fontSize: isAndroid() ? 20 : 40,
    // fontWeight: '700',
    lineHeight:  StyleConfig.resHeight(62),
    // color: colors.tomatoRed,
    // marginTop: 30,
    // maxWidth: 500,
    // // width: StyleConfig.width - StyleConfig.resWidth(250),
    // fontFamily: primary_regular_font.primary_regular_font,
  },
  aboutUsSubTitle: {
    fontSize: StyleConfig.resWidth(32),
    fontWeight: '700',
    lineHeight: StyleConfig.resHeight(42),
    maxWidth: 1500,
    color: colors.black33,
    // marginVertical: 8,
    // width: StyleConfig.width - StyleConfig.resWidth(250),
    fontFamily: primary_regular_font.primary_regular_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
  },
  aboutUsDetail: {
    fontSize: StyleConfig.resWidth(26),
    fontWeight: '400',
    lineHeight: StyleConfig.resHeight(60),
    color: colors.black33,
    // marginVertical: 8,
    // width: StyleConfig.width - StyleConfig.resWidth(250),
    fontFamily: primary_regular_font.primary_regular_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
});
