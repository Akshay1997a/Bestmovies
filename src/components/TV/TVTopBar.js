import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import {
    View,
    Pressable,
    StyleSheet,
    Text,
    Image,
    ScrollView
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import colors from '../../helper/colors';
import strings from '../../helper/strings';
import StyleConfig from '../../helper/StyleConfig';
import AppImages from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import primary_regular_font from '../../helper/fonts';

const ICON_SIZE = 24
let [NONE, SORT_BY, RELEASE, GENRE, COUNTRY, AGES, PRICE,LIKEDBY,STRREAMING,INCLUDES,PROVIDERS] = [-1, 0, 1, 2, 3, 4, 5, 6, 7,8,9]
let [SEARCH, MY_LIST, MOVIES, TV_SHOW, SHORTS, DIRECTOR, ACTOR, PROFILE, MENU] =
    [0, 1, 2, 3, 4, 5, 6, 7, 8]
let [ABOUT_US, ADVERTISE, COLLABORATE, JOBS, TERMS_OF_USE, PRIVACY_POLICY] = [11, 12, 13, 14, 15, 16]
let [NOTIFICATION, FRIENDS, PREFERANCE, MY_PROVIDER, ACCOUNT, LANGUAGE] = [21, 22, 23, 24, 25, 26]


const PROFILE_DATA = [
    {
        key: NOTIFICATION,
        title: strings.notification
    },
    {
        key: FRIENDS,
        title: strings.friends
    },
    {
        key: PREFERANCE,
        title: strings.preferences
    },
    {
        key: MY_PROVIDER,
        title: strings.my_provider
    },
    {
        key: ACCOUNT,
        title: strings.account
    },
    {
        key: LANGUAGE,
        title: strings.language
    }
]


const MENU_DATA = [
    {
        key: ABOUT_US,
        title: strings.about_us
    },
    {
        key: ADVERTISE,
        title: strings.advertise
    },
    {
        key: COLLABORATE,
        title: strings.collaborate
    },
    {
        key: JOBS,
        title: strings.jobs
    },
    {
        key: TERMS_OF_USE,
        title: strings.terms_of_use
    },
    {
        key: PRIVACY_POLICY,
        title: strings.privacy_policy
    }
]

const DATA = [
    {
        "key": SORT_BY,
        "title": strings.sort_by,
        "details": strings.rating
    },
    {
        "key": LIKEDBY,
        "title": strings.liked_by,
        "details": "--"
    },
    {
        "key": STRREAMING,
        "title": strings.streaming_service,
        // "details": "Netflix, Amazon \nPrime, HBO Max,\nApple TV+, free,\nrent/buy, theaters"
        "details" :"6, Free, Rent/Buy,..."
    },
    {
        "key": RELEASE,
        "title": strings.release,
        "details": "Last 2 years"
    },
    {
        "key": GENRE,
        "title": strings.genre,
        "details": "Comedy,Romantic"
    },
    {
        "key": COUNTRY,
        "title": strings.country,
        "details": "Any"
    },
    {
        "key": AGES,
        "title": strings.ages,
        "details": "15+"
    },

   
    {
        "key": PRICE,
        "title": strings.price,
        "details": "Any"
    },
    {
        "key": 'Arrow',
        "title": strings.price,
        "details": "Any"
    },
    // {
    //     "key": INCLUDES,
    //     "title": strings.include,
    //     "details": " Watched browsed"
    // },
    // {
    //     "key": PROVIDERS,
    //     "title": 'Clear filters',
    //     "details": ""
    // },
    // {
    //     "key": THEATERS,
    //     "title": strings.theaters,
    // },{
    //     "key": THREERENT,
    //     "title": strings.three_rent,
    // },{
    //     "key": ALLFREE,
    //     "title": strings.all_free,
    // },
]

const BACK_DATA = [
    // {
    //     "key": SORT_BY,
    //     "title": strings.sort_by,
    //     "details": strings.rating
    // },
    // {
    //     "key": LIKEDBY,
    //     "title": strings.liked_by,
    //     "details": "--"
    // },
    // {
    //     "key": STRREAMING,
    //     "title": strings.streaming_service,
    //     // "details": "Netflix, Amazon \nPrime, HBO Max,\nApple TV+, free,\nrent/buy, theaters"
    //     "details" :"6, Free, Rent/Buy,..."
    // },
    {
        "key": 'BackArrow',
        "title": strings.price,
        "details": "Any"
    },
    {
        "key": RELEASE,
        "title": strings.release,
        "details": "Last 2 years"
    },
    {
        "key": GENRE,
        "title": strings.genre,
        "details": "Comedy,Romantic"
    },
    {
        "key": COUNTRY,
        "title": strings.country,
        "details": "Any"
    },
    {
        "key": AGES,
        "title": strings.ages,
        "details": "15+"
    },

   
    {
        "key": PRICE,
        "title": strings.price,
        "details": "Any"
    },
   
    {
        "key": INCLUDES,
        "title": strings.include,
        "details": " Watched browsed"
    },
    {
        "key": PROVIDERS,
        "title": 'Clear filters',
        "details": ""
    },
    // {
    //     "key": THEATERS,
    //     "title": strings.theaters,
    // },{
    //     "key": THREERENT,
    //     "title": strings.three_rent,
    // },{
    //     "key": ALLFREE,
    //     "title": strings.all_free,
    // },
]
const TVSideBar = forwardRef(({ onChangeSelected, ...props }, ref) => {

    const [focus, setFocus] = useState(NONE);
    const [isScroll, setIsScroll] = useState(false);

    const onFocus = useCallback((val) => {
        setFocus(val);
    });

    const onPressClick = ((val) => {
                            onChangeSelected(val);

        if(val === 'BackArrow'){
            setIsScroll(false);
        }else{
            setIsScroll(true);
        }
        console.log('onPressClick called***',val);
    });

    const onBlur = useCallback(() => {
        console.log('onBlur called***');
        setFocus(-1);
      }, []);

    useImperativeHandle(ref,
        () => ({
            setResetFocus() {
                setFocus(NONE);
            },
            setChangeFocus(val) {
                setFocus(val);
            }
        }),
    )
    console.log(props.headerSelected, MENU_DATA)
    return (
        <>

            {props.headerSelected == PROFILE ? <View style={styles.container}>
                {PROFILE_DATA.map((item, index) => {
                    return (
                        <Pressable
                            key={item.key}
                            onFocus={() => onFocus(item.key)}
                            onBlur={onBlur}


                            onPress={() => onChangeSelected(item.key)}                                                          
                            tvParallaxProperties={{ magnification: 1.1 }}
                            style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                            <Text style={focus == item.key ? styles.focusTextTitle : styles.text}>{item.title}</Text>
                        </Pressable>
                    )
                })}

            </View> :
            
            props.headerSelected == MENU ? <View style={styles.container}>
                {MENU_DATA.map((item, index) => {
                    return (
                        <Pressable
                            key={item.key}
                            onFocus={() => onFocus(item.key)}
                            onBlur={onBlur}
                            onPress={() => onChangeSelected(item.key)}
                            tvParallaxProperties={{ magnification: 1.1 }}
                            style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                              <Text style={focus == item.key ? styles.focusTextTitle : styles.text}>{item.title}</Text>
                            {/* <Text style={focus == item.key ? styles.focusTextTitle : styles.text}>'hi'</Text> */}

                        </Pressable>
                    )
                })}

            </View> :

                    <ScrollView
                    onBlur={onBlur}
                    horizontal={true}
                    >
                <View style={styles.container}>

                    {
                        isScroll 
                        ?
                        BACK_DATA.map((item, index) => {
                            return (
                                <Pressable
                                    key={item.key}
                                    onFocus={() => onFocus(item.key)}
    
                                    onPress={() => onPressClick(item.key)}
                                    tvParallaxProperties={{ magnification: 1.1 }}
                                    // style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper}
                                     >
                                         {
                                            item.key === 'BackArrow' 
                                            ?
                                            <View  style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                        <Icon name={"chevron-left"} size={40} color={"gray"} style={[{ }]} />

                                                            {/* <Image style={{ width: StyleConfig.resWidth(30),
                                                borderColor:'red',
                                                   height: StyleConfig.resHeight(30),}} source={AppImages.arrow_right} /> */}
                                                 </View>
                                           
                                            
                                            :
                                            <View style={{marginLeft:20,flexDirection:'row'}} >
                                            <View style={{marginRight:90}}>
                                                 <View  style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                                                             <Text style={focus == item.key ? styles.focusTextTitle : styles.textTitle}>{item.title}</Text>
                                                 </View>
                                                            <Text 
                                                            numberOfLines={1}
                                                            style={styles.text}>{item.details}</Text>
                                            </View> 
                                            {/* <View style={{marginLeft:20,flexDirection:'row',borderWidth:1}}>
              <Text style={{alignSelf: 'flex-end'}}>Hi!</Text>
            </View> */}
                                            <View>
                                                {
                                                    item.title === 'Clear filters' 
                                                    ?
                                                    null
                                                    // <Image style={{ marginLeft:-80, width: StyleConfig.resWidth(30),
                                                    //     borderColor:'red',
                                                    //        height: StyleConfig.resHeight(30),}} source={AppImages.arrow_right} />
                                                    :
                                                     <View style={styles.verticleLine}>
                                                    </View> 
                                                }
                                               
                                           
                                            </View>
                                        </View>
            
                                        }
    
    
    
                               
    
    
    
                                </Pressable>
                            )
                        })
                        :
                        DATA.map((item, index) => {
                            return (
                                <Pressable
                                    key={item.key}
                                    onFocus={() => onFocus(item.key)}
    
                                    onPress={() => onPressClick(item.key)}
                                    tvParallaxProperties={{ magnification: 1.1 }}
                                    // style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper}
                                     >
                                         {
                                            item.key === 'Arrow' 
                                            ?
                                            <View  style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                                                            <Image style={{ width: StyleConfig.resWidth(30),
                                                borderColor:'red',
                                                   height: StyleConfig.resHeight(30),}} source={AppImages.arrow_right} />
                                                 </View>
                                           
                                            
                                            :
                                            <View style={{marginLeft:20,flexDirection:'row'}} >
                                            <View style={{marginRight:90}}>
                                                 <View  style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                                                             <Text style={focus == item.key ? styles.focusTextTitle : styles.textTitle}>{item.title}</Text>
                                                 </View>
                                                            <Text 
                                                            numberOfLines={1}
                                                            style={styles.text}>{item.details}</Text>
                                            </View> 
                                            {/* <View style={{marginLeft:20,flexDirection:'row',borderWidth:1}}>
              <Text style={{alignSelf: 'flex-end'}}>Hi!</Text>
            </View> */}
                                            <View>
                                                {
                                                    item.title === 'Price' 
                                                    ?
                                                    null
                                                    // <Image style={{ marginLeft:-80, width: StyleConfig.resWidth(30),
                                                    //     borderColor:'red',
                                                    //        height: StyleConfig.resHeight(30),}} source={AppImages.arrow_right} />
                                                    :
                                                     <View style={styles.verticleLine}>
                                                    </View> 
                                                }
                                               
                                           
                                            </View>
                                        </View>
            
                                        }
    
    
    
                               
    
    
    
                                </Pressable>
                            )
                        })
                    }
                    
                   
                    
                          

                </View>

</ScrollView>

                }
        </>
    )
})

export default TVSideBar;

const styles = StyleSheet.create({
    verticleLine: {
        height: '80%',
        width: 1,
        backgroundColor: '#909090',
        alignSelf:'center'
      },
    container: {
        flex:1,
        backgroundColor: colors.lightGrey,
        height:100,
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderColor:'red',
        borderRadius:20
    },
    itemWrapperSelected:{
        backgroundColor: colors.tomatoRed,
        borderRadius:20,
    },
    itemWrapper:{
    },
    text:{
        fontSize:24,
        fontFamily:primary_regular_font.primary_regular_font,
        fontWeight:'400'
    },
    focusText:{
        fontFamily:primary_regular_font.primary_regular_font,
        fontWeight:'700',
        fontSize:24,
        color: colors.white,
    },
    textTitle:{
        fontSize:24,
        fontFamily:primary_regular_font.primary_regular_font,
        fontWeight:'700'
    },
    focusTextTitle:{
        fontSize:24,
        fontFamily:primary_regular_font.primary_regular_font,
        fontWeight:'700',
        color: colors.white
    },
   
})