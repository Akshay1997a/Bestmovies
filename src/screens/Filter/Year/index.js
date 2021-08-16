import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import strings from '../../../helper/strings';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class Year extends Component {
    constructor(props) {
        super(props);
        this.state = {
            window,
            screen, 
            isSelected:true,
        }
    }

    render() {
        return (
            <View style={{margin:5}}>
                <View style={{margin:10,padding:10}}>
                    <TouchableOpacity
                     onPress={() => alert('Pressed!')}
                    >
                            <Text style={styles.fontText}>{strings.new}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                            <Text  style={styles.fontText}>{strings.this_year}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                            <Text style={styles.fontText}> {strings.last_2_year} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                            <Text style={styles.fontText}> {strings.last_5_year}
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius:25}}>
                        <Text style={styles.fontText}> {strings.last_10_year}
                         </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                            <Text style={styles.fontText}> Last 20 Year
                             </Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.touchabletext} onPress={() =>this.setState({isSelected:styles.touchabletext})} >
                            <Text  style={{fontWeight:'700',
                                        padding:10,
                                        fontSize:15,
                                        borderRadius:25,
                                        backgroundColor:'red'
                                        }}> All </Text>         
                    </TouchableOpacity>   
                </View>
                    <Text  style={{fontSize:15,marginLeft:10,fontWeight:'700'}}>{strings.customized_text}</Text>
                
                <View style={{flexDirection:'row',padding:10}}>
                    <View style={{flex:2,marginRight:10}}>
                    <TouchableOpacity style={{backgroundColor:'#D3D3D3',padding:10,borderRadius:25,alignItems:'center' }}  >
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:5,alignItems:'center'}}> 
                                    <Text style={{fontSize:17,fontWeight:'700'}}>{strings.from_text}</Text> 
                                </View>
                                <View style={{flex:1}}>
                                    <Icon name="chevron-down" size={20} color="#232323" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2,marginRight:10}}>
                        <TouchableOpacity style={{backgroundColor:'#D3D3D3',padding:10,borderRadius:25,alignItems:'center' }}  >
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:5,alignItems:'center'}}> 
                                    <Text style={{fontSize:17,fontWeight:'700'}}>{strings.to_text}</Text> 
                                </View>
                                <View style={{flex:1}}>
                                    <Icon name="chevron-down" size={20} color="#232323" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        )
    }
}

export default Year

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fontText:{
        fontWeight:'700',
        padding:10,
        fontSize:15, 
    },
    touchabletext:{
        borderRadius:25,
        backgroundColor:'red',
    }
  });
  

