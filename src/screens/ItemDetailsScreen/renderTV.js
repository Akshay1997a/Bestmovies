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
import TVCarousel from '../../components/TV/TVCarousel'

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
      <View style={styles.root}>
      <View style={[styles.container, { backgroundColor: '#e1e4e' }]}>
        
        

<TVCarousel item={item} posts={posts} {...props} style={[
            
          ]} />
        
        

        
        
         {/* </View>
        {/* <View style={[styles.item, { backgroundColor: '#4af2a1', marginTop: -16 }]} /> */}
       
          {/* <View style={[styles.item, { backgroundColor: '', position: 'absolute',}]}>
<Text style={{fontSize:30}}>himmm</Text>
<Text style={{fontSize:30}}>himmm</Text>

        </View> */}
        
      </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      // height: 200,
      // width: 200,
      borderRadius: 16,
      padding: 16,
      borderWidth: 8,
      borderColor: 'rgba(0,0,0,0.2)',
    },
    item: {
      borderWidth: 4,
      borderColor: 'rgba(0,0,0,0.2)',
      height: 200,
      width: 100,
      borderRadius: 8,
    },
  });

export default RenderTV;











const isAndroid = () => {
	return Platform.OS == "android";
};



const styles1 = StyleSheet.create({
    container: {
      backgroundColor: colors.black,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
   
    });