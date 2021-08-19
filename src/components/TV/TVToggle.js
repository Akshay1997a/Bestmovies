/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from "react";
 import { Platform, StyleSheet, Text, View, Button } from "react-native";
import colors from '../../helper/colors';
 
 import ToggleSwitch from "toggle-switch-react-native";
 
 export default class App extends Component<{}> {
   state = {
     isOnDefaultToggleSwitch: true,
     isOnLargeToggleSwitch: false,
     isOnBlueToggleSwitch: false
   };
 
   onToggle(isOn) {
     console.log("Changed to " + isOn);
   }
 
   render() {
     return (
       <View style={styles.container}>
         <ToggleSwitch size="small" disabled isOn={true} />
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
       marginRight:10,
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: colors.lightGrey
   },
   welcome: {
     fontSize: 20,
     textAlign: "center",
     margin: 10
   },
   instructions: {
     textAlign: "center",
     color: "red",
     marginBottom: 5
   }
 });