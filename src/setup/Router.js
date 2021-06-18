import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'src/screens/HomeScreen'
import MyListScreen from 'src/screens/MyListScreen'

const Stack = createStackNavigator();

const Router=()=> {
  return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MyListScreen" component={MyListScreen} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router