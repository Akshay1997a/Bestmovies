import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from 'src/screens/HomeScreen';
import MyListScreen from 'src/screens/MyListScreen';
import Filter from 'src/screens/Filter';
import Year from 'src/screens/Filter/Year';
import CountryFilter from 'src/screens/Filter/CountryFilter';
import Provider from 'src/screens/Filter/Providers';
import Ages from 'src/screens/Filter/Ages';
import Generes from 'src/screens/Filter/Generes';
import Price from 'src/screens/Filter/Price';
import Linkby from 'src/screens/Filter/LinkBy';
import LanguageFilter from 'src/screens/Filter/LanguageFilter';
import ArtistPage from '../screens/ArtistPage';
import Profile from '../screens/Profile';
import YoutubePlayer from '../components/YoutubePlayer';
import {StyleSheet, View, Platform} from 'react-native';
import MenusList from '../screens/MenusList';
import Header, {STATUS_BAR_HEIGHT} from '../components/Header';
import {
  TopBarMainNavigator,
  TopBarSearchNavigator,
  TopBarSecondaryNavigator,
} from './TopBarNavigator';
import HeaderModal from '../components/HeaderModal';
import SortBy from '../screens/Filter/SortBy';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Country from '../screens/Country';
import Language from '../screens/LanguageScreen';

const Stack = createStackNavigator();

const StackNav = () => {
  // const insets = useSafeAreaInsets();
  const commonOptions = {
    headerBackImage: () => <FontAwesome5 name="angle-left" size={30} />,
    headerShown: false,
    headerTitleAlign: 'center',
    //...Platform.OS === "ios" && TransitionPresets.FadeFromBottomAndroid,
  };

  const modalScreenOptions = (screenProps) => {
    const title = screenProps.route.name;
    return {
      headerShown: true,
      headerTitleAlign: 'center',
      cardStyle: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        overflow: 'hidden',
        // marginTop: insets.top,
        // marginBottom: insets.bottom,
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
        containerStyle: {
          backgroundColor: 'transparent',
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
          <View style={[styles.ModalContainer]}>
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
          <View style={[styles.ModalContainer]}>
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
            animationEnabled: false,
          };
        }}
        children={(props) => (
          <View style={[styles.ModalContainer]}>
            <Year {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="CountryFilter"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
            animationEnabled: false,
          };
        }}
        children={(props) => (
          <View style={[styles.ModalContainer]}>
            <CountryFilter {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Country"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
            animationEnabled: false,
          };
        }}
        children={(props) => (
          <View style={[styles.ModalContainer]}>
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
            animationEnabled: false,
          };
        }}
        children={(props) => (
          <View style={[styles.ModalContainer]}>
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
            animationEnabled: false,
          };
        }}
        children={(props) => (
          <View style={[styles.ModalContainer]}>
            <Provider {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Ages"
        children={(props) => (
          <View style={[styles.ModalContainer]}>
            <Ages {...props} />
          </View>
        )}
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
            animationEnabled: false,
          };
        }}
      />
      <Stack.Screen
        name="Generes"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
            animationEnabled: false,
          };
        }}
        children={(props) => (
          <View style={[styles.ModalContainer]}>
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
        name="LanguageFilter"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
            animationEnabled: false,
          };
        }}
        children={(props) => (
          <View style={[styles.ModalContainer]}>
            <LanguageFilter {...props} />
          </View>
        )}
      />
      <Stack.Screen
        name="Languages"
        options={(props) => {
          return {
            ...modalScreenOptions(props),
            headerShown: false,
            animationEnabled: false,
          };
        }}
        children={(props) => (
          <View style={[styles.ModalContainer]}>
            <Language {...props} />
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

const styles = StyleSheet.create({
  butContainer: {
    padding: 10,
  },
  ModalContainer: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 48,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 10,
  },
});
