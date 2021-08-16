import React, {useState, useCallback} from 'react';
import {
    View,
    Pressable,
    Text,
    ScrollView,
    ImageBackground,
    StyleSheet,
    FlatList,
 } from 'react-native'
import TVPosterCard from '../../components/TV/TVPosterCard'
import TVCardDetail from '../../components/TV/TVCardDetail'
import TVCast from '../../components/TV/TVCast'
import primary_regular_font from '../../helper/fonts';
 import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import strings from '../../helper/strings';
import AppImages from '../../assets'

const RenderTV = ({posts, modalVisible, selectedImage, ...props})=>{
  const [focus, setFocus] = useState(0);
    const onFocus = useCallback(() => {
      setFocus(0);
    }, [0]);
    
    const onBlur = useCallback(() => {
      setFocus(-1);
    }, []);

  const {item } = props.route.params


  
    return (
      <View style={{backgroundColor:colors.white, flex:1}}>
        <ImageBackground
          style={{
            height: StyleConfig.height, width: StyleConfig.width,
            // backgroundColor:"red"
          }}
          source={{ uri:item.post_hint}} 
          >
            <ScrollView>
            <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.2)', paddingLeft:StyleConfig.resWidth(15), paddingRight:StyleConfig.resWidth(10)}}>
              <View style={{flexDirection:'row', marginBottom:70, marginTop:10}}>
                <Pressable 
                  onFocus={onFocus}
                  onBlur={onBlur}
                  hasTVPreferredFocus={true}
                  autoFocus={true} 
                  style = {({pressed, focused}) => 
                  ({
                    backgroundColor: focused? 'rgba(255,255,255,0.5)': pressed ? 'red' : 'transparent',
                    overflow:'hidden'
                  })
                }
                  onPress={()=>props.navigation.goBack()}>
                    <Icon name={"arrow-left"} type={"fontawesome"} size={70} color="white" />
                </Pressable>
              </View>
              <TVPosterCard item={item} {...props} />
              <ScrollView style={[{flex:1}]} contentContainerStyle={[{flexGrow:1, marginLeft:10}]} >
              <View style={{flexDirection: 'row', }}>
                <View style={{ marginTop:16 }}>
                  <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: 26, marginLeft:12, fontWeight:'700', color:colors.white }}>Director:</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TVCast item={item} {...props} image = {item.director_image} />
                  </View>
                </View>
                <View style={{ marginTop:16 ,marginLeft:30}}>
                  <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: 26, marginLeft:12, fontWeight:'700',color:colors.white}}>Cast:</Text>
                  <View style={{flexDirection: 'row'}}>

                  {item.actors_image.map((obj, ind)=>(
                    <TVCast item={item} {...props}  image = {obj} />

                     ))}
                    {/* <TVCardDetail item={item} {...props} image = {item.director[2]} /> */}
                    {/* <TVCardDetail item={item} {...props}  image = {item.director[3]}/> */}
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row',marginTop:80}}>
                <View style={{ marginTop:30 }}>
                  <Text style={{fontFamily:primary_regular_font.primary_regular_font,fontSize: 37, marginLeft:12, fontWeight:'700', color:colors.white}}>{strings.similar_titles}</Text>
                  <View style={{flexDirection: 'row'}}>
                  <FlatList
                   hasTVPreferredFocus={true}
                   contentContainerStyle={{paddingBottom:50}}
                   keyExtractor={(item, index) => `item${index}`}
                  numColumns={5}
                  data={posts}
                  renderItem = {({item}) => (
                    <TVCardDetail item={item} {...props}  type = "movie"  />
                  )}
                  />
                  </View>
                </View>
              </View>
              </ScrollView>
            </View>
            </ScrollView>
        </ImageBackground>
      </View>
    );
}

export default RenderTV;


const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.black,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
   
    });