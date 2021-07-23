import { flatMap } from 'lodash';
import React, { Component } from 'react'
import { Text, View,Dimensions,SafeAreaView,ActivityIndicator,FlatList,TouchableOpacity,StyleSheet,Image, ScrollView} from 'react-native'

const DATA = [
    {
      id: '1',
      name: 'Second Item',
      image:require('../../../../assets/poster3.jpg'),

    },
    {
      id: '2',
      name: 'Second Item',
      image:require('../../../../assets/poster1.jpg'),

    },
    {
      id: '3',
      name: 'Third Item',
      image:require('../../../../assets/poster2.jpg'),
    },
    {
        id: '4',
        name: 'Third Item',
        image:require('../../../../assets/poster3.jpg'),
      },
      {
        id: '5',
        name: 'Third Item',
        image:require('../../../../assets/poster4.jpg'),
      },
      {
        id: '6',
        name: 'Third Item',
        image:require('../../../../assets/poster5.jpg'),
      },
      {
        id: '7',
        name: 'Third Item',
        image:require('../../../../assets/photo1.jpg'),
      },
      {
        id: '8',
        name: 'Third Item',
        image:require('../../../../assets/photo2.jpg'),
      },{
        id: '9',
        name: 'Third Item',
        image:require('../../../../assets/photo3.jpg'),
      },{
        id: '10',
        name: 'Third Item',
        image:require('../../../../assets/photo4.jpg'),
      },{
        id: '11',
        name: 'Third Item',
        image:require('../../../../assets/photo5.jpg'),
      },{
        id: '12',
        name: 'Third Item',
        image:require('../../../../assets/photo6.jpg'),
      },{
        id: '13',
        name: 'Third Item',
        image:require('../../../../assets/photo7.jpg'),
      },{
        id: '14',
        name: 'Third Item',
        image:require('../../../../assets/photo8.jpg'),
      },{
        id: '15',
        name: 'Third Item',
        image:require('../../../../assets/photo10.jpg'),
      },{
        id: '16',
        name: 'Third Item',
        image:require('../../../../assets/photo11.jpg'),
      },{
        id: '17',
        name: 'Third Item',
        image:require('../../../../assets/photo12.jpg'),
      },{
        id: '18',
        name: 'Third Item',
        image:require('../../../../assets/photo13.jpg'),
      },{
        id: '19',
        name: 'Third Item',
        image:require('../../../../assets/photo14.jpg'),
      },{
        id: '20',
        name: 'Third Item',
        image:require('../../../../assets/photo15.jpg'),
      },{
        id: '21',
        name: 'Third Item',
        image:require('../../../../assets/photo16.jpg'),
      },{
        id: '22',
        name: 'Third Item',
        image:require('../../../../assets/photo17.jpg'),
      },{
        id: '23',
        name: 'Third Item',
        image:require('../../../../assets/photo18.jpg'),
      },{
        id: '24',
        name: 'Third Item',
        image:require('../../../../assets/photo19.jpg'),
      },{
        id: '25',
        name: 'Third Item',
        image:require('../../../../assets/photo20.jpg'),
      },{
        id: '26',
        name: 'Third Item',
        image:require('../../../../assets/photo21.jpg'),
      },,{
        id: '27',
        name: 'Third Item',
        image:require('../../../../assets/photo22.jpg'),
      },{
        id: '28',
        name: 'Third Item',
        image:require('../../../../assets/photo23.jpg'),
      },{
        id: '29',
        name: 'Third Item',
        image:require('../../../../assets/photo24.jpg'),
      },{
        id: '30',
        name: 'Third Item',
        image:require('../../../../assets/photo25.jpg'),
      },{
        id: '31',
        name: 'Third Item',
        image:require('../../../../assets/photo26.jpg'),
      },{
        id: '32',
        name: 'Third Item',
        image:require('../../../../assets/photo27.jpg'),
      },{
        id: '33',
        name: 'Third Item',
        image:require('../../../../assets/photo28.jpg'),
      },
  ];

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;
const numColumns=5;

export class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            window,
            screen,
        }
    }


    renderItemComponent = (data) =>(
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap',marginRight:55}}>
             <TouchableOpacity  style={{borderRadius:25,padding:2}} >
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                            <Image keyExtractor={data.id} style={{height:60,width:60,borderRadius:10}}source={data.image}/>
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
                                                        data={DATA}
                                                        renderItem={({item}) => this.renderItemComponent(item)}
                                                        keyExtractor={item => item.id.toString()}
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
                                                        data={DATA}
                                                        renderItem={({item}) => this.renderItemComponent(item)}
                                                        keyExtractor={item => item.id.toString()}
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
  
