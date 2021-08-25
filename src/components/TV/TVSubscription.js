import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native'
import BaseModal from './BaseModal'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import strings from '../../helper/strings';
import StreamModal from './StreamModal';
import primary_regular_font from '../../helper/fonts';

const DATA = [
    { "id":0, "name":"Rating" },
    { "id":1, "name":"Match" },
    { "id":2, "name":"Friend's Like" },
    { "id":3, "name":"Popularitydad" },
]
const items = [
    {
        name : "Netflix",
        image: AppImages.netflix
    },
    {
        name : "Amzon prime video",
        image: AppImages.amazon
    },
    {
        name : "HBO",
        image: AppImages.hbo
    },
    {
        name : "Hulu",
        image: AppImages.hulu
    },
    {
        name : "Disney+",
        image: AppImages.disnep
    },
    {
        name : "Apple TV+",
        image: AppImages.appleTv
    }
    ]

// const styles = StyleSheet.create({
//     backWrap:{
//         paddingHorizontal: StyleConfig.resWidth(8),
//         paddingVertical: StyleConfig.resHeight(4),
//         margin: 4,
//         marginLeft:10,
//     },
//     focusBackWrap:{
//         backgroundColor: colors.tomatoRedLight,
//         paddingHorizontal: StyleConfig.resWidth(8),
//         paddingVertical: StyleConfig.resHeight(4),
//         margin: 4,
//         borderRadius:10,
//         marginLeft:10

//     }
// })

const TVSubscription=(props)=>{
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
        <ScrollView horizontal   >
        <View style={{flexDirection:'row' ,borderWidth:1}}>
        {/* <Icon  type="fontawesome" name={"play-circle"} style={{fontSize:80, color:colors.white}} /> */}

            {items.map((obj, ind)=>(
                    
                <TouchableOpacity onPress={()=>alert("To be implemented")} key={`${obj}-${ind}`}>
                <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center',borderWidth:1}}>

                <Image style={styles.watchImage} source={obj.image} />
                <Text style={styles.watchText}>{obj.name}</Text>
                </View>

                {/* <Text style={styles.watchText}>/month</Text> */}

            </TouchableOpacity>

            ))}
        </View>
        </ScrollView>
    )
}

export default TVSubscription
const styles = StyleSheet.create({
    watchImage:{
        width: StyleConfig.resWidth(100),
        height: StyleConfig.resHeight(130/2),
        borderRadius:10 
    },
    watchText:{
        fontFamily:primary_regular_font.primary_regular_font,
        fontSize: StyleConfig.resHeight(24),
        fontWeight:'400',
        // marginTop:4,
        color: '#999999',
        // textAlign:"center",
        marginLeft:10,
        width:120,
        
        
    },
})