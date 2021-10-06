import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import TVToggle from '../TV/TVToggle';

import colors from '../../helper/colors';
import strings from '../../helper/strings';
import StyleConfig from '../../helper/StyleConfig';
import AppImages from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import primary_regular_font from '../../helper/fonts';
import {useTranslation} from 'react-i18next';
import transConstants from '../../helper/transConstants';
import {WIDTH} from '../../helper/globalFunctions';

const ICON_SIZE = 24;
let [
  NONE,
  SORT_BY,
  LIKEDBY,
  STRREAMING,
  RELEASE,
  GENRE,
  COUNTRY,
  AGES,
  PRICE,
  INCLUDES,
  PROVIDERS,
] = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let [SEARCH, MY_LIST, MOVIES, TV_SHOW, SHORTS, DIRECTOR, ACTOR, PROFILE, MENU] =
  [0, 1, 2, 3, 4, 5, 6, 7, 8];
let [ABOUT_US, ADVERTISE, COLLABORATE, JOBS, TERMS_OF_USE, PRIVACY_POLICY] = [
  11, 12, 13, 14, 15, 16,
];
let [NOTIFICATION, FRIENDS, PREFERANCE, MY_PROVIDER, ACCOUNT, LANGUAGE] = [
  21, 22, 23, 24, 25, 26,
];

const PROFILE_DATA = [
  {
    key: NOTIFICATION,
    title: strings.notification,
  },
  {
    key: FRIENDS,
    title: strings.friends,
  },
  {
    key: PREFERANCE,
    title: strings.preferences,
  },
  {
    key: MY_PROVIDER,
    title: strings.my_provider,
  },
  {
    key: ACCOUNT,
    title: strings.account,
  },
  {
    key: LANGUAGE,
    title: strings.language,
  },
];

