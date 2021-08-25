import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView} from 'react-native'
import BaseModal from './BaseModal'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';
import primary_regular_font from '../../helper/fonts';

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

const TVCountryModal=(props)=>{
    const [selected, setSelected] = useState(-1)
    const [ focus, setFocus] = useState(-1)
    const [ data, setData] = useState([])


    useEffect(() => {
        
        async function fetchData() {
            fetch('https://60a65e2fb970910017eb1613.mockapi.io/country')
            .then(res => res.json())
            .then(resJson => {
                setData(resJson)
            }).catch(e => console.log(e));
        }
    
        fetchData();
      }, [])

    return(
        <CommonFilterTvModal visible={props?.visible} oncloseModal={props.oncloseModal} onclose={props?.onclose}  title={strings.country} > 
                <ScrollView>
                    {data.map((item, index)=>{
                        return(<Pressable onPress={props.onclose} onFocus={()=> setFocus(item.id)} style={item.id == focus ? { borderRadius:20, marginHorizontal:10, backgroundColor: colors.light_orange}:{ marginHorizontal:10,}} >
                                                       <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize:30,fontWeight:'400', padding:8, paddingHorizontal:15, color: item.id == focus ? colors.white : colors.black}}>{item.name}</Text>
                        </Pressable>)
                    })}
                </ScrollView>
        </CommonFilterTvModal>
    )
}

export default TVCountryModal