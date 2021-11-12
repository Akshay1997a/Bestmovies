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
import colors from 'src/helper/colors';
import RatingComponent from '../../svgs/TVRatingComponent';

const {width, height} = Dimensions.get('window');
import StyleConfig from 'src/helper/StyleConfig';
import primary_regular_font from '../../helper/fonts';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets';
import {useTranslation} from 'react-i18next';
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
  // console.log('item',item);
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
                               source={{ uri: item.image_url }}

                style={{width: '100%', height: '100%', borderRadius: 15}}>
                {/* <View> */}
                {/* {
                          item.title === 'Joker'
                        ?
                      <View style={[{zIndex:1, flex:1,flexDirection:'row', paddingTop:10, backgroundColor:"rgba(0,0,0, 0.3)", paddingLeft:45, paddingRight:35, justifyContent:'space-between'}]} >
                                <Icon name={"thumbs-down"}  size={35} color={"white"} />
                          <View style={styles.circleShape}>
                                <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontWeight:'800' ,textAlign:'center' ,fontSize:20,color:props?.selected == 1 ? 'white' : 'white'}}>OK</Text>
                          </View>
                          <View style={styles.circleShape}>
                                  <Icon name={"thumbs-up"} size={35} color={"white"} />
                          </View>
                          <View style={styles.circleShape}>
                                  <Icon name={"plus"} size={28} color={"white"}  />
                          </View>
                          <View style={styles.circleShape}>
                                  <Icon name={"share"} size={28} color={"white"}  />
                          </View>
                      </View>
                      :
                      <View  style={[{flexDirection:'row', flex:0.2, justifyContent:'flex-end',marginTop:-5,marginEnd:20}]} >
                            <Icon name={"bookmark"} size={50} color={"#6495ED"} />
                      </View>
                        } */}
                {/* </View> */}

                {/* <View style={[{ alignItems:'center', marginTop:-25}]}>
                         <Icon name={"bookmark"} size={80} color={"#6495ED"} style={[{ }]} />
                  </View> */}
              </ImageBackground>
            </View>
          </View>
          {/* //Bottom View */}
          <View>
            <View>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
              {item.local_title}

              </Text>
            </View>
            <View style={styles.match}>
              <View>
                <Text style={styles.bornYear}>
                  {
                    item.type === 'm' ?
                    'Movie' + ' - ' +item.year:
                    item.type === 't' ?
                    'TV show'+ ' - ' +item.year :'Shorts'+ ' - ' +item.year
                  }
                      {/* {item.genres + ' - ' +item.year
                } */}
                </Text>
              </View>
              <View
                style={{
                  paddingTop: StyleConfig.resHeight(8),
                  paddingEnd: StyleConfig.resWidth(5),
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
              </View>

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
  title: {
    width: isAndroid()
      ? StyleConfig.resHeight(300)
      : StyleConfig.resHeight(300),
    fontFamily: primary_regular_font.primary_regular_font,
    // paddingVertical: StyleConfig.resHeight(8),
    fontSize: StyleConfig.resHeight(24),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: 'black',
  },
  bornYear: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resHeight(24),
    color: 'black',
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  match: {
    //  margin:4,
    // borderWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: isAndroid() ? 140 : 333,
  },
  container: {
    marginVertical: StyleConfig.resHeight(10),
    marginHorizontal: StyleConfig.resWidth(10),
    // borderRadius:StyleConfig.resHeight(20),
    // borderWidth:1,
    // borderColor:'black'
  },
  rating: {
    fontFamily: primary_regular_font.primary_regular_font,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: isAndroid() ? 10 : 18,
    color: 'white',
  },
  ovalShapeView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: isAndroid() ? 40 : 50,
    width: isAndroid() ? 20 : 40,
    height: isAndroid() ? 20 : 40,
    backgroundColor: colors.black,
    borderRadius: 100,
    transform: [{scaleX: 2}],
    // marginRight:40
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
    // borderColor:'red',
    height: StyleConfig.width * 0.3,
  },

  highlight: {
    flexBasis: itemWidth + 30,
    height: StyleConfig.width * 0.3,
    marginTop: StyleConfig.resHeight(25),
    marginHorizontal: StyleConfig.resWidth(10),
    borderRadius: 20,
    overflow: 'hidden',
  },
  highlightFocused: {
    borderRadius: StyleConfig.resHeight(30),
    width: StyleConfig.resWidth(320),
    height: StyleConfig.width * 0.22,
    borderWidth: StyleConfig.resWidth(10),
    borderColor: colors.tomatoRed,
    overflow: 'hidden',
    paddingTop: 1,
  },
  notHighlightFocused: {
    borderWidth: isAndroid()
      ? StyleConfig.resWidth(1)
      : StyleConfig.resWidth(0),
    borderRadius: isAndroid()
      ? StyleConfig.resHeight(10)
      : StyleConfig.resHeight(30),
    width: StyleConfig.resWidth(320),
    height: StyleConfig.width * 0.22,
    // marginHorizontal: StyleConfig.resWidth(10),
    // paddingHorizontal:1,
    paddingTop: 1,
    overflow: 'hidden',
  },
});