const MENU_DATA = [
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

const DATA = [
  {
    key: SORT_BY,
    title: 'texts.id_99',
    details: 'texts.id_101',
  },
  // {
  //   key: LIKEDBY,
  //   title: 'texts.id_160',
  //   details: '--',
  // },
  {
    key: STRREAMING,
    title: 'texts.id_144',
    // "details": "Netflix, Amazon \nPrime, HBO Max,\nApple TV+, free,\nrent/buy, theaters"
    details: 'texts.id_152',
  },
  {
    key: RELEASE,
    title: 'texts.id_114',
    details: 'texts.id_122',
  },
  {
    key: GENRE,
    title: 'texts.id_127',
    details: transConstants.genres_comedy,
    // transConstants.genres_comedy_romance,
    // 'code_co,Romantic',
  },
  {
    key: COUNTRY,
    title: 'texts.id_137',
    details: 'texts.id_172',
  },
  {
    key: AGES,
    title: 'texts.id_141',
    details: '15+',
  },

  {
    key: PRICE,
    title: 'texts.id_158',
    details: 'texts.id_172',
  },
  {
    key: 'Arrow',
    title: 'texts.id_158',
    details: 'texts.id_172',
  },
];

const BACK_DATA = [
  {
    key: 'BackArrow',
    title: 'texts.id_158',
    details: 'texts.id_172',
  },
  {
    key: RELEASE,
    title: 'texts.id_114',
    details: 'texts.id_122',
  },
  {
    key: GENRE,
    title: 'texts.id_127',
    details: transConstants.genres_comedy,
  },
  {
    key: COUNTRY,
    title: 'texts.id_176',
    details: 'texts.id_172',
  },
  {
    key: AGES,
    title: 'texts.id_141',
    details: '15+,Romantic',
  },

  {
    key: PRICE,
    title: 'texts.id_158',
    details: 'texts.id_172',
  },

  {
    key: INCLUDES,
    title: 'texts.id_170',
    details: 'texts.id_171',
  },
  {
    key: PROVIDERS,
    title: 'texts.id_111',
    details: '  ',
  },
  // {
  //     "key": THEATERS,
  //     "title": strings.theaters,
  // },{
  //     "key": THREERENT,
  //     "title": strings.three_rent,
  // },{
  //     "key": ALLFREE,
  //     "title": strings.all_free,
  // },
];
const TVSideBar = forwardRef(({selected, onChangeSelected, ...props}, ref) => {
  console.log(' TVSideBar selected Top', selected == 'sort');

  const {t} = useTranslation();

  const BackArrow = forwardRef(({item}, ref) => {
    // console.log('keu',item);
    return (
      <View>
        {item.key == INCLUDES ? null : (
          <View
            style={
              focus == item.key
                ? styles.itemWrapperSelected
                : styles.itemWrapper
            }>
            <Icon name={'chevron-left'} size={40} color={'gray'} style={[{}]} />
          </View>
        )}
      </View>
    );
  });

  const [focus, setFocus] = useState(props.focus === 20 ? NONE : 1);
  const [isScroll, setIsScroll] = useState(false);
  console.log('props headerSelected >>>', props.topSelected);

  if (props.focus === 20) {
    // console.log('OnFocus TVTopBar***',props);
    // setFocus(NONE);
  }

  const onFocus = useCallback((val) => {
    // props.reduxSetCurrFocus(val)
    props.reduxSetCurrFocus('top');

    console.log('onFocus TVBar***');

    setFocus(val);
  });

  const getData = async () => {
    try {
      // const value = await AsyncStorage.getItem('@storage_Key')

      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const onPressClick = (val) => {
    val.selected = true;
    console.log('onPressClick TVSideBar******', val);
    if (val.key === 'Arrow') {
      setIsScroll(true);
    } else {
      setIsScroll(false);
      onChangeSelected(val.key);
    }
  };

  const onBlur = useCallback(() => {
    // console.log('onBlur TVSideBar***');
    setFocus(-1);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      setResetFocus() {
        setFocus(NONE);
      },
      setChangeFocus(val) {
        setFocus(val);
      },
    }),
    // console.log(isScroll)
  );
  useEffect(() => {
    // console.log('focus');
  }, []);
  const callgetData = () => {
    // console.log('hi');
    // setFocus(NONE);
  };
  // console.log(props.headerSelected, MENU_DATA)
  return (
    <>
      {props.headerSelected == PROFILE ? (
        <View style={styles.container}>
          {PROFILE_DATA.map((item, index) => {
            return (
              <Pressable
                key={item.key}
                onFocus={() => onFocus(item.key)}
                onBlur={onBlur}
                onPress={() => onChangeSelected(item.key)}
                tvParallaxProperties={{magnification: 1.1}}
                style={
                  focus == item.key
                    ? styles.itemWrapperSelected
                    : styles.itemWrapper
                }>
                <Text
                  style={
                    focus == item.key
                      ? styles.focusTextTitle
                      : selected == 'sort'
                      ? styles.focusText
                      : styles.text
                  }>
                  {item.title}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ) : props.headerSelected == MENU ? (
        <View style={styles.container}>
          {/* {MENU_DATA.map((item, index) => {
                    return (
                        <Pressable
                            key={item.key}
                            onFocus={() => onFocus(item.key)}
                            onBlur={onBlur}
                            onPress={() => onChangeSelected(item.key)}
                            tvParallaxProperties={{ magnification: 1.1 }}
                            style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                              <Text style={focus == item.key ? styles.focusTextTitle : styles.text}>{item.title}</Text>

                        </Pressable>
                    )
                })} */}
        </View>
      ) : (
        <ScrollView onBlur={onBlur} horizontal={true}>
          <View style={styles.container}>
            {isScroll
              ? BACK_DATA.map((item, index) => {
                  return (
                    <View
                      style={[
                        {
                          width: item.key === 'BackArrow' ? 60 : WIDTH * 0.135,
                        },
                      ]}>
                      <Pressable
                        key={item.key}
                        onFocus={() => onFocus(item.key)}
                        onPress={() => onPressClick(item)}
                        tvParallaxProperties={{magnification: 1.1}}
                        // style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper}
                      >
                        {item.key === 'BackArrow' ? (
                          <BackArrow item={item} />
                        ) : (
                          <View style={{marginLeft: 20, flexDirection: 'row'}}>
                            <View style={{marginRight: 90}}>
                              <View
                                style={
                                  focus == item.key
                                    ? styles.itemWrapperSelected
                                    : styles.itemWrapper
                                }>
                                {item.key === INCLUDES ? (
                                  <View style={{flexDirection: 'row'}}>
                                    <TVToggle />
                                    <Text
                                      numberOfLines={1}
                                      style={
                                        focus == item.key
                                          ? styles.focusTextTitle
                                          : styles.textTitle
                                      }>
                                      {t(item.title)}
                                    </Text>
                                  </View>
                                ) : (
                                  <Text
                                    numberOfLines={1}
                                    style={
                                      focus == item.key
                                        ? styles.focusTextTitle
                                        : styles.textTitle
                                    }>
                                    {t(item.title)}
                                  </Text>
                                )}
                              </View>
                              {item.key === INCLUDES ? (
                                <View style={{flexDirection: 'row'}}>
                                  <TVToggle />
                                  <Text
                                    numberOfLines={1}
                                    style={
                                      focus == item.key
                                        ? styles.focusTextTitle
                                        : styles.textTitle
                                    }>
                                    {t(item.details)}
                                  </Text>
                                </View>
                              ) : (
                                <Text numberOfLines={1} style={styles.text}>
                                  {t(item.details)}
                                </Text>
                              )}
                            </View>
                            {/* <View style={{marginLeft:20,flexDirection:'row',borderWidth:1}}>
              <Text style={{alignSelf: 'flex-end'}}>Hi!</Text>
            </View> */}
                            <View>
                              {item.title === ' Clear filters' ? (
                                <View style={{marginRight: 80}}></View>
                              ) : (
                                // <Image style={{ marginLeft:-80, width: StyleConfig.resWidth(30),
                                //     borderColor:'red',
                                //        height: StyleConfig.resHeight(30),}} source={AppImages.arrow_right} />
                                <View style={styles.verticleLine}></View>
                              )}
                            </View>
                          </View>
                        )}
                      </Pressable>
                    </View>
                  );
                })
              : DATA.map((item, index) => {
                  return (
                    <View
                      style={[
                        {
                          width: item.key === 'Arrow' ? 60 : WIDTH * 0.135,
                        },
                      ]}>
                      <Pressable
                        key={item.key}
                        onFocus={() => onFocus(item.key)}
                        onPress={() => onPressClick(item)}
                        tvParallaxProperties={{magnification: 1.1}}
                        style={[{flexGrow: 1, justifyContent: 'center'}]}
                        // style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper}
                      >
                        {item.key === 'Arrow' ? (
                          <View
                            style={[
                              focus == item.key
                                ? styles.itemWrapperSelected
                                : styles.itemWrapper,
                              {},
                            ]}>
                            <Image
                              style={{
                                width: StyleConfig.resWidth(30),
                                borderColor: 'red',
                                height: StyleConfig.resHeight(30),
                              }}
                              source={AppImages.arrow_right}
                            />
                          </View>
                        ) : (
                          <View
                            style={{
                              // marginLeft: 20,
                              flex: 1,
                              // paddingHorizontal: 20,
                              alignItems: 'center',
                              flexDirection: 'row',
                            }}>
                            <View
                              style={{
                                // marginRight: isAndroid() ? 25 : 75,
                                flex: 1,
                                justifyContent: 'center',
                                marginHorizontal: 25,
                              }}>
                              <View
                                style={
                                  [
                                    props.focus === 'top' && focus == item.key
                                      ? styles.itemWrapperSelected
                                      : styles.itemWrapper,
                                  ]
                                  //     props.focus === 90 ?
                                  //     styles.itemWrapper :
                                  //   focus == item.key
                                  // ? styles.itemWrapperSelected : styles.itemWrapper
                                }>
                                <Text
                                  numberOfLines={1}
                                  style={
                                    (props.focus === 'top') &
                                    (focus == item.key)
                                      ? styles.focusTextTitle
                                      : item.selected
                                      ? //  props.topSelected == item.key ?
                                        styles.focusText
                                      : styles.textTitle
                                  }>
                                  {t(item.title)}
                                </Text>
                              </View>
                              <Text numberOfLines={1} style={styles.text}>
                                {t(item.details)}
                              </Text>
                            </View>
                            {/* <View style={{marginLeft:20,flexDirection:'row',borderWidth:1}}>
              <Text style={{alignSelf: 'flex-end'}}>Hi!</Text>
            </View> */}
                            <View>
                              {item.title === 'Price' ? null : (
                                // <Image style={{ marginLeft:-80, width: StyleConfig.resWidth(30),
                                //     borderColor:'red',
                                //        height: StyleConfig.resHeight(30),}} source={AppImages.arrow_right} />
                                <View style={styles.verticleLine}></View>
                              )}
                            </View>
                          </View>
                        )}
                      </Pressable>
                    </View>
                  );
                })}
          </View>
        </ScrollView>
      )}
    </>
  );
});

export default TVSideBar;
const isAndroid = () => {
  return Platform.OS == 'android';
};

const styles = StyleSheet.create({
  verticleLine: {
    height: '80%',
    width: 1,
    backgroundColor: '#909090',
    alignSelf: 'center',
  },
  container: {
    // backgroundColor: 'red',
    flex: 1,
    backgroundColor: colors.lightGrey,
    height: isAndroid() ? 40 : 90,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderRadius: 10,
    marginStart: 10,
  },
  itemWrapperSelected: {
    backgroundColor: colors.tomatoRed,
    borderRadius: 10,
    padding: 5,
    // marginRight:-80,
  },
  itemWrapper: {
    // marginRight: -80,
  },
  text: {
    fontSize: isAndroid() ? 12 : 24,
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '400',
    textAlign: 'left',
  },
  focusText: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '900',
    fontSize: isAndroid() ? 12 : 24,
    color: colors.tomatoRed,
    textAlign: 'left',
    // width:   250
  },
  textTitle: {
    color: colors.black,
    fontSize: isAndroid() ? 12 : 24,
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '700',
    textAlign: 'left',
  },
  focusTextTitle: {
    fontSize: isAndroid() ? 12 : 24,
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'left',
  },
});
