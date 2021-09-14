import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView,Platform} from 'react-native'
import BaseModal from './BaseModal'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';
import primary_regular_font from '../../helper/fonts';

const DATA = [
    { "id":0, "name":"---" },
    { "id":1, "name":"+ Add friend" },
    { "id":2, "name":"Rating" },
    { "id":3, "name":"Rating" },
    { "id":4, "name":"Match" },
    { "id":5, "name":"Friend's Like" },
    { "id":6, "name":"Popularity" },
    { "id":7, "name":"+ Add friend" },
    { "id":8, "name":"Rating" },
    { "id":9, "name":"Rating" },
    { "id":10, "name":"Match" },
    { "id":11, "name":"Friend's Like" },
    { "id":12, "name":"Popularity" },
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
        backgroundColor: colors.tomatoRedLight,
        paddingHorizontal: StyleConfig.resWidth(8),
        paddingVertical: StyleConfig.resHeight(4),
        margin: 4,
        borderRadius:10,
        marginLeft:10

    }
})

const TVLikedByModal=(props)=>{
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
              <CommonFilterTvModal visible={props?.visible} oncloseModal={props.oncloseModal} onclose={props?.onclose}  title={"Liked by"} >
                <ScrollView>
                    {data.map((item, index)=>{
                        return(<Pressable onPress={props.onclose} onFocus={()=> setFocus(item.id)} style={item.id == focus ? { borderRadius:20, marginHorizontal:10, backgroundColor: colors.tomatoRed}:{ marginHorizontal:10,}} >
                                                                                 <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid() ? 15: 30,fontWeight:'400', color: item.id == focus ? colors.white : colors.black}}>{item.name}</Text>
                        </Pressable>)
                    })}
                </ScrollView>
                </CommonFilterTvModal>
    )
}

export default TVLikedByModal