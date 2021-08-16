// React Modules
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    Pressable
} from 'react-native';
import StyleConfig from '../../helper/StyleConfig'
import AppImages from '../../assets';

// Styles
import styles from './styles';

export default class TVKeyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: '',
        };
      }
    
    // This is for optimization
    // Component should render only once
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    // This will call the bound function from its parent component 
    // to handle button press action/event 
    _handleOnPress = (value,index) => {
        // console.log('value',value);
        // console.log('index',index);
        requestAnimationFrame(() => {
            this.props.onBtnPress(value);
        });



    }

    render() {
        console.log('value',this.state);

        return (
          <View  hasTVPreferredFocus={true} style={styles.container} >
            {
                    this.props.buttons.map((row, index) => (
                      <View  hasTVPreferredFocus={true} key={index} style={styles.contRow}>
                        { 
                                row.map((col,index) => (



                                  <Pressable
                                  hasTVPreferredFocus={true}
                                  style={({pressed}) => [
                                    
                                    styles.contButton,
                                  ]}
                                    key={index}
                                    onPress={() => 
                                        
                                        this._handleOnPress(col,index)

                                    }
                                        >
                                    {/* <View style={styles.contButton}> */}
                                    
                                      <Text style={styles.txtDefault}>{col}</Text>
                                    {/* </View> */}
                                    
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
                <Image style={{ width: StyleConfig.resWidth(50),
                            height: StyleConfig.resHeight(40),}} source={AppImages.delete} />
                            </View>

                            <View style={styles.symbolButton}>
                            <Image style={{ width: StyleConfig.resWidth(50),
                            height: StyleConfig.resHeight(40),}} source={AppImages.delete} />
                            </View>
                           
                            <View style={styles.spaceButton}>
                            <Image style={{ width: StyleConfig.resWidth(60),
                            height: StyleConfig.resHeight(20),}} source={AppImages.space} />
                            </View>
                           
                            <View style={styles.symbolButton}>
                            <Image style={{ width: StyleConfig.resWidth(50),
                              height: StyleConfig.resHeight(40),}} source={AppImages.delete} />
                            </View>
                            <View style={styles.symbolButton}>
                            <Image style={{ width: StyleConfig.resWidth(50),
                              height: StyleConfig.resHeight(60),}} source={AppImages.delete_all} />
                            </View>
                           
                            </View>
                            
          </View>
        );
    }
}