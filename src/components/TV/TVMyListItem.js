import React, {useState, useCallback} from 'react';
import {  
    Pressable,
    StyleSheet,
    ImageBackground,
    Text
} from 'react-native'
import colors from 'src/helper/colors';
import StyleConfig from 'src/helper/StyleConfig'


const TVMovieListItem = ({item, onFocusedItem, ...props})=>{
  const [focus, setFocus] = useState(false);
    const onFocus = useCallback(() => {
      console.log('Focused item ', item.title);
      setFocus(true);
      onFocusedItem(item)

    }, [item.title]);
    
    const onBlur = useCallback(() => {
      setFocus(false);
    }, []);
    //console.log("item -> ", item.title, focus)
    
    // return(
    //   <TouchableHighlight
    //       hasTVPreferredFocus={true}
    //       key={item.id}
    //       style={({pressed, focused}) => focused ? styles.highlightFocused : styles.highlight}
    //       onPress={() => props.navigation.navigate("ItemDetailsScreen")}
    //   >
    //     <ImageBackground
    //       style={{ width: '100%', height: '100%' }}
    //       source={{ uri: item.thumbnail }}
    //     />
    //   </TouchableHighlight>
    // )
    return(
      <Pressable
          onFocus={onFocus}
          onBlur={onBlur}
          key={item.id}
          
          tvParallaxProperties={{ magnification: 1.001 }}
          style={({pressed, focused}) => focused ? styles.highlightFocused : styles.highlight}
          onPress={() =>{
            setFocus(false);
            props.navigation.navigate("ItemDetailsScreen", {item})
          }}
      >
        {item && <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={{ uri: item.thumbnail }}
        >
          
          <Text style={{ padding:10, backgroundColor:'rgba(255,255,255,0.8)'}}>{item.title}</Text>
          </ImageBackground>}
      </Pressable>
    )
}

export default TVMovieListItem;

const styles = StyleSheet.create({
    container:{
        //backgroundColor: colors.tomatoRed,
        // height: StyleConfig.resHeight(360),
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    tile: {
        
        marginTop: StyleConfig.resHeight(10),
        marginBottom: StyleConfig.resHeight(20),
        paddingVertical: StyleConfig.resHeight(10),
        paddingHorizontal: StyleConfig.resWidth(10),
      },
      highlight:{
        flexBasis: (StyleConfig.width-130)*0.2,
        borderColor: '#1d3557',
        height: StyleConfig.width*0.15,
        marginTop: StyleConfig.resHeight(40),
        marginHorizontal: StyleConfig.resWidth(8),
        borderRadius: 20
      },
      highlightFocused:{
        flexBasis: (StyleConfig.width-130)*0.2,
        borderWidth: StyleConfig.resWidth(5),
        height: StyleConfig.width*0.17,
        marginVertical: StyleConfig.resHeight(10),
        marginHorizontal: StyleConfig.resWidth(8),
        borderColor: colors.tomatoRed,
        borderRadius: 20,
        overflow:'hidden'
      },
      title: {
        fontSize: 20,
        textAlign: 'center',
      },
      
})