import {flatMap} from 'lodash';
import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COUNTRIES_LIST} from '../../../config/CountriesList';
import Svg, {SvgFromUri as SVGImage, Rect} from 'react-native-svg';
import HeaderModal from '../../../components/HeaderModal';

const DATA = [
  {
    id: '1',
    name: 'Netflix',
    image: require('../../../../assets/Providers/netflix_ic.png'),
  },
  {
    id: '2',
    name: 'Prime Video',
    image: require('../../../../assets/Providers/prime_ic.png'),
  },
  {
    id: '3',
    name: 'Hulu',
    image: require('../../../../assets/Providers/Hulu_ic.png'),
  },
  {
    id: '4',
    name: 'Apple TV+',
    image: require('../../../../assets/Providers/apple_ic.png'),
  },
  {
    id: '4',
    name: 'Disny+',
    image: require('../../../../assets/Providers/disny_ic.png'),
  },
];

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;
const numColumns = 5;

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      window,
      screen,
      selectedCountry: null,
    };
  }

  componentDidMount() {
    let country = COUNTRIES_LIST.find((i) => i.alpha2Code === 'US');
    console.log(country);
    this.setState({selectedCountry: country});
  }

  renderItemComponent = (data) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}>
      <TouchableOpacity style={{borderRadius: 25, padding: 2}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flex: 5}}>
            <Image
              keyExtractor={data.id}
              style={{height: 60, width: 60, borderRadius: 10}}
              source={data.image}
            />
          </View>
          <Text style={{textAlign: 'center'}}>{data.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  render() {
    const {selectedCountry} = this.state;
    return (
      <SafeAreaView style={{backgroundColor: '#fff', padding: 10, flex: 1}}>
        <HeaderModal title="Streaming services" {...this.props} />
        {selectedCountry && (
          <View style={{alignItems: 'flex-end', marginBottom: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.filterText}>Country :</Text>
              <View style={{width: 10}} />
              <SVGImage
                width={30}
                height={20}
                uri={selectedCountry.flag}
              />
              <View style={{width: 10}} />
              <Text style={styles.filterText}>US</Text>
              <View style={{width: 10}} />
              <Icon name="chevron-right" />
            </View>
          </View>
        )}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={[styles.butContainer, styles.butActive]}>
            <Text style={[styles.butText, styles.activeButText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butContainer}>
            <Text style={styles.butText}>My Provider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butContainer}>
            <Text style={styles.butText}>Save as</Text>
            <Text style={styles.butText}>MY Provider</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 5}}>
              <Text style={{fontSize: 15, fontWeight: '700', margin: 10}}>
                Subscriptions: 1
              </Text>
            </View>
          </View>
          <ScrollView nestedScrollEnabled={true}>
            <FlatList
              showsVerticalScrollIndicator={true}
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({highlighted}) => (
                  <View
                    style={[ highlighted && {marginLeft: 0}]}
                  />
                ))
              }
              data={DATA.flatMap((i) => [i, i, i, i, i, i, i, i, i])}
              renderItem={({item}) => this.renderItemComponent(item)}
              keyExtractor={(item) => item.id.toString()}
              numColumns={numColumns}
            />
          </ScrollView>
        </ScrollView>
        <View style={styles.filterContainer}>
          <View style={styles.finterItem}>
            <Switch value={true} />
            <View style={{width: 10}} />
            <Text style={styles.filterText}>
              Free streaming services with ads
            </Text>
          </View>
          <View style={styles.finterItem}>
            <Switch />
            <View style={{width: 10}} />
            <Text style={styles.filterText}>Rent / buy streaming services</Text>
          </View>
          <View style={styles.finterItem}>
            <Switch />
            <View style={{width: 10}} />
            <Text style={styles.filterText}>Local movie theaters</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Provider;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  butText: {
    color: '#333333',
    fontFamily: "'VAG Rounded Regular'",
    fontSize: 16,
    fontWeight: '400',
  },
  butContainer: {
    // flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: window / 3 - 10,
    backgroundColor: '#EFEFEF',
  },
  butActive: {
    backgroundColor: '#FF3300',
  },
  activeButText: {
    color: '#fff',
  },
  filterContainer: {
    paddingVertical: 20,
  },
  finterItem: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  filterText: {
    color: '#333333',
    fontFamily: "'VAG Rounded Regular'",
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
