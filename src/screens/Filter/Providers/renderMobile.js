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
    const {updateProviderConfig} = this.props;
    const {providerConfig} = this.props;
    if (!providerConfig.selectedProviders.includes(id)) {
      updateProviderConfig({
        ...providerConfig,
        selectedProviders: [...providerConfig.selectedProviders, id],
      });
    } else {
      updateProviderConfig({
        ...providerConfig,
        selectedProviders: [...providerConfig.selectedProviders].filter(
          (i) => i !== id,
        ),
      });
    }
  }

  renderItemComponent = (data) => {
    const selectedProviders = this.props.providerConfig.selectedProviders || [];
    console.log(selectedProviders);
    return (
      <View style={{width: window / 5 - 2}}>
        <TouchableOpacity
          style={{borderRadius: 25, padding: 2}}
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
                style={{height: 44, width: 66, borderRadius: 10}}
                source={data.image}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: selectedProviders.includes(data.id) ? '#FF3300' : '#000',
              }}>
              {data.name}
            </Text>
            {selectedProviders.includes(data.id) && (
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
        {selectedCountry && (
          <View
            style={{
              alignItems: 'flex-end',
              marginBottom: 20,
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity onPress={this.navigateToCountries.bind(this)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.filterText}>{t('texts.id_28')} :</Text>
                <View style={{width: 10}} />
                <SVGImage width={30} height={20} uri={selectedCountry.flag} />
                <View style={{width: 10}} />
                <Text style={styles.filterText}>US</Text>
                <View style={{width: 10}} />
                <Icon name="chevron-right" />
              </View>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <TouchableOpacity
            style={[
              styles.butContainer,
              selectedMenu === MENUS.ALL ? styles.butActive : {},
            ]}
            onPress={() => this.setState({selectedMenu: MENUS.ALL})}>
            <Text
              style={[
                styles.butText,
                selectedMenu === MENUS.ALL ? styles.activeButText : {},
              ]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.butContainer,
              selectedMenu === MENUS.MY_PROVIDES ? styles.butActive : {},
            ]}
            onPress={() => this.setState({selectedMenu: MENUS.MY_PROVIDES})}>
            <Text
              style={[
                styles.butText,
                selectedMenu === MENUS.MY_PROVIDES ? styles.activeButText : {},
              ]}>
              {t('texts.id_147')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.butContainer,
              selectedMenu === MENUS.SAVE_AS_PROVIDER ? styles.butActive : {},
            ]}
            onPress={() =>
              this.setState({selectedMenu: MENUS.SAVE_AS_PROVIDER})
            }>
            <Text
              style={[
                styles.butText,
                selectedMenu === MENUS.SAVE_AS_PROVIDER
                  ? styles.activeButText
                  : {},
              ]}>
              {t('texts.id_148')}
            </Text>
            {/* <Text style={styles.butText}>MY Provider</Text> */}
          </TouchableOpacity>
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 5}}>
              <Text style={{fontSize: 15, fontWeight: '700', margin: 10}}>
                {t('texts.id_156')}: {providerConfig.selectedProviders.length}
              </Text>
            </View>
          </View>
          <ScrollView nestedScrollEnabled={true}>
            <FlatList
              showsVerticalScrollIndicator={true}
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({highlighted}) => (
                  <View style={[highlighted && {marginLeft: 0}]} />
                ))
              }
              data={
                selectedMenu === MENUS.ALL
                  ? DATA
                  : DATA.filter((i) =>
                      providerConfig.selectedProviders.includes(i.id),
                    )
              }
              renderItem={({item, index}) =>
                this.renderItemComponent({...item})
              }
              keyExtractor={(item) => item.id.toString()}
              numColumns={numColumns}
              contentContainerStyle={{
                paddingHorizontal: 5,
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
            <View style={{width: 10}} />
            <Text style={styles.filterText}>{t('texts.id_150')}</Text>
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
            <View style={{width: 10}} />
            <Text style={styles.filterText}>{t('texts.id_152')}</Text>
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
            <View style={{width: 10}} />
            <Text style={styles.filterText}>{t('texts.id_154')}</Text>
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
    fontSize: 16,
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  butContainer: {
    // flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
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
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  finterItem: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  filterText: {
    color: '#333333',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: 16,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  checkContainer: {
    position: 'absolute',
    right: 0,
    bottom: 18,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    backgroundColor: '#FF3300',
  },
});
