import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView,Platform} from 'react-native'
import BaseModal from './BaseModal'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import strings from '../../helper/strings';
import primary_regular_font from '../../helper/fonts';

const DATA = [
    { "id":0, "name":"Quality" },
    { "id":1, "name":"Match" },
    { "id":2, "name":"Friend's Like" },
    { "id":3, "name":"Popularity" },
]
const isAndroid = () => {
	return Platform.OS == "android";
};
const styles = StyleSheet.create({
    backWrap:{
        paddingHorizontal: StyleConfig.resWidth(8),
        paddingVertical: StyleConfig.resHeight(4),
        margin: 4,
        marginLeft:10,
    },
    focusBackWrap:{
        backgroundColor: colors.tomatoRed,
        paddingHorizontal: StyleConfig.resWidth(8),
        paddingVertical: StyleConfig.resHeight(4),
        margin: 4,
        borderRadius:10,
        marginLeft:10,

    }
})

const CommonFilterTvModal=(props)=>{
    const [selected, setSelected] = useState(-1)
    const [ focus, setFocus] = useState(-1)
    const [ data, setData] = useState(DATA)


    // useEffect(() => {
        
    //     async function fetchData() {
    //         fetch('https://60cde54091cc8e00178dc16b.mockapi.io/generes')
    //         .then(res => res.json())
    //         .then(resJson => {
    //             setData(resJson)
    //         }).catch(e => console.log(e));
    //     }
    
    //     fetchData();
    //   }, [])
    return(
        <BaseModal visible={props.visible} oncloseModal={props.oncloseModal} >
            <View style={{minWidth: isAndroid() ? 300 : 600, minHeight: isAndroid() ? 300 : 700, backgroundColor: 'white', borderRadius:30, paddingHorizontal:15, paddingTop:30, paddingBottom:25, maxHeight:StyleConfig.resHeight(700)}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginBottom:12, marginLeft:10}}>
                    <Pressable onPress={props.onclose} style={({ pressed, hovered, focused }) => focused ? styles.focusBackWrap : styles.backWrap }>
                        <Image source={AppImages.back_bk} />
                    </Pressable>
                    <Text style={{fontFamily:primary_regular_font.primary_regular_font ,fontSize:34, fontWeight:'700', textAlign:'center'}}>{props?.title}</Text>
                    <View style={{width: StyleConfig.resWidth(36), margin:4}} />
                </View>
                {props?.children}
            </View>
        </BaseModal>
    )
}

export default CommonFilterTvModal