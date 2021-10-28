/* eslint-disable react-native/no-inline-styles */
import {wrap} from 'lodash';
import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import Inocons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RatingComponent from '../../../svgs/RatingComponent';
import {isAndroid} from '../../../helper/fonts';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../helper/ResponsiveFonts';
import primary_regular_font from '../../../helper/fonts';

const DATA = [
  {
    id: '1',
    name: 'First Item',
    image: require('../../../../assets/poster1.jpg'),
  },
  {
    id: '2',
    name: 'Second Item',
    image: require('../../../../assets/poster1.jpg'),
  },
  {
    id: '3',
    name: 'Third Item',
    image: require('../../../../assets/poster2.jpg'),
  },
  {
    id: '4',
    name: 'Third Item',
    image: require('../../../../assets/poster3.jpg'),
  },
  {
    id: '5',
    name: 'Third Item',
    image: require('../../../../assets/poster4.jpg'),
  },
  {
    id: '6',
    name: 'Third Item',
    image: require('../../../../assets/poster5.jpg'),
  },
];

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class RenderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      window,
      screen,
    };
  }
  renderItemComponent = (data) => {
    // const {navigate} = this.props.navigation;
    // const goToMovieDetails = () => {
    //   navigate('MovieDetails');
    // };
    return (
      <View
        style={{
          flex: 0,
          justifyContent: 'center',
          borderRadius: 8,
          ...(isAndroid() && {
            overflow: 'hidden',
          }),
          height: heightScale(320),
          borderWidth: 1,
          borderColor: '#fff',
          backgroundColor: '#fff',
          elevation: 5,
          shadowOffset: {width: 0, height: heightScale(2)},
          shadowOpacity: 0.25,
          shadowColor: '#000',
          shadowRadius: 3.84,
        }}>
        <TouchableOpacity>
          <View>
            <View style={{justifyContent: 'center'}}>
              <Image
                style={{
                  height: heightScale(240),
                  width: widthScale(175),
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                }}
                source={data.image}
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
            <View style={{paddingTop: 10, paddingHorizontal: 10}}>
              <Text style={styles.textFont}>Parasite</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingBottom: 10,
                marginTop: heightScale(3),
              }}>
              <View style={{flex: 1}}>
                <Text style={styles.textSecondary}>Crime, Dram, Romantic</Text>
                <Text style={[styles.textSecondary]}>
                  2016 - US - 17{' '}
                  <AntDesign name="like1" color="#35B736" size={13} />
                </Text>
                <Text style={styles.textSecondary}>2.90$ - 88% match</Text>
                <View
                  style={{
                    position: 'absolute',
                    right: 2,
                    bottom: 5,
                  }}>
                  <RatingComponent rating={9.2} />
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
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{width: window - 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[highlighted && {marginLeft: 0}]} />
            ))
          }
          data={DATA}
          bounces={false}
          renderItem={({item}) => this.renderItemComponent(item)}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            marginTop: 10,
            justifyContent: 'space-between',
          }}
        />
      </SafeAreaView>
    );
  }
}

export default RenderMobile;

const styles = StyleSheet.create({
  textFont: {
    color: '#333333',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(14),
    // lineHeight: heightScale(13),
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
    lineHeight: heightScale(15),
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
    width: widthScale(250),
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
