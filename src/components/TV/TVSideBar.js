import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import {
    View,
    Pressable,
    StyleSheet,
    Text
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import colors from '../../helper/colors';
import strings from '../../helper/strings';
import StyleConfig from '../../helper/StyleConfig';

const ICON_SIZE = 24
let [NONE, SORT_BY, RELEASE, GENRE, COUNTRY, AGES, PRICE, INCLUDES, PROVIDERS,THEATERS,THREERENT,ALLFREE,LIKEDBY] = [-1, 0, 1, 2, 3, 4, 5, 6, 7]
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
        "details": "-"
    },
    {
        "key": LIKEDBY,
        "title": strings.streaming_service,
        "details": "Netflix, Amazon \nPrime, HBO Max,\nApple TV+, free,\nrent/buy, theaters"
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
        "details": "All"
    },
    {
        "key": AGES,
        "title": strings.ages,
        "details": "All"
    },

   
    {
        "key": PRICE,
        "title": strings.price,
        "details": "All"
    },
    {
        "key": INCLUDES,
        "title": strings.include,
        "details": "Watched"
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
    const onFocus = useCallback((val) => {
        setFocus(val);
    });

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
                            onPress={() => onChangeSelected(item.key)}
                            tvParallaxProperties={{ magnification: 1.1 }}
                            style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                            <Text style={focus == item.key ? styles.focusTextTitle : styles.text}>{item.title}</Text>
                            {/* <Text style={focus == item.key ? styles.focusTextTitle : styles.text}>'hi'</Text> */}

                        </Pressable>
                    )
                })}

            </View> :

                <View style={styles.container}>
                    {DATA.map((item, index) => {
                        return (
                            <Pressable
                                key={item.key}
                                onFocus={() => onFocus(item.key)}
                                onPress={() => onChangeSelected(item.key)}
                                tvParallaxProperties={{ magnification: 1.1 }}
                                style={focus == item.key ? styles.itemWrapperSelected : styles.itemWrapper} >
                                <Text style={focus == item.key ? styles.focusTextTitle : styles.textTitle}>{item.title}</Text>
                                <Text style={focus == item.key ? styles.focusText : styles.text}>{item.details}</Text>
                            </Pressable>
                        )
                    })}

                </View>}
        </>
    )
})

export default TVSideBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding:16,
        paddingRight:20,
        
        
    },
    itemWrapperSelected:{
        paddingHorizontal:12,
        paddingVertical:6,
        marginHorizontal:6,
        backgroundColor: colors.tomatoRed,
        borderRadius:30,
        minWidth:60,
        marginVertical:20,
        // justifyContent:'center',
        // alignItems:'center'
        
    },
    itemWrapper:{
        paddingHorizontal:12,
        paddingVertical:6,
        marginHorizontal:6,
        marginVertical:5
    },
    text:{
        fontSize:26,
    },
    focusText:{
        fontSize:26,
        color: colors.white
    },
    textTitle:{
        fontSize:26,
        fontWeight:'700',
    },
    focusTextTitle:{
        fontSize:26,
        fontWeight:'700',
        color: colors.white
    },
    textSelected: {
        fontSize: 27,
        fontWeight: '700',
        color: colors.white
    }
})