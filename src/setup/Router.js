import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import Slider from 'src/screens/Drawer'

const Drawer =createDrawerNavigator();
const Stack = createStackNavigator();

const StackNav=()=>{
  return(
    <Stack.Navigator initialRouteName="Menu" >
    {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
    {/* <Stack.Screen name="MyListScreen" component={MyListScreen} /> */}
    <Stack.Screen name="Filter" component={Filter} />
    <Stack.Screen name="Year" component={Year} />
    <Stack.Screen name="Country" component={Country} />
    <Stack.Screen name="Provider" component={Provider} />
    <Stack.Screen name="Ages" component={Ages} />
    <Stack.Screen name="Generes" component={Generes} />
    <Stack.Screen name="Price" component={Price} />
    <Stack.Screen name="Linkby" component={Linkby} />
    <Stack.Screen name="Languages" component={Languages} />
    {/* <Stack.Screen name="Menu" component={Menu} /> */}
</Stack.Navigator>
  );
}
const Router=()=> {
  return (
      <NavigationContainer>
          <Drawer.Navigator  overlayColor={1} drawerStyle={{width:190,marginTop:50}} drawerPosition="right"  drawerContent={props => <Slider{...props}/>}>
             <Drawer.Screen name="Menu" component={Menu}  
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

              <Drawer.Screen name="My Kids" component={StackNav}/>
               <Drawer.Screen name="Notification" component={Languages} 
                 options={{title: 'Home',drawerIcon: ({focused}) => (<Icon name="user" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}
              />
              <Drawer.Screen name="Friend" component={Languages} 
                options={{title: 'Home',drawerIcon: ({focused}) => (<FontAwesome5 name="user-friends" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}
              />
              <Drawer.Screen name="Profile" component={Languages} 
                options={{title: 'Home',drawerIcon: ({focused}) => (<Ionicons name="ios-settings" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}
              />
              <Drawer.Screen name="Language" component={Languages} 
                options={{title: 'Home',drawerIcon: ({focused}) => (<FontAwesome5 name="language" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}
              />
              <Drawer.Screen name="Get TV app" component={Languages} 
                options={{title: 'Get TV app',drawerIcon: ({focused}) => (<Icons name="download" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}/>
              <Drawer.Screen name="Share to friend" component={Languages} 
                options={{title: 'Share',drawerIcon: ({focused}) => (<Icon name="share" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}
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
// const CustomDrower = ()=>{
//   return(
//     <Drawer.Navigator>
//       <Drawer.Screen name="Get TV app" component={Languages} 
//                 options={{title: 'Get TV app',drawerIcon: ({focused}) => (<Icons name="download" size={25} color={focused ? '#7cc' : '#ccc'}  /> ), }}/>
//       <Drawer.Screen name="My Kids" component={StackNav}/>
//     </Drawer.Navigator>

//   );
// }