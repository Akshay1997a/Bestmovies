import React from 'react';
import Movies from '../screens/Movies';
import TVShow from '../screens/TVShow';
import Directors from '../screens/Directors';
import Actors from '../screens/Actors';
import Shorts from '../screens/Shorts';
import MovieDetails from '../screens/MovieDetails';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import About from '../screens/About';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

function MoviesStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}>
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}

export function TopBarMainNavigator(props) {
  console.log(props);
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      swipeEnabled={false}
      tabBarOptions={{
        indicatorStyle: {backgroundColor: 'red'},
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        labelStyle: {fontWeight: '700', fontSize: 12},
        tabStyle: {padding: 0},
        style: {
          elevation: 10,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 10}, // change this for more shadow
          shadowOpacity: 0.4,
          shadowRadius: 6,
          height: 40,
        },
      }}>
      <Tab.Screen name={'Movies'} component={MoviesStack} />
      <Tab.Screen name={'TVShow'} component={Movies} />
      <Tab.Screen name={'Shorts'} component={Movies} />
      <Tab.Screen name={'Directors'} component={Directors} />
      <Tab.Screen name={'Actors'} component={Actors} />
    </Tab.Navigator>
  );
}

export function TopBarSecondaryNavigator(props) {
  console.log(props);
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="About"
      swipeEnabled={false}
      tabBarOptions={{
        indicatorStyle: {backgroundColor: 'red'},
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
      <Tab.Screen name={'About'} component={About} />
      <Tab.Screen name={'TVShow'} component={About} />
      <Tab.Screen name={'Shorts'} component={About} />
      <Tab.Screen name={'Directors'} component={About} />
      <Tab.Screen name={'Actors'} component={About} />
    </Tab.Navigator>
  );
}
