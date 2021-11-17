import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import {useHeaderHeight} from '@react-navigation/stack';
import SVGTriangleBottom from '../../svgs/TriangleBottom';
import SVGTriangleTop from '../../svgs/TriangleTop';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets';
import primary_regular_font from '../../helper/fonts';
import {useTranslation} from 'react-i18next';
import {HEIGHT, WIDTH} from '../../helper/globalFunctions';
export const PROVIDER_DATA = [
  {
    id: '1',
    name: 'Free',
    subName: '4k',
    image: require('../../../assets/Providers/netflix_ic.png'),
  },
  {
    id: '2',
    name: 'Free',
    subName: '(ads)',
    image: require('../../../assets/Providers/prime_ic.png'),
  },
  {
    id: '3',
    name: '$4.99',
    subName: '',
    image: require('../../../assets/Providers/Hulu_ic.png'),
  },
  {
    id: '4',
    name: '$5.99',
    subName: '',
    image: require('../../../assets/Providers/apple_ic.png'),
  },
  {
    id: '4',
    name: 'Subs.',
    subName: '$6.99/m',
    image: require('../../../assets/Providers/disny_ic.png'),
  },
].flatMap((i) => [i, i]);
const items = [
  // {
  //   name: 'Trailer',
  //   image: AppImages.play,
  // },
  {
    name: 'texts.id_159',
    image: AppImages.netflix,
  },
  {
    name: 'texts.id_159',
    image: AppImages.amazon,
  },
  {
    name: 'texts.id_159',
    image: AppImages.hbo,
  },
  {
    name: 'texts.id_224',
    image: AppImages.youtube,
  },
  {
    name: 'texts.id_159',
    image: AppImages.amazon,
  },
  {
    name: 'texts.id_159',
    image: AppImages.hbo,
  },
  {
    name: 'texts.id_224',
    image: AppImages.youtube,
  },
  {
    name: 'texts.id_159',
    image: AppImages.amazon,
  },
  {
    name: '$5,99',
    image: AppImages.googlePlay,
  },
  {
    name: 'Subs. $6.99',
    image: AppImages.hulu,
  },
  {
    name: 'Subs. $8.99',
    image: AppImages.disnep,
  },
  {
    name: 'Subs. $8.99',
    image: AppImages.appleTv,
  },
];
let [
  NONE,
  SEARCH,
  MY_LIST,
  MOVIES,
  TV_SHOW,
  SHORTS,
  DIRECTOR,
  ACTOR,
  PROFILE,
  MENU,
] = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

