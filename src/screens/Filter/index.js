import {values} from 'lodash';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {
  changeView,
  clearFiltersAction,
} from '../../redux/FilterModule/FilterActions';
import {VIEW_STYLE} from '../../redux/FilterModule/FilterReducer';
import HeaderModal from '../../components/HeaderModal';
import Switch from '../../components/Switch';
import {SORT_BY_FILTER} from '../../redux/FilterModule/FilterTypes';
// import {SafeAreaView} from 'react-native-safe-area-context'

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      window,
      screen,
      switchValueIncludePIH: false,
      switchValueIncludeW: false,
    };
  }

  componentDidMount() {
    this.details();
  }

  details() {
    this.setState({refreshing: true});
    fetch('https://60a65e2fb970910017eb1613.mockapi.io/Info')
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({data: resJson});
        // this.setState({ refreshing: false });
      })
      .catch((e) => console.log(e));
  }

  renderItemComponent = (data) => (
    <TouchableOpacity
      style={{backgroundColor: '#ebe6e1', borderRadius: 10, padding: 10}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 5}}>
          <Text style={styles.textTitle}>{data.title}</Text>
          <Text style={{fontSize: 15}}>{data.other}</Text>
        </View>
        <View style={{flex: 1}}>
          <Icon {...iconStyle} />
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const iconStyle = {
      name: 'chevron-right',
      size: 30,
      color: '#232323',
      style: {opacity: 0.5},
    };

    const {onClose} = this.props;
    const {countries: selectedCountries, sortBy} = this.props.filterConfig;
    const titleTextStyle = [styles.textTitle];
    if (selectedCountries.length > 0) {
      titleTextStyle.push(styles.isActiveText);
    }

    return (
      <View style={{backgroundColor: '#fff', paddingBottom: 30}}>
        <HeaderModal title="Filter" {...this.props} />
        <ScrollView
          contentContainerStyle={{
            marginHorizontal: 10,
            ...(Platform.OS === 'android' && {paddingBottom: 40}),
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Sortby')}
            style={{
              ...styles.butContainer,
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  ...styles.textTitle,
                  ...(sortBy !== SORT_BY_FILTER.ALL && styles.isActiveText),
                }}>
                Sort by
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textSecond}>{sortBy}</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon {...iconStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Year')}
            style={{
              ...styles.butContainer,
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.textTitle}>Liked by</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textSecond}>_ _</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon {...iconStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Provider')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={[styles.textTitle, styles.isActiveText]}>
                Streaming services (US)
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>
                  Netflix,Amazon Prime ,HBO,Flimin(Theaters included)
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon {...iconStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Year')}
            style={{
              ...styles.butContainer,
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.textTitle}>Year</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textSecond}>Any</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon {...iconStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Generes')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={[styles.textTitle, styles.isActiveText]}>
                Generes
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textSecond}>
                  Comedy,Drama,Thriller,Action,Documentary,Horror
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon {...iconStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CountryFilter')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={titleTextStyle}>Countries</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>
                  USA,UK,France,Spain,Argentina,Italy,Canada,Germany
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon {...iconStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Ages')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Age rating</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>Any</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon {...iconStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Ages')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Price</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>{'< 10 €'}</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon {...iconStyle} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LanguageFilter')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Original Language</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>Any</Text>
              </View>
            </View>
            <View style={{flex: 0.5, alignItems: 'center'}}>
              <Icon
                name="chevron-right"
                size={30}
                color="#232323"
                style={{opacity: 0.5}}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.textTitle}>Include</Text>
          <View style={{marginTop: 10}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Switch
                value={this.state.switchValueIncludeW}
                onValueChange={(values) =>
                  this.setState({switchValueIncludeW: values})
                }
              />
              <Text style={styles.textSecond}>Watching</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Switch
                value={this.state.switchValueIncludePIH}
                onValueChange={(values) =>
                  this.setState({switchValueIncludePIH: values})
                }
              />
              <Text style={styles.textSecond}>Previously browsed</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => this.props.clearFilter()}>
            <Text
              style={{
                color: '#ff3300',
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '700',
              }}>
              Clear Filters
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterConfig: state.filterConfig,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(changeView(view)),
    clearFilter: () => dispatch(clearFiltersAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

const styles = StyleSheet.create({
  textTitle: {
    color: '#000',
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  textSecond: {
    color: '#333333',
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  switchEnableBorder: {
    borderColor: '#6fa6d3',
    borderWidth: 1,
  },
  isActiveText: {
    color: '#ff3300',
  },
  switchDisableBorder: {
    borderColor: '#f2f2f2',
    borderWidth: 1,
  },
  butContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  headerRightContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
  },
  box: {
    width: 23,
    height: 23,
    backgroundColor: 'yellow',
  },
});
