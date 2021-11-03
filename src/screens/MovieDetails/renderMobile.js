/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  Share,
  TouchableWithoutFeedback,
  InteractionManager,
  Animated,
  Platform,
} from 'react-native';
// import { TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Feather';
import Iconm from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import CardView from '../Movies/CardView';
import Orientation from 'react-native-orientation';
import Inocons from 'react-native-vector-icons/Ionicons';
import {VIEW_STYLE} from '../../redux/FilterModule/FilterTypes';
import {FILTER_TYPES} from '../Movies/renderMobile';
import Header, {
  HEADER_HEIGHT,
  TOTAL_HEADER_HEIGHT,
  useCollapsibleHeaderHOC,
} from '../../components/Header';
import Movies from '../Movies';
import Loader from '../../components/Loader';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {TopBarContext} from '../../setup/TopBarNavigator';
import {withCollapsebleHOC} from '../../components/Header';
import SVGTriangleBottom from '../../svgs/TriangleBottom';
import SVGTriangleTop from '../../svgs/TriangleTop';

import AntDesign from 'react-native-vector-icons/AntDesign';
import RatingComponent from '../../svgs/RatingComponent';
import {withTranslation} from 'react-i18next';
import primary_regular_font, {isAndroid} from '../../helper/fonts';
import {fontScale, heightScale, widthScale} from '../../helper/ResponsiveFonts';
import FeatherIcon from 'react-native-vector-icons/Feather';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

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
].flatMap((i) => [i, i, i]);

const DATA = [
  {
    id: '1',
    name: 'First Item',
    image: require('../../../assets/poster3.jpg'),
  },
  {
    id: '2',
    name: 'Second Item',
    image: require('../../../assets/poster1.jpg'),
  },
  {
    id: '3',
    name: 'Third Item',
    image: require('../../../assets/poster2.jpg'),
  },
  {
    id: '4',
    name: 'Third Item',
    image: require('../../../assets/poster3.jpg'),
  },
  {
    id: '5',
    name: 'Third Item',
    image: require('../../../assets/poster4.jpg'),
  },
  {
    id: '6',
    name: 'Third Item',
    image: require('../../../assets/poster5.jpg'),
  },
];

class RenderMobile extends Component {
  constructor(props) {
    super(props);
    console.log('MoviesDetails', props);
    this.offset = 0;
    this.scrollviewRef = React.createRef();
    this.flatlistRef = React.createRef();
    this.state = {
      modalVisible: false,
      likeModal: false,
      shearModal: false,
      isIntroTipVisible: false,
      hasTipShowned: false,
      selectedFilter: FILTER_TYPES.FILTER_BY_RATING,
      isLoaded: false,
      headerVisible: true,
      parentScroll: true,
      scrollEnabled: true,
    };
    Orientation.lockToPortrait();
    this.scrollY = new Animated.Value(0);
    this.toggleHeader = this.toggleHeader.bind(this);
    this.renderProviderComponent = this.renderProviderComponent.bind(this);
    console.log(PROVIDER_DATA);
  }

  toggleHeader(flag) {
    this.setState({headerVisible: flag});
  }

  showTip() {
    const {hasTipShowned} = this.state;
    if (!hasTipShowned) {
      this.setState({isIntroTipVisible: true});
      setTimeout(() => {
        this.setState({isIntroTipVisible: false, hasTipShowned: true});
      }, 2000);
    }
  }

  onFilterSelect(type) {
    this.setState({selectedFilter: type});
  }

