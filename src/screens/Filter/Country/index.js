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
    country: 'Portugal',
  },
  {
    id: 2,
    country: 'Russia',
  },
  {
    id: 3,
    country: 'Guatemala',
  },
  {
    id: 4,
    country: 'Indonesia',
  },
  {
    id: 5,
    country: 'Russia',
  },
  {
    id: 6,
    country: 'Cyprus',
  },
  {
    id: 7,
    country: 'Argentina',
  },
  {
    id: 8,
    country: 'Slovenia',
  },
  {
    id: 9,
    country: 'China',
  },
  {
    id: 10,
    country: 'Slovenia',
  },
  {
    id: 11,
    country: 'China',
  },
  {
    id: 12,
    country: 'Ukraine',
  },
  {
    id: 13,
    country: 'Indonesia',
  },
  {
    id: 14,
    country: 'France',
  },
  {
    id: 15,
    country: 'United Kingdom',
  },
  {
    id: 16,
    country: 'Burkina Faso',
  },
  {
    id: 17,
    country: 'China',
  },
  {
    id: 18,
    country: 'China',
  },
  {
    id: 19,
    country: 'Thailand',
  },
  {
    id: 20,
    country: 'China',
  },
  {
    id: 21,
    country: 'Ukraine',
  },
  {
    id: 22,
    country: 'China',
  },
  {
    id: 23,
    country: 'Palestinian Territory',
  },
  {
    id: 24,
    country: 'Indonesia',
  },
  {
    id: 25,
    country: 'Portugal',
  },
  {
    id: 26,
    country: 'Palestinian Territory',
  },
  {
    id: 27,
    country: 'China',
  },
  {
    id: 28,
    country: 'Portugal',
  },
  {
    id: 29,
    country: 'Greece',
  },
  {
    id: 30,
    country: 'Ukraine',
  },
  {
    id: 31,
    country: 'China',
  },
  {
    id: 32,
    country: 'Indonesia',
  },
  {
    id: 33,
    country: 'Morocco',
  },
  {
    id: 34,
    country: 'United States',
  },
  {
    id: 35,
    country: 'Nicaragua',
  },
  {
    id: 36,
    country: 'China',
  },
  {
    id: 37,
    country: 'China',
  },
  {
    id: 38,
    country: 'Belarus',
  },
  {
    id: 39,
    country: 'Serbia',
  },
  {
    id: 40,
    country: 'Poland',
  },
  {
    id: 41,
    country: 'Vietnam',
  },
  {
    id: 42,
    country: 'South Korea',
  },
  {
    id: 43,
    country: 'China',
  },
  {
    id: 44,
    country: 'China',
  },
  {
    id: 45,
    country: 'Thailand',
  },
  {
    id: 46,
    country: 'Russia',
  },
  {
    id: 47,
    country: 'China',
  },
  {
    id: 48,
    country: 'Indonesia',
  },
  {
    id: 49,
    country: 'Philippines',
  },
  {
    id: 50,
    country: 'China',
  },
  {
    id: 51,
    country: 'Palestinian Territory',
  },
  {
    id: 52,
    country: 'Panama',
  },
  {
    id: 53,
    country: 'South Africa',
  },
  {
    id: 54,
    country: 'China',
  },
  {
    id: 55,
    country: 'Iran',
  },
  {
    id: 56,
    country: 'Chad',
  },
  {
    id: 57,
    country: 'Indonesia',
  },
  {
    id: 58,
    country: 'France',
  },
  {
    id: 59,
    country: 'Indonesia',
  },
  {
    id: 60,
    country: 'Sweden',
  },
  {
    id: 61,
    country: 'China',
  },
  {
    id: 62,
    country: 'Russia',
  },
  {
    id: 63,
    country: 'Brazil',
  },
  {
    id: 64,
    country: 'Azerbaijan',
  },
  {
    id: 65,
    country: 'Israel',
  },
  {
    id: 66,
    country: 'Ethiopia',
  },
  {
    id: 67,
    country: 'China',
  },
  {
    id: 68,
    country: 'Yemen',
  },
  {
    id: 69,
    country: 'Spain',
  },
  {
    id: 70,
    country: 'Russia',
  },
  {
    id: 71,
    country: 'Philippines',
  },
  {
    id: 72,
    country: 'Mauritius',
  },
  {
    id: 73,
    country: 'United States',
  },
  {
    id: 74,
    country: 'Honduras',
  },
  {
    id: 75,
    country: 'Russia',
  },
  {
    id: 76,
    country: 'Mali',
  },
  {
    id: 77,
    country: 'China',
  },
  {
    id: 78,
    country: 'Russia',
  },
  {
    id: 79,
    country: 'Indonesia',
  },
  {
    id: 80,
    country: 'Germany',
  },
  {
    id: 81,
    country: 'Russia',
  },
  {
    id: 82,
    country: 'Namibia',
  },
  {
    id: 83,
    country: 'Thailand',
  },
  {
    id: 84,
    country: 'Mexico',
  },
  {
    id: 85,
    country: 'Brazil',
  },
  {
    id: 86,
    country: 'Portugal',
  },
  {
    id: 87,
    country: 'China',
  },
  {
    id: 88,
    country: 'Canada',
  },
  {
    id: 89,
    country: 'United States',
  },
  {
    id: 90,
    country: 'Indonesia',
  },
  {
    id: 91,
    country: 'Indonesia',
  },
  {
    id: 92,
    country: 'Russia',
  },
  {
    id: 93,
    country: 'Russia',
  },
  {
    id: 94,
    country: 'China',
  },
  {
    id: 95,
    country: 'Somalia',
  },
  {
    id: 96,
    country: 'Democratic Republic of the Congo',
  },
  {
    id: 97,
    country: 'France',
  },
  {
    id: 98,
    country: 'Poland',
  },
  {
    id: 99,
    country: 'Libya',
  },
  {
    id: 100,
    country: 'Portugal',
  },
];

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class Country extends Component {
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
    <TouchableOpacity
      style={{borderRadius: 25, padding: 10}}
      keyExtractor={data.id}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 5}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>{data.country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView>
        <FlatList
          margin={15}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View
                style={[styles.separator, highlighted && {marginLeft: 0}]}
              />
            ))
          }
          data={DATA}
          renderItem={({item}) => this.renderItemComponent(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default Country;
