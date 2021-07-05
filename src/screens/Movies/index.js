import React, { Component } from 'react'
import { SafeAreaView, Text, View,Dimensions,Image, ScrollView,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Menu from '../Menu';


const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class Movies extends Component {

    constructor(props){
        super(props);
        this.state={
            data: [],
        }
    }
    componentDidMount() {
        this.details();
    }
    
    details() {
        this.setState({ refreshing: true });
        fetch('https://60d59d47943aa60017768ad3.mockapi.io/Movies')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                // this.setState({ refreshing: false });
            }).catch(e => console.log(e));
    }

    renderItemComponent = (data) =>(
        <ScrollView>
            <TouchableOpacity style={{padding:10,margin:5,shadowOpacity:0.9}} >
                <View>
                <Image style={{height:60,width:60,borderRadius:12}}source={{uri:data.avtar}}/>
                </View>
                <Text style={{fontSize:15,fontWeight:'700'}}>{data.avtarname}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
    

    moviewPoster = (data) =>(
            <View style={{padding:12,justifyContent:'center'}} >
                <View style={{justifyContent:'center'}}>
                <TouchableOpacity  style={{zIndex:100,elevation:2}}><Icon  name='bookmark' size={40}  color="#232323"style={{position:'absolute', top:-10,left:270}}/></TouchableOpacity> 
                <Image style={{height:400,width:window*0.9,borderRadius:12}}source={{uri:data.image}}/>
                <Text allowFontScaling={true} style={{fontSize:50,color:'white',fontWeight:'700',position:'absolute',top:300,marginLeft:100,}}>{data.name}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                                                <View style={{flex:5}}>
                                                    <Text style={styles.textFont}>Parasite</Text>
                                                    <Text >Parasite(Original title)</Text>
                                                    <Text>Dram ,Romantic</Text>
                                                    <View>
                                                        <Text>2018</Text>
                                                        <Text>-2h 34m</Text>
                                                    </View>
                                                    <View style={{flexDirection:'row'}}>
                                                    <Text>2.90$ - 88% match -29</Text><TouchableOpacity><Icon  name="heart-outlined" size={20}  color="#232323" /></TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{flex:1,justifyContent:'space-evenly'}}>
                                                    <Icon  name="reply" size={40}  color="#232323" 
                                                    style={{transform: [{rotateY: '180deg'}]}}
                                                    />
                                                    <View style={{backgroundColor:'black',height:40,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                                    <Text style={{fontSize:20,fontWeight:'700',color:'white'}}>9.1</Text>
                                                    </View >
                                                    <Text style={{fontWeight:'700',fontSize:20,marginLeft:17}}>Best</Text>
                                                </View>
                                        </View>
            </View>
    );
    render() {
        return (
            <View >
                <Menu/>
                        <ScrollView 
                        automaticallyAdjustContentInsets={true}
                        bounces={true}
                        marginBottom={50}
                        >
                                <SafeAreaView style={{flex:1}}>
                                    <View style={{flex:1,margin:5}}>
                                        <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10}}>
                                            <View style={{flex:3}}>
                                                <Text style={styles.textFont}>Top 1 of 91287 Movies</Text>
                                            </View>
                                                <TouchableOpacity style={{alignItems:'flex-end',flexDirection:'row'}}>
                                                    <Text style={styles.textFont}>Rating</Text><Icon  name="triangle-down" size={20}  color="#232323" />
                                                </TouchableOpacity>
                                        </View>
                                        <View style={{}} >
                                                {/* <Image source={require('../../../asset/Spider.png')} style={{width:window*0.9,height:500,resizeMode:'cover',borderRadius:12}} /> */}
                                                <FlatList
                                              showsHorizontalScrollIndicator={true}
                                             horizontal={true}
                                             data={this.state.data}
                                             renderItem={({item}) => this.moviewPoster(item)}
                                             keyExtractor={item => item.id}
                                            />
                                        </View>
                                        {/* <View style={{flexDirection:'row'}}>
                                                <View style={{flex:5}}>
                                                    <Text style={styles.textFont}>Parasite</Text>
                                                    <Text >Parasite(Original title)</Text>
                                                    <Text>Dram ,Romantic</Text>
                                                    <View>
                                                        <Text>2018</Text>
                                                        <Text>-2h 34m</Text>
                                                    </View>
                                                    <View style={{flexDirection:'row'}}>
                                                    <Text>2.90$ - 88% match -29</Text><TouchableOpacity><Icon  name="heart-outlined" size={20}  color="#232323" /></TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{flex:1,justifyContent:'space-evenly'}}>
                                                    <Icon  name="reply" size={40}  color="#232323" 
                                                    style={{transform: [{rotateY: '180deg'}]}}
                                                    />
                                                    <View style={{backgroundColor:'black',height:40,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                                    <Text style={{fontSize:20,fontWeight:'700',color:'white'}}>9.1</Text>
                                                    </View >
                                                    <Text style={{fontWeight:'700',fontSize:20,marginLeft:17}}>Best</Text>
                                                </View>
                                        </View> */}
                                        <View style={{height:120,paddingEnd:12}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Text  style={styles.textFont}>Director   </Text>
                                                <Text  style={styles.textFont}>Cast</Text>
                                            </View>
                                          <FlatList
                                              showsHorizontalScrollIndicator={false}
                                             horizontal={true}
                                             data={this.state.data}
                                             renderItem={({item}) => this.renderItemComponent(item)}
                                             keyExtractor={item => item.id}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.textFont}>Lorem Ipsum</Text>
                                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
                                        </View>
                                        {/* For the Rating */}
                                        <View>
                                            <Text style={styles.textFont}>Rating</Text>
                                            <Text>Won 2 oscars including best director</Text>
                                            <Text>Won 2 oscars including best director</Text>
                                        </View>
                                        {/* For the watch now flatlist */}
                                        <View style={{height:120}}>  
                                            <Text style={styles.textFont}>
                                                Watch now
                                            </Text>
                                            <FlatList
                                             showsHorizontalScrollIndicator={false}
                                             horizontal={true}
                                             data={this.state.data}
                                             renderItem={({item}) => this.renderItemComponent(item)}
                                             keyExtractor={item => item.id}
                                            />
                                        </View>
                                        <View style={{paddingBottom:5}}>
                                            <Text style={styles.textFont}>Images</Text>
                                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                                <Image source={require('../../../asset/Spider.png')} style={{width:window/1.1,height:300,resizeMode:'cover',borderRadius:12,marginBottom:10}} />
                                                <Image source={require('../../../asset/Spider.png')} style={{width:window*0.9,height:300,resizeMode:'cover',borderRadius:12,marginBottom:10}} />
                                                <Image source={require('../../../asset/Spider.png')} style={{width:window*0.9,height:300,resizeMode:'cover',borderRadius:12,marginBottom:10}} />
                                                <Image source={require('../../../asset/Spider.png')} style={{width:window*0.9,height:300,resizeMode:'cover',borderRadius:12,marginBottom:10}} />
                                            </View>
                                        </View>
                                        <View style={{marginBottom:50}}>
                                            <Text style={styles.textFont}>Similer title</Text>
                                            <View style={{flexDirection:'row'}}>
                                            <View style={{borderRadius:12,width:150 ,margin:10}}>
                                                    <TouchableOpacity onPress={()=>alert("Hello")} style={{zIndex:100,elevation:2}}><Icon  name='bookmark' size={40}  color="#232323"style={{position:'absolute', top:-10,left:100}}/></TouchableOpacity> 
                                                    <Image source={require('../../../asset/Spider.png')} 
                                                        style={{width:150,height:200,resizeMode:'cover',borderRadius:12,marginBottom:10}} />
                                                    <View style={{justifyContent:'center',alignItems:'center'}}>
                                                        <Text style={styles.textFont}>Lynn O’Leeum</Text>
                                                        <Text style={styles.textFont}>Percy Kewshun</Text>
                                                        <Text numberOfLines={1} style={styles.textFont}>Bridget Theriveaquai</Text>
                                                        <Text numberOfLines={1} style={styles.textFont}>Bridget Theriveaquai</Text>
                                                    </View>
                                                </View>
                                                <View style={{borderRadius:12,width:150 ,margin:10}}>
                                                    <TouchableOpacity onPress={()=>alert("Hello")} style={{zIndex:100,elevation:2}}><Icon  name='bookmark' size={40}  color="#232323"style={{position:'absolute', top:-10,left:100}}/></TouchableOpacity> 
                                                    <Image source={require('../../../asset/Spider.png')} 
                                                        style={{width:150,height:200,resizeMode:'cover',borderRadius:12,marginBottom:10}} />
                                                    <View style={{justifyContent:'center',alignItems:'center'}}>
                                                        <Text style={styles.textFont}>Lynn O’Leeum</Text>
                                                        <Text style={styles.textFont}>Percy Kewshun</Text>
                                                        <Text numberOfLines={1} style={styles.textFont}>Bridget Theriveaquai</Text>
                                                        <Text numberOfLines={1} style={styles.textFont}>Bridget Theriveaquai</Text>
                                                    </View>
                                                </View>
                                                <View style={{borderRadius:12,width:150}}>
                                                    <TouchableOpacity onPress={()=>alert("Hello")} style={{zIndex:100,elevation:2}}><Icon  name='bookmark' size={40}  color="#232323"style={{position:'absolute', top:-10,left:100}}/></TouchableOpacity> 
                                                    <Image source={require('../../../asset/Spider.png')} 
                                                        style={{width:150,height:200,resizeMode:'cover',borderRadius:12,marginBottom:10}} />
                                                    <View style={{justifyContent:'center',alignItems:'center'}}>
                                                        <Text style={styles.textFont}>Lynn O’Leeum</Text>
                                                        <Text style={styles.textFont}>Percy Kewshun</Text>
                                                        <Text numberOfLines={1} style={styles.textFont}>Bridget Theriveaquai</Text>
                                                        <Text numberOfLines={1} style={styles.textFont}>Bridget Theriveaquai</Text>
                                                    </View>
                                                </View>
                                            </View>
                                    </View>
                                    </View>
                                </SafeAreaView>
                        </ScrollView>
            </View>
        )
    }
}

export default Movies
const styles = StyleSheet.create({
    textFont: {
        fontSize:16,
        fontWeight:'700',
    },
    seprater:{
        backgroundColor:'red',
        height:1 ,
    },
});
