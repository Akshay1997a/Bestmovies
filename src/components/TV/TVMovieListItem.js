import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Pressable,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import axios from 'axios';
import i18next from 'i18next';
import {runTimeTranslations} from '../../i18n';
import Inocons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RatingComponent from '../../svgs/TVRatingComponent';
import ToggleSwitch from 'toggle-switch-react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from 'src/helper/colors';
const {width, height} = Dimensions.get('window');
import primary_regular_font from '../../helper/fonts';
import StyleConfig from '../../helper/StyleConfig';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets';
import {WIDTH} from '../../helper/globalFunctions';
import {useTranslation} from 'react-i18next';

let DATA = {
  name: 'Todd Phillips',
  type: 'Drama, Adventura',
  country: 'United States',
  bornYear: '2019 -',
  match: '2.99$ - 78%',
  follower: '5.7',
};

const TVCardDetail = ({item, ...props}) => {
  const {t,i18n} = useTranslation();
  console.log('item', item);
  const [focus, setFocus] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [countryList, setCountryList] = useState(null);

  const storeData = async (value) => {
    try {
      // await AsyncStorage.setItem('TVMovieListItem', value)
    } catch (e) {
      // saving error
    }
  };
const getMovies = () =>{
  axios
  .get('http://18.119.119.183:3003/titles?device=tv&output=bas&limit=' + 8)
  .then(function (response) {
    // handle success
    // setAboutUsData(response.data.data.static_pages);

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
const getGeneras = (code) =>{
  let data = code.split(',');
  let str  = '';
  // let data = countryList;
  if(data && countryList !== null){
    for(const val of data) {
       str = str+ countryList["code_"+ val];
       return str;
    // countryList !== null && Object.entries(countryList)?.map((item, index) => {
    //   let [temp, code] = item[0].split('_')
    //   if(code== val){
    //     console.log(item)
    //     str = item[1];
    //     str+=str;
    //     return str
    //   }
    // }) 
  }
}
}


  const onFocus = useCallback(() => {
    let res = getGeneras('ac');
    console.log('OnFocus TVCardDetail***',res);
    props?.reduxSetCurrFocus?.('list');
    setFocus(0);
    setIsFocus(true);
  }, [0]);

  const onBlur = useCallback(() => {
    // console.log('onBlur TVCardDetail***');
    setFocus(-1);
    setIsFocus(false);
  }, []);

  useEffect(() => {
    let lng = i18n.language;
    let countryData = i18next.getDataByLanguage(lng);
    let countryTemp = countryData?.translation?.genres;
    countryTemp && setCountryList(countryTemp);

    const unsubscribe = props.navigation.addListener('focus', () => {
      // console.log('focus TVMovieList ');
    });
  }, []);

  console.log('item.thumbnail', item.thumbnail);
  return (
    <View>
      <Pressable
        style={styles.container}
        onFocus={onFocus}
        onBlur={onBlur}
        key={item.id}
        // style={({pressed, focused}) => focused ? styles.highlightFocused : styles.notHighlightFocused}

        tvParallaxProperties={{magnification: 1.001}}
        onPress={() => {
          setFocus(false);
          props.navigation.navigate('ItemDetailsScreen', {item});
        }}>
        {/* //Image View */}
        <View>
          <View hasTVPreferredFocus={false}>
            <View
              style={
                isFocus ? styles.highlightFocused : styles.notHighlightFocused
              }>
              <ImageBackground
                // source={AppImages[item.thumbnail]}
                // source={item.image_url}
                // source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
                source={{ uri: item.image_url }}

                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: Platform.OS === 'ios' ? 20 : 15,
                  overflow: Platform.OS === 'ios' ? 'hidden' : null,
                }}>
                {item.local_title === 'Joker' ? (
                  <View />
                ) : (
                  // <View style={styles.thumb}>
                  //   <Icon
                  //     name={'thumbs-down'}
                  //     size={isAndroid() ? 15 : 35}
                  //     color={'white'}
                  //   />
                  //   <View style={styles.circleShape}>
                  //     <Text
                  //       style={{
                  //         fontFamily: primary_regular_font.primary_regular_font,
                  //         fontWeight: isAndroid() ? 'bold' : '400',
                  //         textAlign: 'center',
                  //         fontSize: isAndroid() ? 8 : 15,
                  //         color: 'white',
                  //       }}>
                  //       OK
                  //     </Text>
                  //   </View>
                  //   <View style={styles.circleShape}>
                  //     <Icon
                  //       name={'thumbs-up'}
                  //       size={isAndroid() ? 10 : 20}
                  //       color={'white'}
                  //     />
                  //   </View>
                  //   <View style={styles.circleShape}>
                  //     <Icon
                  //       name={'plus'}
                  //       size={isAndroid() ? 10 : 20}
                  //       color={'white'}
                  //     />
                  //   </View>
                  //   <View style={styles.circleShape}>
                  //     <Icon
                  //       name={'share'}
                  //       size={isAndroid() ? 10 : 20}
                  //       color={'white'}
                  //     />
                  //   </View>
                  // </View>
                  <View style={[{alignItems: 'center', marginTop: -25}]}>
                    {/* <Icon
                      name={'bookmark'}
                      size={isAndroid() ? 50 : 100}
                      color={'blue'}
                      style={[{borderWidth: 1, width: 50, height: 50}]}
                    />
                    <Icon
                      name={'plus'}
                      size={isAndroid() ? 10 : 50}
                      color={'white'}
                      style={[{position: 'absolute', top: 30}]}
                    /> */}
                  </View>
                  // <View
                  //   style={[
                  //     {
                  //       flexDirection: 'row',
                  //       flex: 0.2,
                  //       justifyContent: 'flex-end',
                  //       marginTop: -5,
                  //       marginEnd: 20,
                  //     },
                  //   ]}>
                  //   <Icon
                  //     name={'bookmark'}
                  //     size={isAndroid() ? 25 : 50}
                  //     color={'green'}
                  //   />
                  // </View>
                )}
              </ImageBackground>
            </View>
          </View>
          {/* //Bottom View */}
          <View>
            <View>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
                {item.local_title}
              </Text>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.typeSecondary}>
                {/* {t('texts.id_129')} */}
                {item.genres}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                    <Text
                        style={[styles.textSecondary]}
                        ellipsizeMode="tail"
                        numberOfLines={1}>
                        {item.year + ' - ' +item.origins}
                
                          {/* {item.year} */}
                        {/* {t(item.year)} */}
                        {/* <AntDesign name="like1" color="#35B736" size={13} /> */}
                      </Text>
                      
                      {/* <Text
                        style={[styles.textSecondary]}
                        ellipsizeMode="tail"
                        numberOfLines={1}>
                        {item.box_office_rating}
                        <AntDesign name="like1" color="#35B736" size={13} />
                      </Text> */}
                      <Text style={[styles.textSecondary]}>
                        {item.price}
                      </Text>
                    </View>

                    <View
                      style={{
                        flex: 0.8,
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf:'center'
                      }}>
                       <RatingComponent
                        rating={item.rating}
                        color={item.rating >= 9 ? 
                          "black":
                          item.rating >= 8 ? 
                          '#868686' :
                          item.rating >= 7 ? 
                          '#4183E2' :
                          item.rating >= 6 ?
                        '#40CF00' :
                        item.rating >= 5 ?
                      '#EAC602' :
                      item.rating >= 4 ?
                    '#FF8500':
                    item.rating >= 3 ?
                  '#FF0000' :
                  item.rating >= 2 ?
                  '#EC3DEF' :
                  item.rating >= 1 ?
                '#9A2FAE' :'#9A5000'}
                      />
                      <Text
                        style={{
                          color: item.rating >= 9 ? 
                          "black":
                          item.rating >= 8 ? 
                          '#868686' :
                          item.rating >= 7 ? 
                          '#4183E2' :
                          item.rating >= 6 ?
                        '#40CF00' :
                        item.rating >= 5 ?
                      '#EAC602' :
                      item.rating >= 4 ?
                    '#FF8500':
                    item.rating >= 3 ?
                  '#FF0000' :
                  item.rating >= 2 ?
                  '#EC3DEF' :
                  item.rating >= 1 ?
                '#9A2FAE' :'#9A5000',
                          fontFamily: primary_regular_font.primary_regular_font,
                          fontSize: StyleConfig.resHeight(24),
                          fontWeight: '400',
                          ...Platform.select({
                            android: {
                              fontFamily:
                                primary_regular_font.primary_regular_font,
                            },
                          }),
                        }}>
                       {item.rating >= 9 ? 
                          "Best":
                          item.rating >= 8 ? 
                          'Excellent' :
                          item.rating >= 7 ? 
                          'Great' :
                          item.rating >= 6 ?
                        'Good' :
                        item.rating >= 5 ?
                      'OK' :
                      item.rating >= 4 ?
                    'Weak':
                    item.rating >= 3 ?
                  'Poor' :
                  item.rating >= 2 ?
                  'Bad' :
                  item.rating >= 1 ?
                'Terrible' :'Worst'}
                      </Text> 
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default TVCardDetail;
const itemWidth = (StyleConfig.width - 130) * 0.18;
const isAndroid = () => {
  return Platform.OS == 'android';
};

const styles = StyleSheet.create({
  textSecondary: {
    // alignSelf:'center',
    width: StyleConfig.resWidth(250),
    color: colors.black,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resHeight(24),
    lineHeight: StyleConfig.resHeight(30),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  dynTextSecondary: {
    // alignSelf:'center',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resHeight(24),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  dynTextColor: {
    // alignSelf:'center',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resHeight(24),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  typeSecondary: {
    width: StyleConfig.resWidth(356),
    lineHeight: StyleConfig.resHeight(30),
    color: '#000000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resHeight(24),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  feedback: {
    fontSize: StyleConfig.resHeight(26),
    color: 'black',
    fontWeight: '400',
  },
  rating: {},
  bornYear: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resHeight(26),
    color: 'black',
    fontWeight: '400',
  },
  match: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: isAndroid() ? 158 : 333,
  },
  type: {
    // fontFamily: primary_regular_font.primary_light_font,
    width: isAndroid() ? 158 : 333,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid()
      ? StyleConfig.resHeight(24)
      : StyleConfig.resHeight(24),
    color: 'black',
    fontWeight: '400',
  },
  title: {
    width: StyleConfig.resWidth(356),
    fontFamily: primary_regular_font.primary_bold_font,
    marginTop: StyleConfig.resHeight(10),
    fontSize: StyleConfig.resHeight(24),
    lineHeight:StyleConfig.resHeight(33),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: 'black',
  },
  // feedback: {
  //   fontFamily: primary_regular_font.primary_regular_font,
  //   fontSize: StyleConfig.resHeight(26),
  //   color: colors.black,
  //   width: WIDTH * 0.06,
  //   fontWeight: '700',
  // },
  ok: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '800',
    textAlign: 'center',
    fontSize: isAndroid() ? 10 : 20,
    color: 'white',
    borderWidth:1,
    borderColor:"red",
  },
  thumb: {
    zIndex: 1,
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    paddingLeft: isAndroid() ? 30 : 35,
    paddingRight: isAndroid() ? 30 : 35,
    justifyContent: 'space-between',
  },
  // rating: {
  //   fontFamily: primary_regular_font.primary_regular_font,
  //   textAlign: 'center',
  //   fontWeight: '700',
  //   fontSize: isAndroid() ? 10 : 18,
  //   color: 'black',
  // },
  container: {
    marginTop: StyleConfig.resHeight(10),
    marginBottom: StyleConfig.resHeight(10),
    // marginVertical: StyleConfig.resHeight(10),
    marginHorizontal: StyleConfig.resWidth(10),
  },
  ovalShapeView: {
    paddingTop: 3,
    alignItems: 'center',
    width: isAndroid() ? 20 : 50,
    height: isAndroid() ? 20 : 45,
    borderRadius: 100,
    transform: [{scaleX: 1.5}],
  },
  circleShape: {
    paddingHorizontal: isAndroid() ? 0 : 8,
    marginTop: isAndroid() ? 5 : 10,
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: isAndroid() ? 10 : 50,
    width: isAndroid() ? 18 : 35,
    height: isAndroid() ? 15 : 30,
    backgroundColor: '#A9A9A9',
    borderRadius: 100,
    transform: [{scaleY: 2}],
  },
  viewContainer: {
    borderRadius: StyleConfig.resHeight(20),
    shadowColor: 'black',
    overflow: 'hidden',
    shadowOpacity: 0.9,
    elevation: 10,
    height: StyleConfig.width * 0.3,
  },
  highlight: {
    flexBasis: itemWidth + 30,
    height: StyleConfig.width * 0.4,
    marginTop: StyleConfig.resHeight(25),
    marginHorizontal: StyleConfig.resWidth(10),
    borderRadius: 20,
    overflow: 'hidden',
  },
  highlightFocused: {
    flex: 0,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowRadius: 3.84,
    width: isAndroid() ? 180 : 360,
    borderWidth: isAndroid()
      ? StyleConfig.resWidth(10)
      : StyleConfig.resWidth(10),
    height: isAndroid() ? StyleConfig.width * 0.28 : WIDTH * 0.28,
    borderColor: colors.tomatoRed,
    overflow: 'hidden',
  },
  notHighlightFocused: {
    flex: 0,
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowRadius: 3.84,
    width: isAndroid() ? 180 : 360,
    height: isAndroid() ? StyleConfig.width * 0.28 : WIDTH * 0.28,
  },
});
