import React, {useState, useCallback,useEffect} from 'react';
import {
    View,
    Pressable,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Image,
    Platform
 } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';

 import colors from 'src/helper/colors';
 const {width, height} = Dimensions.get('window')
import StyleConfig from 'src/helper/StyleConfig';
import primary_regular_font from '../../helper/fonts';


import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets'

let DATA = {
    name: "Todd Phillips",
    type: "Drama, Adventura",
    country: "United States",
    bornYear: "2019 -",
    match: "2.99$ - 78%",
    follower: "5.7"
}

const TVCardDetail = ({item, ...props})=>{
  // console.log('type',props?.selected);
  const [focus, setFocus] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const storeData = async (value) => {
    try {
      // await AsyncStorage.setItem('TVMovieListItem', value)

    } catch (e) {
      // saving error
    }
  }

      const   onFocus =   useCallback(() => {
      // console.log('OnFocus TVCardDetail***',props);
  props.reduxSetCurrFocus(90)
      setFocus(0);
      setIsFocus(true);
    }, [0]);
    
    const onBlur = useCallback(() => {
      // console.log('onBlur TVCardDetail***');
      setFocus(-1);
      setIsFocus(false);

    }, []);

    useEffect(() => {
      const unsubscribe = props.navigation.addListener('focus', () => {
      // console.log('focus TVMovieList ');

      });
    }, [])
    return (
      <View >
      <Pressable
     
      style={styles.container}
      onFocus={onFocus}
      onBlur={onBlur}
      key={item.id}
            // style={({pressed, focused}) => focused ? styles.highlightFocused : styles.notHighlightFocused}
      
      tvParallaxProperties={{ magnification: 1.001 }}
      onPress={() =>{
        setFocus(false);
        props.navigation.navigate("ItemDetailsScreen", {item})
      }}
      >
        {/* //Image View */}
          <View>
          <View hasTVPreferredFocus={false}>
            <View style={isFocus ? styles.highlightFocused : styles.notHighlightFocused}>
              <ImageBackground 
               source={{ uri:  props?.type == "movie" ?  item.thumbnail : props.image  }}
               
               style={{ width: '100%', height: '100%' , borderRadius:15}}>
                 {/* <View> */}
                        {
                          item.title === 'Joker'
                        ?
                      <View style={styles.thumb} >
                                <Icon name={"thumbs-down"}  size={isAndroid() ? 15 : 35 } color={"white"} />
                          <View style={styles.circleShape}>
                                <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontWeight:'800' ,textAlign:'center' ,fontSize: isAndroid() ? 10:18,color:props?.selected == 1 ? 'white' : 'white'}}>OK</Text>
                                 
                          </View>
                          <View style={styles.circleShape}>
                                  <Icon name={"thumbs-up"} size={isAndroid() ? 15 : 20 } color={"white"} />
                          </View>
                          <View style={styles.circleShape}>
                                  <Icon name={"plus"} size={isAndroid() ? 15 : 20 } color={"white"}  />
                          </View>
                          <View style={styles.circleShape}>
                                  <Icon name={"share"} size={isAndroid() ? 15 : 20 } color={"white"}  />
                          </View>
                      </View>
                      :
                      <View  style={[{flexDirection:'row', flex:0.2, justifyContent:'flex-end',marginTop:-5,marginEnd:20}]} >
                            <Icon name={"bookmark"} size={isAndroid() ? 25 : 50 } color={"#6495ED"} />
                      </View>
                        }
                   {/* </View> */}

                  {/* <View style={[{ alignItems:'center', marginTop:-25}]}>
                         <Icon name={"bookmark"} size={80} color={"#6495ED"} style={[{ }]} />
                  </View> */}
             
               </ImageBackground>
               </View>
          </View>
          {/* //Bottom View */}
          <View style={{flexDirection:'row',marginLeft:10}}>
            <View>
                <Text style={[{fontFamily:primary_regular_font.primary_regular_font, marginVertical:5,fontSize: isAndroid() ? StyleConfig.resHeight(20)  : StyleConfig.resHeight(24), fontWeight:'700',  color: props?.selected == 1 ? 'black' : 'white' }]} >{item.title}</Text>
                <Text style={[{fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid() ? StyleConfig.resHeight(20) :StyleConfig.resHeight(24), color:props?.selected == 1 ? 'black' : 'white', fontWeight:'400'}]}>{DATA.type}</Text>
                <View style={{flexDirection:'row'}}>
                  <View>
                          <Text style={[{fontFamily:primary_regular_font.primary_regular_font,fontSize: isAndroid() ? StyleConfig.resHeight(20) :StyleConfig.resHeight(24), color:props?.selected == 1 ? 'black' : 'white', fontWeight:'400'}]}>{`${DATA.bornYear} ${DATA.country}`}</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                  <View style={styles.ovalShapeView}>
                        <Text style={styles.rating}>{item.DATA.rating}</Text>
                    </View>
                  </View>
               

                </View>
                <View style={{flexDirection:'row' ,minWidth:160}}>
                         <View  style={{flex:0.9}}>
                            <Text style={[{fontFamily:primary_regular_font.primary_regular_font,fontSize:StyleConfig.resHeight(24), color:props?.selected == 1 ? 'black' : 'white', fontWeight:'400'}]}>{`${DATA.match} match`}</Text>
                        </View>
                         <View style={{alignContent:'center',justifyContent:'center'}}>
                             <Text style={styles.feedback}>{item.DATA.feedback}</Text>
                          </View>
                </View>
            </View>
            
          </View>
          
        </View>
        
      </Pressable>

      </View>
    );


}

