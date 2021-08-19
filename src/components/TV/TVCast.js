import React, {useState, useCallback} from 'react';
import {
    View,
    Pressable,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Image
 } from 'react-native'
 import colors from 'src/helper/colors';
 const {width, height} = Dimensions.get('window')
import StyleConfig from 'src/helper/StyleConfig';
import FontFamily from '../../../src/helper/fonts';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from '../../assets'

let DATA = {
    name: "Todd Phillips",
    type: "Drama, Adventura",
    country: "United States",
    dob:"US. Born 1927",
    bornYear: "2019 -",
    match: "78% match - 12 ",
    follower: "5.7",
    designation:'Actor'
}

const TVCast = ({item, ...props})=>{
  console.log('type',props?.selected);
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
            <View style={styles.notHighlightFocused}>
                    <ImageBackground 
                    source={{ uri:  props?.type == "movie" ?  item.thumbnail : props.image  }}
                    style={{ width: '100%', height: '100%' , borderRadius:15}}>
                    </ImageBackground>
            </View>
          </View>
          {/* //Bottom View */}
          <View style={{flexDirection:'column'}}>
                <Text style={[{ marginVertical:5,fontSize:StyleConfig.resHeight(24), fontWeight:'700',  color: props?.selected == 1 ? 'black' : 'black' }]} >{DATA.name}</Text>
                <View style={{flexDirection:'row'}}>

                <View>
                            <Text style={[{fontSize:StyleConfig.resHeight(24), color:props?.selected == 1 ? 'black' : 'black', fontWeight:'500'}]}>{DATA.designation}</Text>
                            <View style={{flexDirection:'row'}}>
                            <View>
                                    <Text style={[{fontSize:StyleConfig.resHeight(24), color:props?.selected == 1 ? 'black' : 'black', fontWeight:'500'}]}>{DATA.dob}</Text>
                            </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={[{fontSize:StyleConfig.resHeight(24), color:props?.selected == 1 ? 'black' : 'black', fontWeight:'500'}]}>{`${DATA.match} match`}</Text>
                            </View>
               </View>
               <View style={{
                  alignItems:'center',
                  justifyContent:'center',  
                  width: 70,
                  height: 70,
                  backgroundColor: "gray",
                  borderRadius: 140/2,
                }}>
                        <Text style={{textAlign:'center',fontWeight:'700', fontSize:18,color:props?.selected == 1 ? 'white' : 'black'}}>Top</Text>

                        <Text style={{textAlign:'center',fontWeight:'900', fontSize:18,color:props?.selected == 1 ? 'white' : 'black'}}>{item.DATA.rating}</Text>
                    </View>
                    </View>
               

               
            
          </View>
          
        </View>
        
      </Pressable>

      </View>
    );


}

export default TVCast;
const itemWidth = (StyleConfig.width-130)*0.15


const styles = StyleSheet.create({
  container:{
     marginVertical: StyleConfig.resHeight(20),
      marginHorizontal: StyleConfig.resWidth(10),
    // borderRadius:StyleConfig.resHeight(20),
    // borderWidth:1,
    // borderColor:'black'
  },
  ovalShapeView: {  
    alignItems:'center',
    justifyContent:'center',  
    // marginTop: 20,
    width: 40,
    height: 40,
    backgroundColor: '#efcc00',
    borderRadius: 100,
    transform: [{ scaleX: 2 }],
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
      height: StyleConfig.width*0.37 ,
      marginTop: StyleConfig.resHeight(25),
      marginHorizontal: StyleConfig.resWidth(10),
      borderRadius: 20,
      overflow:'hidden',
    },
    highlightFocused:{
      borderRadius:StyleConfig.resHeight(30),
      width:320,
      borderWidth: StyleConfig.resWidth(5),
      height: StyleConfig.width*0.25,
      borderColor: colors.tomatoRed,
      overflow:'hidden',
      paddingTop:1,
    },
    notHighlightFocused:{
      borderRadius:StyleConfig.resHeight(30),
      width:320,
      height: StyleConfig.width*0.25,
      paddingTop:1,
      overflow:'hidden',

    },
   
    });