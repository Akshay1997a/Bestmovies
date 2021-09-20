import React, {
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
  } from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView, FlatList,Platform} from 'react-native'
import BaseModal from './BaseModal'
import TVButton from './TVButton'
import ToggleSwitch from "toggle-switch-react-native";
import TVSubscription from '../TV/TVSubscription'
import TVCountryModal from '../../components/TV/TVCountryModal'
import TVToggleButton from '../../components/TV/TVToggleButton';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets'
import strings from '../../helper/strings';
import primary_regular_font from '../../helper/fonts';
// import ToggleSwitch from "toggle-switch-react-native";
const isAndroid = () => {
	return Platform.OS == "android";
};

const DATA = [
    { "id":0, "name":"Quality" },
    { "id":1, "name":"Match" },
    { "id":2, "name":"Friend's Like" },
    { "id":3, "name":"Popularity" },
]
let [
    NONE,
    SEARCH,
    MY_LIST,
    MOVIES,
    TV_SHOW,
    SHORTS,
    DIRECTOR,
    ACTOR,
    PROFILE,
    MENU,
  ] = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

  const items23 = [
    {
        id:1,
        name : "Netflix",
        image: AppImages.netflix
    },
    { id:2,
        name : "Amzon prime video",
        image: AppImages.amazon
    },
    { id:3,
        name : "HBO",
        image: AppImages.hbo
    },
    { id:4,
        name : "Hulu",
        image: AppImages.hulu
    },
    { id:5,
        name : "Disney+",
        image: AppImages.disnep
    },
    { id:6,
        name : "Apple TV+",
        image: AppImages.appleTv
    },
    {
        id:7,
        name : "Netflix",
        image: AppImages.netflix
    },
    { id:8,
        name : "Amzon prime video",
        image: AppImages.amazon
    },
    { id:9,
        name : "HBO",
        image: AppImages.hbo
    },
    { id:10,
        name : "Hulu",
        image: AppImages.hulu
    },
    { id:11,
        name : "Disney+",
        image: AppImages.disnep
    },
    { id:12,
        name : "Apple TV+",
        image: AppImages.appleTv
    },
    {
        id:13,
        name : "Netflix",
        image: AppImages.netflix
    },
    { id:14,
        name : "Amzon prime video",
        image: AppImages.amazon
    },
    { id:15,
        name : "HBO",
        image: AppImages.hbo
    },
    { id:16,
        name : "Hulu",
        image: AppImages.hulu
    },
    { id:17,
        name : "Disney+",
        image: AppImages.disnep
    },
    { id:18,
        name : "Apple TV+",
        image: AppImages.appleTv
    },
    {
        id:18,
        name : "Netflix",
        image: AppImages.netflix
    },
    { id:19,
        name : "Amzon prime video",
        image: AppImages.amazon
    },
    { id:20,
        name : "HBO",
        image: AppImages.hbo
    },
    { id:21,
        name : "Hulu",
        image: AppImages.hulu
    },
    { id:22,
        name : "Disney+",
        image: AppImages.disnep
    },
    { id:23,
        name : "Apple TV+",
        image: AppImages.appleTv
    },{ id:24,
        name : "Apple TV+",
        image: AppImages.appleTv
    },{ id:25,
        name : "Apple TV+",
        image: AppImages.appleTv
    }
    ]
    const items2 = [
        {
            id:6,
            name : "Netflix",
            image: AppImages.netflix
        },
        { id:8,
            name : "Amzon prime video",
            image: AppImages.amazon
        },
        { id:9,
            name : "HBO",
            image: AppImages.hbo
        },
        { id:10,
            name : "Hulu",
            image: AppImages.hulu
        },
        { id:11,
            name : "Disney+",
            image: AppImages.disnep
        },
        { id:12,
            name : "Apple TV+",
            image: AppImages.appleTv
        }
        ]
        const items3 = [
            {
                id:13,
                name : "Netflix",
                image: AppImages.netflix
            },
            { id:14,
                name : "Amzon prime video",
                image: AppImages.amazon
            },
            { id:15,
                name : "HBO",
                image: AppImages.hbo
            },
            { id:16,
                name : "Hulu",
                image: AppImages.hulu
            },
            { id:17,
                name : "Disney+",
                image: AppImages.disnep
            },
            { id:18,
                name : "Apple TV+",
                image: AppImages.appleTv
            }
            ]
            const items4 = [
                {
                    id:18,
                    name : "Netflix",
                    image: AppImages.netflix
                },
                { id:19,
                    name : "Amzon prime video",
                    image: AppImages.amazon
                },
                { id:21,
                    name : "HBO",
                    image: AppImages.hbo
                },
                { id:22,
                    name : "Hulu",
                    image: AppImages.hulu
                },
                { id:25,
                    name : "Disney+",
                    image: AppImages.disnep
                },
                { id:26,
                    name : "Apple TV+",
                    image: AppImages.appleTv
                }
                ]
