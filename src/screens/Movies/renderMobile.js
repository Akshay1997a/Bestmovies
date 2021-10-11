/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
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
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
} from 'react-native';
// import { TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Feather';
import Iconm from 'react-native-vector-icons/FontAwesome5';
import Inocons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import Orientation from 'react-native-orientation';
import {VIEW_STYLE} from '../../redux/FilterModule/FilterTypes';
import {
  TOTAL_HEADER_HEIGHT,
  useCollapsibleHeaderHOC,
} from '../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RatingComponent from '../../svgs/RatingComponent';
import {bindActionCreators} from 'redux';
import {getTranslateFile} from '../../network/requests';
import {runTimeTranslations} from '../../i18n';
import {withTranslation} from 'react-i18next';
import primary_regular_font from '../../helper/fonts';
import {fontScale, heightScale} from '../../helper/ResponsiveFonts';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export const FILTER_TYPES = {
  FILTER_BY_RATING: 'FILTER_BY_RATING',
  FILTER_BY_MATCH: 'FILTER_BY_MATCH',
  FILTER_BY_FRIENDS_LIKE: 'FILTER_BY_FRIENDS_LIKE',
  FILTER_BY_POPULAR: 'FILTER_BY_POPULAR',
};

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

export class RenderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      likeModal: false,
      shearModal: false,
      isIntroTipVisible: false,
      hasTipShowned: false,
      selectedFilter: FILTER_TYPES.FILTER_BY_RATING,
    };
    Orientation.lockToPortrait();
  }

  componentDidMount() {
    this.props.getTranslateFile(
      (res) => {
        console.log('Response from translate api', res);
        runTimeTranslations(res, res?.language);
      },
      (err) => {
        console.log('Error from translate file', err);
      },
    );
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

  rendeDirector = (data) => (
    <TouchableOpacity style={styles.directorContainer}>
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
          height: heightScale(200),
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

  moviewPoster = (data) => {
    const {viewStyle} = this.props;
    const {navigate} = this.props.navigation;
    const playVideo = () => {
      navigate('YoutubePlayer', {url: 'asdasd'});
    };

    const goToMovieDetails = () => {
      navigate('MovieDetails');
    };

    // const onShare = () => {
    //   Share.share({
    //     title: 'Parasite',
    //     url: 'https://www.youtube.com/watch?v=NPIS6i4dhnc',
    //     message: 'Parasite',
    //   })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .then((err) => console.log(err));
    // };

    return (
      <View
        style={{
          flex: viewStyle === VIEW_STYLE.FULL_VIEW ? 1 : 0,
          justifyContent: 'center',
          borderRadius: 8,
          ...(viewStyle === VIEW_STYLE.GRID_VIEW && {
            borderWidth: 1,
            borderColor: '#fff',
            backgroundColor: '#fff',
            elevation: 5,
            shadowOffset: {width: 0, height: heightScale(2)},
            shadowOpacity: 0.25,
            shadowColor: '#000',
            shadowRadius: 3.84,
          }),
        }}>
        <TouchableOpacity
          disabled={viewStyle === VIEW_STYLE.FULL_VIEW}
          onPress={goToMovieDetails}>
          <View>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity style={{elevation: 1}}>
                <View
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 5000,
                  }}>
                  <Inocons name="md-bookmark-sharp" size={40} color="#EAC602" />
                  <Text style={{position: 'absolute', color: '#fff'}}>OK</Text>
                </View>
              </TouchableOpacity>
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
                    ? {
                        height: heightScale(450),
                        width: window - 20,
                        borderRadius: 8,
                      }
                    : {
                        height: heightScale(235),
                        width: window / 2 - 15,
                        borderTopRightRadius: 8,
                        borderTopLeftRadius: 8,
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
            <View style={{paddingTop: 5, paddingHorizontal: 5}}>
              <Text style={styles.textFont}>Parasite</Text>
              {viewStyle === VIEW_STYLE.FULL_VIEW && (
                <Text style={[styles.textSecondary, styles.italic]}>
                  Parasite(Original title)
                </Text>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 5,
                paddingBottom: 5,
              }}>
              <View style={{flex: 1}}>
                <Text style={styles.textSecondary}>Crime, Dram, Romantic</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[styles.textSecondary]}>
                    2016 - US - 17{' '}
                    <AntDesign name="like1" color="#35B736" size={13} />
                  </Text>
                  <RatingComponent rating={9.2} />
                </View>
                {viewStyle === VIEW_STYLE.FULL_VIEW && (
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        height: '100%',
                        borderWidth: 1,
                        padding: 2,
                        marginRight: 2,
                      }}>
                      <Text>16+</Text>
                    </View>
                    <Text style={styles.textSecondary}>France - </Text>
                    <Text style={styles.textSecondary}>2018 - </Text>
                    <Text style={styles.textSecondary}>2h 34m</Text>
                  </View>
                )}
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textSecondary}>2.90$ - 88% match</Text>
                </View>
              </View>
              {/* <View
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
                  <Text
                    style={{fontSize: fontScale(18), fontWeight: '700', color: 'white'}}>
                    9.1
                  </Text>
                </View>
                {viewStyle === VIEW_STYLE.FULL_VIEW && (
                  <Text
                    style={{fontWeight: '700', fontSize: fontScale(20), marginLeft: 17}}>
                    Best
                  </Text>
                )}
              </View> */}
            </View>
          </View>
        </TouchableOpacity>
        {viewStyle === VIEW_STYLE.FULL_VIEW && (
          <View style={{flex: 1, width: window - 20}}>
            <View style={{height: window / 2, marginTop: 25}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textFont}>Director </Text>
                <Text style={styles.textFont}>Cast</Text>
              </View>
              <ScrollView
                horizontal={true}
                nestedScrollEnabled={true}
                contentContainerStyle={{flex: 1}}>
                {DATA.map((item) => this.rendeDirector(item))}
              </ScrollView>
            </View>
            <View>
              <Text style={styles.textFont}>Lorem Ipsum</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Text>
            </View>
            {/* For the Rating */}
            <View style={{marginTop: 25}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textFont}>Rating</Text>
                <Text style={styles.textSecondary}>Overall: 9.1</Text>
              </View>
              <View style={{borderWidth: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, padding: 6, borderRightWidth: 1}}>
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
              <ScrollView horizontal={true} nestedScrollEnabled={true}>
                {DATA.map((item) => this.rendeDirector(item))}
              </ScrollView>
            </View>
            <View style={{marginTop: 25}}>
              <Text style={styles.textFont}>Images</Text>
              <Text />
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../../assets/poster1.jpg')}
                  style={{
                    width: window - 20,
                    height: heightScale(300),
                    resizeMode: 'cover',
                    marginBottom: 10,
                  }}
                />
                <Image
                  source={require('../../../assets/poster1.jpg')}
                  style={{
                    width: window - 20,
                    height: heightScale(300),
                    resizeMode: 'cover',
                    marginBottom: 10,
                  }}
                />
                <Image
                  source={require('../../../assets/poster1.jpg')}
                  style={{
                    width: window - 20,
                    height: heightScale(300),
                    resizeMode: 'cover',
                    marginBottom: 10,
                  }}
                />
                <Image
                  source={require('../../../assets/poster1.jpg')}
                  style={{
                    width: window - 20,
                    height: heightScale(300),
                    resizeMode: 'cover',
                    marginBottom: 10,
                  }}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };
  render() {
    const {isIntroTipVisible, selectedFilter} = this.state;
    const {viewStyle} = this.props;
    let {t} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Modal
          visible={viewStyle === VIEW_STYLE.FULL_VIEW && isIntroTipVisible}
          transparent
          animationType="fade">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 100,
            }}>
            <View style={styles.shadowView} />
            <Image
              source={require('../../../assets/Icons/hand_ic.png')}
              style={{width: 102, height: heightScale(102)}}
            />
            <Text style={styles.swipTitle}>Swipe to scroll titles</Text>
          </View>
        </Modal>
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          animationType="slide">
          <TouchableWithoutFeedback
            onPress={() => this.setState({modalVisible: false})}>
            <View style={[styles.shadowView]} />
          </TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#f7f7f5',
              marginTop: 'auto',
              height: heightScale(280),
              borderRadius: 20,
              alignItems: 'center',
              paddingVertical: 10,
              elevation: 10,
            }}>
            <Text style={styles.soryByHead}>{t('texts.id_99')}</Text>
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
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1, marginTop: 5}}>
            <FlatList
              key={viewStyle}
              bounces={false}
              contentContainerStyle={{
                padding: 10,
                paddingTop: TOTAL_HEADER_HEIGHT,
              }}
              ListHeaderComponent={() => (
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 3}}>
                    <Text style={styles.resultText}>{t('texts.id_78')}</Text>
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
              )}
              data={DATA}
              renderItem={({item}) => this.moviewPoster(item)}
              keyExtractor={(item) => item.id + viewStyle}
              {...(viewStyle === VIEW_STYLE.GRID_VIEW && {numColumns: 2})}
              {...(viewStyle === VIEW_STYLE.GRID_VIEW && {
                columnWrapperStyle: {
                  marginTop: 10,
                  justifyContent: 'space-between',
                },
              })}
            />
          </View>
        </SafeAreaView>
        {/* <View style={{marginBottom: 60, marginTop: 25}}>
          <Text style={styles.textFont}>Similer title</Text>
          <View style={{flex: 1, alignItems: 'center'}}>
            <CardView />
          </View>
        </View> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    viewStyle: state.filterConfig.viewStyle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTranslateFile,
    },
    dispatch,
  );
};

const EnhanchedComponent = useCollapsibleHeaderHOC(RenderMobile);

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(EnhanchedComponent),
);

const styles = StyleSheet.create({
  textFont: {
    color: '#333333',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(14),
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
    fontSize: fontScale(14),
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
    width: window / 4,
    height: window / 2.9,
    backgroundColor: '#fff',
    padding: 5,
    marginRight: 15,
    elevation: 5,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  directorImage: {
    height: '80%',
    width: window / 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  directorName: {
    color: '#333333',
    fontFamily: 'Helvetica Neue',
    fontSize: fontScale(12),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
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
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
    zIndex: 100,
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
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  filterSelected: {
    color: '#fff',
    backgroundColor: '#ff3300',
  },
  filterSelectedText: {
    color: '#fff',
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
