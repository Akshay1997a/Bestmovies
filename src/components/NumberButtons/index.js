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
    _handleOnPress = (value,index) => {
        // console.log('value',value);
        // console.log('index',index);
        requestAnimationFrame(() => {
            props.onBtnPress(value);
        });

    }    
    return(
      <View hasTVPreferredFocus={true} style={styles.container}>
        {props.buttons.map((item, index)=>{
          return(
            <View key={`key${index}`} style={{flexDirection: 'row'}}>
            {item.map((subItem, subIndex)=>{
              return <Pressable key={`subInd${subIndex}`} style={({focused})=> focused ? styles.pressableFocused : styles.pressable} >
                { typeof subItem == 'string' && <Text style={styles.txtDefault}>{subItem}</Text>}
                { typeof subItem == 'number' && subItem == AppImages.next_bk && <View style={styles.symbolButton}>
                                                    <Image style={{ width: StyleConfig.resWidth(10),
                                                       height: StyleConfig.resHeight(20),}} source={subItem} />
                                               </View> }
                { typeof subItem == 'number' && subItem == AppImages.space &&<View style={styles.symbolButton}>
                    <Image style={{ width: StyleConfig.resWidth(60),
                        height: StyleConfig.resHeight(20),}} source={subItem} />
                </View> }
                { typeof subItem == 'number' && subItem == AppImages.delete &&<View style={styles.symbolButton}>
                    <Image style={{ width: StyleConfig.resWidth(40),
                        height: StyleConfig.resHeight(30),}} source={subItem} />
                </View> }
                { typeof subItem == 'number' && subItem == AppImages.delete_all &&<View style={styles.symbolButton}>
                    <Image style={{ width: StyleConfig.resWidth(30),
                        height: StyleConfig.resHeight(40),}} source={subItem} />
                </View> }
              </Pressable>
            })}
            </View>
          )
        })}
        
      </View>
    );
//         return (
//           <View hasTVPreferredFocus={true}  style={styles.container}>
//      <Pressable
//      style={({ pressed, hovered, focused }) => focused ? [styles.container,{backgroundColor:'red'}] : styles.container}
//       style={ styles.container}
//      onFocus={onFocus}
//      onBlur={onBlur}
//      >


//             {

//                     props.buttons.map((row, index) => (
//                       <View style={styles.contRow}>
//                         { 
//                                 row.map((col,index) => (
//                                   <Pressable 
//                                   style={({ pressed, hovered, focused }) => focused ? [styles.contButton,{backgroundColor:'red'}] : styles.contButton}>
//                                   <Text style={styles.txtDefault}>{col}</Text>
//                                   </Pressable>
//                                 ))
//                             }
//                       </View>
                      
//                     ))
//                 }
//                 <View style={
//                   styles.contRow
//                 }>

//                             <View style={styles.symbolButton}>
//                                  <Image style={{ width: StyleConfig.resWidth(10),
//                                     height: StyleConfig.resHeight(20),}} source={AppImages.next_bk} />
//                             </View>
//                             <View style={styles.symbolButton}>
//                             <Image style={{ width: StyleConfig.resWidth(10),
//                             height: StyleConfig.resHeight(20),}} source={AppImages.next_bk} />
//                             </View>
                           
//                             <View style={styles.spaceButton}>
//                             <Image style={{ width: StyleConfig.resWidth(60),
//                             height: StyleConfig.resHeight(20),}} source={AppImages.space} />
//                             </View>
                           
//                             <View style={styles.deleteButton}>
//                             <Image style={{ width: StyleConfig.resWidth(40),
//                               height: StyleConfig.resHeight(30),}} source={AppImages.delete} />
//                             </View>
//                             <View style={styles.deleteAllButton}>
//                             <Image style={{ width: StyleConfig.resWidth(30),
//                               height: StyleConfig.resHeight(40),}} source={AppImages.delete_all} />
//                             </View>
                           
//                             </View>
                            


//        </Pressable> 
// </View>
           

//         );
}
export default TVKeyboard;                          