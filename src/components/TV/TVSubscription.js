import React, {
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
  } from 'react';
import { View, Text, FlatList,Pressable, Image, StyleSheet, ScrollView,TouchableOpacity,Platform} from 'react-native'
import BaseModal from './BaseModal'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import strings from '../../helper/strings';
import StreamModal from './StreamModal';
import primary_regular_font from '../../helper/fonts';
const isAndroid = () => {
	return Platform.OS == "android";
};
const DATA = [
    { "id":0, "name":"Rating" },
    { "id":1, "name":"Match" },
    { "id":2, "name":"Friend's Like" },
    { "id":3, "name":"Popularitydad" },
]
const items = [
    {
        id:1,
        name : "Netflix",
        image: AppImages.netflix,
        selected: false,
    },
    { id:2,
        name : "Amzon prime video",
        image: AppImages.amazon
    },
    { id:3,
        name : "HBO",
        image: AppImages.hbo,
        selected: false,

    },
    { id:4,
        name : "Hulu",
        image: AppImages.hulu,
        selected: false,

    },
    { id:5,
        name : "Disney+",
        image: AppImages.disnep,
        selected: false,

    },
    { id:6,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    },
    {
        id:7,
        name : "Netflix",
        image: AppImages.netflix,
        selected: false,

    },
    { id:8,
        name : "Amzon prime video",
        image: AppImages.amazon,
        selected: false,

    },
    { id:9,
        name : "HBO",
        image: AppImages.hbo,
        selected: false,

    },
    { id:10,
        name : "Hulu",
        image: AppImages.hulu,
        selected: false,

    },
    { id:11,
        name : "Disney+",
        image: AppImages.disnep,
        selected: false,

    },
    { id:12,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    },
    {
        id:13,
        name : "Netflix",
        image: AppImages.netflix,
        selected: false,

    },
    { id:14,
        name : "Amzon prime video",
        image: AppImages.amazon,
        selected: false,

    },
    { id:15,
        name : "HBO",
        image: AppImages.hbo,
        selected: false,

    },
    { id:16,
        name : "Hulu",
        image: AppImages.hulu,
        selected: false,

    },
    { id:17,
        name : "Disney+",
        image: AppImages.disnep,
        selected: false,

    },
    { id:18,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    },
    {
        id:18,
        name : "Netflix",
        image: AppImages.netflix,
        selected: false,

    },
    { id:19,
        name : "Amzon prime video",
        image: AppImages.amazon,
        selected: false,

    },
    { id:20,
        name : "HBO",
        image: AppImages.hbo,
        selected: false,

    },
    { id:21,
        name : "Hulu",
        image: AppImages.hulu,
        selected: false,

    },
    { id:22,
        name : "Disney+",
        image: AppImages.disnep,
        selected: false,

    },
    { id:23,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    },{ id:24,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    },{ id:25,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    },
    { id:26,
        name : "HBO",
        image: AppImages.hbo,
        selected: false,

    },
    { id:27,
        name : "Hulu",
        image: AppImages.hulu,
        selected: false,

    },
    { id:28,
        name : "Disney+",
        image: AppImages.disnep,
        selected: false,

    },
    { id:29,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    },{ id:30,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    }, { id:31,
        name : "HBO",
        image: AppImages.hbo,
        selected: false,

    },
    { id:32,
        name : "Hulu",
        image: AppImages.hulu,
        selected: false,

    },
    { id:33,
        name : "Disney+",
        image: AppImages.disnep,
        selected: false,

    },
    { id:34,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    },{ id:35,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

    },{ id:36,
        name : "Apple TV+",
        image: AppImages.appleTv,
        selected: false,

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

const TVSubscriptionRender=(props)=>{
    // console.log('props',props);

    const [selected, setSelected] = useState(-1)
    const [ data, setData] = useState(DATA)

    const [focus, setFocus] = useState(false);
    const onFocus = useCallback(() => {
        console.log('onFocus')
      setFocus(true);
    //   onFocusedItem(item)

    });
    const onPressClick = ((val) => {
        console.log('onPressClick TVSubscriptionRender***',val);
        props.action(val);
    });
    
    const onBlur = useCallback(() => {
        console.log('onBlur')

      setFocus(false);
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
        
        <ScrollView  
        showsVerticalScrollIndicator={true}
           >
           
        <View style={{flexDirection:'row'}}>
        {/* <Icon  type="fontawesome" name={"play-circle"} style={{fontSize:80, color:colors.white}} /> */}

            {/* {
            props.item.map((obj, ind)=>( */}

                   <Pressable
                    onBlur={()=> setFocus(false)}
                   onPress={()=>onPressClick(props.item)}
                    onFocus={()=> setFocus(props.item.id)}
                     style={props.item.id == focus ? 
                    { borderRadius:20, backgroundColor: colors.tomatoRed ,}
                    :{ }}
                     >
      <TouchableOpacity style={{zIndex: 100, elevation: 2}}>
          {

props.item.selected ?
          
          <Image style={{height:40,
            position: 'absolute',left:70,top:40,
            width:40}} source={AppImages.check_red} />
        :
        null
          }
      </TouchableOpacity>

                <TouchableOpacity onPress={()=>alert("To be implemented")}  >
                <View style={
                   isAndroid() ? {flexDirection:'row',alignItems:'center',}  : {flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center',marginBottom:10}
                   }>

                <Image style={styles.watchImage} source={props.item.image} />
                <Text style={
                    focus == props.item.id
                    ? styles.focusText
                    :  props.item.selected
                    ? styles.selectedText
                    : styles.text
                    }
                      >{props.item.name}</Text>
                </View>

                {/* <Text style={styles.watchText}>/month</Text> */}

            </TouchableOpacity>
            </Pressable>



            {/* // ))
            // } */}
        </View>
        </ScrollView>
    )
}

const TVSubscription=(props)=>{
    const onPressClick = ((val) => {
        console.log('onPressClick TVSubscription***',val);
        let data = items[val.id];

        for (const element of items) {
            if(element.id == val.id){
                if(element.selected){
                    element.selected = false;
                }else{
                    element.selected = true
                }
                console.log('element***',element);
            }
        }

    });

    return(
        <FlatList
        hasTVPreferredFocus={true}
     //    contentContainerStyle={{paddingBottom:50}}
     //    keyExtractor={(item, index) => `item${index}`}
       numColumns={5}
       data={items}
       renderItem = {({item}) => (
         <TVSubscriptionRender item={item}   type = "movie"  action= {onPressClick} />
       )}
       />
    )
}

export default TVSubscription
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
    itemWrapperSelected: {

        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginHorizontal: 18,
        backgroundColor: colors.tomatoRed,
        borderRadius: 30,
        minWidth: 60,
        alignItems: 'center',
      },
      itemWrapper: {
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginHorizontal:18,
        minWidth: 60,
        alignItems: 'center',
      },
    watchImage:{
        borderWidth:1,
        width: isAndroid()? 50: StyleConfig.resWidth(90),
        height: StyleConfig.resHeight(130/2),
        borderRadius:10 ,
        marginLeft:10,
        marginTop: isAndroid()? 5:10
        // paddingTop:40
    },
    focusText:{
        fontFamily:primary_regular_font.primary_regular_font,
        fontSize: isAndroid()? 14:StyleConfig.resHeight(28),
        fontWeight:'400',
        // borderWidth:1,
        // marginTop:4,
        color: colors.white,
        // textAlign:"center",
        marginLeft:10,
        width:150,
        
        
    },
    text:{
        // borderWidth:1,

        fontFamily:primary_regular_font.primary_regular_font,
        fontSize:  isAndroid()? 14: StyleConfig.resHeight(28),
        fontWeight:'400',
        // borderWidth:1,
        marginTop:isAndroid()? 10:0,
        color: '#999999',
        // textAlign:"center",
        marginLeft:10,
        width: isAndroid()? 100:150,
        
        
    },

    selectedText:{
        fontFamily:primary_regular_font.primary_regular_font,
        fontSize:  isAndroid()? 14:StyleConfig.resHeight(28),
        fontWeight:'700',
        // borderWidth:1,
        // marginTop:4,
        color: colors.tomatoRed,
        // textAlign:"center",
        marginLeft:25,
        width: isAndroid()? 100: 150,
        
        
    },
})