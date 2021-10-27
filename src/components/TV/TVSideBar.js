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
  {
    key: COUNTRY_LANGUAGE,
    title: strings.country_language,
  },
  {
    key: MOBILE_APP,
    title: 'texts.id_16',
  },
  {
    key: INVITE_FRIEND,
    title: 'texts.id_18',
  },
  {
    key: ABOUT_US,
    title: strings.about_us,
  },
  {
    key: ADVERTISE,
    title: strings.advertise,
  },
  {
    key: COLLABORATE,
    title: strings.collaborate,
  },
  {
    key: JOBS,
    title: strings.jobs,
  },
  {
    key: TERMS_OF_USE,
    title: strings.terms_of_use,
  },
  {
    key: PRIVACY_POLICY,
    title: strings.privacy_policy,
  },
];
const TVSideBar = forwardRef(({onChangeSelected, ...props}, ref) => {
  console.log('props>>>', props);

  const {t} = useTranslation();

  const [focus, setFocus] = useState(NONE);
  const [key, setKey] = useState(9);
  const [selected, setSelected] = useState(9);
  const [aboutUs, setAboutUsData] = useState(null);

  const [terms_of_use, setTerms] = useState(null);

  const onFocus = useCallback((val) => {
    console.log('onFocus TVSideBar>>>', val);
    if (val == 12) {
      getAboutUsData();
    }
    // props.reduxSetCurrFocus('menu');

    // setFocus(val);
  });
  const onPressHandle = (val) => {
    setKey(val);
    setSelected(val);
    // setFocus(val);
  };
  const getAboutUsData = () => {
    props.getTranslateFile(
      (res) => {
        console.log('Response from translate api', Object.keys(res));
        let data = Object.keys(res.static_pages);
        let slug = res.language === 'en' ? data[0] : data[1];
        axios
          .get('http://3.144.9.39:3002/static-pages?device=tv&slug=' + slug)
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
          .get('http://3.144.9.39:3002/static-pages?device=tv&slug=' + slug1)
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
          marginTop: StyleConfig.resWidth(20),
          // borderWidth:1,
        }}>
        <View style={[styles.container]}>
          {MENU_DATA.map((item, index) => {
            return (
              <View key={index} style={[{width: WIDTH * 0.28}]}>
                <Pressable
                  key={item.key}
                  onFocus={() => {
                    onFocus(item.key);
                    onPressHandle(item.key);
                  }}
                  onPress={() => onPressHandle(item.key)}
                  tvParallaxProperties={{magnification: 1.1}}
                  style={[
                    focus == item.key
                      ? styles.itemWrapperSelected
                      : styles.itemWrapper,
                    {},
                  ]}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={
                      focus == item.key
                        ? styles.focusText
                        : selected == item.key
                        ? styles.selectedText
                        : styles.text

                      //  styles.focusTextTitle :
                      //   styles.text
                    }>
                    {t(item.title)}
                  </Text>
                  {/* <Text style={focus == item.key ? styles.focusTextTitle : styles.text}>'hi'</Text> */}
                </Pressable>
              </View>
            );
          })}
        </View>

        {key == COUNTRY_LANGUAGE && (
          <View style={[{}]} hasTVPreferredFocus={true}>
            <TVCountryLanguage {...props} />
          </View>
        )}
        {key == MOBILE_APP && (
          <View>
            <FlatList
              data={Const.MOBILE_APP}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={AppImages.sideBarBackground}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={[
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail,
                          ]}>
                          {t(item.data)}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
        {key == INVITE_FRIEND && (
          <View>
            <FlatList
              data={Const.INVITE}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={AppImages.sideBarBackground}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          // numberOfLines={
                          //   (item.type == 'title' || item.type == 'subtitle') &&
                          //   1
                          // }
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {t(item.data)}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}

        {key == ABOUT_US && (
          <View>
            <FlatList
              contentContainerStyle={[{}]}
              data={aboutUs}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable
                    style={{
                      // flexDirection: 'row',
                      marginRight: WIDTH * 0.21,
                    }}>
                    <>
                      {/* {item.type == 'image' ? ( */}
                      <Image
                        source={AppImages.sideBarBackground}
                        resizeMode={'stretch'}
                        style={styles.aboutUsImg}
                      />
                      {/* ) : ( */}
                      <Text
                        style={[
                          // item.name == 'About us'
                          // ?
                          styles.aboutUsTitle,
                          // : item.subtitle1
                          // ? styles.aboutUsSubTitle
                          // : styles.aboutUsDetail,
                          {
                            flexWrap: 'wrap',
                          },
                        ]}>
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          // item.name == 'About us'
                          // ?
                          styles.aboutUsSubTitle,
                          // : item.subtitle1
                          // ? styles.aboutUsSubTitle
                          // : styles.aboutUsDetail,
                          {
                            flexWrap: 'wrap',
                          },
                        ]}>
                        {item.subtitle1}
                      </Text>
                      <Text
                        style={[
                          // item.name == 'About us'
                          // ?
                          styles.aboutUsDetail,
                          // : item.subtitle1
                          // ? styles.aboutUsSubTitle
                          // : styles.aboutUsDetail,
                          {
                            flexWrap: 'wrap',
                          },
                        ]}>
                        {item.text1}
                      </Text>
                      {/* // )} */}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
        {key == ADVERTISE && (
          <View>
            <FlatList
              data={ADVERTISE}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable
                    style={{flexDirection: 'row', marginRight: WIDTH * 0.21}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={AppImages.sideBarBackground}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={[
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail,
                            {
                              flexWrap: 'wrap',
                            },
                          ]}>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
        {key == COLLABORATE && (
          <View>
            <FlatList
              data={COLLABORATE_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable
                    style={{flexDirection: 'row', marginRight: WIDTH * 0.21}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={AppImages.sideBarBackground}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
        {key == JOBS && (
          <View>
            <FlatList
              data={JOBS_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable
                    style={{flexDirection: 'row', marginRight: WIDTH * 0.21}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={AppImages.sideBarBackground}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
        {key == TERMS_OF_USE && (
          <View>
            <FlatList
              data={TERMS_OF_USE_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable
                    style={{flexDirection: 'row', marginRight: WIDTH * 0.21}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={AppImages.sideBarBackground}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
        {key == PRIVACY_POLICY && (
          <View>
            <FlatList
              data={PRIVACY_POLICY_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable
                    style={{flexDirection: 'row', marginRight: WIDTH * 0.21}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={AppImages.sideBarBackground}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
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
    height: HEIGHT,
  },
  itemWrapperSelected: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: isAndroid()
      ? StyleConfig.resWidth(8)
      : StyleConfig.resWidth(8),
    paddingVertical: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resHeight(4),
    paddingStart: StyleConfig.resHeight(15),
    // margin: isAndroid() ? StyleConfig.resWidth(10) : StyleConfig.resWidth(4),
    borderRadius: StyleConfig.resWidth(10),
  },
  itemWrapper: {
    paddingHorizontal: StyleConfig.resWidth(10),
    paddingVertical: StyleConfig.resWidth(10),
    // // paddingHorizontal: isAndroid()
    //   ? StyleConfig.resWidth(0)
    //   : StyleConfig.resWidth(8),
    // paddingVertical: isAndroid()
    //   ? StyleConfig.resWidth(2)
    //   : StyleConfig.resHeight(4),
    margin: isAndroid() ? StyleConfig.resWidth(0) : StyleConfig.resWidth(4),
  },
  text: {
    width: StyleConfig.resWidth(200),
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
    height: isAndroid() ? 200 : 400,
    width: StyleConfig.width - StyleConfig.resWidth(385),
    borderRadius: 20,
    marginTop: 20,
  },
  aboutUsTitle: {
    fontSize: isAndroid() ? 20 : 40,
    fontWeight: '700',
    lineHeight: 62,
    color: colors.tomatoRed,
    marginTop: 30,
    maxWidth: 500,
    // width: StyleConfig.width - StyleConfig.resWidth(250),
    fontFamily: primary_regular_font.primary_regular_font,
  },
  aboutUsSubTitle: {
    fontSize: isAndroid() ? 18 : 32,
    fontWeight: '700',
    lineHeight: 42,
    maxWidth: 1500,
    color: colors.black33,
    marginVertical: 8,
    // width: StyleConfig.width - StyleConfig.resWidth(250),
    fontFamily: primary_regular_font.primary_regular_font,
  },
  aboutUsDetail: {
    fontSize: isAndroid() ? 16 : 26,
    fontWeight: '400',
    lineHeight: 35,
    color: colors.black33,
    marginVertical: 8,
    // width: StyleConfig.width - StyleConfig.resWidth(250),
    fontFamily: primary_regular_font.primary_regular_font,
  },
});
