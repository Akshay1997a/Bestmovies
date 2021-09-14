import React, {useState, useCallback} from 'react';
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

const heightLayout = (title) => {
    // console.log('titi',title)
    if(title === 'Sort by'){
        return  isAndroid() ? 130  :250;
    }else if(title === 'Liked by'){
        return  isAndroid() ? 300  :600;
    }else if(title === 'Age rating (max)'){
        return  isAndroid() ? 250  :600;

    }else if(title === 'Release year'){
        return  isAndroid() ? 250  :500;

    }else if(title === 'Countries of origin'){
        return  isAndroid() ? 500  :1000;

    }else if(title === 'Genres'){
        return  isAndroid() ? 300  :500;
        
    }else if(title === 'Price'){
        return  isAndroid() ? 250  :600;
        
    }
    else if(title === 'Providers'){
        
    }
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

    const onFocus = useCallback(() => {
        console.log('OnFocus CommonFilterTvModal called***');
        setFocus(0);
      }, [0]);
      
      const onBlur = useCallback(() => {
        console.log('onBlur  CommonFilterTvModal called***');
        setFocus(-1);
      }, []);
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
            <View style={{minWidth: isAndroid() ? 250 : 500, backgroundColor: colors.white, maxHeight:heightLayout(props.title),borderRadius:10,paddingVertical:10,paddingStart: 5}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginLeft:10}}>
                    <Pressable
                    onBlur={onBlur}
                    onFocus={onFocus}
                     onPress={props.onclose} style={{height:30,width:30}} >
                        <Image source={AppImages.back_bk} style={{height:20,width:10, }}  />
                    </Pressable>
                    <Text style={{fontFamily:primary_regular_font.primary_regular_font ,fontSize: isAndroid() ?  17: 34, fontWeight:'700', textAlign:'center'}}>{props?.title}</Text>
                    <View style={{width: StyleConfig.resWidth(36), margin:4}} />
                </View>
                {props?.children}
            </View>
        </BaseModal>
    )
}

export default CommonFilterTvModal