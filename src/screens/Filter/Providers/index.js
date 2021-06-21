import { flatMap } from 'lodash';
import React, { Component } from 'react'
import { Text, View,Dimensions,SafeAreaView,ActivityIndicator,FlatList,TouchableOpacity,StyleSheet,Image, ScrollView} from 'react-native'


const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;
const numColumns=5;

export class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
            window,
            screen,
        }
    }

    componentDidMount() {
        this.details();
    }

    details() {
        this.setState({ refreshing: true });
        fetch('https://60cde54091cc8e00178dc16b.mockapi.io/image')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                // this.setState({ refreshing: false });
            }).catch(e => console.log(e));
    }

    renderItemComponent = (data) =>(
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap',marginRight:55}}>
             <TouchableOpacity  style={{borderRadius:25,padding:2}} >
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                            <Image style={{height:60,width:60,borderRadius:10}}source={{uri:data.image}}/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
   render() {
      return (
            <SafeAreaView>
                        <View style={{flexDirection:'row',margin:2,padding:5}}>
                            <View style={{flex:3,margin:3}}>
                                <TouchableOpacity>
                                    <Text style={styles.fontText}>All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:3,margin:3}}>
                                <TouchableOpacity>
                                    <Text style={styles.fontText}>My Provider</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{flexDirection:'row',margin:2}}>
                            <View style={{flex:3,margin:3}}>
                                <TouchableOpacity>
                                    <Text style={styles.fontText}>
                                        Save as
                                    MY Provider</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:3,margin:3}}>
                                <TouchableOpacity>
                                    <Text style={{fontWeight:'700',
                                            padding:10,
                                            fontSize:15,
                                            borderRadius:25,
                                            backgroundColor:'#EB3E01',
                                            }}>Movies theaters</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <ScrollView nestedScrollEnabled ={true} marginBottom={window/3} showsVerticalScrollIndicator={false}>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:5}}>
                                    <Text style={{fontSize:15,fontWeight:'700',margin:10}}>Subscriptions</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                    <Text style={{fontSize:15,fontWeight:'700',margin:10,justifyContent:'flex-end'}}>0</Text>
                                    </View>
                                </View>
                                    <SafeAreaView style={{backgroundColor:'#d1d0cd',margin:10,borderRadius:10,height:screen/2}}>
                                        <ScrollView nestedScrollEnabled={true}>
                                            <FlatList 
                                                        margin={15}
                                                        showsVerticalScrollIndicator={true}
                                                        ItemSeparatorComponent={
                                                            Platform.OS !== 'android' &&
                                                            (({ highlighted }) => (
                                                            <View
                                                                style={[
                                                                style.separator,
                                                                highlighted && { marginLeft: 0 }
                                                                ]}
                                                            />
                                                            ))
                                                        }
                                                        data={this.state.data}
                                                        renderItem={({item}) => this.renderItemComponent(item)}
                                                        keyExtractor={item => item.id}
                                                        numColumns={numColumns}
                                                        margin={5}
                                                        marginRight={10}
                                                    />
                                        </ScrollView>
                                            
                                    </SafeAreaView>
                                        <View style={{flexDirection:'row'}}>
                                                <View style={{flex:5}}>
                                                <Text style={{fontSize:15,fontWeight:'700',margin:10}}>Rent & buy</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                <Text style={{fontSize:15,fontWeight:'700',margin:10,justifyContent:'flex-end'}}>0</Text>
                                                </View>
                                            </View>
                                    <SafeAreaView style={{backgroundColor:'#d1d0cd',margin:10,borderRadius:10,height:screen/2}}>
                                        <ScrollView nestedScrollEnabled={true}>
                                            <FlatList 
                                                        margin={15}
                                                        showsVerticalScrollIndicator={true}
                                                        ItemSeparatorComponent={
                                                            Platform.OS !== 'android' &&
                                                            (({ highlighted }) => (
                                                            <View
                                                                style={[
                                                                style.separator,
                                                                highlighted && { marginLeft: 0 }
                                                                ]}
                                                            />
                                                            ))
                                                        }
                                                        data={this.state.data}
                                                        renderItem={({item}) => this.renderItemComponent(item)}
                                                        keyExtractor={item => item.id}
                                                        numColumns={numColumns}
                                                        margin={5}
                                                        marginRight={10}
                                                    />
                                        </ScrollView>
                                            
                                    </SafeAreaView>
                             </ScrollView>
           </SafeAreaView>
        
        )
    }
}

export default Provider
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fontText:{
        fontWeight:'700',
        padding:10,
        fontSize:15,
        borderRadius:25,
        backgroundColor:'#DDDDDD',
    }
  });
  
