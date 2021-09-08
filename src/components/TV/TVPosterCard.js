import React, {useState} from 'react';
import {  
    View,
    ScrollView,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,Platform
} from 'react-native'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig'
import { useHeaderHeight } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets'
import primary_regular_font from '../../helper/fonts';

const items = [
    {
        name : "Trailer",
        image: AppImages.play
    },
    {
        name : "Free",
        image: AppImages.netflix
    },
    {
        name : "Free",
        image: AppImages.amazon
    },
    {
        name : "Free",
        image: AppImages.hbo
    },
    {
        name : "Ads",
        image: AppImages.youtube
    },
    {
        name : "$5,99",
        image: AppImages.googlePlay
    },{
        name : "Subs. $6.99",
        image: AppImages.hulu
    },
    {
        name : "Subs. $8.99",
        image: AppImages.disnep
    },
    {
        name : "Subs. $8.99",
        image: AppImages.appleTv
    }
    ]
let [NONE,SEARCH, MY_LIST, MOVIES, TV_SHOW, SHORTS, DIRECTOR, ACTOR , PROFILE, MENU] =
[-1, 0,1,2,3,4,5,6,7,8]


const TVPosterCard = ({item, ...props})=>{
    const headerHeight = useHeaderHeight();
    const [selected, setSelected] = useState(-1) 
    return(
        <View style={{flexDirection:'row', marginBottom:150}}>
           
            {/* <View style={styles.viewContainer}>
                <ImageBackground
                    style={styles.container}
                    resizeMode={"stretch"}
                    source={
                        { uri:item.thumbnail}
                        } >
                        <View style={[{flex:1,flexDirection:'row', paddingTop:10, backgroundColor:"rgba(0,0,0, 0.3)", paddingLeft:35, paddingRight:10, justifyContent:'space-between'}]} >
                        <Icon name={"thumbs-down"}  size={50} color={"white"} />
                        <Icon name={"eye"} size={50} color={"white"} />
                        <Icon name={"thumbs-up"} size={50} color={"white"} />
                        <View style={[{ alignItems:'center', marginTop:-25}]}>
                        <Icon name={"bookmark"} size={100} color={"blue"} style={[{ }]} />
                        <Icon name={"plus"} size={35} color={"white"} style={[{position:'absolute', top:28}]} />
                        </View>
                        </View>
            </ImageBackground>
            </View> */}
            <View style={styles.detailViewContainer}>
                <View style={styles.viewContainer}>
                <ImageBackground
                    style={styles.container}
                    resizeMode={"stretch"}
                    source={
                        { uri:item.thumbnail}
                        } >
                        <View style={[{flex:1,flexDirection:'row', paddingTop:10, backgroundColor:"rgba(0,0,0, 0.3)", paddingLeft:35, paddingRight:10, justifyContent:'space-between'}]} >
                        <Icon name={"thumbs-down"}  size={ isAndroid()? 25 : 50} color={"white"} />
                        <Icon name={"eye"} size={ isAndroid()? 25 : 50} color={"white"} />
                        <Icon name={"thumbs-up"} size={ isAndroid()? 25 : 50} color={"white"} />
                        <View style={[{ alignItems:'center', marginTop:-25}]}>
                        <Icon name={"bookmark"} size={ isAndroid()? 50 :    100} color={"blue"} style={[{ }]} />
                        <Icon name={"plus"}size={ isAndroid()? 25 : 35} color={"white"} style={[{position:'absolute', top:28}]} />
                        </View>
                        </View>
            </ImageBackground>
            </View>
            {/* <View> */}
                {/* <Text>HI</Text>
                <Text>HI</Text>
                 <Text>HI</Text> */}
            {/* </View> */}

                <View style={{marginLeft:40}} >

                <Text numberOfLines={2} style={styles.titleText}>{item?.title}</Text>
                 <Text style={[{fontFamily:primary_regular_font.primary_regular_font, fontSize:26, fontWeight:'400', color:'white'}]} >
                          Name of original title if foreign
                </Text>
                <View style={{flexDirection:'row',}}>
                        <Text style={[{fontFamily:primary_regular_font.primary_regular_font, fontSize:26, fontWeight:'400', color:'white'}]} >
                                 Crime, Drama ,Thriller - 2019 - 154 min -18+
                        </Text>
                        <View style={{marginStart:400,}} >
                        <Text style={[{fontFamily:primary_regular_font.primary_regular_font, fontSize:26, fontWeight:'400', color:'white'}]} >
                        78% match - 12    
                        </Text>
                        </View>
                </View>

                        
                        <View style={{flexDirection:'row',}}>

                            <View>

                          <View style={{flexDirection:'row'}}>
                                <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: 37, fontWeight:'700', color:colors.white }}>Director:</Text>
                                <Text style={{textAlign:'center',justifyContent:'center' ,alignSelf:'center',fontFamily:primary_regular_font.primary_regular_font,fontSize: 26, fontWeight:'400', color:colors.white }}> Todd Phillips</Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: 37, fontWeight:'700', color:colors.white }}>Cast:</Text>
                                    <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: 26, fontWeight:'400', color:colors.white }}> Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy</Text>
                            </View>
                            </View>
                            <View style={{flexDirection:'row', marginTop: StyleConfig.resHeight(20)}}>
                    {/* <View style={{alignItems:'center', justifyContent:'center'}}>
                        <View style={styles.ratingWrap}>
                            <Text style={{fontFamily:primary_regular_font.primary_regular_font,textAlign:'center', color:colors.white,fontWeight:'700', fontSize:14, lineHeight:16}}>7.9</Text>
                        </View>
                        <Text  style={[styles.greatText]} >Great</Text>
                    </View> */}

                    {/* <View>
                        </View> */}
                    <View style={{marginStart:100,borderWidth:1, borderRadius:4, marginLeft: StyleConfig.resWidth(32), borderColor:colors.white}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.typeText}>Awards:</Text>
                            <Text style={styles.valueText}>9.0</Text>
                            <View style={{width:1, backgroundColor: colors.white}}></View>
                            <Text style={styles.typeText}>Audience:</Text>
                            <Text style={styles.valueText}>9.0</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.typeText}>Critics:</Text>
                            <Text style={styles.valueText}>9.0</Text>
                            <View style={{width:1, backgroundColor: colors.white}}></View>
                            <Text style={styles.typeText}>Box-office:</Text>
                            <Text style={styles.valueText}>9.0</Text>
                        </View>
                    </View>
                    
                </View>
                        </View>
                            
                
                {/* <View style={styles.spaceVertical} /> */}
                {/* <Text style={styles.movieTypeText}>Crime, Drama -<Text style={styles.movieValueText}> US - 2019 - 154 min - Ages 18+</Text></Text> */}
                {/* <Text style={styles.movieTypeText}>2.99 € - 23     - 78% match - Recommend  <Icon name={"share"} type={"fontawesome"} style={{fontSize:20,}} /> </Text> */}
                {/* <View style={styles.spaceVertical} /> */}
                {/* <Text style={styles.movieTypeText}>Director: <Text style={styles.movieValueText}>Todd Phillips</Text></Text> */}
                {/* <Text style={styles.movieTypeText}>Cast: <Text style={styles.movieValueText}>Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy</Text></Text> */}
                {/* <View style={styles.spaceVertical} /> */}
                <View style={{flexDirection:'row'}}>
                <Text style={styles.detailsText}>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him into a dangerous downward spiral of revolution and bloody crime</Text>
                <View style={{marginLeft:StyleConfig.resWidth(20)}}>
                        <Text style={styles.commentText}>Won 2 oscars including best director</Text>
                        <Text style={styles.commentText}>Won 1 G. Globe including best movie</Text>
                    </View>
                </View>
                
                {/* <Text style={styles.movieTypeText}>Watch:</Text> */}
                <ScrollView horizontal  contentContainerStyle={[{flexGrow:1}]} >
                <View style={{flexDirection:'row',  flex:1, }}>
                {/* <Icon  type="fontawesome" name={"play-circle"} style={{fontSize:80, color:colors.white}} /> */}

                    {items.map((obj, ind)=>(
                        <TouchableOpacity onPress={()=>alert("To be implemented")} key={`${obj}-${ind}`} style={{margin:4,marginRight:55,}}>
                        <Image style={styles.watchImage} source={obj.image} />
                        <Text style={styles.watchText}>{obj.name}</Text>
                        <Text style={styles.watchText}>/month</Text>

                    </TouchableOpacity>
                    ))}
                </View>
                </ScrollView>
                
            </View>
        </View>
        </View>

    )
}

