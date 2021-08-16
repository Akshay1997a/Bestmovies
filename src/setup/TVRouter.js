

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import MyListScreen from '../screens/MyListScreen'
import ItemDetailsScreen from '../screens/ItemDetailsScreen'
import Filter from '../screens/Filter'
import Year from '../screens/Filter/Year'
import Country from '../screens/Filter/Country'
import Provider from '../screens/Filter/Providers'
import Ages from '../screens/Filter/Ages'
import Generes from '../screens/Filter/Generes';
import Price from '../screens/Filter/Price';
import Linkby from '../screens/Filter/LinkBy';
import Languages from '../screens/Filter/Original Languages';

const Stack = createStackNavigator();

const StackNav=()=>{
  return(
    <Stack.Navigator initialRouteName="Menu" >
    <Stack.Screen name="Filter" component={Filter} />
    <Stack.Screen name="Year" component={Year} />
    <Stack.Screen name="Country" component={Country} />
    <Stack.Screen name="Provider" component={Provider} />
    <Stack.Screen name="Ages" component={Ages} />
    <Stack.Screen name="Generes" component={Generes} />
    <Stack.Screen name="Price" component={Price} />
    <Stack.Screen name="Linkby" component={Linkby} />
    <Stack.Screen name="Languages" component={Languages} />
</Stack.Navigator>
  );
}

const TVRouter=()=> {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          mode={'modal'}
          screenOptions={{
            headerShown: false
          }}
        >
      <Stack.Screen name="HomeScreen" component={HomeScreen}  />
      <Stack.Screen name="MyListScreen" component={MyListScreen} />
      <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default TVRouter