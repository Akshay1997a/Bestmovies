import React, {useState, useCallback} from 'react';
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
  console.log('item',item);
  const [focus, setFocus] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

    const onFocus = useCallback(() => {
      console.log('OnFocus called***');
      setFocus(0);
      setIsFocus(true);
    }, [0]);
    
    const onBlur = useCallback(() => {
      console.log('onBlur called***');
      setFocus(-1);
      setIsFocus(false);

    }, []);
    return (
      <View>
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
               source={{ uri:   item.thumbnail  }}
               
               style={{ width: '100%', height: '100%' , borderRadius:15}}>
                 {/* <View> */}
                        {/* {
                          item.title === 'Joker'
                        ?
                      <View style={[{zIndex:1, flex:1,flexDirection:'row', paddingTop:10, backgroundColor:"rgba(0,0,0, 0.3)", paddingLeft:45, paddingRight:35, justifyContent:'space-between'}]} >
                                <Icon name={"thumbs-down"}  size={35} color={"white"} />
                          <View style={styles.circleShape}>
                                <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontWeight:'800' ,textAlign:'center' ,fontSize:20,color:props?.selected == 1 ? 'white' : 'white'}}>OK</Text>
                          </View>
                          <View style={styles.circleShape}>
                                  <Icon name={"thumbs-up"} size={35} color={"white"} />
                          </View>
                          <View style={styles.circleShape}>
                                  <Icon name={"plus"} size={28} color={"white"}  />
                          </View>
                          <View style={styles.circleShape}>
                                  <Icon name={"share"} size={28} color={"white"}  />
                          </View>
                      </View>
                      :
                      <View  style={[{flexDirection:'row', flex:0.2, justifyContent:'flex-end',marginTop:-5,marginEnd:20}]} >
                            <Icon name={"bookmark"} size={50} color={"#6495ED"} />
                      </View>
                        } */}
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
                <Text style={[{width:300,fontFamily:primary_regular_font.primary_regular_font, marginVertical:5,fontSize:StyleConfig.resHeight(24), fontWeight:'700',  color: props?.selected == 1 ? 'black' : 'black' }]} >{item.title}</Text>
                <View style={{flexDirection:'row'}}>
                  <View>
                          <Text style={[{fontFamily:primary_regular_font.primary_regular_font,fontSize:StyleConfig.resHeight(24), color:props?.selected == 1 ? 'black' : 'black', fontWeight:'400'}]}>{`${item.DATA.bornYear} ${item.DATA.country}`}</Text>
                  </View>
                {/* <View style={styles.ovalShapeView}>
                <Text style={styles.rating}>{item.DATA.rating}</Text>

                    </View> */}

                </View>
                {/* <View style={{flexDirection:'row'}}>
                      <Text style={[{fontFamily:primary_regular_font.primary_regular_font,fontSize:StyleConfig.resHeight(24), color:props?.selected == 1 ? 'black' : 'white', fontWeight:'400'}]}>{`${DATA.match} match`}</Text>
                      <Text style={[{fontFamily:primary_regular_font.primary_regular_font,marginLeft:55 ,fontSize:StyleConfig.resHeight(24), color:props?.selected == 1 ? item.DATA.color : 'white', fontWeight:'700'}]}>{item.DATA.feedback}</Text>
                </View> */}
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
  container:{
     marginVertical: StyleConfig.resHeight(10),
      marginHorizontal: StyleConfig.resWidth(10),
    // borderRadius:StyleConfig.resHeight(20),
    // borderWidth:1,
    // borderColor:'black'
  },
  rating:{
    fontFamily:primary_regular_font.primary_regular_font,
    textAlign:'center',
    fontWeight:'700',
     fontSize: isAndroid() ? 10 :18,
     color:'white'
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
    flexDirection:'row',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#A9A9A9'
  },


    viewContainer:{
        // borderWidth: StyleConfig.resWidth(1),
        borderRadius:StyleConfig.resHeight(20),
        // backgroundColor:'rgba(255,255,255,0.9)',
        shadowColor: 'black',
        overflow:'hidden',
        shadowOpacity: 0.9,
        elevation: 10, 
        // borderColor:'red',
        height: StyleConfig.width*0.30 ,
        
    },

    highlight:{
      flexBasis: itemWidth+30,
      height: StyleConfig.width*0.30 ,
      marginTop: StyleConfig.resHeight(25),
      marginHorizontal: StyleConfig.resWidth(10),
      borderRadius: 20,
      overflow:'hidden',
    },
    highlightFocused:{
      borderRadius:StyleConfig.resHeight(30),
      // backgroundColor:'rgba(255,255,255,0.9)',
      // marginTop:50,
      width:isAndroid() ? 155 : 310,
      borderWidth: StyleConfig.resWidth(10),
      height: isAndroid() ? StyleConfig.width*0.20 : StyleConfig.width*0.25,

      // marginVertical: StyleConfig.resHeight(10),
      // marginHorizontal: StyleConfig.resWidth(8),
      borderColor: colors.tomatoRed,
      overflow:'hidden',
      // paddingHorizontal:1,
      paddingTop:1,
    },
    notHighlightFocused:{
      // borderColor: 'green',

      // borderWidth: StyleConfig.resWidth(5),
      borderRadius:StyleConfig.resHeight(20),
      // marginTop:50,
      width:isAndroid() ? 155 : 310,
      

      // backgroundColor:'rgba(255,255,255,0.9)',
      height: isAndroid() ? StyleConfig.width*0.20 : StyleConfig.width*0.25,
      // marginVertical: StyleConfig.resHeight(10),
      // marginHorizontal: StyleConfig.resWidth(10),
      // paddingHorizontal:1,
      paddingTop:1,
      overflow:'hidden',

    },
   
    });