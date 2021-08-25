// React Modules
import React, {useState, useCallback} from 'react';

import {
    View,
    Image,
    Text,
    Pressable
} from 'react-native';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets';
import TVCarousel from '../TV/TVCarousel';

// Styles
import styles from './styles';

const TVKeyboard = ({...props})=>{
console.log('ite',props);
  const [focus, setFocus] = useState(false);
    const onFocus = useCallback(() => {
      setFocus(true);
    }, []);
    
    const onBlur = useCallback(() => {
      setFocus(false);
    }, []);
    
    
    // This is for optimization
    // Component should render only once
    // shouldComponentUpdate(nextProps, nextState){
    //     return false;
    // }

    // This will call the bound function from its parent component 
    // to handle button press action/event 
    _handleOnPress = (value,index) => {
        // console.log('value',value);
        // console.log('index',index);
        requestAnimationFrame(() => {
            props.onBtnPress(value);
        });

    }

    

        return (
          <View hasTVPreferredFocus={true}  style={styles.container}>

{/* <TVCarousel></TVCarousel> */}
     <Pressable
     style={({ pressed, hovered, focused }) => focused ? [styles.container,{backgroundColor:'red'}] : styles.container}
    style={ styles.container}
     onFocus={onFocus}
     onBlur={onBlur}
     >


            {

                    props.buttons.map((row, index) => (
                      <View style={styles.contRow}>
                        { 
                                row.map((col,index) => (
                                  <Pressable 
                                  style={({ pressed, hovered, focused }) => focused ? [styles.contButton,{backgroundColor:'red'}] : styles.contButton}>
                                  <Text style={styles.txtDefault}>{col}</Text>
                                  </Pressable>
                                ))
                            }
                      </View>
                      
                    ))
                }
                <View style={
                  styles.contRow
                }>

                            <View style={styles.symbolButton}>
                                 <Image style={{ width: StyleConfig.resWidth(10),
                                    height: StyleConfig.resHeight(20),}} source={AppImages.next_bk} />
                            </View>
                            <View style={styles.symbolButton}>
                            <Image style={{ width: StyleConfig.resWidth(10),
                            height: StyleConfig.resHeight(20),}} source={AppImages.next_bk} />
                            </View>
                           
                            <View style={styles.spaceButton}>
                            <Image style={{ width: StyleConfig.resWidth(60),
                            height: StyleConfig.resHeight(20),}} source={AppImages.space} />
                            </View>
                           
                            <View style={styles.deleteButton}>
                            <Image style={{ width: StyleConfig.resWidth(40),
                              height: StyleConfig.resHeight(30),}} source={AppImages.delete} />
                            </View>
                            <View style={styles.deleteAllButton}>
                            <Image style={{ width: StyleConfig.resWidth(30),
                              height: StyleConfig.resHeight(40),}} source={AppImages.delete_all} />
                            </View>
                           
                            </View>
                            


       </Pressable> 
</View>
           

        );
    
                      


                            }

  
export default TVKeyboard;                          