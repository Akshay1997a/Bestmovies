import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const DATA = [
  {
    id: '1',
    name: 'First Item',
    image: require('../../../assets/Directors/D1.jpg'),
  },
  {
    id: '2',
    name: 'Second Item',
    image: require('../../../assets/Directors/D2.jpg'),
  },
  {
    id: '3',
    name: 'Third Item',
    image: require('../../../assets/Directors/D4.jpg'),
  },
  {
    id: '4',
    name: 'Third Item',
    image: require('../../../assets/Directors/D5.jpg'),
  },
  {
    id: '5',
    name: 'Third Item',
    image: require('../../../assets/Directors/D6.jpg'),
  },
  {
    id: '6',
    name: 'Third Item',
    image: require('../../../assets/Directors/D7.jpg'),
  },
  {
    id: '7',
    name: 'Third Item',
    image: require('../../../assets/Directors/D8.jpg'),
  },
  {
    id: '8',
    name: 'Third Item',
    image: require('../../../assets/Directors/D9.jpg'),
  },
];

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class Directors extends Component {
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
    <TouchableNativeFeedback
      onPress={() => {
        const {navigate} = this.props.navigation;
        navigate('Artist');
      }}>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: '#fff',
          width: window / 2 - 20,
          elevation: 5,
        }}>
        <TouchableOpacity style={{zIndex: 100, elevation: 2}}>
          <Icon
            name="bookmark"
            size={40}
            color="green"
            style={{position: 'absolute', top: -10, right: 10}}
          />
        </TouchableOpacity>
        <Image
          source={data.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            marginBottom: 10,
          }}
        />
        <View style={{padding: 10}}>
          <Text style={styles.textFont}>Martin Scorcecs</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={styles.textSecondary}>Director</Text>
              <Text numberOfLines={1} style={styles.textSecondary}>
                United States
              </Text>
              <Text
                numberOfLines={1}
                style={(styles.textSecondary, {color: '#000'})}>
                Born 1927
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text style={styles.ratingTitleStyle}>Top</Text>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 30,
                  width: 50,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={(styles.ratingTitleStyle, {color: '#fff'})}>
                  27
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );

  render() {
    return (
      <SafeAreaView style={{padding: 10, backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 3}}>
            <Text style={styles.resultText}>Top 1 of 91287 Movies</Text>
          </View>
          <TouchableOpacity
            style={{alignItems: 'flex-end', flexDirection: 'row'}}
            onPress={() => {
              this.setState({modalVisible: true});
            }}>
            <Icon name="triangle-down" size={20} color="#232323" />
            <Text style={styles.resultText}>Rating</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          // margin={15}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS === 'android'
              ? () => <View style={{width: 20, height: 20}} />
              : ({highlighted}) => (
                  <View
                    style={[style.separator, highlighted && {marginLeft: 0}]}
                  />
                )
          }
          data={DATA}
          renderItem={({item}) => this.renderItemComponent(item)}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          contentContainerStyle={{marginTop: 10}}
        />
      </SafeAreaView>
    );
  }
}

export default Directors;
const styles = StyleSheet.create({
  textFont: {
    color: '#333333',
    fontFamily: "'Arial',Arial",
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
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
    color: '#333333',
    fontFamily: "'Helvetica Neue',Arial",
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  italic: {
    fontStyle: 'italic',
  },
  resultText: {
    color: '#333333',
    fontFamily: "'LEMON MILK Pro FTR',Arial",
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  ratingTitleStyle: {
    color: '#000000',
    fontFamily: "'Helvetica Neue',Arial",
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});
