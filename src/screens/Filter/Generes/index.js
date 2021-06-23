import React, { Component } from 'react'
import { Text, View,Dimensions,SafeAreaView,FlatList,TouchableOpacity } from 'react-native'


const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class Generes extends Component {
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
        fetch('https://60cde54091cc8e00178dc16b.mockapi.io/generes')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                // this.setState({ refreshing: false });
            }).catch(e => console.log(e));
    }
    renderItemComponent = (data) =>(
        <>
                <TouchableOpacity style={{borderRadius:25,padding:10,backgroundColor:'#f7f7f7'}} >
                <Text style={{fontSize:15,fontWeight:'700'}}>{data.generes}</Text>
            </TouchableOpacity>
            <View style={{backgroundColor:'white',height:2}}/>
        </>

    );
   render() {
      return (
        <SafeAreaView>
                <FlatList 
                margin={15}
                showsVerticalScrollIndicator={false}
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
                renderItem={({item,index}) => this.renderItemComponent(item)}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>)
    }
}

export default Generes
