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
import {withTranslation} from 'react-i18next';
import i18next from 'i18next';
import {isNotEmpty} from '../../../helper/globalFunctions';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class RenderMobile extends Component {
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
      countryData: [],
    };

    this.selectUnselectCountry = this.selectUnselectCountry.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onClearSearch = this.onClearSearch.bind(this);
  }

  componentDidMount() {
    let lng = this.props.i18n.language;
    let countryData = i18next.getDataByLanguage(lng);
    let countryTemp = countryData?.translation?.countries_listed;
    let result = isNotEmpty(countryTemp)
      ? Object.keys(countryTemp).map((key) => [String(key), countryTemp[key]])
      : [];
    this.setState(
      {
        countryData: result,
      },
      () => {
        console.log('country data we get hereeee', this.state.countryData);
      },
    );
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
    let {t} = this.props;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderModal title={t('texts.id_137')} {...this.props} />
        <View style={{padding: 10}}>
          <SearchBar
            placeholder={t('texts.id_27')}
            value={searchString}
            onChangeText={(text) => this.onSearchHandler(text)}
            onClear={this.onClearSearch}
          />
          <View>
            <Button
              title={t('texts.id_172')}
              isActive={selectedCountries.length === 0}
              onPress={() => updateCountries([])}
            />
            <Button
              title={t('texts.id_140') + ' (US)'}
              isActive={
                selectedCountries.findIndex(
                  (i) => i === 'United States of America',
                ) >= 0
              }
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
            data={this.state.countryData}
            renderItem={({item, index}) => {
              return (
                <Button
                  title={item?.[1]}
                  isActive={selectedCountries.includes(item?.[1])}
                  onPress={(name) => this.selectUnselectCountry(name)}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
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

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(RenderMobile),
);

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
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
});
