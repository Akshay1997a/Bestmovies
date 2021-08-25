import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView} from 'react-native'
import BaseModal from './BaseModal'
import TVButton from './TVButton'
import ToggleSwitch from "toggle-switch-react-native";
import TVSubscription from '../TV/TVSubscription'

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

const styles = StyleSheet.create({
    backWrap:{
        paddingHorizontal: StyleConfig.resWidth(8),
        paddingVertical: StyleConfig.resHeight(4),
        margin: 4,
        marginLeft:10,
    },
    focusBackWrap:{
        backgroundColor: colors.light_orange,
        paddingHorizontal: StyleConfig.resWidth(8),
        paddingVertical: StyleConfig.resHeight(4),
        margin: 4,
        borderRadius:10,
        marginLeft:10,

    }
})

const StreamModal=(props)=>{
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
            
            <View style={{ backgroundColor: 'white', borderRadius:30, paddingHorizontal:30, paddingTop:30, paddingBottom:25,marginTop:30,}}>
            <View style={{flexDirection:'row', alignItems: 'center', marginBottom:12,paddingVertical:20}}>
                    <Pressable onPress={props.onclose} style={({ pressed, hovered, focused }) => focused ? styles.focusBackWrap : styles.backWrap }>
                        <Image style={{ width: StyleConfig.resWidth(20),
                            height: StyleConfig.resHeight(20),}} source={AppImages.icBackArrow} />
                    </Pressable>
                    <Text style={{ marginLeft:34, fontFamily:primary_regular_font.primary_regular_font ,fontSize:34, fontWeight:'700', textAlign:'center'}}>{strings.streaming_service}</Text>
                    <View style={{flexDirection:'column-reverse'}}>
                    <Text style={{ marginLeft:34, fontFamily:primary_regular_font.primary_regular_font ,fontSize:34, fontWeight:'700', justifyContent:'flex-end'}}>{strings.streaming_service}</Text>
                    </View>

                    <View style={{width: StyleConfig.resWidth(36), margin:4}} />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}} >
                         <TVButton text={"Any"}/>
                         <TVButton text={"My providers"}/>
                         <TVButton text={"Save as\n my providers "}/>
                         


                </View>
                <Text style={{fontSize:30,fontFamily:primary_regular_font.primary_regular_font,fontWeight:'400',paddingVertical:20}} >Subscriptions: 3</Text>
                <View style={{height:600}} >

                <ScrollView
                showsVerticalScrollIndicator={true}
                // indicatorStyle='black'
                // persistentScrollbar={true}
                // scrollEnabled={true}
                >
                    
                <TVSubscription />
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                <TVSubscription/>
                
                </ScrollView>
                </View>

                    <View style={{paddingTop:20,paddingHorizontal:20,flexDirection:'row',}}>
                            <ToggleSwitch size="small" disabled isOn={true}  />
                            <Text style={{marginHorizontal:10, fontFamily:primary_regular_font.primary_regular_font,fontSize:30,fontWeight:'400', color:  colors.black}}>
                                Free Streaming services with ads
                            </Text>
                    </View>
                    <View style={{paddingHorizontal:20,flexDirection:'row',}}>
                            <ToggleSwitch size="small" disabled isOn={true}  />
                            <Text style={{marginHorizontal:10, fontFamily:primary_regular_font.primary_regular_font,fontSize:30,fontWeight:'400', color:  colors.black}}>
                                Rent / buy streaming services
                            </Text>
                    </View>
                    <View style={{paddingHorizontal:20,flexDirection:'row',}}>
                            <ToggleSwitch size="small" disabled isOn={true}  />
                            <Text style={{marginHorizontal:10, fontFamily:primary_regular_font.primary_regular_font,fontSize:30,fontWeight:'400', color:  colors.black}}>
                                Local movie theaters
                            </Text>
                    </View>
                    

                {/* <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginBottom:12, marginLeft:10}}>
                    <Pressable onPress={props.onclose} style={({ pressed, hovered, focused }) => focused ? styles.focusBackWrap : styles.backWrap }>
                        <Image style={{ width: StyleConfig.resWidth(20),
                            height: StyleConfig.resHeight(20),}} source={AppImages.icBackArrow} />
                    </Pressable>
                    <Text style={{fontFamily:primary_regular_font.primary_regular_font ,fontSize:34, fontWeight:'700', textAlign:'center'}}>{props?.title}</Text>
                    <View style={{width: StyleConfig.resWidth(36), margin:4}} />
                </View>
                {props?.children} */}
            </View>
        </BaseModal>
    )
}

export default StreamModal