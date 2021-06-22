import React, { Component } from 'react'
import { Text, View ,SafeAreaView,StyleSheet, TouchableOpacity,StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/FontAwesome5';

export class Menu extends Component {
    render() {
        return (
            <SafeAreaView style={{borderRadius:2,marginRight:5,marginLeft:5}}>
            {/* <StatusBar hidden={true}/> */}
                    <View style={{flexDirection:'row',position:'relative',justifyContent:'space-between'}}>
                        <TouchableOpacity>
                            <Icon  name="ios-settings" size={25} color="#232323" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                           <Icon  name="ios-search" size={25} color="#232323" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Menu')} >
                            <Text style={styles.bestMoviesBanner} >BestMovies</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <User  name="user" size={25} color="#232323" />
                        </TouchableOpacity>
                            <TouchableOpacity >
                                <Icons name="dots-three-vertical" size={25} color="#232323" />
                            </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',position:'relative',marginTop:5,justifyContent:'space-between'}}>
                        <TouchableOpacity>

                          <Text style={styles.menuFont}>Movies</Text>
                        </TouchableOpacity>
                         <TouchableOpacity>
                           <Text style={styles.menuFont}>TV shows</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                           <Text style={styles.menuFont}>Shorts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.menuFont}>Directors</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.menuFont}>Actors</Text>
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
            
        )
    }
}

export default Menu
const styles = StyleSheet.create({
    menuFont: {
        fontSize:14,
        fontWeight:'700'
    },
    bestMoviesBanner:{
        fontWeight:'700',
        fontSize:20,
    }
});

