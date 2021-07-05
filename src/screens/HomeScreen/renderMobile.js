import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native'
 import colors from 'src/helper/colors';
 

const RenderMobile = ({ ...props})=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> props.navigation.navigate("MyListScreen")}>
            <Text>Render Mobile</Text>
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