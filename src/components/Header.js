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
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Movies from '../screens/Movies';
import TVShow from '../screens/TVShow';
import Directors from '../screens/Directors';
import Actors from '../screens/Actors';
import Shorts from '../screens/Shorts';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default function Header({screens = [], ...rest}) {
  console.log(rest);
  const TopBarNavigator = () => {
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
            height: 40,
          },
        }}>
        {screens.map((item, index) => (
          <Tab.Screen
            name={item.name}
            component={item.component}
            options={{title: item.name, tabBarLabel: item.name}}
          />
        ))}
      </Tab.Navigator>
    );
  };

  return (
    <View style={{backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          justifyContent: 'space-between',
          alignItems: 'center',
          // height: 70,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => rest.navigation.navigate('Filter')}>
          <Image
            source={require('../../assets/Icons/filter_ic.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => rest.navigation.navigate('Search')}>
          <Icon name="ios-search" size={25} color="#232323" />
        </TouchableOpacity>
        <View />
        <TouchableOpacity onPress={() => rest.navigation.navigate('Menu')}>
          <Image
            source={require('../../assets/Icons/BMicon.png')}
            style={{width: 150, height: 60, resizeMode: 'center'}}
          />
        </TouchableOpacity>
        <View />
        <TouchableOpacity>
          <FA5 name="user" size={25} color="#232323" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => {
            const {toggleDrawer} = rest.navigation;
            toggleDrawer();
          }}>
          <Icons name="dots-three-vertical" size={25} color="#232323" />
        </TouchableOpacity>
      </View>
      {screens.length !== 0 && <TopBarNavigator />}
    </View>
  );
}
