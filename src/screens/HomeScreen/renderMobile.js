import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native'
 import colors from '../../helper/colors';
 import StyleConfig from '../../helper/StyleConfig'
 import Ionicons from 'react-native-vector-icons/Ionicons';

const RenderMobile = ({ ...props})=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> props.navigation.navigate("MyListScreen")}>
                <Text>Render Mobile</Text>
                <Ionicons  name="ios-search" size={30} />
           
            </TouchableOpacity>
        </View>
    )
}

export default RenderMobile;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
});