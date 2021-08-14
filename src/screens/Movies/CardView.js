import {wrap} from 'lodash';
import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const DATA = [
  {
    id: '1',
    name: 'First Item',
    image: require('../../../assets/poster1.jpg'),
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

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      window,
      screen,
    };
  }
  renderItemComponent = (data) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={{zIndex: 100, elevation: 2}}>
        <Icon
          name="bookmark"
          size={40}
          color="green"
          style={{position: 'absolute', top: -4, left: 30}}
        />
      </TouchableOpacity>
      <Image
        source={data.image}
        style={{
          width: window / 2.2,
          height: 250,
          resizeMode: 'cover',
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
      />
      <View style={{width: window / 2.1, padding: 10}}>
        <Text style={styles.textFont}>Portrait of a leady of fire</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text style={styles.textSecondary}>Action, Thriller</Text>
            <Text numberOfLines={1} style={styles.textSecondary}>
              US - 2016
            </Text>
            <Text
              numberOfLines={1}
              style={(styles.textSecondary, {color: '#000'})}>
              2.99 € - 78% Match
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#0466B0',
                borderWidth: 0,
                height: 30,
                width: 50,
                borderRadius: 1000,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
              }}>
              <Text style={(styles.ratingTitleStyle, {color: '#fff'})}>
                7.8
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={{width: window - 20, marginRight: 10}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[ highlighted && {marginLeft: 0}]} />
            ))
          }
          data={DATA}
          bounces={false}
          renderItem={({item}) => this.renderItemComponent(item)}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }
}

export default CardView;
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
    // fontFamily: "'Helvetica Neue',Arial",
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  textSecondary: {
    color: '#000000',
    // fontFamily: "'Helvetica Neue',Arial",
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
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
