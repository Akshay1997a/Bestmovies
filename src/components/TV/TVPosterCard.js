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
import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets';
import primary_regular_font from '../../helper/fonts';
import {useTranslation} from 'react-i18next';
import {WIDTH} from '../../helper/globalFunctions';

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

const TVPosterCard = ({item, ...props}) => {
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
        <View style={styles.viewContainer}>
          <ImageBackground
            style={styles.container}
            // resizeMode={'stretch'}
            source={AppImages[item.thumbnail]}>
            <View
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
            </View>
          </ImageBackground>
        </View>

        <View style={{marginLeft: isAndroid() ? 27 : 40}}>
          <Text numberOfLines={2} style={styles.titleText}>
            {item?.title}
          </Text>
          <Text
            style={[
              {
                fontFamily: primary_regular_font.primary_regular_font,
                fontSize: isAndroid() ? 17 : 26,
                fontWeight: '400',
                color: 'white',
                marginTop: -15,
              },
            ]}>
            Name of original title if foreign
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text
              style={[
                {
                  fontFamily: primary_regular_font.primary_regular_font,
                  fontSize: isAndroid() ? 17 : 26,
                  fontWeight: '400',
                  color: 'white',
                },
              ]}>
              Crime, Drama ,Thriller - 2019 - 154 min -18+
            </Text>
            {/* <View style={{marginStart: 385}}>
              
            </View> */}
          </View>

          <View style={{flexDirection: 'row'}}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: isAndroid() ? 17 : 27,
                    fontWeight: '700',
                    color: colors.white,
                  }}>
                  {t('professions.code_df')}:
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: isAndroid() ? 16 : 26,
                    fontWeight: '400',
                    color: colors.white,
                  }}>
                  {' '}
                  Todd Phillips
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  maxWidth: WIDTH * 0.388,
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    maxWidth: 140,
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: isAndroid() ? 17 : 27,
                    fontWeight: '700',
                    color: colors.white,
                  }}>
                  {t('texts.id_14')}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    maxWidth: 180,
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: isAndroid() ? 17 : 27,
                    fontWeight: '700',
                    color: colors.white,
                  }}>
                  :
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: isAndroid() ? 16 : 26,
                    fontWeight: '400',
                    color: colors.white,

                    minWidth: WIDTH * 0.29,
                    // maxWidth: WIDTH * 0.3,
                  }}>
                  {' '}
                  Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy
                </Text>
              </View>
            </View>
            <View
              style={{
                // flexDirection: 'row',
                marginTop: StyleConfig.resHeight(20),
              }}>
              <Text
                style={[
                  {
                    marginStart: 120,
                    fontFamily: primary_regular_font.primary_regular_font,
                    fontSize: isAndroid() ? 17 : 26,
                    fontWeight: '400',
                    color: 'white',
                  },
                ]}>
                78% match - 12
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
                  <View
                    style={{width: 1, backgroundColor: colors.white}}></View>
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
                  <View
                    style={{width: 1, backgroundColor: colors.white}}></View>
                  <Text numberOfLines={1} style={styles.typeText}>
                    {t('texts.id_213')}
                  </Text>
                  <Text style={styles.valueText}>9.0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.detailsText}>
              In Gotham City, mentally troubled comedian Arthur Fleck is
              disregarded and mistreated by society. He then embarks on a
              downward spiral of revolution and bloody crime. This path brings
              him into a dangerous downward spiral of revolution and bloody
              crime
            </Text>
            <View style={{marginLeft: WIDTH * 0.05}}>
              <Text style={styles.commentText}>
                {
                  'Won 2 oscars including best director\nWon 1 G. Globe including best movie'
                }
              </Text>
              <Text style={styles.commentText}></Text>
            </View>
          </View>

          {/* <Text style={styles.movieTypeText}>Watch:</Text> */}
          <ScrollView horizontal contentContainerStyle={[{flexGrow: 1}]}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'flex-end',
              }}>
              {/* <Icon  type="fontawesome" name={"play-circle"} style={{fontSize:80, color:colors.white}} /> */}

              {items.map((obj, ind) => (
                <TouchableOpacity
                  onPress={() => alert('To be implemented')}
                  key={`${obj}-${ind}`}
                  style={{margin: 4}}>
                  <Image style={styles.watchImage} source={obj.image} />
                  <Text numberOfLines={1} style={styles.watchText}>
                    {t(obj.name)}
                  </Text>
                  {/* <Text style={styles.watchText}>/month</Text> */}
                </TouchableOpacity>
              ))}
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
  viewContainer: {
    marginLeft: StyleConfig.resWidth(20),
    marginTop: StyleConfig.resHeight(20),
    borderRadius: StyleConfig.resHeight(30),
    // backgroundColor:'rgba(255,255,255,0.9)',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    overflow: 'hidden',
    elevation: 10,
  },
  container: {
    // flex: 1,
    width: WIDTH * 0.19,
    height: WIDTH * 0.28,
  },
  detailViewContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.33)',
    // borderRadius:StyleConfig.resHeight(20),
    flex: 1,
    // height: StyleConfig.height*0.4,
    // marginLeft:StyleConfig.resWidth(20),
    marginTop: StyleConfig.resHeight(24),
    // marginRight: StyleConfig.resWidth(12),
    padding: StyleConfig.resHeight(12),
    // paddingLeft:StyleConfig.resWidth(40)
  },
  titleText: {
    fontSize: StyleConfig.resHeight(60),
    fontWeight: '700',
    fontFamily: primary_regular_font.primary_regular_font,
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
    width: WIDTH * 0.4,
    fontSize: StyleConfig.resHeight(26),
    marginTop: 4,
    marginBottom: 20,
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
    backgroundColor: colors.blue_color,
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
    fontSize: StyleConfig.resHeight(18),
    fontWeight: '500',
    marginTop: 4,
    color: colors.white,
    textAlign: 'center',
    maxWidth: 110,
  },
  greatText: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '700',
    color: colors.white,
    fontFamily: primary_regular_font.primary_regular_font,
  },
});