const styles = StyleSheet.create({
    notfocusbackWrap:{
        
        paddingHorizontal: StyleConfig.resWidth(8),
        paddingVertical: StyleConfig.resHeight(4),
        // margin: 4,
        // marginLeft:10,
    },
    focusBackWrap:{
        backgroundColor: colors.tomatoRed,
        paddingHorizontal: StyleConfig.resWidth(8),
        paddingVertical: StyleConfig.resHeight(4),
        // margin: 4,
        borderRadius:20,
        // marginLeft:10,
    },
    focustoggle:{
        backgroundColor: colors.tomatoRed,
        padding:10,
        // margin: 4,
        borderRadius:20,
    },
    focusButton:{
        backgroundColor: colors.tomatoRed,
        borderRadius:10,
        height: isAndroid() ? 40 : 90,
        // borderWidth:1,
        // marginRight:20,
        // paddingRight: 15,
        width: '30%',
        // height: 100,
        // alignItems:'center'
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:15
    },
    notfocusButton:{
        backgroundColor: colors.lightGrey,
        borderRadius:10,
        height: isAndroid() ? 40 : 90,
        // borderWidth:1,
        // marginRight:20,
        // paddingRight: 15,
        width: '29%',
        // height: 100,
        // alignItems:'center'
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:15
    },
    text: {
        fontSize: isAndroid() ? 16: 32,
        fontFamily:primary_regular_font.primary_regular_font,
        fontWeight: '700',
        color: colors.black,

    
      },
      focusText: {
        fontSize: isAndroid() ? 16: 32,
        fontWeight: '700',
        color: colors.white,
      },
      selectedText: {
        fontSize: isAndroid() ? 16: 32,
        fontWeight: '700',
        color: colors.tomatoRed,
        fontFamily:primary_regular_font.primary_regular_font
    
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
        // paddingVertical: 6,
        marginHorizontal:18,
        minWidth: 60,
        alignItems: 'center',
      },

})
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
        name : "Netflix",
        image: AppImages.netflix,
        selected: false,

    },
    { id:4,
        name : "Netflix",
        image: AppImages.netflix,
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
        name : "Netflix",
        image: AppImages.netflix,
        selected: false,

    },
    { id:10,
        name : "Netflix",
        image: AppImages.netflix,
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
        name : "Apple TV+",
        image: AppImages.appleTv,
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
        name : "Disney+",
        image: AppImages.disnep,
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
        name : "Netflix",
        image: AppImages.netflix,
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
        name : "Netflix",
        image: AppImages.netflix,
        selected: false,

    },
    { id:32,
        name : "Disney+",
        image: AppImages.disnep,
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

    }
    ]
    const itemsAny = [
        {
            id:1,
            name : "Netflix",
            image: AppImages.netflix,
            selected: true,
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
            selected: true,
    
        },
        { id:5,
            name : "Disney+",
            image: AppImages.disnep,
            selected: false,
    
        },
        { id:6,
            name : "Apple TV+",
            image: AppImages.appleTv,
            selected: true,
    
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
    
        }
        ]

