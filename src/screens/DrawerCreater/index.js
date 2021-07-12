import React from 'react'
import{StyleSheet} from 'react-native';
import{DrawerContentScrollView,DrawerItemList,DrawerItem,DrawerDivider}  from '@react-navigation/drawer'
import { Icon } from 'react-native-vector-icons/Ionicons'

function Slider({...props}) {
    return (
       <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            {/* <DrawerItem label="" labelStyle={styles.seprater}>
            </DrawerItem> */}
           
                
            <DrawerItem label="About" labelStyle={styles.labelStyle}>
            </DrawerItem>
            <DrawerItem label="Advertise"  labelStyle={styles.labelStyle} >
            </DrawerItem>
            <DrawerItem label="Collaborate"  labelStyle={styles.labelStyle} >
            </DrawerItem>
            <DrawerItem label="Jobs"  labelStyle={styles.labelStyle} >
            </DrawerItem>
            <DrawerItem label="Investors"  labelStyle={styles.labelStyle} >
            </DrawerItem>
            <DrawerItem label="Contact Us"  labelStyle={styles.labelStyle} >
            </DrawerItem>
            <DrawerItem label="Terms of Use"   labelStyle={styles.labelStyle}>
            </DrawerItem>
            <DrawerItem label="Privacy Policy"  labelStyle={styles.labelStyle} >
            </DrawerItem>
       </DrawerContentScrollView>
    )
}

export default Slider
const styles = StyleSheet.create({
    labelStyle: {
        fontSize:17,
        fontWeight:'700',
        color:'black',
        marginTop:-10,
        marginBottom:-5,
    },
    seprater:{
        backgroundColor:'red',
        height:1 ,
    },
});
