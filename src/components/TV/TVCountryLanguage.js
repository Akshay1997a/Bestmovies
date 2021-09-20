import React, {
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
    
  } from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView,Platform} from 'react-native'
import BaseModal from './BaseModal'
import colors from '../../helper/colors';
import StyleConfig from 'src/helper/StyleConfig'
import AppImages from 'src/assets'
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';
import primary_regular_font from '../../helper/fonts';


const COUNTRY =[
    { "id":0, "name":"United States" },
    { "id":1, "name":"English" },
]
const DATA = [
    { "id":10, "name":"United States" },
    { "id":11, "name":"Albaniya" },
    { "id":2, "name":"Algeria" },
    { "id":3, "name":"American Samoa" },
    { "id":4, "name":"Andorra" },
    { "id":5, "name":"Angola" },
    { "id":6, "name":"Aruba" },
    { "id":7, "name":"Australia" },
    { "id":9, "name":"Azerbaizan" },
    { "id":110, "name":"Algeria" },
    { "id":111, "name":"Andorra" },
    { "id":12, "name":"Aruba" },
    { "id":13, "name":"Australia" },
    { "id":14, "name":"Andorra" },
    { "id":15, "name":"Albaniya" },
    { "id":16, "name":"Aruba" },
    { "id":17, "name":"Australia" },
    { "id":18, "name":"Andorra" },
    { "id":19, "name":"Albaniya" }

]
const isAndroid = () => {
	return Platform.OS == "android";
};
const styles = StyleSheet.create({
    container:{
        marginLeft: isAndroid() ? 10 : 160,borderLeftWidth:1,borderLeftColor:colors.borderColor},
    backWrap:{
        paddingHorizontal: StyleConfig.resWidth(8),
        // paddingVertical:   isAndroid() ? 0: StyleConfig.resHeight(2),
        margin: 4
    },
    focusBackWrap:{
        backgroundColor: colors.tomatoRed,
        paddingHorizontal:   isAndroid() ? 0: StyleConfig.resWidth(8),
        // paddingVertical:  isAndroid() ? 0 :StyleConfig.resHeight(2),
        margin:   isAndroid() ? 0:4,
        borderRadius:10

    }
})

const TVCountryLanguage = (props) =>{
  console.log('props>>>',props);

    const [selected, setSelected] = useState(-1)
    const [ focus, setFocus] = useState(-1)
    const [ data, setData] = useState(COUNTRY)
    const [ country, setCountry] = useState(DATA)
    const [ isCountryClick, setCountryClick] = useState(true);

    const onPressHandle = (() => {
        setCountryClick(true);
        // console.log('key',val);
        // setFocus(val);
    });
    const onFocus = useCallback((val) => {
        props.reduxSetCurrFocus('countryLang')
          setFocus(val);
        });
    const onBlur = useCallback(() => {
        console.log('onBlur')

      setFocus(false);
    }, []);

    return(
        // <BaseModal visible={props.visible} oncloseModal={props.oncloseModal} >
        //     <View style={{width: 350, minHeight: 300, backgroundColor: 'white'}}>
        //         <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
        //             <Pressable onPress={props.onclose} style={({ pressed, hovered, focused }) => focused ? styles.focusBackWrap : styles.backWrap }>
        //                 <Image style={{ width: StyleConfig.resWidth(20),
        //                     height: StyleConfig.resHeight(20),}} source={AppImages.icBackArrow} />
        //             </Pressable>
        //             <Text style={{fontSize:26, fontWeight:'700', textAlign:'center'}}>{strings.release}</Text>
        //             <View style={{width: StyleConfig.resWidth(36), margin:4}} />
        //         </View>
                <ScrollView>
                    
                    <View style={{flexDirection:'row',minHeight:1000}}>

                    <View style={styles.container}>
                    {data.map((item, index)=>{
                        return(<Pressable
                         onPress={onPressHandle} 
                        //  onBlur={onBlur()}
                      onFocus={() => onFocus(item.id)}

                        //   onFocus={()=> setFocus(item.id)}
                           style={
                            props.focus === 'countryLang' && 
                               item.id == focus  
                            ? 
                            styles.focusBackWrap
                        //   { borderRadius:20, marginHorizontal:10, backgroundColor: colors.tomatoRed }
                          :{ }} >
                                                                                                            
                        <Text style={{
                            fontFamily:primary_regular_font.primary_regular_font,
                            fontSize: isAndroid()? 16: 30,
                            fontWeight:'400',
                             padding: isAndroid() ? 2: 8,
                              paddingHorizontal: 15,
                               color:  props.focus === 'countryLang' &&  item.id == focus ?
                                colors.white : colors.black
                                }}>{item.name}</Text>

                        </Pressable>)
                    })}
                    </View>
                    {
                        isCountryClick ?
                    <View style={{marginLeft: isAndroid() ? 100: 160,borderLeftWidth:1,borderLeftColor:colors.borderColor}}>
                    {country.map((item, index)=>{
                        return(<Pressable onPress={props.onclose}
                            onFocus={() => onFocus(item.id)}
                           style={
                                 props.focus === 'countryLang' && 
                               item.id == focus
                                ? 
                                styles.focusBackWrap
                                :styles.backWrap
                                } >
                             <Text style={{
                                 fontFamily:primary_regular_font.primary_regular_font,
                                 fontSize: isAndroid()? 16: 30,
                                 fontWeight:'400',
                                  color:  props.focus === 'countryLang' && item.id == focus ?
                                   colors.white : colors.black
                                   }}>{item.name}</Text>

                        </Pressable>)
                    })}
                    </View> 
                    :
                    null
                    }

                    </View>

                </ScrollView>
        //     </View>
        // </BaseModal>
    )
}

export default TVCountryLanguage