import React, {Component} from 'react';
import {
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {Text} from '../../components/EnhanchedComponents';
import SearchBar from '../../components/SearchBar';
import {COUNTRIES_LIST} from '../../config/CountriesList';
import HeaderModal from '../../components/HeaderModal';
import {withTranslation} from 'react-i18next';
import i18next from 'i18next';
import strings from '../../helper/strings';
import {isNotEmpty} from '../../helper/globalFunctions';
import primary_regular_font from '../../helper/fonts';
import {fontScale, heightScale, widthScale} from '../../helper/ResponsiveFonts';

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
    const {selectedCountries} = this.state;
    if (selectedCountries.includes(name)) {
      let newCountryList = selectedCountries.filter((val) => val !== name);
      this.setState({selectedCountries: newCountryList});
    } else {
      this.setState({selectedCountries: [name]});
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
    let {t} = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderModal title={t('texts.id_140')} {...this.props} />
        <View style={{marginTop: 0, marginHorizontal: widthScale(10)}}>
          <SearchBar
            placeholder={t('texts.id_27')}
            value={searchString}
            onChangeText={(text) => this.onSearchHandler(text)}
            onClear={this.onClearSearch}
          />
          <FlatList
            bounces={false}
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
            renderItem={({item, index}) => {
              return (
                <Button
                  title={item?.name}
                  isActive={selectedCountries.includes(item?.name)}
                  onPress={(name) => this.selectUnselectCountry(name)}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              marginTop: heightScale(8),
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default withTranslation()(RenderMobile);

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
    borderRadius: 10,
    justifyContent: 'center',
    height: heightScale(40),
    paddingLeft: 9,
    paddingRight: 11,
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
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(20),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
});
