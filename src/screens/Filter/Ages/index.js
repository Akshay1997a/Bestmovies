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
    age: '5 to 8',
  },
  {
    id: 2,
    age: '8 to 10',
  },
  {
    id: 3,
    age: '40',
  },
  {
    id: 4,
    age: '18 to 16',
  },
  {
    id: 5,
    age: 'adult',
  },
  {
    id: 6,
    age: '30 to 40',
  },
  {
    id: 7,
    age: '5 to 8',
  },
  {
    id: 8,
    age: '8 to 10',
  },
  {
    id: 9,
    age: '40',
  },
  {
    id: 10,
    age: '18 to 16',
  },
  {
    id: 11,
    age: 'adult',
  },
  {
    id: 12,
    age: '30 to 40',
  },
  {
    id: 13,
    age: '5 to 8',
  },
  {
    id: 14,
    age: '8 to 10',
  },
  {
    id: 15,
    age: '40',
  },
];

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class Ages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      window,
      screen,
    };
  }

  componentDidMount() {
    this.details();
  }

  details() {
    this.setState({refreshing: true});
    fetch('https://60cde54091cc8e00178dc16b.mockapi.io/ages')
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({data: resJson});
        // this.setState({ refreshing: false });
      })
      .catch((e) => console.log(e));
  }

  renderItemComponent = (data) => (
    <TouchableOpacity
      style={{borderRadius: 25, padding: 10}}
      keyExtractor={data.id}>
      <Text style={{fontSize: 15, fontWeight: '700', marginLeft: 50}}>
        {data.age}
      </Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
          // margin={15}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View
                style={[ highlighted && {marginLeft: 10}]}
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

export default Ages;