export default TVPosterCard;

const isAndroid = () => {
	return Platform.OS == "android";
};

const styles = StyleSheet.create({
    viewContainer:{
        marginLeft:StyleConfig.resWidth(20),
        marginTop:StyleConfig.resHeight(20),
        borderRadius:StyleConfig.resHeight(20),
        // backgroundColor:'rgba(255,255,255,0.9)',
        shadowColor: 'black',
        shadowOpacity: 0.9,
        overflow:'hidden',
        elevation: 10, 
    },
    container: {
        flex:1,
        width: StyleConfig.width*0.20,
        height: StyleConfig.width*0.30,

    },
    detailViewContainer:{
        flexDirection:'row',
        backgroundColor: 'rgba(0,0,0,0.33)',
        // borderRadius:StyleConfig.resHeight(20),
        flex:1,
        // height: StyleConfig.height*0.4, 
        // marginLeft:StyleConfig.resWidth(20),
        marginTop:StyleConfig.resHeight(24),
        marginRight:StyleConfig.resWidth(12),
        padding: StyleConfig.resHeight(12),
        // paddingLeft:StyleConfig.resWidth(40)
    },
    titleText:{
        fontSize:StyleConfig.resHeight(60),
        fontWeight:'700',
        fontFamily:primary_regular_font.primary_regular_font,
        // textShadowColor: 'rgba(255, 255, 255, 0.75)',
        // textShadowOffset: {width: -2, height: 2},
        // textShadowRadius: 10,
        color: colors.white
    },
    typeText:{
        fontSize:StyleConfig.resHeight(24),
        minWidth: StyleConfig.resWidth(140),
        paddingLeft: StyleConfig.resWidth(6),
        paddingVertical:StyleConfig.resWidth(2),
        color: colors.white,
        fontWeight:'600',
        fontFamily:primary_regular_font.primary_regular_font,

    },
    valueText:{
        fontSize:StyleConfig.resHeight(24),
        paddingRight: StyleConfig.resWidth(6),
        paddingVertical:StyleConfig.resWidth(2),
        color: colors.white
    },
    commentText:{
        fontSize:StyleConfig.resHeight(20),
        paddingVertical:StyleConfig.resWidth(2),
        color: colors.white
    },
    movieTypeText:{
        fontSize:StyleConfig.resHeight(20),
        paddingVertical:StyleConfig.resWidth(2),
        fontWeight:'700',
        color: colors.white,
        marginTop:10,
        fontFamily:primary_regular_font.primary_regular_font,

    },
    movieValueText:{
        fontWeight:'300',
        color: colors.white,
        fontFamily:primary_regular_font.primary_regular_font,

    },
    detailsText:{
        width:(StyleConfig.width-130)/2,
        fontSize: StyleConfig.resHeight(26),
        marginTop:4,
        color: colors.white,
        fontWeight:'400',
        fontFamily:primary_regular_font.primary_regular_font
    },
    ratingWrap:{
        backgroundColor: colors.tomatoRed,
        height:StyleConfig.resHeight(34),
        width:StyleConfig.resWidth(34),
        alignItems:'center',
        justifyContent:'center',
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
        color: colors.white
    },
    spaceVertical:{
        height: StyleConfig.resHeight(20)
    },
    watchImage:{
        width: StyleConfig.resWidth(100),
        height: StyleConfig.resHeight(100/2),
        borderRadius:4
    },
    watchText:{
        fontSize: StyleConfig.resHeight(18),
        fontWeight:'500',
        marginTop:4,
        color: colors.white,
        textAlign:"center"
    },
    greatText:{
        fontSize:22, lineHeight:26, fontWeight:'700', color:colors.white,
        fontFamily:primary_regular_font.primary_regular_font,

    }
    
})