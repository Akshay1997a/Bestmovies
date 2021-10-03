import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, Pressable, StyleSheet, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../../helper/colors';
import strings from '../../helper/strings';
import StyleConfig from '../../helper/StyleConfig';
import TVCountryLanguage from '../TV/TVCountryLanguage';
import primary_regular_font from '../../helper/fonts';
import Const from '../../helper/constants';
import {useTranslation} from 'react-i18next';
import {WIDTH} from '../../helper/globalFunctions';

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

  const onFocus = useCallback((val) => {
    console.log('onFocus TVSideBar>>>', val);
    props.reduxSetCurrFocus('menu');

    setFocus(val);
  });
  const onPressHandle = (val) => {
    setKey(val);
    setSelected(val);
    // setFocus(val);
  };

  useImperativeHandle(ref, () => ({
    setResetFocus() {
      setFocus(NONE);
    },
    setChangeFocus(val) {
      setFocus(val);
    },
  }));
  console.log(props.headerSelected, MENU_DATA);
  return (
    <>
      {/* {props.headerSelected == PROFILE ? 
            <View style={styles.container}>
                {PROFILE_DATA.map((item, index) => {
                    return (
                        <Pressable
                            key={item.key}
                            onFocus={() => onFocus(item.key)}
                            onPress={() => onChangeSelected(item.key)}
                            tvParallaxProperties={{ magnification: 1.1 }}
                            style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                            <Text style={focus == item.key ? styles.focusTextTitle : styles.text}>{item.title}</Text>
                        </Pressable>
                    )
                })}

            </View> : */}

      {/* props.headerSelected == MENU ? */}
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 30,
        }}>
        <View style={[styles.container]}>
          {MENU_DATA.map((item, index) => {
            return (
              <View
                key={index}
                style={[{width: WIDTH * 0.18, marginRight: 30}]}>
                <Pressable
                  key={item.key}
                  onFocus={() => {
                    onFocus(item.key);
                    onPressHandle(item.key);
                  }}
                  onPress={() => onPressHandle(item.key)}
                  tvParallaxProperties={{magnification: 1.1}}
                  style={[
                    props.focus === 'menu' && focus == item.key
                      ? styles.itemWrapperSelected
                      : styles.itemWrapper,
                    {},
                  ]}>
                  <Text
                    numberOfLines={1}
                    style={
                      props.focus === 'menu' && focus == item.key
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
            <TVCountryLanguage {...props}></TVCountryLanguage>
            {/* <FlatList 
                data={COLLABORATE_DATA}
                keyExtractor={(item, index) => `item${index}`}
                renderItem={({item})=>{
                  return <Pressable style={{flexDirection: 'row'}}><>{item.type == "image" ? <Image source={{uri: item.data}} resizeMode={'stretch'} style={styles.aboutUsImg} /> : 
                  <Text style={item.type == "title" ? styles.aboutUsTitle : item.type == "subtitle" ? styles.aboutUsSubTitle: styles.aboutUsDetail}>{item.data}</Text>}</></Pressable>
                }}
              /> */}
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
                          source={{uri: item.data}}
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
                          source={{uri: item.data}}
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

        {key == ABOUT_US && (
          <View>
            <FlatList
              contentContainerStyle={[{}]}
              data={Const.ABOUT_US}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable
                    style={{
                      flexDirection: 'row',
                      marginRight: WIDTH * 0.21,
                    }}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
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
        {key == ADVERTISE && (
          <View>
            <FlatList
              data={ADVERTISE}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
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
        {key == COLLABORATE && (
          <View>
            <FlatList
              data={COLLABORATE_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
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
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
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
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
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
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
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
      {/* :

                <View style={styles.container}>
                    {DATA.map((item, index) => {
                        return (
                            <Pressable
                                key={item.key}
                                onFocus={() => onFocus(item.key)}
                                onPress={() => onChangeSelected(item.key)}
                                tvParallaxProperties={{ magnification: 1.1 }}
                                style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                                <Text style={focus == item.key ? styles.focusTextTitle : styles.textTitle}>{item.title}</Text>
                                <Text style={focus == item.key ? styles.focusText : styles.text}>{item.details}</Text>
                            </Pressable>
                        )
                    })}

                </View>} */}
    </>
  );
});

export default TVSideBar;
const isAndroid = () => {
  return Platform.OS == 'android';
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,

    // padding:16,
    // paddingRight: 21,
  },
  itemWrapperSelected: {
    // paddingHorizontal: isAndroid() ? 0 : 12,
    paddingVertical: isAndroid() ? 0 : 6,
    // marginHorizontal: isAndroid() ? 0 : 6,
    backgroundColor: colors.tomatoRed,
    borderRadius: 30,
    // minWidth:60,
    marginVertical: isAndroid() ? 0 : 20,
    // justifyContent:'center',
    // alignItems:'center'
  },
  itemWrapper: {
    // paddingHorizontal: isAndroid() ? 0 : 12,
    paddingVertical: isAndroid() ? 0 : 6,
    // marginHorizontal: isAndroid() ? 0 : 6,
    marginVertical: 5,
  },
  text: {
    color: colors.black,
    fontSize: isAndroid() ? 16 : 26,
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_regular_font,
  },
  selectedText: {
    fontSize: isAndroid() ? 12 : 32,
    fontWeight: '700',
    color: colors.tomatoRed,
    fontFamily: primary_regular_font.primary_regular_font,
  },
  focusText: {
    fontSize: isAndroid() ? 16 : 26,
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
    paddingLeft: 10,
  },
  textTitle: {
    fontSize: isAndroid() ? 16 : 26,
    fontWeight: '700',
    fontFamily: primary_regular_font.primary_regular_font,
  },
  focusTextTitle: {
    fontSize: isAndroid() ? 16 : 26,
    fontWeight: '700',
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
  },
  textSelected: {
    fontSize: isAndroid() ? 16 : 27,
    fontWeight: '700',
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
  },
  aboutUsImg: {
    height: isAndroid() ? 200 : 400,
    width: StyleConfig.width - StyleConfig.resWidth(250),
    borderRadius: 20,
    marginTop: 20,
  },
  aboutUsTitle: {
    fontSize: isAndroid() ? 20 : 40,
    fontWeight: '700',
    lineHeight: 62,
    color: colors.tomatoRed,
    marginTop: 30,
    // width: StyleConfig.width - StyleConfig.resWidth(250),
    fontFamily: primary_regular_font.primary_regular_font,
  },
  aboutUsSubTitle: {
    fontSize: isAndroid() ? 18 : 32,
    fontWeight: '700',
    lineHeight: 42,
    color: colors.black33,
    marginVertical: 8,
    // width: StyleConfig.width - StyleConfig.resWidth(250),
    fontFamily: primary_regular_font.primary_regular_font,
  },
  aboutUsDetail: {
    fontSize: isAndroid() ? 16 : 26,
    fontWeight: '400',
    lineHeight: 30,
    color: colors.black33,
    marginVertical: 8,
    // width: StyleConfig.width - StyleConfig.resWidth(250),
    fontFamily: primary_regular_font.primary_regular_font,
  },
});
