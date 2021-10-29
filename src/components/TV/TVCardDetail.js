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
const {width, height} = Dimensions.get('window');
import StyleConfig from 'src/helper/StyleConfig';
import FontFamily from '../../../src/helper/fonts';
import primary_regular_font from '../../helper/fonts';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets';

let DATA = {
  name: 'Todd Phillips',
  type: 'Drama, Adventura',
  country: 'United States',
  bornYear: '2019 -',
  match: '2.99$ - 78%',
  follower: '5.7',
};

const TVCardDetail = ({item, ...props}) => {
  // console.log('type',props?.selected);
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
                source={{
                  uri: props?.type == 'movie' ? item.thumbnail : props.image,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 15,
                }}></ImageBackground>
            </View>
          </View>
          {/* //Bottom View */}
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <View>
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
                {item.title}
              </Text>
              <Text
                style={[
                  {
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: StyleConfig.resHeight(24),
                    color: props?.selected == 1 ? 'black' : 'black',
                    fontWeight: '400',
                  },
                ]}>
                {DATA.type}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    {
                      fontFamily: primary_regular_font.primary_regular_font,
                      fontSize: StyleConfig.resHeight(24),
                      color: props?.selected == 1 ? 'black' : 'black',
                      fontWeight: '400',
                    },
                  ]}>{`${DATA.bornYear} ${DATA.country}`}</Text>

                {props?.selected != 1 ? (
                  <Image
                    style={{
                      width: StyleConfig.resWidth(20),
                      height: StyleConfig.resHeight(20),
                    }}
                    source={AppImages.heart}
                  />
                ) : null}

                {/* <View style={styles.ovalShapeView}>
                        <Text style={styles.rating}>{item.DATA.rating}</Text>
                    </View> */}
              </View>
              {/* <View style={{flexDirection:'row'}}>
                      <Text style={[{fontFamily:primary_regular_font.primary_regular_font,fontSize:StyleConfig.resHeight(24), color:props?.selected == 1 ? 'black' : 'black', fontWeight:'400'}]}>{`${DATA.match} match`}</Text>
                      <Text style={[{fontFamily:primary_regular_font.primary_regular_font,marginLeft:69 ,fontSize:StyleConfig.resHeight(24), color:props?.selected == 1 ? item.DATA.color : 'black', fontWeight:'700'}]}>{item.DATA.feedback}</Text>
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
  container: {
    marginVertical: StyleConfig.resHeight(10),
    marginHorizontal: StyleConfig.resWidth(10),
    // borderRadius:StyleConfig.resHeight(20),
    // borderWidth:1,
    // borderColor:'black'
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
  rating: {
    fontFamily: primary_regular_font.primary_regular_font,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: isAndroid() ? 10 : 18,
    color: 'white',
  },
  circleShape: {
    flexDirection: 'row',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9A9A9',
    // borderWidth:1,
    // borderColor:'red',
  },

  viewContainer: {
    // borderWidth: StyleConfig.resWidth(1),
    borderRadius: StyleConfig.resHeight(20),
    // backgroundColor:'rgba(255,255,255,0.9)',
    shadowColor: 'black',
    overflow: 'hidden',
    shadowOpacity: 0.9,
    elevation: 10,
    borderColor:'red',
    height: StyleConfig.width * 0.3,
  },

  highlight: {
    flexBasis: itemWidth + 30,
    height: StyleConfig.width * 0.37,
    marginTop: StyleConfig.resHeight(25),
    marginHorizontal: StyleConfig.resWidth(10),
    borderRadius: 20,
    overflow: 'hidden',
  },
  highlightFocused: {
    borderRadius: StyleConfig.resHeight(20),
    width: isAndroid() ? 180 : 356,
    borderWidth: StyleConfig.resWidth(5),
    height: isAndroid() ? StyleConfig.width * 0.25 : StyleConfig.width * 0.28,
    borderColor: colors.tomatoRed,
    overflow: 'hidden',
    paddingTop: 1,
  },
  notHighlightFocused: {
    borderRadius: StyleConfig.resHeight(20),
    width: isAndroid() ? 180 : 356,
    height: isAndroid() ? StyleConfig.width * 0.25 : StyleConfig.width * 0.28,
    paddingTop: 1,
    overflow: 'hidden',
  },
});
