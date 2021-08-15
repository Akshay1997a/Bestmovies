import React, {useContext, useState} from 'react';
import Movies from '../screens/Movies';
import Directors from '../screens/Directors';
import Actors from '../screens/Actors';
import MovieDetails from '../screens/MovieDetails';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import About from '../screens/About';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Header, {HEADER_HEIGHT, HEADER_TYPE} from '../components/Header';
import {Animated, StyleSheet, Dimensions} from 'react-native';
import {
  AnimationContext,
  useAnimationProvider,
} from '../Providers/CollapsibleHeaderProvider';
import Search from '../screens/Search';

const HEIGHT = Dimensions.get('screen').height;
export const TopBarContext = React.createContext(null);

function MoviesStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Movies"
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
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      swipeEnabled={false}
      tabBar={(props) => <Header {...props} isTabBarVisible={true} />}
      tabBarOptions={{
        // scrollEnabled: !true,
        indicatorStyle: {backgroundColor: 'red'},
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        labelStyle: {fontWeight: '700', fontSize: 14},
        tabStyle: {padding: 0},
      }}>
      <Tab.Screen name={'Movies'} children={MoviesStack} />
      <Tab.Screen name={'TVShow'} component={MoviesStack} />
      <Tab.Screen name={'Shorts'} component={MoviesStack} />
      <Tab.Screen name={'Directors'} component={Directors} />
      <Tab.Screen name={'Actors'} component={Directors} />
    </Tab.Navigator>
  );
}

export function TopBarSearchNavigator(props) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Title"
      swipeEnabled={false}
      tabBar={(props) => (
        <Header
          {...props}
          headerType={HEADER_TYPE.SEARCH_BAR}
          isTabBarVisible={true}
        />
      )}
      tabBarOptions={{
        indicatorStyle: {backgroundColor: 'red'},
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        labelStyle: {fontWeight: '700', fontSize: 14},
        tabStyle: {padding: 0},
      }}>
      <Tab.Screen name={'Title'} children={Search} />
      <Tab.Screen name={'Artist'} component={Search} />
      <Tab.Screen name={'User'} component={Search} />
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
      tabBar={(props) => <Header {...props} isTabBarVisible={true} />}
      tabBarOptions={{
        scrollEnabled: true,
        indicatorStyle: {backgroundColor: 'red'},
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        labelStyle: {fontWeight: '700', fontSize: 14},
        tabStyle: {padding: 0},
      }}>
      <Tab.Screen name={'About'} component={About} />
      <Tab.Screen name={'Advertise'} component={About} />
      <Tab.Screen name={'Collaborate'} component={About} />
      <Tab.Screen name={'Jobs'} component={About} />
      <Tab.Screen name={'Contact us'} component={About} />
      <Tab.Screen name={'Terms of use'} component={About} />
      <Tab.Screen name={'Privacy policy'} component={About} />
    </Tab.Navigator>
  );
}

function useTabStyle() {
  const [style, setStyle] = useState();
  return [style, setStyle];
}

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
});
