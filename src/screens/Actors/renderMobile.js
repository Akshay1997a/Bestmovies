import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const DATA = [
  {
    id: '1',
    name: 'First Item',
    image: require('../../../assets/Actors/Actor1.jpg'),
  },
  {
    id: '2',
    name: 'Second Item',
    image: require('../../../assets/Actors/Actor2.jpg'),
  },
  {
    id: '3',
    name: 'Third Item',
    image: require('../../../assets/Actors/Actor4.jpg'),
  },
  {
    id: '4',
    name: 'Third Item',
    image: require('../../../assets/Actors/Actor5.jpg'),
  },
  {
    id: '5',
    name: 'Third Item',
    image: require('../../../assets/Actors/Actor6.jpg'),
  },
  {
    id: '6',
    name: 'Third Item',
    image: require('../../../assets/Actors/Actor7.jpg'),
  },
  {
    id: '7',
    name: 'Third Item',
    image: require('../../../assets/Actors/Actor8.jpg'),
  },
  {
    id: '8',
    name: 'Third Item',
    image: require('../../../assets/Actors/Actor9.jpg'),
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
    <TouchableNativeFeedback>
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
            style={{position: 'absolute', top: -10, left: 30}}
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
          <Text style={styles.textFont}>Client Estwood</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={styles.textSecondary}>Actor & Director</Text>
              <Text numberOfLines={1} style={styles.textSecondary}>
                United States
              </Text>
              <Text numberOfLines={1} style={styles.textSecondary}>
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
    let {t} = this.props;

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
            <Text style={styles.resultText}>{t('texts.id_101')}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS === 'android'
              ? () => <View style={{width: 20, height: 20}} />
              : ({highlighted}) => (
                  <View style={[highlighted && {marginLeft: 0}]} />
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

export default withTranslation()(RenderMobile);

const styles = StyleSheet.create({
  textFont: {
    color: '#333333',
    fontFamily: 'Arial',
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
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  italic: {
    fontStyle: 'italic',
  },
  resultText: {
    color: '#333333',
    fontFamily: 'VAG Rounded Next',
    fontSize: 15,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '500',
    }),
  },
  ratingTitleStyle: {
    color: '#000000',
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
});
