import {values} from 'lodash';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {changeView} from '../../redux/FilterModule/FilterActions';
import {VIEW_STYLE} from '../../redux/FilterModule/FilterReducer';

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

  updateHeader() {
    const {navigation, filterConfig} = this.props;
    const {viewStyle} = filterConfig;
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <View style={styles.headerRightItems}>
            <Text>View</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.changeView(VIEW_STYLE.FULL_VIEW)}>
            <View>
              <View
                style={[
                  styles.box,
                  {
                    backgroundColor:
                      viewStyle === VIEW_STYLE.FULL_VIEW ? 'yellow' : '#EFEFEF',
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.changeView(VIEW_STYLE.GRID_VIEW);
            }}>
            <View>
              <Ionicons
                name="md-grid-sharp"
                color={
                  viewStyle === VIEW_STYLE.GRID_VIEW ? 'yellow' : '#EFEFEF'
                }
                size={25}
              />
            </View>
          </TouchableOpacity>
        </View>
      ),
    });
  }

  componentDidMount() {
    this.details();
    this.updateHeader();
  }

  componentDidUpdate() {
    this.updateHeader();
    console.log('updated');
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
          <Icon name="chevron-right" size={30} color="#232323" />
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <View
          style={{flexDirection: 'row', width: window * 1, borderRadius: 10}}>
          <View style={{flex: 5, marginLeft: 10, padding: 10}}>
            <Text style={{fontSize: 17, fontWeight: '700'}}>
              Including Previously browsed
            </Text>
            <Text style={{fontSize: 17, fontWeight: '700'}}>
              Include Watching
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', marginRight: 5}}>
            <Switch
              trackColor={{
                true: 'yellow',
                false: Platform.OS == 'android' ? '#d3d3d3' : '#fbfbfb',
              }}
              thumbColor={[
                Platform.OS == 'ios'
                  ? '#FFFFFF'
                  : this.state.switchValueIncludeW.status
                  ? 'yellow'
                  : '#ffffff',
              ]}
              ios_backgroundColor="#fbfbfb"
              style={[
                this.state.switchValueIncludeW.status
                  ? styles.switchEnableBorder
                  : styles.switchDisableBorder,
              ]}
              value={this.state.switchValueIncludeW}
              onValueChange={(values) =>
                this.setState({switchValueIncludeW: values})
              }
            />
            <Switch
              trackColor={{
                true: '#e3c727',
                false: Platform.OS == 'android' ? '#d3d3d3' : '#fbfbfb',
              }}
              thumbColor={[
                Platform.OS == 'ios'
                  ? '#FFFFFF'
                  : this.state.switchValueIncludePIH.status
                  ? '#7ab8e1'
                  : '#ffffff',
              ]}
              ios_backgroundColor="#fbfbfb"
              style={[
                this.state.switchValueIncludePIH.status
                  ? styles.switchEnableBorder
                  : styles.switchDisableBorder,
              ]}
              value={this.state.switchValueIncludePIH}
              onValueChange={(values) =>
                this.setState({switchValueIncludePIH: values})
              }
            />
          </View>
        </View>
        {/* <FlatList 
                    margin={10}
                    ItemSeparatorComponent={
                        Platform.OS !== 'android' &&
                        (({ highlighted }) => (
                        <View
                            style={[
                            style.separator,
                            highlighted && { marginLeft: 0 }
                            ]}
                        />
                        ))
                    }
                    data={this.state.data}
                    renderItem={({item}) => this.renderItemComponent(item)}
                    keyExtractor={item => item.id}
                /> */}

        <ScrollView>
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
                <Text style={styles.textSecond}>New</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="chevron-right" size={30} color="#232323" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Generes')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Generes</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textSecond}>
                  Comedy,Drama,Thriller,Action,Documentary,Horror
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="chevron-right" size={30} color="#232323" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Country')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Countries</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>
                  USA,UK,France,Spain,Argentina,Italy,Canada,Germany
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="chevron-right" size={30} color="#232323" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Languages')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Original Languages</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>All</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="chevron-right" size={30} color="#232323" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Ages')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Ages</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>All</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="chevron-right" size={30} color="#232323" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Provider')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Providers </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>
                  Netflix,Amazon Prime ,HBO,Flimin(Theaters included)
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="chevron-right" size={30} color="#232323" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Price')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Price</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>10 $ (Add included)</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="chevron-right" size={30} color="#232323" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Linkby')}
            style={styles.butContainer}>
            <View style={{flex: 5.5}}>
              <Text style={styles.textTitle}>Linked by</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>All</Text>
              </View>
            </View>
            <View style={{flex: 0.5, alignItems: 'center'}}>
              <Icon name="chevron-right" size={30} color="#232323" />
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            marginTop: (screen / 1.3) * 1.1,
            width: window * 1,
          }}>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => this.setState.switchValueIncludeW}>
            <Text
              style={{textAlign: 'center', fontSize: 15, fontWeight: '700'}}>
              Clear Filters
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

const styles = StyleSheet.create({
  textTitle: {
    color: '#DB3700',
    fontFamily: "'Helvetica Neue',Arial",
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  textSecond: {
    color: '#333333',
    fontFamily: "'Helvetica Neue',Arial",
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  switchEnableBorder: {
    borderColor: '#6fa6d3',
    borderWidth: 1,
  },

  switchDisableBorder: {
    borderColor: '#f2f2f2',
    borderWidth: 1,
  },
  butContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    paddingVertical: 20,
    marginBottom: 1,
    backgroundColor: '#EFEFEF',
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
