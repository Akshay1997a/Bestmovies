import React, {useState} from 'react';
import {  
    View,
    Pressable,
    StyleSheet,
    ImageBackground,
    Text
} from 'react-native'
import colors from '../..//helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import LinearGradient from 'react-native-linear-gradient';
import strings from '../../helper/strings';
const ICON_SIZE = 24
let [NONE,SEARCH, MY_LIST, MOVIES, TV_SHOW, SHORTS, DIRECTOR, ACTOR , PROFILE, MENU] = [-1, 0,1,2,3,4,5,6,7,8]

const TVTileView = ({item, onFocus, type, ...props})=>{
    console.log({type})
    return(
        <Pressable onFocus={onFocus} style={({pressed, focused}) => focused ? styles.containerFocus : styles.container}>
            {/* <ImageBackground 
                resizeMode={'stretch'}
                source={{ uri: item? item.post_hint: "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg" }} 
                style={styles.bannerImage} >
            </ImageBackground> */}
            <View style={{position:'absolute', marginLeft:0}}>
                <LinearGradient 
                    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                    colors={['#ffffff', "#ffffff","#ffffff", 'transparent','transparent']} 
                    style={[styles.gradient,]}>
                    <View style={styles.content}>
                        {/* {type == MOVIES && <Text style={styles.counterText}>Top 1 of 12,638</Text>} */}
                        {/* {type == MY_LIST && <View style={{flexDirection:'row'}}> 
                            <Pressable style={{paddingHorizontal:8, paddingLeft:2}}>
                                <Text style={styles.counterText}>{strings.watch_later}</Text>
                            </Pressable>
                            <Pressable style={{paddingHorizontal:8}}>
                                <Text style={styles.counterText}>{strings.friends_rating}</Text>
                            </Pressable>
                            <Pressable style={{paddingHorizontal:8}}>
                                <Text style={styles.counterText}>{strings.my_ratings}</Text>
                            </Pressable>
                        </View>} */}

                        {type == TV_SHOW && <View style={{flexDirection:'row'}}> 
                            <Pressable style={{paddingHorizontal:8}}>
                                <Text style={styles.counterText}>{strings.watch_later}</Text>
                            </Pressable>
                            <Pressable style={{paddingHorizontal:8}}>
                                <Text style={styles.counterText}>{strings.friends_rating}</Text>
                            </Pressable>
                            <Pressable style={{paddingHorizontal:8}}>
                                <Text style={styles.counterText}>{strings.my_ratings}</Text>
                            </Pressable>
                        </View>}
                        {/* <Text style={styles.titleText}>{item?.title}</Text> */}
                        
                        <View style={{flexDirection:'row', marginTop:18, marginLeft:15}}>
                            {/* <View style={{alignItems:'center', justifyContent:'center'}}>
                                <View style={styles.ratingWrap}>
                                    <Text style={{textAlign:'center', fontSize:15,fontWeight:'800', color:colors.white}}>8.2</Text>
                                </View>
                                <Text style={{fontSize:18, fontWeight:'800', lineHeight:22, color:colors.blue_color}} >{strings.great}</Text>
                            </View> */}

                            {/* <View style={{borderWidth:1, borderRadius:4, marginLeft: StyleConfig.resWidth(32)}}> */}
                                {/* <View style={{flexDirection:'column',  marginLeft:40}}>
                                    <Text style={styles.typeText}>Adventure, Drama, Comedy</Text>
                                    <Text style={styles.typeText}>2018 - United States - 18+</Text>
                                    <Text style={styles.typeText}>2.99 € - 78% match - 12  </Text>
                                    <Text style={styles.typeText}>Won 2 oscars including best director</Text>
                                </View> */}
                                {/* <View style={{flexDirection:'row'}}>
                                    <Text style={styles.typeText}>{strings.critics}:</Text>
                                    <Text style={styles.valueText}>9.0</Text>
                                    <View style={{width:1, backgroundColor: colors.borderColor}}></View>
                                    <Text style={styles.typeText}>{strings.box_office}:</Text>
                                    <Text style={styles.valueText}>9.0</Text>
                                </View> */}
                            {/* </View> */}
                        </View>
                        {/* <Text style={styles.commentText}>Won 2 oscars incliding best director. Nominated to 3 G. Globles including b...</Text> */}
                        <View style={[{marginTop:15}]} >
                        {/* <Text style={styles.movieTypeText}>Crime, Drama -<Text style={styles.movieValueText}> US - 2019 - 154 min - Ages 18+</Text></Text> */}
                        {/* <Text style={styles.movieTypeText}>2.99 € - 23     - 78% match</Text> */}
                        </View>

                        {/* <View style={{marginTop:15}} >
                        <Text style={styles.movieTypeText}>Director: <Text style={styles.movieValueText}>Todd Phillips</Text></Text>
                        <Text style={styles.movieTypeText}>Cast: <Text style={styles.movieValueText}>Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy</Text></Text>
                        </View>                   */}
                        {/* <Text style={styles.detailsText}>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him to confront all his...</Text> */}
                    </View>
                
                </LinearGradient>
            </View>


        </Pressable>
        
    )
}

export default TVTileView;

const styles = StyleSheet.create({
    container:{
        // backgroundColor: colors.tomatoRed,
        // height: StyleConfig.resHeight(400),
        width: StyleConfig.width - StyleConfig.resWidth(170),
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom:25,
        
    },
    containerFocus:{
        height: StyleConfig.resHeight(400),
        // borderWidth:1,
        width: StyleConfig.width - StyleConfig.resWidth(170),
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    gradient:{
        //height: StyleConfig.resHeight(360),
        width:StyleConfig.width- StyleConfig.resWidth(170)
        
    },
    bannerImage:{
        height: StyleConfig.resHeight(400),
        width: (StyleConfig.width-240)/2
    },
    content:{
        paddingLeft:35
    },
    counterText:{
        fontSize:StyleConfig.resHeight(20),
        fontWeight:'700',
    },
    titleText:{
        fontSize:StyleConfig.resHeight(56),
        fontWeight:'700',
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 10
    },
    typeText:{
        fontSize:StyleConfig.resHeight(20),
        minWidth: StyleConfig.resWidth(140),
        paddingLeft: StyleConfig.resWidth(6),
        paddingVertical:StyleConfig.resWidth(2),
        
    },
    valueText:{
        fontSize:StyleConfig.resHeight(20),
        paddingRight: StyleConfig.resWidth(6),
        paddingVertical:StyleConfig.resWidth(2),
    },
    commentText:{
        fontSize:StyleConfig.resHeight(20),
        paddingVertical:StyleConfig.resWidth(2),
    },
    movieTypeText:{
        fontSize:StyleConfig.resHeight(20),
        paddingVertical:StyleConfig.resWidth(2),
        fontWeight:'700',
    },
    movieValueText:{
        fontWeight:'300',
    },
    detailsText:{
        width:(StyleConfig.width-130)/2,
        fontSize: StyleConfig.resHeight(20),
        marginTop:14
    },
    ratingWrap:{
        backgroundColor: colors.tomatoRed,
        // paddingHorizontal: StyleConfig.resWidth(10),
        // paddingVertical: StyleConfig.resHeight(5),
        width:StyleConfig.resWidth(35),
        height:StyleConfig.resHeight(38),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.blue_color,
        borderRadius: 50,
        borderRadius: 40,
        transform: [{ scaleX: 2 }],
    },
    ratingWrap2:{
        backgroundColor: colors.marinerBlue,
        paddingHorizontal: StyleConfig.resWidth(10),
        paddingVertical: StyleConfig.resHeight(5),
        borderRadius:50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    }
})