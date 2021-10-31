import React, {useState, useCallback} from 'react';
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
import primary_regular_font from '../../helper/fonts';
import colors from 'src/helper/colors';
const {width, height} = Dimensions.get('window');
import StyleConfig from 'src/helper/StyleConfig';
import FontFamily from '../../../src/helper/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RatingComponent from '../../svgs/TVRatingComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets';
import {WIDTH} from '../../helper/globalFunctions';
import {useTranslation} from 'react-i18next';

let DATA = {
  feedback: 'texts.id_214',
  rating: '128',
  name: 'Todd Phillips',
  type: 'texts.id_129',
  country: 'countries.code_US',
  dob: '1927',
  bornYear: '2019 -',
  match: '78% match - 12 ',
  follower: '5.7',
  designation: 'texts.id_12',
  thumbnail: 'cast5',
};

const TVCast = (props) => {
  console.log('item0000000dadwdqad', props.item.name);
  const {item} = props.item;
  const {t} = useTranslation();
  const [focus, setFocus] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => {
    console.log('OnFocus called***');
    setFocus(0);
    setIsFocus(true);
  }, [0]);

  const onBlur = useCallback(() => {
    console.log('onBlur called***');
    setFocus(-1);
    setIsFocus(false);
  }, []);

  return (
    <View>
      <Pressable
        style={styles.container}
        onFocus={onFocus}
        onBlur={onBlur}
        // key={item.id}
        tvParallaxProperties={{magnification: 1.001}}
        onPress={() => {
          setFocus(false);
          props.navigation.navigate('ItemDetailsScreen', {item});
        }}>
        {/* //Image View */}
        <View>
          <View hasTVPreferredFocus={false}>
            <View style={styles.notHighlightFocused}>
              <ImageBackground
                              source={{ uri: props.item.photo_url }}

                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 15,
                }}
              />
            </View>
          </View>
          {/* //Bottom View */}
          <View style={{marginStart: StyleConfig.resWidth(5)}}>
            <View>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
                {props.item.name}
              </Text>
              <Text style={styles.typeSecondary}>
                {t(props.item.professions)}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  paddingEnd: StyleConfig.resWidth(20),
                  paddingBottom:StyleConfig.resWidth(5),
                }}>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[styles.textSecondary]}>
                      {t(props.item.country_cd)}
                      {/* <AntDesign name="like1" color="#35B736" size={13} /> */}
                    </Text>
                    <Text style={[styles.textSecondary]}>
                      Top
                      {/* <AntDesign name="like1" color="#35B736" size={13} /> */}
                    </Text>
                  </View>
                  {/* <View style={{flexDirection: 'row'}}>
                    <Text
                      style={
                        styles.textSecondary
                      }>{`${item.DATA.match} match`}</Text>
                  </View> */}
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                 // paddingEnd:Platform.OS==="ios"? StyleConfig.resWidth(16):null,
                  // paddingBottom: 5,
                }}>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[styles.textSecondary,]}>
                      {`${t('texts.id_215')} ${props.item.birth_year}`}
                      {/* <AntDesign name="like1" color="#35B736" size={13} /> */}
                    </Text>
                    <RatingComponent
                      rating={props.item.rating}
                      color={props.item.color}
                    />
                  </View>
                </View>
              </View>
              {/* <Text numberOfLines={1} style={styles.type}>
                {t('texts.id_129')}
              </Text> */}
              {/* {`${t('texts.id_129')}`} */}
              {/* <View style={{flexDirection:'row'}}>
                  <View>
                          <Text style={[{
                            fontFamily:primary_regular_font.primary_regular_font,
                            fontSize: isAndroid() ? StyleConfig.resHeight(26) :StyleConfig.resHeight(26),
                            color:'black', fontWeight:'400'}]}>{`${DATA.bornYear} ${DATA.country}`}</Text>
                  </View>
                  <View style={{flexDirection:'row',borderWidth:1}}>
                        <Text style={styles.rating}>{item.DATA.rating}</Text>
                  </View>

                </View>
               */}
              {/* <View style={styles.match}>
                <Text numberOfLines={1} style={styles.bornYear}>{`${
                  item.DATA.bornYear
                } ${t(item.DATA.country)}`}</Text> */}
              {/* <Icon
                  name={'thumbs-up'}
                  size={isAndroid() ? 15 : 35}
                  color={'#35b736'}
                /> */}
              {/* <View
                  style={{
                    justifyContent: 'center',
                    width: isAndroid() ? 20 : 50,
                    height: isAndroid() ? 20 : 45,
                    backgroundColor: item.DATA.color,
                    borderRadius: 50,
                    transform: [{scaleX: 2}],
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 3,
                      color: colors.white,
                      fontSize: StyleConfig.resHeight(20),
                    }}>
                    {item.DATA.rating}
                  </Text>
                </View> */}
              {/* </View> */}
              {/* <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width:
                    isAndroid() && item.DATA.feedback == 'Best'
                      ? 163
                      : isAndroid() && item.DATA.feedback == 'Excellent'
                      ? 174
                      : isAndroid() && item.DATA.feedback == 'OK'
                      ? 158
                      : isAndroid()
                      ? 165
                      : !isAndroid() && item.DATA.feedback == 'OK'
                      ? 330
                      : 340,
                }}>
                <Text
                  numberOfLines={1}
                  style={[
                    {
                      width: WIDTH * 0.14,
                      // fontFamily:primary_regular_font.primary_regular_font,
                      fontSize: StyleConfig.resHeight(26),
                      color: 'black',
                      fontWeight: '400',
                    },
                  ]}>{`${item.DATA.match} ${t('texts.id_104')}`}</Text>

                <Text numberOfLines={1} style={styles.feedback}>
                  {t(item.DATA.feedback)}
                </Text>
              </View>
                  ]}>{`${item.DATA.match} match`}</Text>
                <Text
                  style={{
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: StyleConfig.resHeight(26),
                    color: item.DATA.color,
                    fontWeight: '700',
                  }}>
                  {item.DATA.feedback}
                </Text>
              </View> */}
              {/* >>>>>>> 98e1c9ad323a0eb23565f6642c52abbd4b77db82 */}
            </View>
          </View>
          {/* <View style={{flexDirection: 'column'}}>
            <Text
              style={[
                {
                  fontFamily: primary_regular_font.primary_regular_font,
                  marginVertical: 5,
                  fontSize: StyleConfig.resHeight(24),
                  fontWeight: '700',
                  color: props?.selected == 1 ? 'black' : 'black',
                },
              ]}>
              {DATA.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  numberOfLines={1}
                  style={[
                    {
                      width: WIDTH * 0.14,
                      fontSize: StyleConfig.resHeight(30),
                      color: props?.selected == 1 ? 'black' : 'black',
                      fontFamily: primary_regular_font.primary_regular_font,
                      fontWeight: '400',
                    },
                  ]}>
                  {t(DATA.designation)}
                </Text>
                <View
                  style={{
                    marginTop: isAndroid() ? -5 : -10,

                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: isAndroid() ? 143 : WIDTH / 6.8,
                  }}>
                  <Text
                    numberOfLines={1}
                    style={[
                      {
                        width: WIDTH * 0.11,
                        fontSize: StyleConfig.resHeight(30),
                        color: 'black',
                        fontWeight: '400',
                      },
                    ]}>
                    {t(DATA.country)}
                  </Text>
                  <Text numberOfLines={1} style={styles.feedback}>
                    {t(DATA.feedback)}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: isAndroid() ? 140 : WIDTH / 6.8,
                  }}>
                  <Text
                    numberOfLines={1}
                    style={[
                      {
                        fontFamily: primary_regular_font.primary_regular_font,
                        fontSize: StyleConfig.resHeight(30),
                        color: 'black',
                        fontWeight: '400',
                        width: WIDTH * 0.09,
                      },
                    ]}>
                    {`${t('texts.id_215')} ${DATA.dob}`}
                  </Text>
                  <View
                    style={{
                      // paddingTop:3,
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: isAndroid() ? 25 : 60,
                      height: isAndroid() ? 25 : 56,
                      borderRadius: 100,
                      transform: [{scaleX: 1.5}],
                      backgroundColor: item.DATA.color,
                    }}>
                    <Text
                      style={{
                        color: colors.white,
                        fontWeight: '700',
                        fontSize: StyleConfig.resHeight(20),
                      }}>
                      {DATA.rating}
                    </Text>
                  </View>
                </View>


              </View>

            </View>
          </View> */}
        </View>
      </Pressable>
    </View>
  );
};

