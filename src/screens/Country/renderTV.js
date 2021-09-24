import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import {COUNTRIES_LIST} from '../../config/CountriesList';
import HeaderModal from '../../components/HeaderModal';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class RenderTV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      selectedCountries: [],
      filtereddCountries: [],
      searchString: '',
      window,
      screen,
    };

    this.selectUnselectCountry = this.selectUnselectCountry.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onClearSearch = this.onClearSearch.bind(this);
  }

  selectUnselectCountry(name) {
    const {selectedCountries} = this.state;
    if (selectedCountries.includes(name)) {
      let newCountryList = selectedCountries.filter((val) => val !== name);
      this.setState({selectedCountries: newCountryList});
    } else {
      this.setState({selectedCountries: [...selectedCountries, name]});
    }
  }

  onSearchHandler(str) {
    let arr = COUNTRIES_LIST.filter((i) => i.name.match(new RegExp(str, 'i')));
    this.setState({filtereddCountries: arr, searchString: str});
  }

  onClearSearch() {
    this.setState({filtereddCountries: [], searchString: ''});
  }

  render() {
    const {selectedCountries, filtereddCountries, searchString} = this.state;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderModal title="Your country" {...this.props} />
        <View style={{padding: 10}}>
          <SearchBar
            placeholder="Enter country"
            value={searchString}
            onChangeText={(text) => this.onSearchHandler(text)}
            onClear={this.onClearSearch}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={
              Platform.OS !== 'android' &&
              (({highlighted}) => (
                <View style={[highlighted && {marginLeft: 0}]} />
              ))
            }
            data={
              filtereddCountries.length > 0
                ? filtereddCountries
                : COUNTRIES_LIST
            }
            renderItem={({item, index}) => (
              <Button
                title={item.name}
                isActive={selectedCountries.includes(item.name)}
                onPress={(name) => this.selectUnselectCountry(name)}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default RenderTV;

export const Button = ({title, isActive, onPress}) => (
  <TouchableOpacity
    style={[styles.butContainer, isActive && styles.butActive]}
    onPress={() => onPress(title)}>
    <Text style={[styles.butTitle, isActive && styles.butActiveText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  butContainer: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },
  butActive: {
    backgroundColor: '#FF4D01',
  },
  butActiveText: {
    color: '#fff',
    fontWeight: '700',
  },
  butTitle: {
    color: '#000000',
    fontFamily: 'VAG Rounded Next',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
