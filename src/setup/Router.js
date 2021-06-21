import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

const Stack = createStackNavigator();

const Router=()=> {
  return (
      <NavigationContainer>
    <Stack.Navigator initialRouteName="Filter" >
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

    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router