export default TVCast;
const itemWidth = (StyleConfig.width - 130) * 0.15;
const isAndroid = () => {
  return Platform.OS == 'android';
};

const styles = StyleSheet.create({
  typeSecondary: {
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
  title: {
    width: StyleConfig.resWidth(300),
    fontFamily: primary_regular_font.primary_regular_font,
    marginTop: StyleConfig.resHeight(10),
    fontSize: StyleConfig.resHeight(24),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: 'black',
  },
  textSecondary:{
    fontSize:StyleConfig.resHeight(24),
    fontWeight:'400',
    lineHeight:StyleConfig.resHeight(26),
    fontFamily:primary_regular_font.primary_regular_font,
    color:colors.black,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  titleText: {
    fontSize: StyleConfig.resWidth(24),
    fontWeight: '700',
    fontFamily: primary_regular_font.primary_bold_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: colors.black,
  },
  feedback: {
    fontFamily: primary_regular_font.primary_regular_font,
    // marginLeft: isAndroid() ? 40 : 55 ,
    fontSize: StyleConfig.resHeight(26),
    color: colors.black,
    width: WIDTH * 0.04,
    fontWeight: '400',
  },
  container: {
    marginVertical: StyleConfig.resHeight(20),
    marginHorizontal: StyleConfig.resWidth(5),
    // borderRadius:StyleConfig.resHeight(20),
    // borderWidth:1,
    // borderColor:'black'
  },
  // top: {
  //   textAlign: 'center',
  //   fontWeight: '700',
  //   fontSize: isAndroid() ? 12 : 18,
  //   color: 'black',
  // },
  // rating: {
  //   textAlign: 'center',
  //   fontWeight: '900',
  //   fontSize: isAndroid() ? 12 : 18,
  //   color: 'black',
  // },
  ovalShapeView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: isAndroid() ? 40 : 70,
    height: isAndroid() ? 40 : 70,
    backgroundColor: 'gray',
    borderRadius: 140 / 2,
  },
  circleShape: {
    flexDirection: 'row',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9A9A9',
  },

  viewContainer: {
    // borderWidth: StyleConfig.resWidth(1),
    borderRadius: StyleConfig.resHeight(20),
    // backgroundColor:'rgba(255,255,255,0.9)',
    shadowColor: 'black',
    overflow: 'hidden',
    shadowOpacity: 0.9,
    elevation: 10,
    //borderColor:'red',
    height: StyleConfig.width * 0.3,
  },

  highlight: {
    flexBasis: itemWidth + 30,
    height: StyleConfig.width * 0.37,
    marginTop: StyleConfig.resHeight(25),
    // marginHorizontal: StyleConfig.resWidth(10),
    borderRadius: 20,
    overflow: 'hidden',
  },
  highlightFocused: {
    borderRadius: StyleConfig.resHeight(30),
    width: isAndroid() ? 160 : 320,
    borderWidth: StyleConfig.resWidth(5),
    height: StyleConfig.width * 0.15,
    borderColor: colors.tomatoRed,
    overflow: 'hidden',
    paddingTop: 1,
  },
  notHighlightFocused: {
    borderWidth: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resWidth(0),
    borderRadius: isAndroid()
      ? StyleConfig.resHeight(30)
      : StyleConfig.resHeight(30),
    width: isAndroid() ?   StyleConfig.resWidth(290) : 360,
    height: isAndroid() ? StyleConfig.width * 0.22 : WIDTH * 0.27,
    // StyleConfig.width * 0.3,
    paddingTop: 1,
    overflow: 'hidden',
  },
});
