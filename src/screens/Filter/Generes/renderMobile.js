import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 1,
    genries: 'Comedy|Romance',
  },
  {
    id: 2,
    genries: 'Documentary',
  },
  {
    id: 3,
    genries: 'Documentary',
  },
  {
    id: 4,
    genries: 'Comedy',
  },
  {
    id: 5,
    genries: 'Drama|Mystery|Sci-Fi',
  },
  {
    id: 6,
    genries: 'Drama',
  },
  {
    id: 7,
    genries: 'Sci-Fi',
  },
  {
    id: 8,
    genries: 'Drama|Film-Noir|Mystery',
  },
  {
    id: 9,
    genries: 'Crime|Drama',
  },
  {
    id: 10,
    genries: 'Drama|Thriller',
  },
  {
    id: 11,
    genries: 'Comedy',
  },
  {
    id: 12,
    genries: 'Drama',
  },
  {
    id: 13,
    genries: 'Documentary',
  },
  {
    id: 14,
    genries: 'Documentary',
  },
  {
    id: 15,
    genries: 'Action|Drama',
  },
  {
    id: 16,
    genries: 'Comedy',
  },
  {
    id: 17,
    genries: 'Action|Sci-Fi',
  },
  {
    id: 18,
    genries: 'Action|Drama',
  },
  {
    id: 19,
    genries: 'Comedy|Drama',
  },
  {
    id: 20,
    genries: 'Documentary|Horror',
  },
  {
    id: 21,
    genries: 'Drama|Romance',
  },
  {
    id: 22,
    genries: 'Comedy|Horror|Mystery|Thriller',
  },
  {
    id: 23,
    genries: 'Drama',
  },
  {
    id: 24,
    genries: 'Horror|Sci-Fi',
  },
  {
    id: 25,
    genries: 'Drama|Musical|Romance',
  },
  {
    id: 26,
    genries: 'Crime|Drama',
  },
  {
    id: 27,
    genries: 'Crime|Horror|Mystery|Thriller',
  },
  {
    id: 28,
    genries: 'Drama|War',
  },
  {
    id: 29,
    genries: 'Comedy',
  },
  {
    id: 30,
    genries: 'Comedy|Musical',
  },
  {
    id: 31,
    genries: 'Comedy',
  },
  {
    id: 32,
    genries: 'Children|Comedy|Drama',
  },
  {
    id: 33,
    genries: 'Drama|Musical',
  },
  {
    id: 34,
    genries: 'Adventure|Comedy|Fantasy|Horror',
  },
  {
    id: 35,
    genries: 'Children|Comedy|Drama',
  },
  {
    id: 36,
    genries: 'Drama|Musical',
  },
  {
    id: 37,
    genries: 'Fantasy|Horror|Mystery',
  },
  {
    id: 38,
    genries: 'Animation|Children|Comedy',
  },
  {
    id: 39,
    genries: 'Comedy|Romance',
  },
  {
    id: 40,
    genries: 'Drama|Romance',
  },
  {
    id: 41,
    genries: 'Comedy',
  },
  {
    id: 42,
    genries: 'Action|Adventure|Crime|Western',
  },
  {
    id: 43,
    genries: 'Documentary',
  },
  {
    id: 44,
    genries: 'Animation|Children|Comedy|Romance',
  },
  {
    id: 45,
    genries: 'Action|Drama|Thriller|War',
  },
  {
    id: 46,
    genries: 'Western',
  },
  {
    id: 47,
    genries: 'Drama',
  },
  {
    id: 48,
    genries: 'Drama|Film-Noir',
  },
  {
    id: 49,
    genries: 'Drama|War',
  },
  {
    id: 50,
    genries: 'Comedy|Sci-Fi|Thriller',
  },
  {
    id: 51,
    genries: 'Comedy',
  },
  {
    id: 52,
    genries: 'Comedy',
  },
  {
    id: 53,
    genries: 'Action|Crime',
  },
  {
    id: 54,
    genries: 'Comedy|Drama|War',
  },
  {
    id: 55,
    genries: 'Drama|Thriller',
  },
  {
    id: 56,
    genries: 'Comedy',
  },
  {
    id: 57,
    genries: 'Children|Drama',
  },
  {
    id: 58,
    genries: 'Drama|Romance',
  },
  {
    id: 59,
    genries: 'Animation|Children|Comedy|Fantasy',
  },
  {
    id: 60,
    genries: 'Drama|Musical',
  },
  {
    id: 61,
    genries: 'Thriller',
  },
  {
    id: 62,
    genries: 'Drama|Romance',
  },
  {
    id: 63,
    genries: 'Horror|Mystery|Sci-Fi|Thriller',
  },
  {
    id: 64,
    genries: 'Drama',
  },
  {
    id: 65,
    genries: 'Documentary',
  },
  {
    id: 66,
    genries: 'Drama',
  },
  {
    id: 67,
    genries: 'Horror',
  },
  {
    id: 68,
    genries: 'Children|Comedy',
  },
  {
    id: 69,
    genries: 'Crime|Drama|Thriller',
  },
  {
    id: 70,
    genries: 'Drama|Romance|War',
  },
  {
    id: 71,
    genries: 'Comedy|Drama|Romance',
  },
  {
    id: 72,
    genries: 'Comedy|Romance',
  },
  {
    id: 73,
    genries: 'Sci-Fi',
  },
  {
    id: 74,
    genries: 'Drama',
  },
  {
    id: 75,
    genries: 'Drama|Romance',
  },
  {
    id: 76,
    genries: 'Comedy|Musical',
  },
  {
    id: 77,
    genries: 'Animation|Comedy|Sci-Fi',
  },
  {
    id: 78,
    genries: 'Action|Adventure|Animation|Children|Comedy',
  },
  {
    id: 79,
    genries: 'Drama|Thriller',
  },
  {
    id: 80,
    genries: 'Comedy|Crime',
  },
  {
    id: 81,
    genries: 'Drama',
  },
  {
    id: 82,
    genries: 'Drama',
  },
  {
    id: 83,
    genries: 'Thriller',
  },
  {
    id: 84,
    genries: 'Comedy|Mystery',
  },
  {
    id: 85,
    genries: 'Action',
  },
  {
    id: 86,
    genries: 'Animation|Fantasy',
  },
  {
    id: 87,
    genries: 'Drama',
  },
  {
    id: 88,
    genries: 'Comedy|Drama|Romance',
  },
  {
    id: 89,
    genries: 'Drama|Mystery|Sci-Fi|Thriller',
  },
  {
    id: 90,
    genries: 'Comedy|Drama|Musical|Mystery',
  },
  {
    id: 91,
    genries: 'Adventure|Animation|Children|Comedy',
  },
  {
    id: 92,
    genries: 'Adventure|Documentary',
  },
  {
    id: 93,
    genries: 'Comedy|Crime|Mystery|Thriller',
  },
  {
    id: 94,
    genries: 'Action|Crime|Drama',
  },
  {
    id: 95,
    genries: 'Horror|Sci-Fi|Thriller',
  },
  {
    id: 96,
    genries: 'Comedy|Drama',
  },
  {
    id: 97,
    genries: 'Drama',
  },
  {
    id: 98,
    genries: 'Action|Crime|Drama',
  },
  {
    id: 99,
    genries: 'Comedy|Drama|War',
  },
  {
    id: 100,
    genries: 'Animation|Comedy|Musical',
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
  renderItemComponent = (data) => (
    <>
      <TouchableOpacity
        style={{borderRadius: 25, padding: 10, backgroundColor: '#f7f7f7'}}
        keyExtractor={data.id}>
        <Text style={{fontSize: 15, fontWeight: '700'}}>{data.genries}</Text>
      </TouchableOpacity>
      <View style={{backgroundColor: 'white', height: 2}} />
    </>
  );
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <FlatList
          margin={15}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[highlighted && {marginLeft: 0}]} />
            ))
          }
          data={DATA}
          renderItem={({item, index}) => this.renderItemComponent(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default RenderMobile;
