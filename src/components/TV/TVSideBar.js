import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect
} from 'react';
import {View, Pressable, StyleSheet, Text, Image} from 'react-native';
import axios from 'axios';

import {FlatList} from 'react-native-gesture-handler';
import colors from '../../helper/colors';
import strings from '../../helper/strings';
import StyleConfig from '../../helper/StyleConfig';
import TVCountryLanguage from '../TV/TVCountryLanguage';
import primary_regular_font from '../../helper/fonts';
import Const from '../../helper/constants';
import {HEIGHT, WIDTH} from '../../helper/globalFunctions';
import {useTranslation} from 'react-i18next';
import {useFocusEffect} from '@react-navigation/core';
import i18next from 'i18next';
import {runTimeTranslations} from '../../i18n';
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
  {
    key: TERMS_OF_USE,
    title: strings.terms_of_use,
  },
  // {
  //   key: PRIVACY_POLICY,
  //   title: strings.privacy_policy,
  // },
];
const TVSideBar = forwardRef(({onChangeSelected, ...props}, ref) => {
  console.log('props>>>', props);

  const {t,i18n} = useTranslation();

  const [focus, setFocus] = useState(NONE);
  const [key, setKey] = useState(-1);
  const [selected, setSelected] = useState(9);
  const [aboutUs, setAboutUsData] = useState(null);
  const [terms, setTerms] = useState(null);
  const [data, setData] = useState(null);

  const onFocus = useCallback((val) => {
    console.log('onFocus TVSideBar>>>', val);
    props.reduxSetCurrFocus('menu');
    setKey(val)
    setFocus(val);
    setSelected(val);

  });
  const onBlur = useCallback(() => {
    // console.log('onBlur TVSideBar***');
    // setFocus(-1);
  }, []);
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
  const getSearch = () =>{
    axios
    .get('http://18.119.119.183:3002/static-pages?device=web&slug=terms_sample')
    .then(function (response) {

      let  abArray = [];

      response.data.data.static_pages !== null && Object.entries(response.data.data.static_pages[0])?.map((item, index) => {
    // let data = item;
    let type  = '';
    if(item[0] === 'name' || item[0] === 'heading1' || item[0] === 'heading2' || item[0] === 'heading3' || item[0] === 'heading4' || item[0] === 'heading5' ){
        type = 'title'
    }else  if(item[0] === 'text1' || item[0] === 'text2' ||item[0] === 'text3' ||item[0] === 'text4' ||item[0] === 'text5' ||item[0] === 'text6' ){
      type = 'detail'
    }else if(item[0] === 'subtitle1' || item[0] === 'subtitle2' ||item[0] === 'subtitle3' ||item[0] === 'subtitle4' ||item[0] === 'subtitle5' ||item[0] === 'subtitle6' ){
      type = 'subtitle'
    }else if(item[0] === 'image1_url' || item[0] === 'image2_url' ||item[0] === 'image3_url' ||item[0] === 'image4_url' ||item[0] === 'image5_url' || item[0] === 'image6_url' ){
      type = 'image'
    }else{
      type = '';
    }
    
    let obje  ={
      id : index,
      type: type,
      data :item[1]
    }
    if(type){
      abArray.push(obje)

    }

      // let [temp, code] = item[0].split('_')
      // if(code== val){
      //   console.log(item)
      //   str = item[1];
      //   str+=str;
      //   return str
      // }
    })
      setTerms(abArray);
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  useEffect(() => {
    getSearch()
    let lng = i18n.language;
    let countryData = i18next.getDataByLanguage(lng);
    let staticPages = countryData?.translation?.static_pages;

    // alert(Object.keys(staticPages)[0]); // returns first
// alert(Object.keys(staticPages)[1]); // returns second
//     staticPages !== null && Object.entries(staticPages[0])?.map((item, index) => {
// let key = item
  
//   })
    // console.log(Object.keys(staticPages));
    // // for (const item of LANGUAGES) {
    // //   languageMap.set('code_AD', 'Andorra');
    // // }
    // countryTemp && setDataList(countryTemp);
    // setCountry(countryTemp);

    // props.getLanguageData((res) => {
    //   let data = convertArrayToObject(res.data.display, 'code');
    //   let titleLanguage = convertArrayToObject(res.data.list, 'code');
    //   setLanguageList(data);
    //   setTitleLanguageList(titleLanguage);
    // });
    props.getStaticData((res) => {
      let aboutdata = [];
  let  abArray = [];
  res.data.static_pages !== null && Object.entries(res.data.static_pages[0])?.map((item, index) => {
    // let data = item;
    let type  = '';
    if(item[0] === 'name' || item[0] === 'heading1' || item[0] === 'heading2' || item[0] === 'heading3' || item[0] === 'heading4' || item[0] === 'heading5' ){
        type = 'title'
    }else  if(item[0] === 'text1' || item[0] === 'text2' ||item[0] === 'text3' ||item[0] === 'text4' ||item[0] === 'text5' ||item[0] === 'text6' ){
      type = 'detail'
    }else if(item[0] === 'subtitle1' || item[0] === 'subtitle2' ||item[0] === 'subtitle3' ||item[0] === 'subtitle4' ||item[0] === 'subtitle5' ||item[0] === 'subtitle6' ){
      type = 'subtitle'
    }else if(item[0] === 'image1_url' || item[0] === 'image2_url' ||item[0] === 'image3_url' ||item[0] === 'image4_url' ||item[0] === 'image5_url' || item[0] === 'image6_url' ){
      type = 'image'
    }else{
      type = '';
    }
    
    let obje  ={
      id : index,
      type: type,
      data :item[1]
    }
    if(type){
      abArray.push(obje)
    }

      // let [temp, code] = item[0].split('_')
      // if(code== val){
      //   console.log(item)
      //   str = item[1];
      //   str+=str;
      //   return str
      // }
    })
      setAboutUsData(abArray);
      // let data = res;
    });
  }, []);
  console.log(props.headerSelected, MENU_DATA);
  return (
    <>
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
                  }}
                  onBlur={() => {
                    onBlur();
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
          <View>
            <TVCountryLanguage {...props}></TVCountryLanguage>
            {/* <Text>fsfs</Text> */}
            {/* <TVCountryLanguage {...props}></TVCountryLanguage> */}

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
          <View hasTVPreferredFocus={true}>
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
          <View hasTVPreferredFocus={true}>
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
          <View  >
            <FlatList
             
              data={aboutUs}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}
                  // onFocus={() => {
                  //   onFocus(item.data);
                  // }}
                  >

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
                
                    {/* {

item?.image1_url ?
                    <Image
                            source={{ uri: item?.image1_url }}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                        :null
                    }
                         <Text
                          style={styles.aboutUsTitle}>{item.heading1}</Text>
                          <Text
                          style={styles.aboutUsSubTitle}>{item.subtitle1}</Text>
                           <Text
                          style={styles.aboutUsDetail}>{item.text1}</Text>
                          {

item?.image1_url ?
                    <Image
                            source={{ uri: item?.image1_url }}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                        :null
                    }
                         <Text
                          style={styles.aboutUsTitle}>{item.heading2}</Text>
                          <Text
                          style={styles.aboutUsSubTitle}>{item.subtitle2}</Text>
                           <Text
                          style={styles.aboutUsDetail}>{item.text2}</Text>
                          {

item?.image1_url ?
                    <Image
                            source={{ uri: item?.image1_url }}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                        :null
                    }
                         <Text
                          style={styles.aboutUsTitle}>{item.heading3}</Text>
                          <Text
                          style={styles.aboutUsSubTitle}>{item.subtitle3}</Text>
                           <Text
                          style={styles.aboutUsDetail}>{item.text3}</Text>
                          {

item?.image1_url ?
                    <Image
                            source={{ uri: item?.image1_url }}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                        :null
                    }
                       <Text
                        style={styles.aboutUsTitle}>{item.heading4}</Text>
                        <Text
                        style={styles.aboutUsSubTitle}>{item.subtitle4}</Text>
                         <Text
                        style={styles.aboutUsDetail}>{item.text4}</Text>
                        {

item?.image1_url ?
                    <Image
                            source={{ uri: item?.image1_url }}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                        :null
                    }
                     <Text
                      style={styles.aboutUsTitle}>{item.heading5}</Text>
                      <Text
                      style={styles.aboutUsSubTitle}>{item.subtitle5}</Text>
                       <Text
                      style={styles.aboutUsDetail}>{item.text5}</Text> */}

                      {/* {item.type == 'image' ? (
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
                      )} */}
                    {/* </> */}
                  </Pressable>
                );
              }}
            />
          </View>
        )}
        {key == ADVERTISE && (
          <View hasTVPreferredFocus={true}>
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
          <View hasTVPreferredFocus={true}>
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
          <View hasTVPreferredFocus={true}>
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
              data={terms}
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
          <View hasTVPreferredFocus={true}>
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
    borderRadius: StyleConfig.resWidth(20),
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
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    fontFamily: primary_regular_font.primary_regular_font,
  },
  selectedText: {
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: colors.tomatoRed,
    fontFamily: primary_regular_font.primary_regular_font,
  },
  focusText: {
    fontSize: StyleConfig.resWidth(28),
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
    paddingLeft: 10,
    fontWeight: '700',
  },
  textTitle: {
    fontSize: StyleConfig.resWidth(28),
    fontWeight: '700',
    fontFamily: primary_regular_font.primary_regular_font,
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
    // marginTop: 30,
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
