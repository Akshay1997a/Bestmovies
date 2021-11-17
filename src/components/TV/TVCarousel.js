import React, {useRef, useState, useEffect, useCallback} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Pressable,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Loader from '../../components/Loader';

import TVMovieListItem from '../../components/TV/TVMovieListItem';
import TVPosterCard from '../../components/TV/TVPosterCard';
import TVCardDetail from '../../components/TV/TVCardDetail';
import TVCast from '../../components/TV/TVCast';
import primary_regular_font from '../../helper/fonts';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import strings from '../../helper/strings';
import AppImages from '../../assets';
import {useTranslation} from 'react-i18next';
import {HEIGHT, WIDTH} from '../../helper/globalFunctions';
import axios from 'axios';
import i18next from 'i18next';
import {runTimeTranslations} from '../../i18n';
const CAST = [
  {
    id: 1,
    feedback: 'texts.id_214',
    rating: '123',
    name: 'Todd Phillips',
    type: 'texts.id_129',
    country: 'countries.code_US',
    dob: '1927',
    bornYear: '2019 -',
    match: '78% match - 12 ',
    follower: '5.7',
    designation: 'texts.id_12',
    color: '#868686',
    thumbnail: 'cast2',
  },
  {
    id: 2,
    feedback: 'texts.id_214',
    rating: '57',
    name: 'Jaqquin Phoenix',
    type: 'texts.id_129',
    country: 'countries.code_US',
    dob: '1927',
    bornYear: '2019 -',
    match: '78% match - 12 ',
    follower: '5.7',
    designation: 'texts.id_12',
    color: colors.black,
    thumbnail: 'cast5',
  },
  {
    id: 3,
    feedback: 'texts.id_214',
    rating: '8',
    name: 'Robert Denaro',
    type: 'texts.id_129',
    country: 'countries.code_US',
    dob: '1927',
    bornYear: '2019 -',
    match: '78% match - 12 ',
    follower: '5.7',
    designation: 'texts.id_12',
    color: colors.black,
    thumbnail: 'cast4',
  },
  {
    id: 4,
    feedback: 'texts.id_214',
    rating: '473',
    name: 'Brett Cullin',
    type: 'texts.id_129',
    country: 'countries.code_US',
    dob: '1927',
    bornYear: '2019 -',
    match: '78% match - 12 ',
    follower: '5.7',
    designation: 'texts.id_12',
    color: '#868686',
    thumbnail: 'cast3',
  },
  {
    id: 5,
    feedback: 'texts.id_214',
    rating: '12,50',
    name: 'ShiaWigham',
    type: 'texts.id_129',
    country: 'countries.code_US',
    dob: '1927',
    bornYear: '2019 -',
    match: '78% match - 12 ',
    follower: '5.7',
    designation: 'texts.id_12',
    color: '#4183e2',
    thumbnail: 'cast4',
  },
  {
    id: 6,
    feedback: 'texts.id_214',
    rating: '24,85',
    name: 'Todd Phillips',
    type: 'texts.id_129',
    country: 'countries.code_US',
    dob: '1927',
    bornYear: '2019 -',
    match: '78% match - 12 ',
    follower: '5.7',
    designation: 'texts.id_12',
    color: '#35b736',
    thumbnail: 'cast5',
  },

  {
    id: 7,
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
    color: '#35b736',
    thumbnail: 'cast5',
  },
  {
    id: 8,
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
    color: '#35b736',
    thumbnail: 'cast3',
  },
  {
    id: 9,
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
    color: '#35b736',
    thumbnail: 'cast2',
  },
  {
    id: 10,
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
    color: '#35b736',
    thumbnail: 'cast4',
  },
];

