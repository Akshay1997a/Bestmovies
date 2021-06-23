
import { values } from "lodash";
import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Switch,
    Dimensions,
    ScrollView,
    StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
            window,
            screen,
            switchValueIncludePIH:false,
            switchValueIncludeW:false,

        }
    }

    componentDidMount() {
        this.details();
    }

    details() {
        this.setState({ refreshing: true });
        fetch('https://60a65e2fb970910017eb1613.mockapi.io/Info')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                // this.setState({ refreshing: false });
            }).catch(e => console.log(e));
    }

    renderItemComponent = (data) =>(
        <TouchableOpacity style={{backgroundColor:'#ebe6e1',borderRadius:10,padding:10}} >
        <View style={{flexDirection:'row'}}>
            <View style={{flex:5}}>
                <Text style={{fontSize:20,fontWeight:'700',color:'#ed8709'}}>{data.title}</Text>
                <Text style={{fontSize:15}}>{data.other}</Text>
            </View>
            <View style={{flex:1}}>
            <Icon name="chevron-right" size={30} color="#232323" />
            </View>
        </View>
      </TouchableOpacity>

    );
        
   
   render() {
      return (
        <SafeAreaView>
            <View style={{flexDirection:'row',width:window*1,borderRadius:10}}>
                <View style={{flex:5,marginLeft:10,padding:10}}>
                    <Text style={{fontSize:17,fontWeight:'700',}}>Including Previously browsed</Text> 
                    <Text style={{fontSize:17,fontWeight:'700'}}>Include Watching</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',marginRight:5}}>
                     <Switch
                        trackColor={{ true: '#e3c727', false: Platform.OS=='android'?'#d3d3d3':'#fbfbfb'  }}
                        thumbColor={[Platform.OS=='ios'?'#FFFFFF':(this.state.switchValueIncludeW.status ?'#7ab8e1':'#ffffff')]}
                        ios_backgroundColor="#fbfbfb"
                        style={[this.state.switchValueIncludeW.status ?styles.switchEnableBorder:styles.switchDisableBorder]}
                        value={this.state.switchValueIncludeW}
                        onValueChange={(values)=>this.setState({switchValueIncludeW:values})}
                    />
                    <Switch
                        trackColor={{ true: '#e3c727', false: Platform.OS=='android'?'#d3d3d3':'#fbfbfb'  }}
                        thumbColor={[Platform.OS=='ios'?'#FFFFFF':(this.state.switchValueIncludePIH.status ?'#7ab8e1':'#ffffff')]}
                        ios_backgroundColor="#fbfbfb"
                        style={[this.state.switchValueIncludePIH.status ?styles.switchEnableBorder:styles.switchDisableBorder]}
                        value={this.state.switchValueIncludePIH}
                        onValueChange={(values)=>this.setState({switchValueIncludePIH:values})}
                    />
                </View>
            </View>
                {/* <FlatList 
                    margin={10}
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
                /> */}

           <ScrollView > 
                 <TouchableOpacity onPress={() =>this.props.navigation.navigate('Year')} style={{flexDirection:'row',marginLeft:15,marginRight:15,padding:10,marginBottom:1,backgroundColor:'#dce0dd',borderTopStartRadius:15,borderTopEndRadius:15}}>
                    <View style={{flex:5.5,margin:10}}>
                        <Text  style={{fontSize:20,fontWeight:'700',color:'#ed8709'}} >Year</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.textSecond}>New</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Icon name="chevron-right" size={30} color="#232323" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Generes')} style={{flexDirection:'row',marginLeft:15,marginRight:15,marginBottom:1,padding:10,backgroundColor:'#dce0dd'}}>
                    <View style={{flex:5.5}}>
                        <Text  style={{fontSize:20,fontWeight:'700',color:'#ed8709'}} >Generes</Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.textSecond}>Comedy,Drama,Thriller,Action,Documentary,Horror</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Icon name="chevron-right" size={30} color="#232323" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Country')} style={{flexDirection:'row',marginLeft:15,marginRight:15,marginBottom:1,padding:10,backgroundColor:'#dce0dd'}}>
                    <View style={{flex:5.5}}>
                        <Text  style={{fontSize:20,fontWeight:'700',color:'#ed8709'}} >Countries</Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15}}>USA,UK,France,Spain,Argentina,Italy,Canada,Germany</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Icon name="chevron-right" size={30} color="#232323" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Languages')} style={{flexDirection:'row',marginLeft:15,marginRight:15,marginBottom:1,padding:10,backgroundColor:'#dce0dd'}}>
                    <View style={{flex:5.5}}>
                        <Text  style={{fontSize:20,fontWeight:'700',color:'#ed8709'}} >Original Languages</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15}} >All</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Icon name="chevron-right" size={30} color="#232323" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ages')} style={{flexDirection:'row',marginLeft:15,marginRight:15,padding:10,marginBottom:1,backgroundColor:'#dce0dd'}}>
                    <View style={{flex:5.5}}>
                        <Text  style={{fontSize:20,fontWeight:'700',color:'#ed8709'}} >Ages</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text  style={{fontSize:15}}>All</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Icon name="chevron-right" size={30} color="#232323" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Provider')} style={{flexDirection:'row',marginLeft:15,marginRight:15,marginBottom:1,padding:10,backgroundColor:'#dce0dd'}}>
                    <View style={{flex:5.5}}>
                        <Text  style={{fontSize:20,fontWeight:'700',color:'#ed8709'}} >Providers </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text  style={{fontSize:15}}>Netflix,Amazon Prime ,HBO,Flimin(Theaters included)</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Icon name="chevron-right" size={30} color="#232323" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Price')}style={{flexDirection:'row',marginLeft:15,marginRight:15,marginBottom:1,padding:10,backgroundColor:'#dce0dd'}}>
                    <View style={{flex:5.5}}>
                        <Text  style={{fontSize:20,fontWeight:'700',color:'#ed8709'}} >Price</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text  style={{fontSize:15}}>10 $ (Add included)</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Icon name="chevron-right" size={30} color="#232323" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Linkby')} style={{flexDirection:'row',marginLeft:15,marginRight:15,padding:10,backgroundColor:'#dce0dd',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <View style={{flex:5.5}}>
                        <Text  style={{fontSize:20,fontWeight:'700',color:'#ed8709'}} >Linked by</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text  style={{fontSize:15}}>All</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5,alignItems:'center'}}>
                        <Icon name="chevron-right" size={30} color="#232323" />
                    </View>
                </TouchableOpacity>
            </ScrollView>    
                <View style={{flex:1,position:'absolute',marginTop:screen/1.3*1.1,width:window*1}}>
                    <TouchableOpacity style={{padding:5}} onPress={()=> this.setState.switchValueIncludeW}>
                         
                    <Text style={{textAlign:'center',fontSize:15,fontWeight:'700'}}>Clear Filters</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
    textSecond: {
        fontSize:15,
    },
    switchEnableBorder: {
        borderColor: '#6fa6d3',
        borderWidth: 1},
        
        switchDisableBorder: {
        borderColor: '#f2f2f2',
        borderWidth: 1,  },
});

