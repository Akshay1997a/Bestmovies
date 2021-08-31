import React, {useState} from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView} from 'react-native'
import BaseModal from './BaseModal'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';

const DATA = [
    { "id":0, "name":"Watched" },
    { "id":1, "name":"Browsed" }
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

const TVIncludeModal = (props) =>{

    const [selected, setSelected] = useState(-1)
    const [ focus, setFocus] = useState(-1)
    const [ data, setData] = useState(DATA)

    return(
        <CommonFilterTvModal visible={props?.visible} oncloseModal={props.oncloseModal} onclose={props?.onclose}  title={strings.include} >
                <ScrollView>
                    {data.map((item, index)=>{
                        return(<Pressable onPress={props.onclose}  onFocus={()=> setFocus(item.id)} style={item.id == focus ? { borderRadius:20, marginHorizontal:10, backgroundColor: colors.tomatoRed}:{ marginHorizontal:10,}} >
                            <Text style={{fontSize:16, padding:8, paddingHorizontal:15, color: item.id == focus ? colors.black : colors.black}}>{item.name}</Text>
                        </Pressable>)
                    })}
                </ScrollView>
        </CommonFilterTvModal>
    )
}

export default TVIncludeModal