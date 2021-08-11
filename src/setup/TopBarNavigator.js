import React, {useEffect, useRef, useState} from 'react';
import Movies from '../screens/Movies';
import TVShow from '../screens/TVShow';
import Directors from '../screens/Directors';
import Actors from '../screens/Actors';
import Shorts from '../screens/Shorts';
import MovieDetails from '../screens/MovieDetails';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import About from '../screens/About';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Header, {HEADER_HEIGHT} from '../components/Header';
import {Animated} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';

export const TopBarContext = React.createContext({});

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
  const [style, setStyle] = useState({});

  return (
    <TopBarContext.Provider value={{setStyle: setStyle}}>
      <Tab.Navigator
        initialRouteName="Movies"
        swipeEnabled={false}
        style={style}
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
        <Tab.Screen name={'Movies'} children={MoviesStack} />
        <Tab.Screen name={'TVShow'} component={Movies} />
        <Tab.Screen name={'Shorts'} component={Movies} />
        <Tab.Screen name={'Directors'} component={Directors} />
        <Tab.Screen name={'Actors'} component={Actors} />
      </Tab.Navigator>
    </TopBarContext.Provider>
  );
}


export function TopBarSecondaryNavigator(props) {
  console.log(props);
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="About"
      swipeEnabled={true}
      tabBarOptions={{
        scrollEnabled: true,
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

export function withTabStyleHOC(Component) {
  return (props) => {
    const [style, setStyle] = useTabStyle();
    useEffect(() => {
      console.log(style);
    }, [style]);
    return <Component setTabStyle={setStyle} tabStyle={style} {...props} />;
  };
}
