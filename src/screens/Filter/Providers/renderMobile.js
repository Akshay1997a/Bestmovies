/* eslint-disable react-native/no-inline-styles */
import {flatMap, update} from 'lodash';
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
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COUNTRIES_LIST} from '../../../config/CountriesList';
import Svg, {SvgFromUri as SVGImage, Rect} from 'react-native-svg';
import HeaderModal from '../../../components/HeaderModal';
import Switch from '../../../components/Switch';
import {withTranslation} from 'react-i18next';
import primary_regular_font from '../../../helper/fonts';
import {connect} from 'react-redux';
import {updateProviders} from '../../../redux/FilterModule/FilterActions';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../helper/ResponsiveFonts';

export const DATA = [
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
]
  .flatMap((i) => [i, i, i, i, i, i])
  .map((item, index) => {
    return {...item, id: index};
  });
const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;
const numColumns = 5;
const MENUS = {
  ALL: 'ALL',
  MY_PROVIDES: 'MY_PROVIDES',
  SAVE_AS_PROVIDER: 'SAVE_AS_PROVIDER',
};

export class RenderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      window,
      screen,
      selectedCountry: null,
      selectedMenu: MENUS.ALL,
      selectedProviders: [],
    };

    this.togalItem = this.togalItem.bind(this);
    console.log(DATA);
  }

  componentDidMount() {
    let country = COUNTRIES_LIST.find((i) => i.alpha2Code === 'US');
    console.log(country);
    this.setState({selectedCountry: country});
  }

  navigateToCountries() {
    const {navigation} = this.props;
    navigation.navigate('Country');
  }

  togalItem(id) {
    const {selectedProviders} = this.state;
    const {providerConfig} = this.props;
    if (!selectedProviders.includes(id)) {
      this.setState({
        selectedProviders: [...selectedProviders, id],
      });
    } else {
      this.setState({
        selectedProviders: [...selectedProviders].filter((i) => i !== id),
      });
    }
  }

  saveAsMyProvider() {
    const {updateProviderConfig, providerConfig} = this.props;
    const {selectedProviders} = this.state;
    updateProviderConfig({
      ...providerConfig,
      selectedProviders: [
        ...providerConfig.selectedProviders,
        ...selectedProviders,
      ],
    });
    this.setState({
      selectedMenu: MENUS.MY_PROVIDES,
      selectedProviders: [],
    });
  }

  renderItemComponent = (data) => {
    const {selectedProviders} = this.state;
    const {providerConfig} = this.props;
    let activeProviders = [
      ...selectedProviders,
      ...providerConfig.selectedProviders,
    ];
    return (
      <View style={{width: widthScale(66)}}>
        <TouchableOpacity
          style={{borderRadius: 8}}
          onPress={() => this.togalItem(data.id)}>
          <View
            style={{
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 5}}>
              <Image
                keyExtractor={data.id}
                style={{
                  height: heightScale(44),
                  width: widthScale(66),
                  borderRadius: 10,
                }}
                source={data.image}
              />
            </View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                textAlign: 'center',
                color: activeProviders.includes(data.id) ? '#FF3300' : '#000',
              }}>
              {data.name}
            </Text>
            {activeProviders.includes(data.id) && (
              <View style={styles.checkContainer}>
                <FontAwesome5Icon name="check" color="#fff" size={20} />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    let {t} = this.props;
    const {selectedCountry, selectedMenu} = this.state;
    const {providerConfig} = this.props;
    const {updateProviderConfig} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderModal title={t('texts.id_144')} {...this.props} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginTop: heightScale(3),
          }}>
          <TouchableOpacity
            style={[
              styles.butContainer,
              providerConfig.selectedProviders.length === 0
                ? styles.butActive
                : {},
            ]}
            onPress={() => {
              updateProviderConfig({
                ...providerConfig,
                selectedProviders: [],
              });
              this.setState({selectedMenu: MENUS.ALL, selectedProviders: []});
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                styles.butText,
                providerConfig.selectedProviders.length === 0
                  ? styles.activeButText
                  : {},
              ]}>
              Anywhere
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.butContainer,
              providerConfig.selectedProviders.length !== 0
                ? styles.butActive
                : {},
            ]}
            onPress={() => this.setState({selectedMenu: MENUS.MY_PROVIDES})}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                styles.butText,
                providerConfig.selectedProviders.length !== 0
                  ? styles.activeButText
                  : {},
              ]}>
              {t('texts.id_147')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.selectedProviders.length === 0}
            style={[
              styles.butContainer,
              selectedMenu === MENUS.SAVE_AS_PROVIDER ? styles.butActive : {},
              {width: widthScale(120)},
            ]}
            onPress={() => this.saveAsMyProvider()}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[
                styles.butText,
                selectedMenu === MENUS.SAVE_AS_PROVIDER
                  ? styles.activeButText
                  : {},
              ]}>
              {t('texts.id_148')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: widthScale(10), margin: 0}}>
          {selectedCountry && (
            <TouchableOpacity onPress={this.navigateToCountries.bind(this)}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: heightScale(15),
                }}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.filterTextBold, {width: widthScale(66)}]}>
                    {t('texts.id_28')}:
                  </Text>
                  <SVGImage width={30} height={20} uri={selectedCountry.flag} />
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.filterText, {width: 'auto'}]}>
                    US
                  </Text>
                </View>
                <Icon
                  name="chevron-right"
                  size={widthScale(15)}
                  style={{opacity: 0.2}}
                />
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={this.navigateToCountries.bind(this)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: heightScale(10),
              }}>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[styles.filterTextBold]}>
                  TV platform:
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[styles.filterText, {width: 'auto', marginLeft: 5}]}>
                  Web, Amazon fire TV
                </Text>
              </View>
              <Icon
                name="chevron-right"
                size={widthScale(15)}
                style={{opacity: 0.2}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              ...styles.filterText,
              marginTop: heightScale(10),
              marginHorizontal: heightScale(10),
            }}>
            {t('texts.id_156')}: {providerConfig.selectedProviders.length}
          </Text>
          <ScrollView nestedScrollEnabled={true}>
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={true}
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({highlighted}) => (
                  <View style={[highlighted && {marginLeft: 0}]} />
                ))
              }
              data={DATA}
              renderItem={({item, index}) =>
                this.renderItemComponent({...item})
              }
              keyExtractor={(item) => item.id.toString()}
              numColumns={numColumns}
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
              contentContainerStyle={{
                paddingHorizontal: 10,
                marginTop: heightScale(8),
              }}
            />
          </ScrollView>
        </ScrollView>
        <View style={styles.filterContainer}>
          <View style={styles.finterItem}>
            <Switch
              value={providerConfig.freeStreamingServiceWithAd}
              thumbColor={'#fff'}
              trackColor={{true: '#ff3300', false: '#EFEFEF'}}
              onValueChange={(value) =>
                updateProviderConfig({
                  ...providerConfig,
                  freeStreamingServiceWithAd: value,
                })
              }
            />
            <View style={{width: widthScale(10)}} />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.filterText}>
              {t('texts.id_150')}
            </Text>
          </View>
          <View style={styles.finterItem}>
            <Switch
              value={providerConfig.rentStreamingService}
              thumbColor={'#fff'}
              trackColor={{true: '#ff3300', false: '#EFEFEF'}}
              onValueChange={(value) =>
                updateProviderConfig({
                  ...providerConfig,
                  rentStreamingService: value,
                })
              }
            />
            <View style={{width: widthScale(10)}} />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.filterText}>
              {t('texts.id_152')}
            </Text>
          </View>
          <View style={styles.finterItem}>
            <Switch
              value={providerConfig.localMovieTheaters}
              thumbColor={'#fff'}
              trackColor={{true: '#ff3300', false: '#EFEFEF'}}
              onValueChange={(value) =>
                updateProviderConfig({
                  ...providerConfig,
                  localMovieTheaters: value,
                })
              }
            />
            <View style={{width: widthScale(10)}} />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.filterText}>
              {t('texts.id_154')}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    providerConfig: state.filterConfig.providerConfig,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProviderConfig: (data) => dispatch(updateProviders(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(RenderMobile));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  butText: {
    color: '#333333',
    fontFamily: primary_regular_font.primary_regular_font,
    textAlign: 'center',
    fontSize: fontScale(16),
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  butContainer: {
    // flex: 1,
    height: heightScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: widthScale(108),
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 10,
  },
  butActive: {
    backgroundColor: '#FF3300',
  },
  activeButText: {
    color: '#fff',
  },
  filterContainer: {
    height: heightScale(150),
    paddingHorizontal: 10,
    // paddingVertical: 20,
  },
  finterItem: {
    flexDirection: 'row',
    // paddingVertical: 10,
    paddingTop: heightScale(12),
  },
  filterText: {
    color: '#333333',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(16),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  filterTextBold: {
    color: '#333333',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(16),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  checkContainer: {
    position: 'absolute',
    right: 0,
    top: 19,
    width: widthScale(28),
    height: heightScale(28),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    backgroundColor: '#FF3300',
  },
});
