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
import ToggleSwitch from 'toggle-switch-react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from 'src/helper/colors';
const {width, height} = Dimensions.get('window');
import StyleConfig from 'src/helper/StyleConfig';
import primary_regular_font from '../../helper/fonts';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets';
import {WIDTH} from '../../helper/globalFunctions';

let DATA = {
  name: 'Todd Phillips',
  type: 'Drama, Adventura',
  country: 'United States',
  bornYear: '2019 -',
  match: '2.99$ - 78%',
  follower: '5.7',
};

const TVCardDetail = ({item, ...props}) => {
  console.log('item', item);
  const [focus, setFocus] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const storeData = async (value) => {
    try {
      // await AsyncStorage.setItem('TVMovieListItem', value)
    } catch (e) {
      // saving error
    }
  };

  const onFocus = useCallback(() => {
    // console.log('OnFocus TVCardDetail***',props);
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
                source={AppImages[item.thumbnail]}
                style={{width: '100%', height: '100%', borderRadius: 15}}>
                {item.title === 'Joker' ? (
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
          <View style={{flexDirection: 'row', marginStart: 5}}>
            <View>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
              <Text style={styles.type}>{item.DATA.type}</Text>
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
              <View style={styles.match}>
                <Text
                  style={
                    styles.bornYear
                  }>{`${item.DATA.bornYear} ${item.DATA.country}`}</Text>
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
              </View>
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
                  style={[
                    {
                      fontSize: StyleConfig.resHeight(26),
                      color: 'black',
                      fontWeight: '400',
                    },
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

    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid()
      ? StyleConfig.resHeight(24)
      : StyleConfig.resHeight(24),
    color: 'black',
    fontWeight: '400',
  },
  title: {
    width: isAndroid() ? 150 : 300,
    fontFamily: primary_regular_font.primary_regular_font,
    marginTop:  StyleConfig.resHeight(10),
    fontSize: isAndroid()
      ? StyleConfig.resHeight(26)
      : StyleConfig.resHeight(26),
    fontWeight: isAndroid() ? 'bold' : '700',
    color: 'black',
  },
  feedback: {
    fontFamily: primary_regular_font.primary_regular_font,
    // marginLeft: isAndroid() ? 40 : 55 ,
    fontSize: StyleConfig.resHeight(26),
    color: colors.black,
    fontWeight: '700',
  },
  ok: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '800',
    textAlign: 'center',
    fontSize: isAndroid() ? 10 : 20,
    color: 'white',
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
  rating: {
    fontFamily: primary_regular_font.primary_regular_font,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: isAndroid() ? 10 : 18,
    color: 'black',
  },
  container: {
    marginVertical: StyleConfig.resHeight(10),
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
    borderRadius: isAndroid()
      ? StyleConfig.resHeight(20)
      : StyleConfig.resHeight(30),

    width: isAndroid() ? 180 : 360,
    borderWidth: isAndroid()
      ? StyleConfig.resWidth(10)
      : StyleConfig.resWidth(10),
    height: isAndroid() ? StyleConfig.width * 0.28 : WIDTH * 0.28,
    borderColor: colors.tomatoRed,
    overflow: 'hidden',
    padding: 1,
    // paddingBottom:1,
    // paddingVertical:2,
    // paddingHorizontal:2
  },
  notHighlightFocused: {
    borderWidth: isAndroid()
      ? StyleConfig.resWidth(1)
      : StyleConfig.resWidth(0),
    borderRadius: isAndroid()
      ? StyleConfig.resHeight(20)
      : StyleConfig.resHeight(30),
    width: isAndroid() ? 180 : 360,
    height: isAndroid() ? StyleConfig.width * 0.28 : WIDTH * 0.27,
    // StyleConfig.width * 0.3,
    paddingTop: 1,
    overflow: 'hidden',
  },
});
