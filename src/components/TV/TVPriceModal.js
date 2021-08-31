import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView} from 'react-native'
import BaseModal from './BaseModal'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import CommonFilterTvModal from './CommonFilterTvModal';
import strings from '../../helper/strings';

const DATA = [
    { "id":0, "name":"Quality" },
    { "id":1, "name":"Match" },
    { "id":2, "name":"Friend's Like" },
    { "id":3, "name":"Popularity" },
]
const styles = StyleSheet.create({
    backWrap:{
        paddingHorizontal: StyleConfig.resWidth(8),
        paddingVertical: StyleConfig.resHeight(4),
        margin: 4
    },
    focusBackWrap:{
        backgroundColor: colors.tomatoRedLight,
        paddingHorizontal: StyleConfig.resWidth(8),
        paddingVertical: StyleConfig.resHeight(4),
        margin: 4,
        borderRadius:10

    }
})

const TVPriceModal=(props)=>{
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
        <CommonFilterTvModal visible={props?.visible} oncloseModal={props.oncloseModal} onclose={props?.onclose}  title={strings.price} >
                   <ScrollView>
                    {data.map((item, index)=>{
                        return(<Pressable onPress={props.onclose} onFocus={()=> setFocus(item.id)} style={item.id == focus ? { borderRadius:20, marginHorizontal:10, backgroundColor: colors.light_orange}:{ marginHorizontal:10,}} >
                            <Text style={{fontSize:16, padding:8, paddingHorizontal:15, color: item.id == focus ? colors.black : colors.black}}>{item.name}</Text>
                        </Pressable>)
                    })}
                </ScrollView>
        </CommonFilterTvModal>
    )
}

export default TVPriceModal