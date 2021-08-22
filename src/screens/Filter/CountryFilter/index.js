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
import SearchBar from '../../../components/SearchBar';
import {COUNTRIES_LIST} from '../../../config/CountriesList';
import HeaderModal from '../../../components/HeaderModal';
import {updateCountriesAction} from '../../../redux/FilterModule/FilterActions';
import {connect} from 'react-redux';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class CountryFilter extends Component {
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
    const {selectedCountries, updateCountries} = this.props;
    if (selectedCountries.includes(name)) {
      let newCountryList = selectedCountries.filter((val) => val !== name);
      updateCountries(newCountryList);
    } else {
      updateCountries([...selectedCountries, name]);
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
    const {filtereddCountries, searchString} = this.state;
    const {selectedCountries, updateCountries} = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
        <HeaderModal title="Countries of origin" {...this.props} />
        <SearchBar
          placeholder="Enter country"
          value={searchString}
          onChangeText={(text) => this.onSearchHandler(text)}
          onClear={this.onClearSearch}
        />
        <View>
          <Button
            title="Any"
            isActive={selectedCountries.length === 0}
            onPress={() => updateCountries([])}
          />
          <Button
            title="Your country (US)"
            isActive={false}
            onPress={(val) =>
              this.selectUnselectCountry('United States of America')
            }
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[highlighted && {marginLeft: 0}]} />
            ))
          }
          data={
            filtereddCountries.length > 0 ? filtereddCountries : COUNTRIES_LIST
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
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCountries: state.filterConfig.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCountries: (list) => dispatch(updateCountriesAction(list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryFilter);

const Button = ({title, isActive, onPress}) => (
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