const TVPosterCard = ({item,details, ...props}) => {
  const {t} = useTranslation();

  const headerHeight = useHeaderHeight();
  const [selected, setSelected] = useState(-1);

  return (
    <View style={{flexDirection: 'row'}}>
      {/* <View style={styles.viewContainer}>
                <ImageBackground
                    style={styles.container}
                    resizeMode={"stretch"}
                    source={
                        { uri:item.thumbnail}
                        } >
                        <View style={[{flex:1,flexDirection:'row', paddingTop:10, backgroundColor:"rgba(0,0,0, 0.3)", paddingLeft:35, paddingRight:10, justifyContent:'space-between'}]} >
                        <Icon name={"thumbs-down"}  size={50} color={"white"} />
                        <Icon name={"eye"} size={50} color={"white"} />
                        <Icon name={"thumbs-up"} size={50} color={"white"} />
                        <View style={[{ alignItems:'center', marginTop:-25}]}>
                        <Icon name={"bookmark"} size={100} color={"blue"} style={[{ }]} />
                        <Icon name={"plus"} size={35} color={"white"} style={[{position:'absolute', top:28}]} />
                        </View>
                        </View>
            </ImageBackground>
            </View> */}
      <View style={styles.detailViewContainer}>
        <View style={styles.notHighlightFocused}>
          <ImageBackground
            style={{width: '100%', height: '100%', borderRadius: 15,}}
            // resizeMode={'stretch'}
            // source={AppImages[item.thumbnail]}>
            source={{ uri: item?.image_url }}>
            {/* <View
              style={[
                {
                  flex: 1,
                  flexDirection: 'row',
                  paddingTop: 10,
                  backgroundColor: 'rgba(0,0,0, 0.3)',
                  paddingLeft: 35,
                  paddingRight: 10,
                  justifyContent: 'space-between',
                },
              ]}>
              <Icon
                name={'thumbs-down'}
                size={isAndroid() ? 25 : 50}
                color={'white'}
              />
              <Icon name={'eye'} size={isAndroid() ? 25 : 50} color={'white'} />
              <Icon
                name={'thumbs-up'}
                size={isAndroid() ? 25 : 50}
                color={'white'}
              />
              <View style={[{alignItems: 'center', marginTop: -25}]}>
                <Icon
                  name={'bookmark'}
                  size={isAndroid() ? 50 : 100}
                  color={'blue'}
                  style={[{}]}
                />
                <Icon
                  name={'plus'}
                  size={isAndroid() ? 25 : 35}
                  color={'white'}
                  style={[{position: 'absolute', top: 28}]}
                />
              </View>
            </View> */}
          </ImageBackground>
        </View>

        <View
          style={{
            marginLeft: isAndroid()
              ? StyleConfig.resWidth(27)
              : StyleConfig.resWidth(40),
          }}>
          <Text numberOfLines={1} style={[styles.titleText,]}>
            {item?.local_title}
          </Text>
          <Text 
          ellipsizeMode="tail" numberOfLines={1}
          style={[styles.subTextSecondary,{width:StyleConfig.resWidth(400)}]}>
            Name of original title if foreign
          </Text>
          {/* <View
            style={{
              flexDirection: 'row',
              marginTop: StyleConfig.resHeight(20),
            }}>
            <Text numberOfLines={1} style={styles.textSecondary}>
              {`${t('texts.id_134')} - 2019 - 154 min -18+`}
            </Text>

          </View> */}

          <View
            style={{
              flexDirection: 'row',
              // borderWidth: 1,
              // borderColor: 'green',
              paddingTop:StyleConfig.resHeight(20),
              // paddingBottom:StyleConfig.resHeight(10)

              // marginVertical: StyleConfig.resHeight(20),
            }}>
            <View
              style={{
                // borderWidth: 1,
                // maxWidth: WIDTH / 2,
                // borderColor: 'red',
                // marginTop: StyleConfig.resHeight(20),
              }}>
              <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{width:StyleConfig.resWidth(350)}]}>
                {/* {`${t('texts.id_134')} - 2019 - 154 min -18+`} */}
                {item?.genres+' - ' + item.year+' - '+ details.duration+' min'+'-'+item.age_rating+'+'} 

              </Text>
              {/* <View> */}
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.headTextSecondary,]}>
                  {t('professions.code_df')}:
                </Text>
                <Text 
                ellipsizeMode="tail" numberOfLines={1}
                style={[styles.textSecondary,{width:StyleConfig.resWidth(200)}]}> Todd Phillips</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.headTextSecondary,{width:StyleConfig.resWidth(80),}]}>
                  {t('texts.id_14')}:
                </Text>
                <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{width:StyleConfig.resWidth(610),}]}>
                  {' '}
                  Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy
                </Text>
              </View>
              {/* <Text style={styles.detailsText}>
                In Gotham City, mentally troubled comedian Arthur Fleck is
                disregarded and mistreated by society. He then embarks on a
                downward spiral of revolution and bloody crime. This path brings
                him into a dangerous downward spiral of revolution and bloody
                crime
              </Text> */}
              {/* </View> */}
              {/* <View
              style={{
                marginTop: StyleConfig.resHeight(20),
              }}>
              <Text
                numberOfLines={1}
                style={styles.textSecondary}>
                {`78% ${t('texts.id_104')} - 12`}
              </Text>
              <View
                style={{
                  marginStart: 120,
                  borderWidth: 3,
                  borderRadius: 15,
                  marginLeft: StyleConfig.resWidth(32),
                  borderColor: colors.white,
                  paddingHorizontal: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text numberOfLines={1} style={styles.typeText}>
                    {t('texts.id_210')}
                  </Text>
                  <Text style={styles.valueText}>9.0</Text>
                  <View style={{width: 1, backgroundColor: colors.white}} />
                  <Text numberOfLines={1} style={styles.typeText}>
                    {t('texts.id_212')}
                  </Text>
                  <Text style={styles.valueText}>9.0</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: -8}}>
                  <Text numberOfLines={1} style={styles.typeText}>
                    {t('texts.id_211')}
                  </Text>
                  <Text style={styles.valueText}>9.0</Text>
                  <View style={{width: 1, backgroundColor: colors.white}} />
                  <Text numberOfLines={1} style={styles.typeText}>
                    {t('texts.id_213')}
                  </Text>
                  <Text style={styles.valueText}>9.0</Text>
                </View>
              </View>
            </View> */}
            </View>
            {/* <Text style={styles.detailsText}>
                In Gotham City, mentally troubled comedian Arthur Fleck is
                disregarded and mistreated by society. He then embarks on a
                downward spiral of revolution and bloody crime. This path brings
                him into a dangerous downward spiral of revolution and bloody
                crime
              </Text> */}
            <View
              style={{
                width:Platform.OS==='android'? StyleConfig.resWidth(WIDTH - 310): StyleConfig.resWidth(WIDTH/2.8),
                // marginTop: StyleConfig.resHeight(20),
                marginLeft:45,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                }}>
                <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{marginBottom:5,width:StyleConfig.resWidth(180)}]}>
                  {`78% ${t('texts.id_104')} - 12`}
                </Text>
                <Icon
                  name={'thumbs-up'}
                  size={
                    isAndroid()
                      ? StyleConfig.resWidth(24)
                      : StyleConfig.resWidth(24)
                  }
                  color={'#35b736'}
                />
              </View>
              <View
                style={{
                  borderWidth: StyleConfig.resWidth(2),
                  borderColor: colors.white,
                  borderRadius: StyleConfig.resWidth(10),
                  flexDirection: 'row',
                  // backgroundColor: '#EAF2FF',
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    flex: 0.35,
                    justifyContent: 'center',
                    borderRightWidth: StyleConfig.resWidth(2),
                    paddingHorizontal: StyleConfig.resWidth(10),
                    borderColor: colors.white,
                    borderWidth:1.5,
                  }}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{width:StyleConfig.resWidth(100)}]}>{t('texts.id_210')}</Text>
                      <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{width:StyleConfig.resWidth(40)}]}>{item.awards_rating}</Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{width:StyleConfig.resWidth(100)}]}>{t('texts.id_211')}</Text>
                      <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{width:StyleConfig.resWidth(40)}]}>{item.critics_rating_displayed}</Text>
                    </View>
                  </View>
                </View>
                {/* <View
                  style={{
                    flex: 1,

                    padding:StyleConfig.resWidth(6),
                    borderRightWidth: StyleConfig.resWidth(2),
                    borderColor: colors.white,
                    justifyContent:'center'
                  }}>
                  <View style={{borderWidth:3}}>
                    <View
                      style={{

                        flexDirection: 'row',
                        justifyContent: 'space-between',

                      }}>
                      <Text style={styles.textSecondary}>Awards</Text>
                      <Text style={styles.textSecondary}>9.3</Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                      }}>
                      <Text style={styles.textSecondary}>Critics</Text>
                      <Text style={styles.textSecondary}>9.5</Text>
                    </View>
                  </View>
                </View> */}
                <View
                  style={{
                    flex: 0.35,
                    justifyContent: 'center',
                    paddingHorizontal: StyleConfig.resWidth(10),
                    borderColor: colors.white,
                    borderTopWidth:2,
                    borderStartWidth:2,
                    borderBottomWidth:2,
                  }}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text  ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{width:StyleConfig.resWidth(120)}]}>{t('texts.id_212')}</Text>
                      <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{width:StyleConfig.resWidth(40)}]}>{item.audience_rating_displayed}</Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,{width:StyleConfig.resWidth(120)}]}>{t('texts.id_213')}</Text>
                      <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.textSecondary,,{width:StyleConfig.resWidth(40)}]}>{item.box_office_rating}</Text>
                    </View>
                  </View>
                </View>

                <View style={{justifyContent: 'space-between'}}>
                  <SVGTriangleTop />
                  <SVGTriangleBottom />
                </View>
                <View
                  style={{
                    flex: 0.3,
                    // borderWidth: 2,
                    backgroundColor: '#4183E2',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.ratingText,{width:StyleConfig.resWidth(60),textAlign:'center'}]}>{item.rating}</Text>
                  <Text style={[styles.ratingText,{width:StyleConfig.resWidth(100),textAlign:'center'}]}>{item.rating >= 9 ? 
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
                'Terrible' :'Worst'}</Text>
                </View>
              </View>
              {/* <Text style={styles.textSecondary}>
                Won 2 oscars including best director
              </Text>
              <Text style={styles.textSecondary}>
                Nominated to 12 Sundance awards include best director
              </Text> */}
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              // marginTop: StyleConfig.resHeight(20),
            }}>
            <Text style={styles.detailsText}>
             {details?.plots}
            </Text>
            <View>
              <Text  ellipsizeMode="tail" numberOfLines={2} style={[styles.textSecondary,{marginTop:5,width:StyleConfig.resWidth(500)}]}>
                {
                  "Won 2 oscars including best director\nWon 1 G. Globe including best movie"
                }
              </Text>
              <Text style={styles.textSecondary} />
            </View>
          </View>

          {/* <Text style={styles.movieTypeText}>Watch:</Text> */}
          <ScrollView horizontal contentContainerStyle={[{flexGrow: 1}]}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginTop:12,
                width:Platform.OS==="ios"? StyleConfig.resWidth(WIDTH*0.776):StyleConfig.resWidth(WIDTH*0.8 *1.95),
                justifyContent:'space-evenly',
              }}>
              {/* <Icon  type="fontawesome" name={"play-circle"} style={{fontSize:80, color:colors.white}} /> */}
              <View
                style={
                  {
                    // position: 'relative',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }
                }>
                <Image
                  style={{
                    height: StyleConfig.resHeight(60),
                    width: StyleConfig.resWidth(60),
                    borderRadius: StyleConfig.resWidth(10),
                    // marginTop: StyleConfig.resHeight(10),
                    marginRight: StyleConfig.resHeight(10),
                  }}
                  source={AppImages.play}
                />
                <Text style={[styles.sortbyButText,{marginTop:5}]}>Trailor</Text>
              </View>
              {PROVIDER_DATA.map((obj, ind) => (
                <TouchableOpacity
                  onPress={() => alert('To be implemented')}
                  key={`${obj}-${ind}`}
                  // style={{margin: 4}}
                >
                  {/* <Image style={styles.watchImage} source={obj.image} />
                  <Text numberOfLines={1} style={styles.watchText}>
                    {t(obj.name)}
                  </Text> */}
                  <View
                    style={{
                      width:StyleConfig.resWidth(130),
                      //justifyContent:"space-between",
                      // position: 'relative',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={{marginBottom: StyleConfig.resHeight(10)}}>
                      <Image
                        keyExtractor={obj.id}
                        style={{
                          height: StyleConfig.resHeight(60),
                          width: StyleConfig.resWidth(90),
                          borderRadius: StyleConfig.resWidth(10),
                        }}
                        source={obj?.image}
                      />
                    </View>
                    <Text style={styles.sortbyButText}>{obj?.name}</Text>
                    <Text style={styles.sortbyButText}>{obj?.subName}</Text>
                  </View>
                </TouchableOpacity>
              ))}
              {/* <View style={{marginTop: 25}}>
                <Text style={styles.textFont}>Watch now</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  {PROVIDER_DATA.map((item, index) =>
                    renderProviderComponent(item),
                  )}
                </View>
              </View> */}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default TVPosterCard;

const isAndroid = () => {
  return Platform.OS == 'android';
};

const styles = StyleSheet.create({
  sortbyButText: {
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '400',
    fontSize: StyleConfig.resWidth(24),
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
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
    paddingTop:Platform.OS==="android"? 1:20,
    overflow: 'hidden',
  },
  viewContainer: {
    marginLeft: StyleConfig.resWidth(20),
    marginTop: StyleConfig.resHeight(20),
    borderRadius: StyleConfig.resHeight(30),
    // backgroundColor:'rgba(255,255,255,0.9)',
    // shadowColor: 'black',
    // shadowOpacity: 0.9,
    // overflow: 'hidden',
    // elevation: 10,
  },
  container: {
    // marginLeft: StyleConfig.resWidth(20),
    // marginTop: StyleConfig.resHeight(20),
    // borderRadius: StyleConfig.resHeight(30),
    // flex: 1,
    width: WIDTH * 0.19,
    height: WIDTH * 0.3,
  },
  detailViewContainer: {
    flexDirection: 'row',
    marginTop:Platform.OS==='ios'? StyleConfig.resHeight(-270):null,
    backgroundColor: 'rgba(0,0,0,0.33)',
    // borderRadius:StyleConfig.resHeight(20),
    flex: 1,
    // height: StyleConfig.height*0.4,
    // marginLeft:StyleConfig.resWidth(20),
    // marginTop: StyleConfig.resHeight(24),
    // marginRight: StyleConfig.resWidth(12),
    // padding: StyleConfig.resHeight(12),
    paddingTop:Platform.OS==='android'? StyleConfig.resHeight(25):null,
    paddingLeft: StyleConfig.resWidth(30),
  },
  textSecondary: {
    // borderWidth: 1,
    // width:StyleConfig.resWidth(120),
    lineHeight: StyleConfig.resHeight(30),
    color: colors.white,
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: StyleConfig.resHeight(26),
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
  },
  ratingText: {
    // borderWidth: 1,
    // lineHeight: StyleConfig.resHeight(18),
    color: colors.white,
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resHeight(26),
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  subTextSecondary: {
    marginTop: StyleConfig.resHeight(-10),
    color: colors.white,
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resHeight(26),
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
      ios:{
        fontFamily: primary_regular_font.primary_regular_font,
      }
    }),
  },
  headTextSecondary: {
    width:StyleConfig.resWidth(120),
    lineHeight: StyleConfig.resHeight(30),
    color: colors.white,
    fontWeight: '700',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: StyleConfig.resHeight(26),
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
  },
  titleText: {
    marginTop:Platform.OS==="android"? StyleConfig.resHeight(-10):StyleConfig.resHeight(10),
    // height:40,
    // margin:10,
    // marginBottom:-20,
    // borderWidth: 1,
    fontSize: StyleConfig.resWidth(60),
    fontWeight: '700',
    fontFamily: primary_regular_font.primary_bold_font,
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    // textShadowColor: 'rgba(255, 255, 255, 0.75)',
    // textShadowOffset: {width: -2, height: 2},
    // textShadowRadius: 10,
    color: colors.white,
  },
  typeText: {
    fontSize: StyleConfig.resHeight(24),
    minWidth: StyleConfig.resWidth(140),
    maxWidth: 180,
    paddingLeft: StyleConfig.resWidth(6),
    paddingVertical: StyleConfig.resWidth(2),
    color: colors.white,
    fontWeight: '600',
    fontFamily: primary_regular_font.primary_regular_font,
  },
  valueText: {
    fontSize: StyleConfig.resHeight(24),
    paddingRight: StyleConfig.resWidth(6),
    paddingVertical: StyleConfig.resWidth(2),
    color: colors.white,
  },
  commentText: {
    fontSize: 26,
    paddingVertical: StyleConfig.resWidth(2),
    color: colors.white,
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_regular_font,
  },
  movieTypeText: {
    fontSize: StyleConfig.resHeight(20),
    paddingVertical: StyleConfig.resWidth(2),
    fontWeight: '700',
    color: colors.white,
    marginTop: 10,
    fontFamily: primary_regular_font.primary_regular_font,
  },
  movieValueText: {
    fontWeight: '300',
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
  },
  detailsText: {
    width:Platform.OS==='android'? WIDTH * 0.41:WIDTH * 0.386,
    fontSize: StyleConfig.resHeight(26),
    lineHeight: StyleConfig.resHeight(30),
    // marginTop: 20,
    // marginBottom: 20,
    color: colors.white,
    fontWeight: '400',
    fontFamily: primary_regular_font.primary_regular_font,
  },
  ratingWrap: {
    backgroundColor: colors.tomatoRed,
    height: StyleConfig.resHeight(34),
    width: StyleConfig.resWidth(34),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    transform: [{scaleX: 2}],
  },
  ratingWrap2: {
    backgroundColor: colors.marinerBlue,
    paddingHorizontal: StyleConfig.resWidth(10),
    paddingVertical: StyleConfig.resHeight(5),
    borderRadius: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    color: colors.white,
  },
  spaceVertical: {
    height: StyleConfig.resHeight(20),
  },
  watchImage: {
    width: StyleConfig.resWidth(100),
    height: StyleConfig.resHeight(100 / 2),
    borderRadius: 4,
  },
  watchText: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resWidth(24),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    marginTop: StyleConfig.resHeight(4),
    color: colors.white,
    textAlign: 'center',
    // maxWidth: 110,
  },
  greatText: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '700',
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
  },
});
