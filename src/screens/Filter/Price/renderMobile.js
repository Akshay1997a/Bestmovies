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
    price: '$11.56',
  },
  {
    id: 2,
    price: '$136.88',
  },
  {
    id: 3,
    price: '$134.39',
  },
  {
    id: 4,
    price: '$36.53',
  },
  {
    id: 5,
    price: '$74.10',
  },
  {
    id: 6,
    price: '$117.42',
  },
  {
    id: 7,
    price: '$29.14',
  },
  {
    id: 8,
    price: '$138.74',
  },
  {
    id: 9,
    price: '$21.37',
  },
  {
    id: 10,
    price: '$87.08',
  },
  {
    id: 11,
    price: '$130.68',
  },
  {
    id: 12,
    price: '$88.63',
  },
  {
    id: 13,
    price: '$72.39',
  },
  {
    id: 14,
    price: '$18.80',
  },
  {
    id: 15,
    price: '$65.79',
  },
  {
    id: 16,
    price: '$92.59',
  },
  {
    id: 17,
    price: '$53.87',
  },
  {
    id: 18,
    price: '$48.82',
  },
  {
    id: 19,
    price: '$59.82',
  },
  {
    id: 20,
    price: '$99.27',
  },
  {
    id: 21,
    price: '$51.24',
  },
  {
    id: 22,
    price: '$62.86',
  },
  {
    id: 23,
    price: '$43.47',
  },
  {
    id: 24,
    price: '$106.41',
  },
  {
    id: 25,
    price: '$47.17',
  },
  {
    id: 26,
    price: '$135.84',
  },
  {
    id: 27,
    price: '$63.58',
  },
  {
    id: 28,
    price: '$67.46',
  },
  {
    id: 29,
    price: '$94.26',
  },
  {
    id: 30,
    price: '$107.04',
  },
  {
    id: 31,
    price: '$107.63',
  },
  {
    id: 32,
    price: '$120.65',
  },
  {
    id: 33,
    price: '$138.12',
  },
  {
    id: 34,
    price: '$133.09',
  },
  {
    id: 35,
    price: '$74.58',
  },
  {
    id: 36,
    price: '$142.66',
  },
  {
    id: 37,
    price: '$65.66',
  },
  {
    id: 38,
    price: '$83.46',
  },
  {
    id: 39,
    price: '$55.22',
  },
  {
    id: 40,
    price: '$84.39',
  },
  {
    id: 41,
    price: '$120.96',
  },
  {
    id: 42,
    price: '$86.00',
  },
  {
    id: 43,
    price: '$89.59',
  },
  {
    id: 44,
    price: '$96.35',
  },
  {
    id: 45,
    price: '$61.60',
  },
  {
    id: 46,
    price: '$55.54',
  },
  {
    id: 47,
    price: '$16.77',
  },
  {
    id: 48,
    price: '$53.69',
  },
  {
    id: 49,
    price: '$104.33',
  },
  {
    id: 50,
    price: '$78.81',
  },
  {
    id: 51,
    price: '$17.37',
  },
  {
    id: 52,
    price: '$34.95',
  },
  {
    id: 53,
    price: '$94.42',
  },
  {
    id: 54,
    price: '$111.09',
  },
  {
    id: 55,
    price: '$19.88',
  },
  {
    id: 56,
    price: '$143.31',
  },
  {
    id: 57,
    price: '$127.13',
  },
  {
    id: 58,
    price: '$74.33',
  },
  {
    id: 59,
    price: '$102.28',
  },
  {
    id: 60,
    price: '$79.68',
  },
  {
    id: 61,
    price: '$136.44',
  },
  {
    id: 62,
    price: '$66.44',
  },
  {
    id: 63,
    price: '$84.15',
  },
  {
    id: 64,
    price: '$126.44',
  },
  {
    id: 65,
    price: '$73.98',
  },
  {
    id: 66,
    price: '$104.60',
  },
  {
    id: 67,
    price: '$113.58',
  },
  {
    id: 68,
    price: '$18.61',
  },
  {
    id: 69,
    price: '$13.62',
  },
  {
    id: 70,
    price: '$122.43',
  },
  {
    id: 71,
    price: '$141.02',
  },
  {
    id: 72,
    price: '$82.22',
  },
  {
    id: 73,
    price: '$58.95',
  },
  {
    id: 74,
    price: '$110.95',
  },
  {
    id: 75,
    price: '$116.23',
  },
  {
    id: 76,
    price: '$144.72',
  },
  {
    id: 77,
    price: '$104.71',
  },
  {
    id: 78,
    price: '$14.37',
  },
  {
    id: 79,
    price: '$61.09',
  },
  {
    id: 80,
    price: '$138.35',
  },
  {
    id: 81,
    price: '$78.69',
  },
  {
    id: 82,
    price: '$22.03',
  },
  {
    id: 83,
    price: '$19.36',
  },
  {
    id: 84,
    price: '$48.99',
  },
  {
    id: 85,
    price: '$119.47',
  },
  {
    id: 86,
    price: '$54.02',
  },
  {
    id: 87,
    price: '$22.26',
  },
  {
    id: 88,
    price: '$21.17',
  },
  {
    id: 89,
    price: '$37.01',
  },
  {
    id: 90,
    price: '$106.43',
  },
  {
    id: 91,
    price: '$15.13',
  },
  {
    id: 92,
    price: '$110.38',
  },
  {
    id: 93,
    price: '$105.02',
  },
  {
    id: 94,
    price: '$81.79',
  },
  {
    id: 95,
    price: '$77.95',
  },
  {
    id: 96,
    price: '$51.74',
  },
  {
    id: 97,
    price: '$112.05',
  },
  {
    id: 98,
    price: '$14.86',
  },
  {
    id: 99,
    price: '$29.55',
  },
  {
    id: 100,
    price: '$61.50',
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
    <TouchableOpacity style={{borderRadius: 25, padding: 10}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 5}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>{data.price}</Text>
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
              <View style={[highlighted && {marginLeft: 0}]} />
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

export default RenderMobile;
