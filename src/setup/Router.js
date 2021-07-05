import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from 'src/screens/HomeScreen'
import MyListScreen from 'src/screens/MyListScreen'
import Filter from 'src/screens/Filter'
import Year from 'src/screens/Filter/Year'
import Country from 'src/screens/Filter/Country'
import Provider from 'src/screens/Filter/Providers'
import Ages from 'src/screens/Filter/Ages'
import Generes from 'src/screens/Filter/Generes';
import Price from 'src/screens/Filter/Price';
import Linkby from 'src/screens/Filter/LinkBy';
import Languages from 'src/screens/Filter/Original Languages';
import Menu from 'src/screens/Menu';
import Slider from 'src/screens/Drawer';
import Movies from 'src/screens/Movies';
import TVShow from 'src/screens/TVShow';
import Shorts from 'src/screens/Shorts';
import Actors from 'src/screens/Actors';
import Directors from 'src/screens/Directors';

const Tab = createMaterialTopTabNavigator();
const Drawer =createDrawerNavigator();
const Stack = createStackNavigator();

const StackNav=()=>{
  return(
    <Stack.Navigator initialRouteName="Movies" >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="MyListScreen" component={MyListScreen} />
    <Stack.Screen name="Filter" component={Filter} />
    <Stack.Screen name="Year" component={Year} />
    <Stack.Screen name="Country" component={Country} />
    <Stack.Screen name="Provider" component={Provider} />
    <Stack.Screen name="Ages" component={Ages} />
    <Stack.Screen name="Generes" component={Generes} />
    <Stack.Screen name="Price" component={Price} />
    <Stack.Screen name="Linkby" component={Linkby} />
    <Stack.Screen name="Languages" component={Languages} />
    <Stack.Screen name="Menu" component={Menu}  options={{headerShown: false}}/>
    <Stack.Screen name="Movies" component={Movies}  options={{headerShown: false}} />
    <Stack.Screen name="TVShow" component={TVShow}  options={{headerShown: false}} />
    <Stack.Screen name="Shorts" component={Shorts}  options={{headerShown: false}} />
    <Stack.Screen name="Actors" component={Actors}  options={{headerShown: false}} />
    <Stack.Screen name="Directors" component={Directors}  options={{headerShown: false}} />
    </Stack.Navigator>
  );
}




// const ToptabNavigarion=()=>{
//   return(
//       <Tab.Navigator initialRouteName="Directors">
//         <Tab.Screen name="Movies" component={Movies}/>
//         <Tab.Screen name="TVShow" component={TVShow}/>
//         <Tab.Screen name="Shorts" component={Shorts}/>
//         <Tab.Screen name="Actors" component={Actors}/>
//         <Tab.Screen name="Directors" component={StackNav}/>
//       </Tab.Navigator>
//   );
// }


const Router=()=> {
  return (
      <NavigationContainer>
          <Drawer.Navigator  overlayColor={1} drawerStyle={{width:190,marginTop:60}} drawerPosition="right"  drawerContent={props => <Slider{...props}/>}>
             <Drawer.Screen name="Menu" component={StackNav}  
               options={{
                title: 'Home',
                drawerIcon: ({focused}) => (
                   <Icon
                      name="user"
                      size={25}
                      color={focused ? '#7cc' : '#ccc'}
                   />
                ),
             }}/> 

              {/* <Drawer.Screen name="My Kids" component={StackNav}/> */}
               <Drawer.Screen name="Notification" component={Languages} 
                 options={{ title: 'Notification',drawerIcon: ({focused}) => (<Icon name="user" size={25} color={focused ? 'black' : '#ccc'}  /> ), }}
              />
              <Drawer.Screen name="Friend" component={Languages} 
                options={{title: 'Friend',drawerIcon: ({focused}) => (<FontAwesome5 name="user-friends" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}
              />
              <Drawer.Screen name="Profile" component={Languages} 
                options={{title: 'Profile',drawerIcon: ({focused}) => (<Ionicons name="ios-settings" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}
              />
              <Drawer.Screen name="Language" component={Languages} 
                options={{title: 'Language',drawerIcon: ({focused}) => (<FontAwesome5 name="language" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}
              />
              <Drawer.Screen name="Get TV app" component={Languages} 
                options={{title: 'Get TV app',drawerIcon: ({focused}) => (<Icons name="download" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}/>
              <Drawer.Screen name="Share to friend" component={Languages} 
                options={{title: 'Share to friend',drawerIcon: ({focused}) => (<Icon name="share" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}
              />
              <Drawer.Screen name="Filter" component={Filter} /> 
              <Drawer.Screen name="About" component={Languages} />
              <Drawer.Screen name="Advertise" component={Languages} />
              <Drawer.Screen name="Collaborate" component={Languages} />
              <Drawer.Screen name="Jobs" component={Languages} />
              <Drawer.Screen name="Investors" component={Languages} />
              <Drawer.Screen name="Contact Us " component={Languages} />
              <Drawer.Screen name="Terms of use" component={Languages} />
          </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Router
