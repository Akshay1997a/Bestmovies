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
          borderWidth: 1,
          borderColor: '#fff',
          backgroundColor: '#fff',
          elevation: 5,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowColor: '#000',
          shadowRadius: 3.84,
        }}>
        <TouchableOpacity>
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
              <Image
                style={{
                  height: 250,
                  width: window / 2 - 15,
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
                  style={{fontSize: 50, color: 'white', fontWeight: '700'}}>
                  {data.name}
                </Text>
              </View>
            </View>
            <View style={{paddingTop: 5, paddingHorizontal: 5}}>
              <Text style={styles.textFont}>Parasite</Text>
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
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textSecondary}>2.90$ - 88% match</Text>
                </View>
              </View>
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
  cardContainer: {
    borderRadius: 5,
    backgroundColor: '#fdfff7',
    flex: 1,
    alignItems: 'center',
    margin: 3,
    elevation: 5,
  },
  textFont: {
    color: '#333333',
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  textSecondary: {
    color: '#000000',
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  textFontOther: {
    fontSize: 12,
    fontWeight: '200',
  },
  seprater: {
    backgroundColor: 'red',
    height: 1,
  },
  modalText: {
    fontSize: 18,
    padding: 10,
  },
});
