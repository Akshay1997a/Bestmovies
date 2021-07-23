import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/FontAwesome5';
import Movies from '../Movies';
import TVShow from '../TVShow';
import Directors from '../Directors';
import Actors from '../Actors';
import Shorts from '../Shorts';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: 'Moviesf',
    };
  }

  topBarNavigator() {
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName="Movies"
        swipeEnabled={false}
        tabBarOptions={{
          renderIndicator: () => <View />,
          activeTintColor: 'red',
          inactiveTintColor: 'black',
          labelStyle: {fontWeight: '700', fontSize: 12},
          tabStyle: {padding: 0},
          style: {
            elevation: 0,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 10}, // change this for more shadow
            shadowOpacity: 0.4,
            shadowRadius: 6,
          },
        }}>
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{title: 'Movies', tabBarLabel: 'Movies'}}
        />
        <Tab.Screen
          name="TVShow"
          component={TVShow}
          options={{title: 'TV Show', tabBarLabel: 'TV Show'}}
        />
        <Tab.Screen
          name="Shorts"
          component={Shorts}
          options={{title: 'Shorts', tabBarLabel: 'Shorts'}}
        />
        <Tab.Screen
          name="Directors"
          component={Directors}
          options={{title: 'Directors', tabBarLabel: 'Directors'}}
        />
        <Tab.Screen
          name="Actors"
          component={Actors}
          options={{title: 'Actors', tabBarLabel: 'Actors'}}
        />
      </Tab.Navigator>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        {/* <StatusBar hidden={true}/> */}
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Filter')}>
            <Image
              source={require('../../../assets/Icons/filter_ic.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Search')}>
            <Icon name="ios-search" size={25} color="#232323" />
          </TouchableOpacity>
          <View />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Menu')}>
            <Image
              source={require('../../../assets/Icons/BMicon.png')}
              style={{width: 150, height: 60, resizeMode: 'center'}}
            />
          </TouchableOpacity>
          <View />
          <TouchableOpacity>
            <User name="user" size={25} color="#232323" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => {
              const {toggleDrawer} = this.props.navigation;
              toggleDrawer();
            }}>
            <Icons name="dots-three-vertical" size={25} color="#232323" />
          </TouchableOpacity>
        </View>
        <SafeAreaView style={{flex: 1}}>{this.topBarNavigator()}</SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default Menu;
const styles = StyleSheet.create({
  menuFont: {
    fontSize: 15,
    fontWeight: '700',
  },
  bestMoviesBanner: {
    fontWeight: '700',
    fontSize: 20,
  },
  menuItem: {
    padding: 2,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,

    // backgroundColor:'#FC5404',
  },
});
