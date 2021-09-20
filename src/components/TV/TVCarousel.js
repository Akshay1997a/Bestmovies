import React, {useRef, useState, useEffect,useCallback} from 'react';
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
    Platform
 } from 'react-native'
import TVMovieListItem from '../../components/TV/TVMovieListItem'
import TVPosterCard from '../../components/TV/TVPosterCard'
import TVCardDetail from '../../components/TV/TVCardDetail'
import TVCast from '../../components/TV/TVCast'
import primary_regular_font from '../../helper/fonts';
 import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import strings from '../../helper/strings';
import AppImages from '../../assets'

// import {
//   View,
//   Text,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
//   Image,
//   ImageBackground,
//   ScrollView,
//   Pressable

// } from 'react-native';
// import TVPosterCard from '../../components/TV/TVPosterCard'

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
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
const {width: screenWidth,height} = Dimensions.get('window');

const MyCarousel = ({item,posts, ...props})=>{
  // console.log('props',props);

  const [focus, setFocus] = useState(0);
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

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ImageBackground
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
         

        >
         
          </ImageBackground>
        {/* <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text> */}
        {/* <TVPosterCard item={item} {...props} /> */}
      </View>
    );
  };
  const bottomRenderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.secondItem}>
        <Image
          source={{uri: item.illustration}}
          // containerStyle={styles.imageContainer}
          style={styles.bottomImage}
         

        >
         
          </Image>
        {/* <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text> */}
        {/* <TVPosterCard item={item} {...props} /> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
       <ScrollView>

      <TouchableOpacity onPress={goForward}>
        {/* <Text>go to next slide</Text> */}
      </TouchableOpacity>

      <Carousel
      loop={true}
      autoplayDelay={4000}
      autoplay={true}
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={entries}
        renderItem={renderItem}
        // hasParallaxImages={true}
      />
      <View style={[styles.item, {position: 'absolute',zIndex:1}]}>
     

      <Pressable 
                  onFocus={onFocus}
                  onBlur={onBlur}
                  // hasTVPreferredFocus={true}
                  // autoFocus={true} 
                  style={({pressed, focused}) => focused ? styles.focusBackWrap : styles.notfocusbackWrap}

                  onPress={()=>props.navigation.goBack()}>
                    <Image style={{ width: StyleConfig.resWidth(60),
                            height: StyleConfig.resHeight(60),}} source={AppImages.arrow_left} />
                    {/* <Icon name={"arrow-left"} type={"fontawesome"} size={70} color="white" /> */}
                </Pressable>
                <View style={[styles.item, {position: 'absolute',top: isAndroid() ? 160: 450}]}>
            <TVPosterCard item={item} {...props} />
        </View>
      </View>
     
      
        <Carousel
      //  vertical={3}
      loop={true}
      autoplayDelay={4000}
      // autoplay={true}
        ref={carouselRef}
        sliderWidth={screenWidth}
        // sliderHeight={100}
        itemWidth={ isAndroid() ? 190 :400}
        itemHeight={110}
        data={entries}
        renderItem={bottomRenderItem}
        // hasParallaxImages={true}
      />
        <View style={{flexDirection: 'row', }}>
                <View style={{ marginTop: isAndroid() ? 6 :16 }}>
                  <Text style={styles.director}>Director:</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TVCast item={item} {...props} image = {item.director_image} />
                  </View>
                </View>
                <View style={{ marginTop: isAndroid() ? 6 : 16 ,marginLeft:isAndroid() ? 10 :30}}>
                  <Text style={styles.cast}>Cast:</Text>
                  <View style={{flexDirection: 'row'}}>

                  {item.actors_image.map((obj, ind)=>(
                    <TVCast item={item} {...props}  image = {obj} />

                     ))}
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{  marginTop: isAndroid() ? 0: 0 }}>
                  <Text style={styles.similar_titles}>{strings.similar_titles}</Text>
                  <View style={{flexDirection: 'row'}}>
                  <FlatList
                   hasTVPreferredFocus={true}
                   contentContainerStyle={{paddingBottom:50}}
                   keyExtractor={(item, index) => `item${index}`}
                  numColumns={5}
                  data={posts}
                  renderItem = {({item}) => (
                    <TVMovieListItem item={item} {...props}  type = "movie"  />
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
                  style={({pressed, focused}) => focused ? styles.focusBackWrap : styles.notfocusbackWrap}
                  onPress={()=>props.navigation.goBack()}>
                    <View style={{flexDirection:'row',width:100}} >

                    <Image style={{ width: StyleConfig.resWidth(60),
                            height: StyleConfig.resHeight(60),}} source={AppImages.arrow_left} />
                    </View>

                    {/* <Icon name={"arrow-left"} type={"fontawesome"} size={70} color="white" /> */}
                </Pressable>

       </ScrollView>

    </View>
  );
};

export default MyCarousel;

const isAndroid = () => {
	return Platform.OS == "android";
};

const styles = StyleSheet.create({
  similar_titles:
  {
    fontFamily:primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? 17 : 37.33,
     marginLeft:12,
      fontWeight:'700',
       color:colors.black
},
  director:{
    fontFamily:primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? 17 : 37,
     marginLeft:12, 
     fontWeight:'700',
      color:colors.black, 
    },
  cast:{
    fontFamily:primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? 17 : 37,
    marginLeft:12,
    fontWeight:'700',
    color:colors.black,
  },
  title:{
    fontSize:40
  },
  container: {
    flex: 1,
    zIndex:1
  },
  item: {
    width: screenWidth,
    height: isAndroid() ?   screenWidth-500 :1000,
  },
  secondItem: {
    // marginTop:40,
    width: isAndroid() ?  200 : 400,
    height: isAndroid() ? 200 :400,
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
    // resizeMode: 'cover',
    width: isAndroid() ?  210 : 400,
    height: 400,
    
  },
  notfocusbackWrap:{
        
    paddingHorizontal: StyleConfig.resWidth(8),
    paddingVertical: StyleConfig.resHeight(4),
    // margin: 4,
    // marginLeft:10,
},
focusBackWrap:{
  width:100,
  backgroundColor: colors.tomatoRed,
        // paddingHorizontal: isAndroid() ? 0: StyleConfig.resWidth(8),
        // paddingVertical:  isAndroid() ? 0:StyleConfig.resHeight(4),
        // margin: isAndroid() ? 0:4,
        borderRadius:10,

    // marginLeft:10,
},
});

