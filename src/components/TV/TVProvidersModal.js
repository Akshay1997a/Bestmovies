import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, Image, StyleSheet, FlatList} from 'react-native'
import BaseModal from './BaseModal'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';

const DATA = [
    { "id":0, "name":"New" },
    { "id":1, "name":"This year" },
    { "id":2, "name":"Last 2 years" },
    { "id":3, "name":"Last 3 years" },
    { "id":4, "name":"Last 5 years" },
    { "id":5, "name":"Last 10 years" },
    { "id":6, "name":"Last 25 years" },
    { "id":7, "name":"Last 50 years" },
    { "id":8, "name":"All time" }
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

const TVProvidersModal = (props) =>{
    const [selected, setSelected] = useState(-1)
    const [ focus, setFocus] = useState(-1)
    const [ data, setData] = useState(DATA)


    useEffect(() => {
        
        async function fetchData() {
            fetch('https://60cde54091cc8e00178dc16b.mockapi.io/image')
            .then(res => res.json())
            .then(resJson => {
                setData(resJson)
            }).catch(e => console.log(e));
        }
    
        fetchData();
      }, [])
    return(
        <CommonFilterTvModal visible={props?.visible} oncloseModal={props.oncloseModal} onclose={props?.onclose}  title={strings.providers} >
                <FlatList 
                    data={data}
                    contentContainerStyle={{paddingHorizontal:10}}
                    renderItem={({item})=>{
                        return (<Pressable onPress={props.onclose}  onFocus={()=> setFocus(item.id)} style={item.id == focus ? { borderRadius:10, padding:5, backgroundColor: colors.light_orange}:{ padding:5, }} >
                        <Image source={{uri: item.image}} style={{ width: StyleConfig.resWidth(50),
                        height: StyleConfig.resHeight(50), borderRadius:25}} />
                    </Pressable>)
                    }}
                    numColumns={5}
                />
        </CommonFilterTvModal>
    )
}

export default TVProvidersModal  