export default TVCardDetail;
const itemWidth = (StyleConfig.width-130)*0.18
const isAndroid = () => {
	return Platform.OS == "android";
};

const styles = StyleSheet.create({
  feedback:{
    fontFamily:primary_regular_font.primary_regular_font,
    // marginLeft: isAndroid() ? 40 : 55 ,
    fontSize:StyleConfig.resHeight(24),
     color:colors.black,
      fontWeight:'700'},
  ok:{
    fontFamily:primary_regular_font.primary_regular_font,
    fontWeight:'800' ,
    textAlign:'center',
    fontSize: isAndroid() ? 10 : 20,
    color:'white'
  },
  thumb:{
    zIndex:1, 
    flex:1,
    flexDirection:'row', 
    paddingTop:10, 
    backgroundColor:"rgba(0,0,0, 0.3)",
     paddingLeft:45, 
     paddingRight:35,
      justifyContent:'space-between'
  },
  rating:{
    fontFamily:primary_regular_font.primary_regular_font,
    textAlign:'center',
    fontWeight:'700',
     fontSize: isAndroid() ? 10 :18,
     color:'white'
  },
  container:{
     marginVertical: StyleConfig.resHeight(10),
      marginHorizontal: StyleConfig.resWidth(10),
  },
  ovalShapeView: {  
    alignItems:'center',
    justifyContent:'center',  
    marginLeft: isAndroid() ? 40 : 50,
    width: isAndroid() ? 20 : 40,
    height: isAndroid() ? 20 :  40,
    backgroundColor: colors.black,
    borderRadius: 100,
    transform: [{ scaleX: 2 }],
    // marginRight:40
 },
  circleShape: {
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',  
    marginLeft: isAndroid() ? 40 : 50,
    width: isAndroid() ? 20 : 30,
    height: isAndroid() ? 20 :  30,
    backgroundColor: '#A9A9A9',
    borderRadius: 100,
    transform: [{ scaleY: 2 }],
    
  },
    viewContainer:{
        borderRadius:StyleConfig.resHeight(20),
        shadowColor: 'black',
        overflow:'hidden',
        shadowOpacity: 0.9,
        elevation: 10, 
        height: StyleConfig.width*0.30 ,
    },
    highlight:{
      flexBasis: itemWidth+30,
      height: StyleConfig.width*0.40 ,
      marginTop: StyleConfig.resHeight(25),
      marginHorizontal: StyleConfig.resWidth(10),
      borderRadius: 20,
      overflow:'hidden',
    },
    highlightFocused:{
      borderRadius:StyleConfig.resHeight(30),
      width:isAndroid() ? 180 : 356,
      borderWidth:  isAndroid()  ? StyleConfig.resWidth(10) :StyleConfig.resWidth(10),
      height: isAndroid() ?  StyleConfig.width*0.25 : StyleConfig.width*0.30,
      borderColor: colors.tomatoRed,
      overflow:'hidden',
      padding:1,
      // paddingBottom:1,
      // paddingVertical:2,
      // paddingHorizontal:2
    },
    notHighlightFocused:{
      borderRadius:StyleConfig.resHeight(20),
      width:isAndroid() ? 180 : 356,
      height: isAndroid() ?  StyleConfig.width*0.25 : StyleConfig.width*0.30,
      paddingTop:1,
      overflow:'hidden',
    },
   
    });