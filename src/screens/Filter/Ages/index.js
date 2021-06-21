import React, { Component } from 'react'
import { Text, View,Dimensions,SafeAreaView,FlatList,TouchableOpacity } from 'react-native'


const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class Ages extends Component {
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
        fetch('https://60cde54091cc8e00178dc16b.mockapi.io/ages')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                // this.setState({ refreshing: false });
            }).catch(e => console.log(e));
    }

    renderItemComponent = (data) =>(
        <TouchableOpacity style={{borderRadius:25,padding:10}} >
                <Text style={{fontSize:15,fontWeight:'700',marginLeft:50}}>{data.ages}</Text>
      </TouchableOpacity>

    );
        
   
   render() {
      return (
        <SafeAreaView 
            marginLeft={20}
            marginRight={20}
            marginBottom={10}
        >
                <FlatList 
                // margin={15}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({ highlighted }) => (
                      <View
                        style={[
                          style.separator,
                          highlighted && { marginLeft: 10 }
                        ]}
                      />
                    ))
                  }
                data={this.state.data}
                renderItem={({item}) => this.renderItemComponent(item)}
                keyExtractor={item => item.id}

            />
        </SafeAreaView>)
    }
}

export default Ages
