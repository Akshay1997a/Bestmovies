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
    { "id":0, "name":"Rating" },
    { "id":1, "name":"Match" },
    { "id":2, "name":"Friend's Like" },
    { "id":3, "name":"Popularity" },
]
const isAndroid = () => {
	return Platform.OS == "android";
};
const styles = StyleSheet.create({
    backWrap:{
        paddingHorizontal:isAndroid() ? 0: StyleConfig.resWidth(8),
        paddingVertical:isAndroid() ? 0: StyleConfig.resHeight(4),
        margin:isAndroid() ? 0: 4
    },
    focusBackWrap:{
        backgroundColor: colors.tomatoRed,
        paddingHorizontal: isAndroid() ? 0: StyleConfig.resWidth(8),
        paddingVertical:  isAndroid() ? 0:StyleConfig.resHeight(4),
        margin: isAndroid() ? 0:4,
        borderRadius:10
    }
})


const TVSortByModal=(props,key)=>{
console.log('props selected TVSortByModal>>>kkkk',props);

    const [selected, setSelected] = useState(-1)
    const [ focus, setFocus] = useState(-1)
    const [ data, setData] = useState(DATA)

    const onPressClick = ((val) => {
        val.selected = true;
         console.log('onPressClick TVSortByModal***',val);
         props.action(props.keySort);
         props.visible = true;

       //   props.onclose();
         setSelected(val);
     });


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
              <CommonFilterTvModal visible={props?.visible} oncloseModal={props.oncloseModal} onclose={props?.onclose}  title={"Sort by"} >
                <ScrollView>
                    {data.map((item, index)=>{
                        return(<Pressable 
                            onPress={()=>onPressClick(item)}
                         onFocus={()=> setFocus(item.id)} 
                         style={item.id == focus ? styles.focusBackWrap:styles.backWrap
                         } >
                                                                                 
                          <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid() ? 15: 30,fontWeight:'400',
                           color: item.id == focus ?
                            colors.white :
                             item.selected
                                 ? colors.tomatoRed:
                             colors.black}}>{item.name}</Text>
                        </Pressable>)
                    })}
                </ScrollView>
                </CommonFilterTvModal>
    )
}

export default TVSortByModal