  rendeDirector = (data, index) => (
    <TouchableOpacity
      key={index.toString()}
      style={{...styles.directorContainer}}>
      <Image style={styles.directorImage} source={data.image} />
      <View style={{flexWrap: 'wrap', height: heightScale(45)}}>
        <Text numberOfLines={2} style={styles.directorName}>
          {data.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  renderProviderComponent = (data) => {
    return (
      <View style={{width: widthScale(66)}}>
        <TouchableOpacity style={{borderRadius: 25, padding: 2}}>
          <View
            style={{
              // position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Image
                keyExtractor={data.id}
                style={{
                  height: heightScale(44),
                  width: widthScale(66),
                  borderRadius: 10,
                }}
                source={data.image}
              />
            </View>
            <Text style={styles.sortbyButText}>{data.name}</Text>
            <Text style={styles.sortbyButText}>{data.subName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderSimilarItem = (data) => {
    <View style={{borderRadius: 12, width: 150, margin: 10}}>
      <TouchableOpacity style={{zIndex: 100, elevation: 2}}>
        <Icon
          name="bookmark"
          size={40}
          color="#232323"
          style={{position: 'absolute', top: -10, left: 100}}
        />
      </TouchableOpacity>
      <Image
        source={data.image}
        style={{
          width: 150,
          height: heightScale(200),
          resizeMode: 'cover',
          borderRadius: 12,
          marginBottom: heightScale(10),
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.textFont}>Lynn O’Leeum</Text>
        <Text style={styles.textFont}>Percy Kewshun</Text>
        <Text numberOfLines={1} style={styles.textFont}>
          Bridget Theriveaquai
        </Text>
        <Text numberOfLines={1} style={styles.textFont}>
          Bridget Theriveaquai
        </Text>
      </View>
    </View>;
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({isLoaded: true});
    });
  }

  moviewPoster = (data) => {
    let {viewStyle} = this.props;
    viewStyle = VIEW_STYLE.FULL_VIEW;
    const playVideo = () => {
      const {navigate} = this.props.navigation;
      navigate('YoutubePlayer', {url: 'asdasd'});
    };

    const onShare = () => {
      Share.share({
        title: 'Parasite',
        url: 'https://www.youtube.com/watch?v=NPIS6i4dhnc',
        message: 'Parasite',
      })
        .then((res) => {
          console.log(res);
        })
        .then((err) => console.log(err));
    };

    return (
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: this.props.scrollContext,
                },
              },
            },
          ],
          {useNativeDriver: true}, // Add this line
        )}
        horizontal={false}
        scrollEventThrottle={16}
        automaticallyAdjustContentInsets={true}
        bounces={false}
        contentContainerStyle={{
          // padding: 10,
          // marginTop: heightScale(5),
          paddingTop: TOTAL_HEADER_HEIGHT,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: heightScale(10),
            paddingHorizontal: 10,
            height: heightScale(23),
          }}>
          <View style={{flex: 3, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              {/* <FontAwesome5Icon
                name="angle-left"
                size={heightScale(20)}
                style={{marginRight: 10}}
              /> */}
              <Image
                source={require('../../../assets/Icons/back_ic.png')}
                resizeMode="contain"
                style={{
                  width: widthScale(12),
                  height: heightScale(20),
                  marginRight: widthScale(10),
                  transform: [{rotateY: '180deg'}],
                }}
              />
            </TouchableOpacity>
            <Text style={styles.resultText}>Ranking of best movies</Text>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            onPress={() => {
              this.setState({modalVisible: true});
            }}>
            <Text style={styles.sortbyButText}>Rating</Text>
            <Icon name="chevron-down" size={20} color="#232323" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: viewStyle === VIEW_STYLE.FULL_VIEW ? 1 : 0,
            justifyContent: 'center',
            borderRadius: 15,
            ...(viewStyle === VIEW_STYLE.GRID_VIEW && {
              borderWidth: 1,
              borderColor: '#fff',
              backgroundColor: '#fff',
              elevation: 5,
            }),
          }}>
          <View style={{justifyContent: 'center'}}>
            {!this.state.isIntroTipVisible &&
              viewStyle === VIEW_STYLE.FULL_VIEW && (
                <TouchableOpacity
                  style={{
                    elevation: 1,
                    position: 'absolute',
                    top: 200,
                    left: window / 2 - 30,
                    zIndex: 1000,
                  }}
                  onPress={playVideo}>
                  <Icons name="play-circle" size={50} color="white" />
                </TouchableOpacity>
              )}
            <Image
              style={
                viewStyle === VIEW_STYLE.FULL_VIEW
                  ? {height: heightScale(497), width: window}
                  : {
                      height: heightScale(240),
                    }
              }
              source={data.image}
              onLoadEnd={() => {
                this.showTip();
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: screen / 2.5,
                flexWrap: 'wrap',
                left: window / 6,
              }}>
              <Text
                allowFontScaling={true}
                numberOfLines={2}
                style={{
                  fontSize: fontScale(50),
                  color: 'white',
                  fontWeight: '700',
                }}>
                {data.name}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 5,
              paddingHorizontal: widthScale(10),
              paddingTop: heightScale(4),
              position: 'relative',
            }}>
            <Text style={styles.titleFont}>Parasite</Text>
            <Text
              style={[
                styles.textSecondary,
                {marginTop: heightScale(-2), height: heightScale(24)},
              ]}>
              Gisaengchung (Original title)
            </Text>
            <View style={{height: heightScale(10)}} />
            <Text style={styles.textSecondary}>Drama, Thriller</Text>
            <Text style={styles.textSecondary}>
              2018 - South Korea - 134m - 16+
            </Text>
            <Text style={styles.textSecondary}>
              2.99 € - 88% match - 29
              <AntDesign name="like1" color="#35B736" size={18} />
            </Text>
            <TouchableOpacity
              onPress={onShare}
              style={{
                position: 'absolute',
                right: widthScale(11),
                top: heightScale(4),
              }}>
              <Icon
                name="reply"
                size={widthScale(25)}
                color="#232323"
                style={{
                  width: widthScale(25),
                  height: heightScale(21),
                  transform: [{rotateY: '180deg'}],
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                top: heightScale(62),
                right: widthScale(15),
              }}>
              <RatingComponent
                size="lg"
                rating={'9.2'}
                textStyle={{fontSize: fontScale(22)}}
              />
              <Text
                style={{
                  fontSize: fontScale(14.67),
                  fontFamily: primary_regular_font.primary_bold_font,
                  ...(Platform.OS === 'ios' && {
                    fontWeight: '700',
                  }),
                }}>
                Excellent
              </Text>
            </View>
          </View>
          {viewStyle === VIEW_STYLE.FULL_VIEW && (
            <View style={{flex: 1, width: window, paddingHorizontal: 10}}>
              <View style={{marginTop: heightScale(11)}}>
                <Text style={styles.textFont}>Plot</Text>
                <Text style={[styles.textDesc, {width: widthScale(355)}]}>
                  Greed and class discrimination threaten the newly formed
                  symbiotic relationship between the wealthy Park family and the
                  destitute Kim clan. Their adventures unfurl in three stories
                  that ingeniously trip back and forth in time.
                </Text>
              </View>
              <View style={{marginTop: heightScale(11), borderWidth: 0}}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text style={styles.textFont}>Director </Text>
                    <ScrollView
                      horizontal={true}
                      onTouchStart={(ev) => {
                        this.setState({scrollEnabled: false});
                      }}
                      onMomentumScrollEnd={(e) => {
                        this.setState({scrollEnabled: true});
                      }}
                      onScrollEndDrag={(e) => {
                        this.setState({scrollEnabled: true});
                      }}
                      nestedScrollEnabled={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{
                        height: heightScale(149),
                      }}>
                      {DATA.slice(0, 1).map((item, index) =>
                        this.rendeDirector(item, index),
                      )}
                    </ScrollView>
                  </View>
                  <View>
                    <Text style={styles.textFont}>Cast</Text>
                    <ScrollView
                      horizontal={true}
                      {...(Platform.OS === 'android' && {
                        onTouchStart: (ev) => {
                          this.setState({scrollEnabled: false});
                        },
                        // onMomentumScrollEnd: (e) => {
                        //   this.setState({scrollEnabled: true});
                        // },
                        onScrollEndDrag: (e) => {
                          this.setState({scrollEnabled: true});
                        },
                      })}
                      nestedScrollEnabled={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{height: heightScale(156)}}>
                      {DATA.map((item, index) =>
                        this.rendeDirector(item, index),
                      )}
                    </ScrollView>
                  </View>
                </View>
              </View>
              {/* For the Rating */}
              <View style={{marginTop: heightScale(25)}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textFont}>Ratings</Text>
                  <FeatherIcon name="info" color="gray" size={widthScale(20)} />
                </View>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: '#4183E2',
                    borderRadius: 10,
                    flexDirection: 'row',
                    backgroundColor: '#EAF2FF',
                    overflow: 'hidden',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      borderRightWidth: 2,
                      borderColor: '#4183E2',
                      justifyContent: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.textSecondary}>Awards</Text>
                        <Text style={styles.textSecondary}>9.0</Text>
                      </View>
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.textSecondary}>Critics</Text>
                        <Text style={styles.textSecondary}>8.2</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.textSecondary}>Audience</Text>
                        <Text style={styles.textSecondary}>7.5</Text>
                      </View>
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.textSecondary}>Box-Office</Text>
                        <Text style={styles.textSecondary}>6.1</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{justifyContent: 'space-between'}}>
                    <SVGTriangleTop />
                    <SVGTriangleBottom />
                  </View>
                  <View
                    style={{
                      flex: 0.4,
                      backgroundColor: '#4183E2',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.ratingText}>9.2</Text>
                  </View>
                </View>
                <View
                  style={{marginTop: heightScale(5), height: heightScale(40)}}>
                  <Text style={styles.textSecondary}>
                    Won 2 Oscars including best director
                  </Text>
                  <Text style={styles.textSecondary}>
                    Won 3 G. Globes including best film
                  </Text>
                </View>
              </View>
              {/* For the watch now flatlist */}
              <View style={{marginTop: heightScale(15)}}>
                <Text style={styles.textFont}>Watch now</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}>
                  {PROVIDER_DATA.map((item, index) =>
                    this.renderProviderComponent(item),
                  )}
                </View>
              </View>
              <View style={{marginTop: heightScale(25)}}>
                <Text style={styles.textFont}>Images</Text>
                <Text />
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../../../assets/poster1.jpg')}
                    style={styles.images}
                  />
                  <Image
                    source={require('../../../assets/poster1.jpg')}
                    style={styles.images}
                  />
                  <Image
                    source={require('../../../assets/poster1.jpg')}
                    style={styles.images}
                  />
                  <Image
                    source={require('../../../assets/poster1.jpg')}
                    style={styles.images}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
        <View
          style={{
            marginBottom: 60,
            marginTop: heightScale(15),
            paddingHorizontal: 10,
          }}>
          <Text style={styles.textFont}>Similer title</Text>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <CardView />
          </View>
        </View>
      </Animated.ScrollView>
    );
  };
  render() {
    const {isIntroTipVisible, selectedFilter, isLoaded} = this.state;
    const {onScroll} = this.props;
    let {t} = this.props;

    if (!isLoaded) {
      return <Loader />;
    }

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {/* <Header {...this.props} /> */}
        <Modal visible={false} transparent animationType="fade">
          <View
            style={{
              flex: 1,
              // flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 100,
            }}>
            <View style={styles.shadowView} />
            <Image
              source={require('../../../assets/Icons/hand_ic.png')}
              style={{width: heightScale(102), height: heightScale(102)}}
            />
            <Text style={styles.swipTitle}>Swipe to scroll titles</Text>
          </View>
        </Modal>
        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          statusBarTranslucent={true}
          transparent={true}>
          <TouchableWithoutFeedback
            onPress={() => this.setState({modalVisible: false})}>
            <View style={[styles.shadowView]} />
          </TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#f7f7f5',
              marginTop: 'auto',
              height: heightScale(248),
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: widthScale(10),
              elevation: 10,
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.soryByHead}>
              {t('texts.id_99')}
            </Text>
            <TouchableOpacity
              style={[
                styles.filterBut,
                selectedFilter === FILTER_TYPES.FILTER_BY_RATING &&
                  styles.filterSelected,
              ]}
              onPress={() =>
                this.onFilterSelect(FILTER_TYPES.FILTER_BY_RATING)
              }>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={
                  selectedFilter === FILTER_TYPES.FILTER_BY_RATING
                    ? styles.modalTextSelected
                    : styles.modalText
                }>
                {t('texts.id_101')}
              </Text>
            </TouchableOpacity>
            <View style={styles.vDivider} />
            <TouchableOpacity
              style={[
                styles.filterBut,
                selectedFilter === FILTER_TYPES.FILTER_BY_MATCH &&
                  styles.filterSelected,
              ]}
              onPress={() => this.onFilterSelect(FILTER_TYPES.FILTER_BY_MATCH)}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={
                  selectedFilter === FILTER_TYPES.FILTER_BY_MATCH
                    ? styles.modalTextSelected
                    : styles.modalText
                }>
                {t('texts.id_103')}
              </Text>
            </TouchableOpacity>
            <View style={styles.vDivider} />
            <TouchableOpacity
              style={[
                styles.filterBut,
                selectedFilter === FILTER_TYPES.FILTER_BY_FRIENDS_LIKE &&
                  styles.filterSelected,
              ]}
              onPress={() =>
                this.onFilterSelect(FILTER_TYPES.FILTER_BY_FRIENDS_LIKE)
              }>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={
                  selectedFilter === FILTER_TYPES.FILTER_BY_FRIENDS_LIKE
                    ? styles.modalTextSelected
                    : styles.modalText
                }>
                {t('texts.id_105')}
              </Text>
            </TouchableOpacity>
            <View style={styles.vDivider} />
            <TouchableOpacity
              style={[
                styles.filterBut,
                selectedFilter === FILTER_TYPES.FILTER_BY_POPULAR &&
                  styles.filterSelected,
              ]}
              onPress={() =>
                this.onFilterSelect(FILTER_TYPES.FILTER_BY_POPULAR)
              }>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={
                  selectedFilter === FILTER_TYPES.FILTER_BY_POPULAR
                    ? styles.modalTextSelected
                    : styles.modalText
                }>
                {t('texts.id_107')}
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          visible={this.state.likeModal}
          transparent={true}
          animationType="slide">
          <View
            style={{
              backgroundColor: '#f7f7f5',
              alignItems: 'center',
              height: heightScale(500),
              top: screen - 300,
            }}>
            <Text
              style={{fontSize: fontScale(18), fontWeight: '700', padding: 5}}>
              Sort By
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconm name="plus" size={25} />
              <Text style={styles.modalText}>Watch Later</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconm name="thumbs-up" size={25} />
              <Text style={styles.modalText}>Liked</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconm name="eye" size={25} />
              <Text style={styles.modalText}>Watched</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconm name="thumbs-down" size={25} />
              <Text style={styles.modalText}>Dislike</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({likeModal: false})}>
              <Text>Close Model</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          visible={this.state.shearModal}
          transparent={true}
          animationType="slide">
          <View
            style={{
              backgroundColor: '#f7f7f5',
              alignItems: 'center',
              height: heightScale(500),
              top: screen - 500,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: fontScale(18),
                  fontWeight: '700',
                  padding: 5,
                }}>
                Recommend title
              </Text>
              <Icon name="share" size={25} style={{marginLeft: 20}} />
            </View>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconm name="plus" size={25} />
              <Text style={styles.modalText}>Watch Later</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconm name="thumbs-up" size={25} />
              <Text style={styles.modalText}>Liked</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconm name="eye" size={25} />
              <Text style={styles.modalText}>Watched</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconm name="thumbs-down" size={25} />
              <Text style={styles.modalText}>Dislike</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({shearModal: false})}>
              <Text>Close Model</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={{flex: 1, marginTop: heightScale(5)}}>
          <View style={{flex: 1}}>
            <FlatList
              bounces={false}
              scrollEnabled={this.state.scrollEnabled}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA}
              renderItem={({item}) => this.moviewPoster(item)}
              keyExtractor={(item) => item.id}
              // ItemSeparatorComponent={() => <View style={{width: 10}} />}
              // nestedScrollEnabled={true}
              pagingEnabled={true}
              onMomentumScrollEnd={() => {
                this.props.reset();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

// MovieDetails.contextType = TopBarContext;

const mapStateToProps = (state) => {
  return {
    viewStyle: state.filterConfig.viewStyle,
  };
};

const EnhanchedComponent = useCollapsibleHeaderHOC(
  withTranslation()(RenderMobile),
);

export default connect(mapStateToProps, null)(EnhanchedComponent);

const styles = StyleSheet.create({
  titleFont: {
    color: '#000',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(20),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  textFont: {
    color: '#000',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(17),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  seprater: {
    backgroundColor: 'red',
    height: heightScale(1),
  },
  modalText: {
    fontSize: fontScale(18),
    padding: 10,
    padding: 10,
    fontFamily: 'VAG Rounded Next Regular',
    color: '#000',
    fontSize: fontScale(20),
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  modalTextSelected: {
    padding: 10,
    fontFamily: 'VAG Rounded Next Bold',
    color: '#fff',
    fontSize: fontScale(20),
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  shadow: {
    borderColor: 'red',
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  textSecondary: {
    color: '#000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(16),
    lineHeight: heightScale(18),
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  italic: {
    fontStyle: 'italic',
  },
  moviewPosterContainer: {
    flex: 1,
    paddingRight: 15,
    justifyContent: 'center',
  },
  posterImageContainer: {justifyContent: 'center', marginVertical: 5},
  posterImage: {height: heightScale(450), width: window - 20, borderRadius: 12},
  posterDescContainer: {flexDirection: 'row', padding: 5},
  directorContainer: {
    width: widthScale(78),
    height: heightScale(149),
    // padding: 5,
    marginRight: widthScale(7),
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: heightScale(2)},
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  directorImage: {
    height: heightScale(104),
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  directorName: {
    color: '#000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(14),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  resultText: {
    color: '#000',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(16),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  sortbyButText: {
    color: '#000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(14),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  blurView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  icContainer: {
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 2,
  },
  swipTitle: {
    color: '#FFFFFF',
    fontFamily: 'Helvetica Neue',
    fontSize: fontScale(22),
    fontStyle: 'normal',
    zIndex: 100,
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  shadowView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.2,
    backgroundColor: '#000',
  },
  vDivider: {
    width: '100%',
    height: heightScale(1),
    backgroundColor: 'gray',
    opacity: 0.1,
  },
  filterBut: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  filterSelected: {
    color: '#fff',
    backgroundColor: '#ff3300',
  },
  ratingText: {
    color: '#FFFFFF',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(22),
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  images: {
    width: widthScale(355),
    height: heightScale(242),
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  textDesc: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(16),
    color: '#000',
    lineHeight: heightScale(18),
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  soryByHead: {
    padding: 5,
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(22),
    color: '#ff3300',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
});
