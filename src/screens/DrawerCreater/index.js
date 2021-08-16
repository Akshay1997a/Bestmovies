// import React from 'react';
// import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
//   DrawerDivider,
// } from 'react-navigation-drawer';
// import Icon from 'react-native-vector-icons/FontAwesome';

// function Slider({...props}) {
//   const navigateTo = (name) => {
//     const {navigation} = props;
//     navigation.navigate(name);
//   };

//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <View style={styles.seperator} />
//       <View style={styles.row}>
//         <TouchableOpacity>
//           <Icon name="facebook" size={25} style={styles.socialIc} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="twitter" size={25} style={styles.socialIc} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="instagram" size={25} style={styles.socialIc} />
//         </TouchableOpacity>
//       </View>
//       <DrawerItem
//         label="About"
//         labelStyle={styles.labelStyle}
//         onPress={() => navigateTo('About')}></DrawerItem>
//       <DrawerItem label="Advertise" labelStyle={styles.labelStyle}></DrawerItem>
//       <DrawerItem
//         label="Collaborate"
//         labelStyle={styles.labelStyle}></DrawerItem>
//       <DrawerItem label="Jobs" labelStyle={styles.labelStyle}></DrawerItem>
//       <DrawerItem label="Investors" labelStyle={styles.labelStyle}></DrawerItem>
//       <DrawerItem
//         label="Contact Us"
//         labelStyle={styles.labelStyle}></DrawerItem>
//       <DrawerItem
//         label="Terms of Use"
//         labelStyle={styles.labelStyle}></DrawerItem>
//       <DrawerItem
//         label="Privacy Policy"
//         labelStyle={styles.labelStyle}></DrawerItem>
//     </DrawerContentScrollView>
//   );
// }

// export default Slider;
// const styles = StyleSheet.create({
//   labelStyle: {
//     fontSize: 17,
//     fontWeight: '700',
//     color: 'black',
//     marginTop: -10,
//     marginBottom: -5,
//   },
//   seprater: {
//     backgroundColor: 'red',
//     height: 1,
//   },
//   row: {
//     flexDirection: 'row',
//     marginHorizontal: 18,
//     marginVertical: 20,
//   },
//   socialIc: {
//     opacity: 0.5,
//     marginRight: 20,
//   },
//   seperator: {
//     width: '100%',
//     height: 1,
//     backgroundColor: 'gray',
//     opacity: 0.3,
//   },
// });
