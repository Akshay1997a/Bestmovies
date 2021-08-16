import React, {useState, useCallback} from 'react';
import {  
    View,
    Pressable,
    StyleSheet,
    Image,
    Text,
    ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from 'src/helper/colors';
import StyleConfig from 'src/helper/StyleConfig'
import primary_regular_font from '../../helper/fonts';

const TVSearchListItem = ({item, onFocusedItem, isSearch, ...props})=>{
  const [focus, setFocus] = useState(false);
    const onFocus = useCallback(() => {
      console.log('Focused item ', item.title);
      setFocus(true);
      onFocusedItem(item)

    }, [item.title]);
    
    const onBlur = useCallback(() => {
      setFocus(false);
    }, []);
    return(
      <Pressable
          onFocus={onFocus}
          onBlur={onBlur}
          key={item.id}
          tvParallaxProperties={{ magnification: 1.001 }}
          style={styles.highlight}
          onPress={() =>{
            setFocus(false);
            props.navigation.navigate("ItemDetailsScreen", {item})
          }}
      >
        <View style={ focus ? styles.focusImg : styles.img}>
            <ImageBackground
            style={{ width: '100%', height: '100%',borderRadius: focus ? 0: 20, overflow:'hidden' }}
            resizeMode={'stretch'}
            source={{ uri: item.thumbnail }}
          > 
             {focus && <View style={[{zIndex:1, flex:1,flexDirection:'row', paddingTop:10, backgroundColor:"rgba(0,0,0, 0.3)", paddingLeft:45, paddingRight:35, justifyContent:'space-between'}]} >
                        <Icon name={"thumbs-down"}  size={32} color={"white"} />
                        <Icon name={"eye"} size={32} color={"white"} />
                        <Icon name={"thumbs-up"} size={32} color={"white"} />
                        <View style={[{ alignItems:'center', marginTop:-25}]}>
                        <Icon name={"bookmark"} size={80} color={"blue"} style={[{ }]} />
                        <Icon name={"plus"} size={26} color={"white"} style={[{position:'absolute', top:22}]} />
                        </View>
                        </View>}
          </ImageBackground>
        </View>
          
          <Text style={{fontFamily:primary_regular_font.primary_regular_font, paddingHorizontal:8, paddingVertical:4, fontSize:24, fontWeight:'700', color: focus ? colors.tomatoRed : colors.black}}>{item.title}</Text>
        
      </Pressable>
    )
}

export default TVSearchListItem;
const itemWidth = (StyleConfig.width-130)*0.17
const styles = StyleSheet.create({
    container:{
        //backgroundColor: colors.tomatoRed,
        // height: StyleConfig.resHeight(360),
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    tile: {
       fontFamily:primary_regular_font.primary_regular_font,
        marginTop: StyleConfig.resHeight(10),
        marginBottom: StyleConfig.resHeight(20),
        paddingVertical: StyleConfig.resHeight(10),
        paddingHorizontal: StyleConfig.resWidth(10),
      },
      img:{},
      focusImg: { 
        borderColor: colors.tomatoRed,
        borderRadius: 10,
        overflow:'hidden',
        borderWidth:5},
      highlight:{
        flexBasis: itemWidth+35,
        borderColor: '#1d3557',
        height: StyleConfig.width*0.26,
        marginVertical: StyleConfig.resHeight(20),
        marginHorizontal: StyleConfig.resWidth(8),
        borderRadius: 20,
        padding:10
      },
      
      title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily:primary_regular_font.primary_regular_font
      },
      
})