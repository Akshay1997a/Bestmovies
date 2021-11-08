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

const TVCardDetail = ({item, selected, onChangeSelected,...props}) => {
  const {t} = useTranslation();
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

const onFocus = useCallback((val) => {
  console.log('onFocus TVSideBar>>>', val);
  if (val == 12) {
    // getAboutUsData();
  }
  // props.reduxSetCurrFocus('menu');
  props?.reduxSetCurrFocus?.('list');

  setFocus(0);
    setIsFocus(true);
    onChangeSelected(val.key);

});
  // const onFocus = useCallback((item) => {
  //   // console.log('OnFocus TVCardDetail***',props);
  //   props?.reduxSetCurrFocus?.('list');
  //   setFocus(0);
  //   setIsFocus(true);
  // });

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
        onFocus={() => {
          onFocus(item);
        }}
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
                <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
            </View>
          </View>
          <View>
            <View>
              {/* <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
                {item.title}
              </Text> */}
             
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
    // overflow: 'hidden',
    // borderWidth: 1,
    // borderColor: '#fff',
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
    // height: isAndroid() ? StyleConfig.width * 0.28 : WIDTH * 0.28,
    borderColor: colors.tomatoRed,
    overflow: 'hidden',
    // padding: 1,
    // paddingBottom:1,
    // paddingVertical:2,
    // paddingHorizontal:2
  },
  notHighlightFocused: {
    // style={{
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
    // }}
    // borderWidth: isAndroid()
    //   ? StyleConfig.resWidth(1)
    //   : StyleConfig.resWidth(0),
    // borderRadius: isAndroid()
    //   ? StyleConfig.resHeight(20)
    //   : StyleConfig.resHeight(30),
    width: isAndroid() ? 180 : 360,
    // height: isAndroid() ? StyleConfig.width * 0.28 : WIDTH * 0.27,
    // StyleConfig.width * 0.3,
    // paddingTop: 1,
    // margin:2,
    // overflow: 'hidden',
  },
});
