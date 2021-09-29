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
import primary_regular_font from '../../helper/fonts';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

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
    };
    Orientation.lockToPortrait();
    this.scrollY = new Animated.Value(0);
    this.toggleHeader = this.toggleHeader.bind(this);
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
      <View style={{flexWrap: 'wrap'}}>
        <Text numberOfLines={2} style={styles.directorName}>
          {data.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

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
          height: 200,
          resizeMode: 'cover',
          borderRadius: 12,
          marginBottom: 10,
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
          <TouchableOpacity
            onPress={() => alert('heekk')}
            style={{elevation: 1}}>
            <View
              style={{
                position: 'absolute',
                top: -10,
                right: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Inocons name="md-bookmark-sharp" size={40} color="#EAC602" />
              <Text style={{position: 'absolute', color: '#fff'}}>OK</Text>
            </View>
          </TouchableOpacity>
          {!this.state.isIntroTipVisible && viewStyle === VIEW_STYLE.FULL_VIEW && (
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
                ? {height: 495, width: window}
                : {
                    height: 250,
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
              style={{fontSize: 50, color: 'white', fontWeight: '700'}}>
              {data.name}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{flex: 5}}>
            <Text style={styles.textFont}>Parasite</Text>
            {viewStyle === VIEW_STYLE.FULL_VIEW && (
              <Text style={[styles.textSecondary]}>
                Parasite(Original title)
              </Text>
            )}
            <View style={{height: 10}} />
            <Text style={styles.textSecondary}>Crime, Dram, Romantic</Text>
            {viewStyle === VIEW_STYLE.FULL_VIEW && (
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textSecondary}>
                  2016 - US - 17{' '}
                  <AntDesign name="like1" color="#35B736" size={18} />
                </Text>
              </View>
            )}
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textSecondary}>2.90$ - 88% match</Text>
              <TouchableOpacity>
                <Icon name="heart-outlined" size={20} color="#232323" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'flex-end',
            }}>
            {viewStyle === VIEW_STYLE.FULL_VIEW && (
              <TouchableOpacity onPress={onShare}>
                <Icon
                  name="reply"
                  size={24}
                  color="#232323"
                  style={{transform: [{rotateY: '180deg'}]}}
                />
              </TouchableOpacity>
            )}

            <View
              style={{
                backgroundColor: 'black',
                height: viewStyle === VIEW_STYLE.FULL_VIEW ? 30 : 20,
                width: viewStyle === VIEW_STYLE.FULL_VIEW ? 50 : 40,
                borderRadius: 1000,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
                9.1
              </Text>
            </View>
            {/* <RatingComponent
              rating={'9.2'}
              width={50}
              height={30}
              textStyle={{
                fontSize: 22,
                fontWeight: '700',
                color: 'white',
                fontFamily: 'VGA Rounded Next',
              }}
            /> */}
            {viewStyle === VIEW_STYLE.FULL_VIEW && (
              <Text
                style={{
                  fontSize: 14.67,
                  fontFamily: primary_regular_font.primary_bold_font,
                  marginLeft: 17,
                  ...(Platform.OS === 'ios' && {
                    fontWeight: '700',
                  }),
                }}>
                Best
              </Text>
            )}
          </View>
        </View>
        {viewStyle === VIEW_STYLE.FULL_VIEW && (
          <View style={{flex: 1, width: window, paddingHorizontal: 10}}>
            <View>
              <Text style={styles.textFont}>Plot</Text>
              <Text style={styles.textDesc}>
                Greed and class discrimination threaten the newly formed
                symbiotic relationship between the wealthy Park family and the
                destitute Kim clan. Their adventures unfurl in three stories
                that ingeniously trip back and forth in time.
              </Text>
            </View>
            <View style={{marginTop: 11}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textFont}>Director </Text>
                <Text style={styles.textFont}>Cast</Text>
              </View>
              <ScrollView
                horizontal={true}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{height: 152}}>
                {DATA.map((item, index) => this.rendeDirector(item, index))}
              </ScrollView>
            </View>
            {/* For the Rating */}
            <View style={{marginTop: 11}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textFont}>Rating</Text>
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
                    padding: 6,
                    borderRightWidth: 2,
                    borderColor: '#4183E2',
                  }}>
                  <View>
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
                </View>
                <View style={{flex: 1, padding: 6}}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.textSecondary}>Audience</Text>
                      <Text style={styles.textSecondary}>9.0</Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.textSecondary}>Box-Office</Text>
                      <Text style={styles.textSecondary}>8.1</Text>
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
              <Text style={styles.textSecondary}>
                Won 2 oscars including best director
              </Text>
              <Text style={styles.textSecondary}>
                Won 2 oscars including best director
              </Text>
            </View>
            {/* For the watch now flatlist */}
            <View style={{height: window / 2, marginTop: 25}}>
              <Text style={styles.textFont}>Watch now</Text>
              <ScrollView
                horizontal={true}
                nestedScrollEnabled={true}
                contentContainerStyle={{flex: 1}}>
                {DATA.map((item, index) => this.rendeDirector(item, index))}
              </ScrollView>
            </View>
            <View style={{marginTop: 25}}>
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
              style={{width: 102, height: 102}}
            />
            <Text style={styles.swipTitle}>Swipe to scroll titles</Text>
          </View>
        </Modal>
        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          transparent={true}>
          <TouchableWithoutFeedback
            onPress={() => this.setState({modalVisible: false})}>
            <View style={[styles.shadowView]} />
          </TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#f7f7f5',
              marginTop: 'auto',
              height: 250,
              borderRadius: 10,
              alignItems: 'center',
              paddingVertical: 10,
              elevation: 10,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: '#FF3300',
                fontWeight: '700',
                padding: 5,
              }}>
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
              <Text style={styles.modalText}>{t('texts.id_101')}</Text>
            </TouchableOpacity>
            <View style={styles.vDivider} />
            <TouchableOpacity
              style={[
                styles.filterBut,
                selectedFilter === FILTER_TYPES.FILTER_BY_MATCH &&
                  styles.filterSelected,
              ]}
              onPress={() => this.onFilterSelect(FILTER_TYPES.FILTER_BY_MATCH)}>
              <Text style={styles.modalText}>Match</Text>
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
              <Text style={styles.modalText}>{t('texts.id_105')}</Text>
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
              <Text style={styles.modalText}>{t('texts.id_107')}</Text>
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
              height: 500,
              top: screen - 300,
            }}>
            <Text style={{fontSize: 18, fontWeight: '700', padding: 5}}>
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
              height: 500,
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
              <Text style={{fontSize: 18, fontWeight: '700', padding: 5}}>
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
        <SafeAreaView style={{flex: 1}}>
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
              paddingTop: TOTAL_HEADER_HEIGHT,
            }}>
            <View style={{flex: 1, marginTop: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                  paddingHorizontal: 10,
                }}>
                <View style={{flex: 3, flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <FontAwesome5Icon
                      name="angle-left"
                      size={23}
                      style={{marginRight: 10}}
                    />
                  </TouchableOpacity>
                  <Text style={styles.resultText}>Rating of best movies</Text>
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
              <View style={{flex: 1}}>
                <FlatList
                  scrollEnabled={this.state.parentScroll}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={DATA}
                  renderItem={({item}) => this.moviewPoster(item)}
                  keyExtractor={(item) => item.id}
                  // ItemSeparatorComponent={() => <View style={{width: 10}} />}
                  // nestedScrollEnabled={true}
                  pagingEnabled={true}
                />
              </View>
            </View>
            <View
              style={{marginBottom: 60, marginTop: 25, paddingHorizontal: 10}}>
              <Text style={styles.textFont}>Similer title</Text>
              <View style={{flex: 1, alignItems: 'center'}}>
                <CardView />
              </View>
            </View>
          </Animated.ScrollView>
        </SafeAreaView>
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
  textFont: {
    color: '#000',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: 17,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  seprater: {
    backgroundColor: 'red',
    height: 1,
  },
  modalText: {
    fontSize: 18,
    padding: 10,
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
    fontSize: 16,
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
  posterImage: {height: 450, width: window - 20, borderRadius: 12},
  posterDescContainer: {flexDirection: 'row', padding: 5},
  directorContainer: {
    width: 78,
    height: 149,
    backgroundColor: '#fff',
    // padding: 5,
    marginRight: 15,
    elevation: 5,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  directorImage: {
    height: 104,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  directorName: {
    color: '#000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: 14,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  resultText: {
    color: '#000',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: 16,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  sortbyButText: {
    color: '#000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: 14,
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
    fontSize: 22,
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
    height: 1,
    backgroundColor: 'gray',
    opacity: 0.2,
  },
  filterBut: {
    width: '90%',
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
    fontSize: 22,
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  images: {
    width: window - 20,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  textDesc: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: 16,
    color: '#000',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
});
