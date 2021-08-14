import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from 'src/screens/HomeScreen';
import MyListScreen from 'src/screens/MyListScreen';
import Filter from 'src/screens/Filter';
import Year from 'src/screens/Filter/Year';
import Country from 'src/screens/Filter/Country';
import Provider from 'src/screens/Filter/Providers';
import Ages from 'src/screens/Filter/Ages';
import Generes from 'src/screens/Filter/Generes';
import Price from 'src/screens/Filter/Price';
import Linkby from 'src/screens/Filter/LinkBy';
import Languages from 'src/screens/Filter/Original Languages';
import Search from 'src/screens/Search';
import ArtistPage from '../screens/ArtistPage';
import Profile from '../screens/Profile';
import YoutubePlayer from '../components/YoutubePlayer';
import MovieDetails from '../screens/MovieDetails';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MenusList from '../screens/MenusList';
import Header from '../components/Header';
import Movies from '../screens/Movies';
import {
  TopBarMainNavigator,
  TopBarSearchNavigator,
  TopBarSecondaryNavigator,
} from './TopBarNavigator';
import HeaderModal from '../components/HeaderModal';
import SortBy from '../screens/Filter/SortBy';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MoviesScreensStack = [
  {
    name: 'Movies',
    component: Movies,
  },
];

const StackNav = () => {
  const commonOptions = {
    headerBackImage: (props) => <FontAwesome5 name="angle-left" size={30} />,
    headerShown: false,
    headerTitleAlign: 'center',
    ...TransitionPresets.FadeFromBottomAndroid,
  };

  const modalScreenOptions = (screenProps) => {
    const title = screenProps.route.name;
    return {
      headerShown: true,
      headerTitleAlign: 'center',
      cardStyle: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        overflow: 'hidden',
      },
      cardOverlayEnabled: true,
      animationTypeForReplace: 'push',
      headerStyle: {
        elevation: 0,
      },
      cardStyleInterpolator: ({current: {progress}}) => ({
        cardStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 0.5, 0.9, 1],
            outputRange: [0, 0.25, 0.7, 1],
          }),
        },
        overlayStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
            extrapolate: 'clamp',
          }),
        },
      }),
      ...TransitionPresets.ModalSlideFromBottomIOS,
      header: (headerProps) => (
        <HeaderModal title={title} modalProps={screenProps} {...headerProps} />
      ),
    };
  };

  return (
    <Stack.Navigator
      initialRouteName="Menu"
      mode="modal"
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MyListScreen" component={MyListScreen} />
      <Stack.Screen
        name="Filter"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
          };
        }}
        children={(props) => (
          <View style={styles.ModalContainer}>
            <Filter {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="MenusList"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
          };
        }}
        children={(props) => (
          <View style={styles.ModalContainer}>
            <MenusList {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Year"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
          };
        }}
        children={(props) => (
          <View style={styles.ModalContainer}>
            <Year {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Country"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
          };
        }}
        children={(props) => (
          <View style={styles.ModalContainer}>
            <Country {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Sortby"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
          };
        }}
        children={(props) => (
          <View style={styles.ModalContainer}>
            <SortBy {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Provider"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
          };
        }}
        children={(props) => (
          <View style={styles.ModalContainer}>
            <Provider {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Ages"
        children={(props) => (
          <View style={styles.ModalContainer}>
            <Ages {...props} />
          </View>
        )}
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
          };
        }}
      />
      <Stack.Screen
        name="Generes"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
          };
        }}
        children={(props) => (
          <View style={styles.ModalContainer}>
            <Generes {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Price"
        component={Price}
        options={{
          ...commonOptions,
          headerShown: true,
          headerStyle: {
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="Linkby"
        component={Linkby}
        options={{
          ...commonOptions,
          headerShown: true,
          headerStyle: {
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="Languages"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
          };
        }}
        children={(props) => (
          <View style={styles.ModalContainer}>
            <Languages {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Menu"
        component={TopBarMainNavigator}
        options={{
          ...commonOptions,
          headerStyle: {
            elevation: 0,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        options={{
          ...commonOptions,
          headerShown: false,
          headerStyle: {
            elevation: 0,
          },
        }}
        component={TopBarSearchNavigator}
      />
      <Stack.Screen
        name="About"
        options={{
          ...commonOptions,
          headerShown: false,
          // header: (props) => <Header {...props} />,
        }}
        component={TopBarSecondaryNavigator}
      />
      <Stack.Screen
        name="Artist"
        component={ArtistPage}
        options={{...commonOptions}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{...commonOptions}}
      />
      <Stack.Screen
        name="YoutubePlayer"
        component={YoutubePlayer}
        options={{...commonOptions}}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};
export default Router;

function HeaderBackButton(props) {
  const goBack = () => {
    console.log(props);
  };
  return (
    <TouchableOpacity onPress={goBack}>
      <View style={styles.butContainer}>
        <FontAwesome5 name={'chevron-left'} size={25} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  butContainer: {
    padding: 10,
  },
  ModalContainer: {
    height: '98%',
    marginTop: 'auto',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
    elevation: 10,
  },
});