const ENTRIES1 = [
  // {
  //   title: 'Beautiful and dramatic Antelope Canyon',
  //   subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
  //   illustration: 'https://i.imgur.com/UYiroysl.jpg',
  // },
  // {
  //   title: 'Beautiful and dramatic Antelope Canyon',
  //   subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
  //   illustration: 'https://i.imgur.com/UYiroysl.jpg',
  // },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
const {width: screenWidth, height} = Dimensions.get('window');

const MyCarousel = ({item, posts, ...props}) => {
  // console.log('props',props);
  const {t,i18n} = useTranslation();

  const [focus, setFocus] = useState(0);
  const [movieItem, setMovieItem] = useState(null);
  const [director, setDirector] = useState(null);
  const [actor, setActor] = useState(null);
  const [similarTitles, setSimilar] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [countriesListed, setCountryList] = useState(null);
  

  const onFocus = useCallback(() => {
    setFocus(0);
  }, [0]);

  const onBlur = useCallback(() => {
    setFocus(-1);
  }, []);

  // const {item } = props.route.params;

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  const getMovies = () =>{
    axios
    .get('http://18.119.119.183:3003/titles?device=tv&output=det&limit=1&id='+item.id)
    .then(function (response) {
      // handle success
      // setAboutUsData(response.data.data.static_pages);
      // setMovies(response.data.data)
      console.log(response);
      let data  = response.data.data[0];
      let images  = data.images;
    setEntries(images);
    setMovieItem(data);
    getSimilar(data.similar_titles)
      getActor(data.directors,data.actors);
      getDirector(data.directors,data.actors);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  const getSimilar = (similar) =>{
    var array = similar.split(',');
    let req = '';

    for(let i =0 ;i < array.length ;i++){
      req += 'id='+array[i]+'&';
    }
    axios
    .get('http://18.119.119.183:3003/titles?device=tv&output=ove&limit=20&id='+req)
    .then(function (response) {
      // handle success
      // setAboutUsData(response.data.data.static_pages);
      let lng = i18n.language;
      let countryData = i18next.getDataByLanguage(lng);
      let countries_listed = countryData?.translation?.countries_listed;
      let genres_listed = countryData?.translation?.genres;

      let movie =  response.data.data;
      
      for(let i =0 ;i < movie.length ;i++){
        let req = movie[i];
        let str = '';
        let strGenres = '';

        let country = req.origins.split(',');
        let genres = req.genres.split(',');
        for(let j =0 ;j < country.length ;j++){
         let locstr = countries_listed["code_"+ country[j]];
         if(country.length > 1 && j <country.length-1){
            str+=locstr+','
         }else{
          str += locstr
         }

        }
        for(let k =0 ;k < genres.length ;k++){
          let locstrGen = genres_listed["code_"+ genres[k]];
          if(genres.length > 1 && k <genres.length-1){
            strGenres+=locstrGen+','
          }else{
            strGenres += locstrGen
          }
         }
        // let str = countries_listed["code_"+ req.country_cd];
        movie[i].origins = str;
        movie[i].genres = strGenres;
      }
      setSimilar(movie)
    //   console.log(response);
    //   let data  = response.data.data[0];
    //   let images  = data.images;
    // setEntries(images);
    // setMovieItem(data);
      // getActorDirector(data.directors,data.actors);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  const getActor = (director,actors) =>{
    var array = actors.split(',');
    const idArry = [];
    let req = '';
    for(let i =0 ;i < array.length ;i++){
      req += '&id='+array[i];
    }
    axios
    .get('http://18.119.119.183:3005/artists?output=overview'+req )
    .then(function (response) {
      // handle success
      // setAboutUsData(response.data.data.static_pages);
      // setMovies(response.data.data)
      let lng = i18n.language;
      let countryData = i18next.getDataByLanguage(lng);
      let countries_listed = countryData?.translation?.countries_listed;
      let actor =  response.data.data;
      for(let i =0 ;i < actor.length ;i++){
        let req = actor[i];
        let str = countries_listed["code_"+ req.country_cd];
        req.country_cd = str;
      }
      setActor(actor);
      setLoaded(true);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  const getDirector = (director,actors) =>{
    var array = actors.split(',');
    const idArry = [];
    let req = '';
    let dir = '';
    dir = '&id='+director;
    // for(let i =0 ;i < array.length ;i++){
    //   req += '&id='+array[i];
    // }
    axios
    .get('http://18.119.119.183:3005/artists?output=overview'+dir )
    .then(function (response) {
      // handle success
      // setAboutUsData(response.data.data.static_pages);
      // setMovies(response.data.data)
      let lng = i18n.language;
      let countryData = i18next.getDataByLanguage(lng);
      let countries_listed = countryData?.translation?.countries_listed;
      let director =  response.data.data;
      for(let i =0 ;i < director.length ;i++){
        let req = director[i];
        let str = countries_listed["code_"+ req.country_cd];
        req.country_cd = str;
      }
      setDirector(director);
     

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  const getCountry = (code) =>{
    // let data = code.split(',');
    let str  = '';
    // let data = countryList;
    // if(data && countryList !== null){
    //   for(const val of data) {
    //      str = str+ countryList["code_"+ val];
    //      return str;
    // }
  // }
  }
  useEffect(() => {

   
    // setCountryList(countries_listed)

    getMovies()
    // setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ImageBackground
          source={{uri: item}}
          containerStyle={styles.imageContainer}
          style={[styles.image]}
        />
        {/* <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text> */}
        {/* <TVPosterCard item={item} {...props} /> */}
      </View>
    );
  };
  const bottomRenderItem = (
    // item,
    // index,
    {item, index},
  ) => {
    console.log('item daaaaaaa', item);
    return (
      // <View style={styles.secondItem}>
      <Image
        source={{uri: item}}
        // containerStyle={styles.imageContainer}
        style={[styles.bottomImage]}
      />
      // </View>
    );
  };
  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <View style={[styles.container, {}]}>
      <ScrollView>
        <TouchableOpacity onPress={goForward}>
          {/* <Text>go to next slide</Text> */}
        </TouchableOpacity>

        <Carousel
          loop={true}
          autoplayDelay={4000}
          autoplay={true}
          ref={carouselRef}
          sliderWidth={WIDTH}
          sliderHeight={HEIGHT}
          itemWidth={screenWidth}
          data={entries}
          renderItem={renderItem}
          // hasParallaxImages={true}
        />

        <View style={[styles.item, {position: 'absolute', zIndex: 1}]}>
          <Pressable
            onFocus={onFocus}
            onBlur={onBlur}
            // hasTVPreferredFocus={true}
            // autoFocus={true}
            style={({pressed, focused}) =>
              focused ? styles.focusBackWrap : styles.notfocusbackWrap
            }
            onPress={() => props.navigation.goBack()}>
            <Image
              style={{
                width: StyleConfig.resWidth(60),
                height: StyleConfig.resHeight(60),
              }}
              source={AppImages.arrow_left}
            />
            {/* <Icon name={"arrow-left"} type={"fontawesome"} size={70} color="white" /> */}
          </Pressable>
          <View
            style={[
              styles.item,
              {
                position: 'absolute',
                top: isAndroid()
                  ? StyleConfig.resHeight(130)
                  : StyleConfig.resHeight(450),
                bottom: 0,
                marginTop: HEIGHT * 0.33,
              },
            ]}>
            <TVPosterCard item={item} details = {movieItem} {...props} />
          </View>
        </View>
        <View>
          {/* <Carousel
            slideInterpolatedStyle={_animatedStyles}
            useScrollView={true}
            layout={'default'}
            autoplay={false}
            loop={true}
            data={
              currentListing.attributes.publicData.videoUrls?.length > 0 &&
              currentListing.attributes.publicData.videoUrls[0]?.link
                ? [currentListing.attributes.publicData.videoUrls, ...images]
                : images
            }
            sliderWidth={width}
            itemWidth={width}
            renderItem={_renderItem}
            onSnapToItem={(index) => {
              setPaginationState(index), setPaginationStateM(index);
            }}
          /> */}
          <Carousel
            slideInterpolatedStyle={_animatedStyles}
            //  vertical={3}
            loop={true}
            autoplayDelay={400}
            autoplay={true}
            ref={carouselRef}
            sliderWidth={WIDTH}
            sliderHeight={HEIGHT}
            itemWidth={isAndroid()?StyleConfig.resWidth(480):StyleConfig.resWidth(480)}
            itemHeight={isAndroid()?StyleConfig.resHeight(360):StyleConfig.resHeight(360)}
            data={entries}
            renderItem={bottomRenderItem}
            hasParallaxImages={true}
          />
          {/* <FlatList
            contentContainerStyle={[{flex: 1, flexDirection: 'row'}]}
            data={entries}
            renderItem={bottomRenderItem}
          /> */}
        </View>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row', paddingLeft: 10}}>
            <View style={{marginTop: isAndroid() ? 6 : 16}}>
              <Text numberOfLines={1} style={styles.director}>
                {t('professions.code_df')}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TVCast item={director?.[0]} {...props} image={item?.director_image} />
              </View>
            </View>
            <View
              style={{
                marginTop: isAndroid() ? 6 : 16,
                marginLeft: isAndroid() ? 10 : 30,
              }}>
              <Text numberOfLines={1} style={[styles.director,{width:180}]}>
                {t('texts.id_14')}
              </Text>

              <View style={{flexDirection: 'row'}}>
                {actor.map((obj, ind) => (
                  <TVCast item={obj} type={'movie'} />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row', paddingLeft: 10}}>
          <View style={{marginTop: isAndroid() ? 0 : 0}}>
            <Text numberOfLines={1} style={styles.similar_titles}>
              {t('texts.id_230')}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <FlatList
                hasTVPreferredFocus={true}
                contentContainerStyle={{paddingBottom: 50}}
                keyExtractor={(item, index) => `item${index}`}
                numColumns={5}
                data={similarTitles}
                renderItem={({item}) => (
                  <TVMovieListItem item={item} {...props} type="movie" />
                )}
              />
            </View>
          </View>
        </View>

        <Pressable
          onFocus={onFocus}
          onBlur={onBlur}
          // hasTVPreferredFocus={true}
          // autoFocus={true}
          style={({pressed, focused}) =>
            focused ? styles.focusBackWrap : styles.notfocusbackWrap
          }
          onPress={() => props.navigation.goBack()}>
          <View style={{flexDirection: 'row', width: 100}}>
            <Image
              style={{
                width: StyleConfig.resWidth(60),
                height: StyleConfig.resHeight(60),
              }}
              source={AppImages.arrow_left}
            />
          </View>

          {/* <Icon name={"arrow-left"} type={"fontawesome"} size={70} color="white" /> */}
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default MyCarousel;

const isAndroid = () => {
  return Platform.OS == 'android';
};
const _animatedStyles = (index, animatedValue, carouselProps) => {
  return;
  // const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
  // const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

  // return {
  //     zIndex: carouselProps.data.length - index,
  //     opacity: animatedValue.interpolate({
  //         inputRange: [2, 3],
  //         outputRange: [1, 0]
  //     }),
  //     transform: [{
  //         rotate: animatedValue.interpolate({
  //             inputRange: [-1, 0, 1, 2, 3],
  //             outputRange: ['0deg', '0deg', '0deg', '0deg', '0deg'],

  //         })
  //     }, {
  //         [translateProp]: animatedValue.interpolate({
  //             inputRange: [-1, 0, 1, 2, 3],
  //             outputRange: [
  //                 -sizeRef,
  //                 -sizeRef,
  //                 -sizeRef, // centered
  //                 -sizeRef, // centered
  //                 -sizeRef // centered
  //             ],
  //             extrapolate: 'clamp'
  //         })
  //     }]
  // };
};
const styles = StyleSheet.create({
  similar_titles: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? 17 : 37.33,
    marginLeft: 12,
    fontWeight: '700',
    color: colors.black,
    maxWidth: 400,
  },
  director: {
    //marginTop:Platform.OS==='ios'?65:null,
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: StyleConfig.resWidth(37.33),
    marginLeft: StyleConfig.resWidth(12),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: colors.black,
  },
  cast: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? 17 : 37,
    marginLeft: 12,
    fontWeight: '700',
    color: colors.black,
    maxWidth: 300,
  },
  title: {
    fontSize: 40,
  },
  container: {
    flex: 1,
    zIndex: 1,
  },
  item: {
    width: WIDTH,
    height: HEIGHT,
    // backgroundColor: 'red',
    // isAndroid() ? screenWidth - 500 : 1000,
  },
  secondItem: {
    // marginTop:40,
    width: isAndroid() ? 200 : 400,
    height: isAndroid() ? 200 : 400,
  },
  imageContainer: {
    flex: 1,
    // marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    // backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    // resizeMode: 'cover',
  },
  bottomImage: {
    //resizeMode:"cover",
    width:isAndroid()? StyleConfig.resWidth(480):StyleConfig.resWidth(480),
    height:isAndroid()? StyleConfig.resHeight(360):StyleConfig.resHeight(360),
  },
  notfocusbackWrap: {
    margin: StyleConfig.resWidth(30),
    // paddingHorizontal: StyleConfig.resWidth(8),
    paddingVertical: StyleConfig.resHeight(4),
    // margin: 4,
    // marginLeft:10,
  },
  focusBackWrap: {
    margin: StyleConfig.resWidth(30),
    width: StyleConfig.resWidth(60),
    height: StyleConfig.resWidth(60),
    borderRadius: StyleConfig.resWidth(35),
    backgroundColor: colors.tomatoRed,
    // paddingHorizontal: isAndroid() ? 0: StyleConfig.resWidth(8),
    // paddingVertical:  isAndroid() ? 0:StyleConfig.resHeight(4),
    // margin: isAndroid() ? 0:4,
    // borderRadius: 10,

    // marginLeft:10,
  },
});
