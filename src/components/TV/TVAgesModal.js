import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView,Platform} from 'react-native'
import BaseModal from './BaseModal'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';
import primary_regular_font from '../../helper/fonts';
const isAndroid = () => {
	return Platform.OS == "android";
}
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

const TVAgesModal=(props)=>{
    const [selected, setSelected] = useState(-1)
    const [ focus, setFocus] = useState(-1)
    const [ data, setData] = useState([])

    const onFocus = useCallback(() => {
        console.log('OnFocus called***');
        setFocus(0);
      }, [0]);
      
      const onBlur = useCallback(() => {
        console.log('onBlur called***');
        setFocus(-1);
      }, []);

    useEffect(() => {
        
        async function fetchData() {
            fetch('https://60cde54091cc8e00178dc16b.mockapi.io/ages')
            .then(res => res.json())
            .then(resJson => {
                setData(resJson)
            }).catch(e => console.log(e));
        }
    
        fetchData();
      }, [])
    return(
        <CommonFilterTvModal visible={props?.visible} oncloseModal={props.oncloseModal} onclose={props?.onclose}  title={strings.ages} >
                <ScrollView>
                    {data.map((item, index)=>{
                        return(<Pressable 

                        onPress={props.onclose}
                         onFocus={()=>
                          setFocus(item.id)}
                           style={item.id == focus ?
                            { borderRadius:20, marginHorizontal:10, backgroundColor: colors.tomatoRed}
                            :{ marginHorizontal:10,}} 
                            >
                            <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid() ? 15: 30,fontWeight:'400', color: item.id == focus ? colors.white : colors.black}}>{item.ages+'+'}</Text>

                        </Pressable>)
                    })}
                </ScrollView>
         </CommonFilterTvModal>
    )
}

export default TVAgesModal