const StreamModal = forwardRef(({onChangeSelected, ...props}, ref) => {
    const [selected, setSelected] = useState(-1)
    const [country, setCountry] = useState('US');
    const [ data, setData] = useState(items)
    const [ updatedData, setUpdatedData] = useState()

    const [focus, setFocus] = useState(false);
    const [showSelected, setShowSelected] = useState(false)
    const onFocus = useCallback(() => {
        console.log('onFocus')
      setFocus(true);
    //   onFocusedItem(item)

    });
    const onFocusButton = useCallback((val) => {
        console.log('onFocus',val)
      setSelected(val);
    //   onFocusedItem(item)

    });

    const onPressClick = ((val) => {
        console.log('onPressClick StreamModal***',val);
        setCountry(val.code)
    });
    const saveProvides = ((val) => {
        alert('successfull');
        console.log('saveProvides StreamModal***',val);
        // setCountry(val.code)
    });
    const myProviders = (() => {
        setData(updatedData);
        console.log('myProviders StreamModal***');

    });
    const setAnyData = (() => {
        setData(items);
    });
    const onClick = ((val) => {
        console.log('onClick StreamModal***',val);
        setUpdatedData(val);
      setSelected(3);

        // setCountry(val.code)
    });
    
    const onBlur = useCallback(() => {
        console.log('onBlur')
        // setSelected(false);
      setFocus(false);
    }, []);
    const onTileViewFocus=()=>{
        setShowSelected(true)

        // sidebar.current.setResetFocus()
    }
    const oncloseModal=(val)=> {
        console.log('val',val);
        setShowSelected(false)
      }


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
            
            <View style={
                isAndroid() ? {backgroundColor: 'white',height:570,width:850,marginTop:50} 
                : { 
                    width:1400,
                    backgroundColor: 'white',
                     borderRadius:30,
                    //   paddingTop: 30,
                    //   marginTop:30,
                    //   marginRight:150
                 }
                }
                >
                {/* <View style={{flex:1,flexDirection:'row'}}> */}

            <View style={{ marginBottom: isAndroid()? 0:12,marginStart: isAndroid()? 25:50,flexDirection:'row',paddingVertical: isAndroid()? 10:25}}>
                    <View>
                            <Pressable onPress={props.onclose}
                            style={({ pressed, hovered, focused }) => focused ? styles.focusBackWrap : styles.backWrap }>
                            {/* //  style={{ marginTop:20, height:30,width:30}} > */}
                                <Image source={AppImages.back_bk} style={{height: isAndroid()? 20 :30,width: isAndroid()?  10:20,marginTop:isAndroid() ? 5 :10 }}  />
                            </Pressable>
                    </View>

                    <View style={{flex:0.8 ,marginStart: isAndroid()? 10:30,}}>
                            <Text style={{ fontFamily:primary_regular_font.primary_regular_font ,fontSize: isAndroid() ? 17: 34, fontWeight:'700',}}>{strings.streaming_service}</Text>
                        </View>
                    <View style={{flex:0.3}}>
                        <Pressable
                        onFocus={onFocus}
                        onBlur={onBlur}
                          onPress={() => onTileViewFocus()}
                         style={ focus ? styles.itemWrapperSelected : styles.itemWrapper}
                         hasTVPreferredFocus={true}
                                 >
                                    <View style={{flexDirection:'row',}}>
                                    <Text style={ focus ? styles.focusText : styles.text}>Country:    </Text>
                                    <Image source={AppImages.flag} style={{ height: isAndroid() ? 20 : 30,width: isAndroid() ? 30 :50,marginTop:isAndroid() ? 5 :10}} />
                                    <Text style={ focus ? styles.focusText : styles.text}> {country} </Text>
                                    </View>

                         </Pressable>
                    </View>


                    {/* <View style={{width: StyleConfig.resWidth(36), margin:4}} /> */}

                {/* </View> */}

            </View>
                                
            <View style={{flexDirection:'row',marginStart: isAndroid()? 20:50}} >
            <Pressable  
             onFocus={() => onFocusButton(1)}
             onPress={() => setAnyData()}
             style={ selected === 1 ? styles.focusButton : styles.notfocusButton}>
                         <TVButton text={"Any"} bgColor={ colors.lightGrey}/>
            </Pressable>

            <Pressable  
             onFocus={() => onFocusButton(2)}
             onPress={() => myProviders()}
             style={ selected === 2 ? styles.focusButton : styles.notfocusButton}>
                         <TVButton text={"My providers"} bgColor={colors.lightGrey}/>
            </Pressable>

            <Pressable  
             onFocus={() => onFocusButton(3)}
             onPress={() => saveProvides(1)}
            //  onBlur={onBlur}
             style={ selected === 3 ? styles.focusButton : styles.notfocusButton}>
                         <TVButton selected ={selected }text={"Save as\n my providers "} bgColor={colors.lightGrey}/>
            </Pressable>


            </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                        <View>
                            <Text style={{justifyContent:'flex-end',
                            marginStart: isAndroid()? 30: 60,
                            fontSize: isAndroid() ? 15: 30,
                            fontFamily:primary_regular_font.primary_regular_font,
                            fontWeight:'400',
                            paddingVertical: isAndroid()? 5: 5}} >Subscriptions: 3</Text>
                            </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{marginStart: isAndroid()? 20: 60,
                                fontSize: isAndroid() ? 15: 30,
                                fontFamily:primary_regular_font.primary_regular_font,
                                fontWeight:'700',
                                paddingVertical: isAndroid()? 5: 5}} >TV platform:</Text>
                            <Text style={{
                                marginEnd: isAndroid()? 20: 60,
                                fontSize: isAndroid() ? 15: 30,
                                fontFamily:primary_regular_font.primary_regular_font,
                                fontWeight:'400',
                                paddingVertical: isAndroid()? 5: 5}} > Amzon fire TV, Google TV</Text>
                        </View>
                        
                </View>
                

                <View style={{height: isAndroid()? null:600}} >

                <ScrollView
                style={{marginStart: isAndroid()? 20:60}}
                // showsVerticalScrollIndicator={true}
                >
                    
                    <TVSubscription items={data} action={onClick}   type = "movie" selected={MY_LIST} />
                  {/* )} */}
                
                
                </ScrollView>
                </View>

                    <View style={{paddingTop: isAndroid() ?2: 20,paddingHorizontal:20,flexDirection:'row',}}>
                         <Pressable  style={({ pressed, hovered, focused }) => focused ? styles.focustoggle : styles.notfocusbackWrap }>
                               {
                                   isAndroid() ? 
                                   <ToggleSwitch size="small" disabled isOn={true}  /> 
                                   :<TVToggleButton size="small"   offColor="red" onColor={colors.tomatoRed}  isOn={false} onToggle={onTileViewFocus}/>
                               }  
                                </Pressable>
                            <Text style={{  marginHorizontal:10, fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid()? 15:30,fontWeight:'400', color:  colors.black}}>
                                Free Streaming services with ads
                            </Text>
                    </View>
                    <View style={{paddingHorizontal:20,flexDirection:'row',}}>
                    <Pressable  style={({ pressed, hovered, focused }) => focused ? styles.focustoggle : styles.notfocusbackWrap }>
                    {
                                   isAndroid() ? <ToggleSwitch size="small" disabled isOn={true}  /> :<TVToggleButton size="small"   offColor="red" onColor={colors.tomatoRed}  isOn={false} onToggle={onTileViewFocus}/>
                               }

                                </Pressable>
                            <Text style={{marginHorizontal:10, fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid()? 15:30,fontWeight:'400', color:  colors.black}}>
                                Rent / buy streaming services
                            </Text>
                    </View>
                    <View style={{paddingHorizontal:20,flexDirection:'row',}}>
                    <Pressable onPress={props.onclose} style={({ pressed, hovered, focused }) => focused ? styles.focustoggle : styles.notfocusbackWrap }>
                    {
                                   isAndroid() ? <ToggleSwitch size="small" disabled isOn={true}  /> :<TVToggleButton size="small"   offColor="red" onColor={colors.tomatoRed}  isOn={false} onToggle={onTileViewFocus}/>
                               }
                                </Pressable>
                            {/* <ToggleSwitch size="small" disabled isOn={true}  /> */}
                            <Text style={{marginHorizontal:10, fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid()? 15: 30,fontWeight:'400', color:  colors.black}}>
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
        <TVCountryModal
        action={onPressClick}
         visible={showSelected== true} oncloseModal={()=> oncloseModal(false)} onclose={()=> oncloseModal()}  />

        </BaseModal>
    )
});

export default StreamModal